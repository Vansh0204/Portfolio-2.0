import React, { useState, useEffect, useRef } from 'react';
import PixelCharacter from './PixelCharacter';
import AboutRoom from './AboutRoom';
import SkillsRoom from './SkillsRoom';
import ProjectsRoom from './ProjectsRoom';
import OpenSourceRoom from './OpenSourceRoom';
import ContactRoom from './ContactRoom';
import DialogueBox from './DialogueBox';
import GameHUD from './GameHUD';
import { ROOM_HOTSPOTS } from '../hotspots';
import audioEngine from '../AudioEngine';
import AchievementsRoom from './AchievementsRoom';

const Confetti = ({ x, y, onDone }) => {
   useEffect(() => {
     const t = setTimeout(onDone, 1000);
     return () => clearTimeout(t);
   }, [onDone]);
   
   return (
     <div style={{ position: 'absolute', left: x, top: y, zIndex: 500, pointerEvents: 'none' }}>
       {[...Array(20)].map((_, i) => {
         const angle = Math.random() * Math.PI * 2;
         const dist = 20 + Math.random() * 40;
         const dx = Math.cos(angle) * dist;
         const dy = Math.sin(angle) * dist - 20; 
         return (
           <div 
             key={i} 
             className="confetti-particle"
             style={{
               position: 'absolute', left: 0, top: 0,
               width: '4px', height: '4px',
               backgroundColor: 'var(--gb-light)',
               '--dx': `${dx}px`,
               '--dy': `${dy}px`
             }} 
           />
         );
       })}
     </div>
   );
};

const ROOMS = [
  { id: 0, title: 'ABOUT' },
  { id: 1, title: 'SKILLS' },
  { id: 2, title: 'PROJECTS' },
  { id: 3, title: 'OPEN SOURCE' },
  { id: 4, title: 'ACHIEVEMENTS' },
  { id: 5, title: 'CONTACT' },
];

const loadSaveData = () => {
  try {
    const data = localStorage.getItem('vansh_save_v2');
    if (data) return JSON.parse(data);
  } catch(e) {}
  return { readHotspots: [], score: 0, completedRooms: [] };
};

const GameEngine = ({ theme, setTheme, visitorCount }) => {
  const initData = loadSaveData();

  const themes = [
    { id: 'theme-gb', name: 'CLASSIC GB' },
    { id: 'theme-cyberpunk', name: 'CYBERPUNK' },
    { id: 'theme-amber', name: 'AMBER' },
    { id: 'theme-slate', name: 'COLD SLATE' },
    { id: 'theme-synthwave', name: 'SYNTHWAVE' },
    { id: 'theme-bloodmoon', name: 'BLOOD MOON' },
    { id: 'theme-emerald', name: 'EMERALD' },
    { id: 'theme-royal', name: 'ROYAL GOLD' },
    { id: 'theme-pocket', name: 'GBP (B&W)' },
    { id: 'theme-ice', name: 'ICE CAVE' },
    { id: 'theme-sunset', name: 'SUNSET' },
    { id: 'theme-neon', name: 'NEON PINK' }
  ];

  const currentThemeIndex = themes.findIndex(t => t.id === theme);

  const [gameState, setGameState] = useState({
    x: 100,
    y: 380,
    currentRoom: 0,
    roomScrollX: 0,
    direction: 'right',
    isMoving: false,
    activeHotspot: null,
    nearestHotspot: null,
    showConfetti: false,
    confettiPos: { x: 0, y: 0 },
    score: initData.score,
    readHotspots: initData.readHotspots,
    completedRooms: initData.completedRooms,
    showCheat: false
  });

  const stateRef = useRef(gameState);
  stateRef.current = gameState;
  const keysRef = useRef({});
  const lastTimeRef = useRef(performance.now());
  const konamiIdxRef = useRef(0);
  const konamiSeq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  const [musicOn, setMusicOn] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const prevRoomRef = useRef(0);

  const goToNextRoom = () => {
    setGameState(prev => {
      if (prev.currentRoom < ROOMS.length - 1) {
        return {
          ...prev,
          currentRoom: prev.currentRoom + 1,
          x: 16,
          roomScrollX: 0,
          isMoving: false
        };
      }
      return prev;
    });
  };

  const goToPrevRoom = () => {
    setGameState(prev => {
      if (prev.currentRoom > 0) {
        return {
          ...prev,
          currentRoom: prev.currentRoom - 1,
          x: 784,
          roomScrollX: (prev.currentRoom - 1) === 2 ? 800 : 0,
          isMoving: false
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    localStorage.setItem('vansh_save_v2', JSON.stringify({
       readHotspots: gameState.readHotspots,
       score: gameState.score,
       completedRooms: gameState.completedRooms
    }));
  }, [gameState.readHotspots, gameState.score, gameState.completedRooms]);

  useEffect(() => {
    if (musicOn) {
      audioEngine.play();
    } else {
      audioEngine.pause();
    }
  }, [musicOn]);

  useEffect(() => {
    if (gameState.currentRoom !== prevRoomRef.current) {
       setTransitioning(true);
       const t = setTimeout(() => setTransitioning(false), 800);
       prevRoomRef.current = gameState.currentRoom;
       return () => clearTimeout(t);
    }
  }, [gameState.currentRoom]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => { 
      const state = stateRef.current;
      
      // Konami Check
      if (e.key === konamiSeq[konamiIdxRef.current] || (e.key.toLowerCase() === konamiSeq[konamiIdxRef.current].toLowerCase())) {
          if (konamiIdxRef.current === konamiSeq.length - 1) {
              setGameState(p => ({ ...p, showCheat: true }));
              konamiIdxRef.current = 0;
          } else {
              konamiIdxRef.current += 1;
          }
      } else {
          konamiIdxRef.current = 0;
      }

      if ((e.key === 'e' || e.key === 'E') && !state.activeHotspot) {
         if (state.nearestHotspot) {
             setGameState(prev => ({ ...prev, activeHotspot: state.nearestHotspot, isMoving: false }));
             keysRef.current['ArrowLeft'] = false;
             keysRef.current['ArrowRight'] = false;
         }
      }

      if ((e.key === 'm' || e.key === 'M') && !state.activeHotspot) {
          setMusicOn(prev => !prev);
      }

      if (e.key === 't' || e.key === 'T') {
          const nextIndex = (currentThemeIndex + 1) % themes.length;
          setTheme(themes[nextIndex].id);
      }

      if (e.key === 'n' || e.key === 'N') {
          goToNextRoom();
      }

      if (e.key === 'p' || e.key === 'P') {
          goToPrevRoom();
      }
      
      keysRef.current[e.key] = true; 
    };
    
    const handleKeyUp = (e) => { keysRef.current[e.key] = false; };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let frameId;
    const loop = (time) => {
      let { x, y, currentRoom, roomScrollX, direction, isMoving, activeHotspot } = stateRef.current;
      
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const safeDt = Math.min(dt, 100); 
      const speed = 5.5 * (safeDt / 16.666);
      
      if (activeHotspot) {
        frameId = requestAnimationFrame(loop);
        return;
      }

      let dx = 0;
      let dy = 0;
      
      if (keysRef.current['ArrowRight']) dx += speed;
      if (keysRef.current['ArrowLeft']) dx -= speed;
      if (keysRef.current['ArrowDown']) dy += speed;
      if (keysRef.current['ArrowUp']) dy -= speed;
      
      let nextMoving = dx !== 0 || dy !== 0;
      let nextDir = direction;
      if (dx > 0) nextDir = 'right';
      if (dx < 0) nextDir = 'left';
      
      let nextY = Math.max(300, Math.min(450, y + dy));
      let nextX = x;
      let nextRoom = currentRoom;
      let nextScroll = roomScrollX;

      if (dx !== 0) {
        nextX += dx;
        
        if (currentRoom === 2) {
          if (nextX >= 750 && dx > 0) {
            if (nextScroll < 800) {
              nextScroll = Math.min(800, nextScroll + dx);
              nextX = 750;
            } else if (nextX > 784) {
              nextRoom = 3;
              nextX = 16;
              nextScroll = 0;
            }
          } else if (nextX <= 50 && dx < 0) {
            if (nextScroll > 0) {
              nextScroll = Math.max(0, nextScroll + dx);
              nextX = 50;
            } else if (nextX < 16) {
              nextRoom = 1;
              nextX = 784;
              nextScroll = 0;
            }
          } else {
             nextX = Math.max(16, Math.min(nextX, 784));
          }
        } else {
          if (nextX > 784) {
             if (currentRoom < ROOMS.length - 1) {
               nextRoom++;
               nextX = 16;
               nextScroll = 0;
             } else {
               nextX = 784;
             }
          } else if (nextX < 16) {
             if (currentRoom > 0) {
               nextRoom--;
               nextX = 784;
               nextScroll = nextRoom === 2 ? 800 : 0;
             } else {
               nextX = 16;
             }
          }
        }
      }

      const actualX = nextRoom === 2 ? nextX + nextScroll : nextX;
      let closest = null;
      let minSize = Infinity; // pick the narrowest matching hotspot if multiple overlap
      const roomHotspots = ROOM_HOTSPOTS.filter(h => h.room === nextRoom);
      for (const h of roomHotspots) {
         // Direct range check: character anywhere within [xMin, xMax] triggers it
         if (actualX >= h.xMin && actualX <= h.xMax) {
            const size = h.xMax - h.xMin;
            if (size < minSize) {
               minSize = size;
               closest = h;
            }
         }
      }

      if (
        nextX !== x || nextY !== y || nextRoom !== currentRoom || 
        nextScroll !== roomScrollX || nextDir !== direction || nextMoving !== isMoving ||
        (closest ? closest.id : null) !== (stateRef.current.nearestHotspot ? stateRef.current.nearestHotspot.id : null)
      ) {
        setGameState(prev => ({
          ...prev,
          x: nextX,
          y: nextY,
          currentRoom: nextRoom,
          roomScrollX: nextScroll,
          direction: nextDir,
          isMoving: nextMoving,
          nearestHotspot: closest
        }));
      }
      
      frameId = requestAnimationFrame(loop);
    };
    
    frameId = requestAnimationFrame(loop);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(frameId);
    };
  }, [currentThemeIndex, themes, setTheme]);

  const handleDialogueComplete = () => {
     setGameState(prev => {
        const hotspot = prev.activeHotspot;
        const reward = hotspot.room === 3 ? 200 : 100;
        let nextRead = prev.readHotspots;
        let nextScore = prev.score;
        let nextCompleted = prev.completedRooms;

        if (!nextRead.includes(hotspot.id)) {
           nextRead = [...nextRead, hotspot.id];
           nextScore += reward;
           
           const roomKeys = ROOM_HOTSPOTS.filter(h => h.room === hotspot.room).map(h => h.id);
           if (roomKeys.every(k => nextRead.includes(k)) && roomKeys.length > 0) {
              if (!nextCompleted.includes(hotspot.room)) {
                 nextCompleted = [...nextCompleted, hotspot.room];
                 audioEngine.playJingle();
              }
           }
        }

        return {
           ...prev,
           activeHotspot: null,
           showConfetti: true,
           confettiPos: { x: prev.x, y: prev.y },
           readHotspots: nextRead,
           score: nextScore,
           completedRooms: nextCompleted
        };
     });
  };



  const totalOffset = gameState.currentRoom * 800;

  return (
    <div className="game-viewport-container" style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>
      
      <div 
        className="rooms-track"
        style={{
          display: 'flex',
          width: `${ROOMS.length * 800}px`,
          height: '100%',
          transform: `translateX(-${totalOffset}px)`,
          transition: 'transform 0.4s steps(8)',
          backgroundColor: 'var(--gb-light)'
        }}
      >
        {ROOMS.map(room => (
          <div 
            key={room.id}
            style={{
              width: '800px',
              height: '100%',
              flexShrink: 0,
              boxSizing: 'border-box',
              borderRight: '4px solid var(--gb-darkest)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {room.id === 0 && <AboutRoom />}
            {room.id === 1 && <SkillsRoom />}
            {room.id === 2 && <ProjectsRoom roomScrollX={gameState.roomScrollX} isMoving={gameState.isMoving} />}
            {room.id === 3 && <OpenSourceRoom nearestHotspotId={gameState.nearestHotspot?.id} />}
            {room.id === 4 && <AchievementsRoom />}
            {room.id === 5 && <ContactRoom />}
          </div>
        ))}
      </div>

      {/* Mobile D-Pad */}
      <div className="mobile-controls" style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 200 }}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 40px)', gridGap: '5px' }}>
            <div />
            <button 
              onPointerDown={(e) => { e.preventDefault(); keysRef.current['ArrowUp'] = true; }} 
              onPointerUp={(e) => { e.preventDefault(); keysRef.current['ArrowUp'] = false; }} 
              onPointerLeave={() => { keysRef.current['ArrowUp'] = false; }} 
              style={{ padding: '10px', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'" }}>↑</button>
            <div />
            <button 
              onPointerDown={(e) => { e.preventDefault(); keysRef.current['ArrowLeft'] = true; }} 
              onPointerUp={(e) => { e.preventDefault(); keysRef.current['ArrowLeft'] = false; }} 
              onPointerLeave={() => { keysRef.current['ArrowLeft'] = false; }} 
              style={{ padding: '10px', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'" }}>←</button>
            <button 
              onPointerDown={(e) => { e.preventDefault(); keysRef.current['ArrowDown'] = true; }} 
              onPointerUp={(e) => { e.preventDefault(); keysRef.current['ArrowDown'] = false; }} 
              onPointerLeave={() => { keysRef.current['ArrowDown'] = false; }} 
              style={{ padding: '10px', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'" }}>↓</button>
            <button 
              onPointerDown={(e) => { e.preventDefault(); keysRef.current['ArrowRight'] = true; }} 
              onPointerUp={(e) => { e.preventDefault(); keysRef.current['ArrowRight'] = false; }} 
              onPointerLeave={() => { keysRef.current['ArrowRight'] = false; }} 
              style={{ padding: '10px', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'" }}>→</button>
         </div>
      </div>

      <div className="mobile-controls" style={{ position: 'absolute', bottom: '40px', right: '20px', zIndex: 200, flexDirection: 'row', gap: '10px' }}>
         <button 
            onClick={() => {
              if (gameState.nearestHotspot && !gameState.activeHotspot) {
                 setGameState(p => ({ ...p, activeHotspot: p.nearestHotspot, isMoving: false }));
                 keysRef.current['ArrowLeft'] = false;
                 keysRef.current['ArrowRight'] = false;
              }
            }}
            style={{ padding: '20px', borderRadius: '50%', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'", fontSize: '10px' }}>E</button>
         <button 
            onClick={() => {
               if (gameState.activeHotspot && gameState.activeHotspot.link) {
                  if (gameState.activeHotspot.link.startsWith('mailto:')) {
                     window.location.href = gameState.activeHotspot.link;
                  } else {
                     window.open(gameState.activeHotspot.link, '_blank');
                  }
               }
            }}
            style={{ padding: '20px', borderRadius: '50%', background: 'var(--gb-darkest)', color: 'var(--gb-light)', border: 'none', fontFamily: "'Press Start 2P'", fontSize: '10px' }}>F</button>
      </div>

      <PixelCharacter 
        x={gameState.x} 
        y={gameState.y} 
        isMoving={gameState.isMoving && !gameState.activeHotspot} 
        direction={gameState.direction} 
      />

      {!gameState.activeHotspot && gameState.nearestHotspot && (
         <div style={{ position: 'absolute', left: gameState.x - 30, top: gameState.y - 45, width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none', zIndex: 120 }}>
            <div className="exclamation-mark" style={{ color: 'var(--gb-light)', backgroundColor: 'var(--gb-darkest)', padding: '2px 6px', border: '2px solid var(--gb-light)', fontSize: '8px', fontFamily: "'Press Start 2P'", marginBottom: '5px' }}>!</div>
            <div style={{ color: 'var(--gb-darkest)', backgroundColor: 'var(--gb-light)', padding: '4px', border: '2px solid var(--gb-darkest)', fontSize: '10px', transform: 'scale(0.5)', transformOrigin: 'top center', fontFamily: "'Press Start 2P'" }}>PRESS E</div>
         </div>
      )}

      {gameState.showConfetti && (
         <Confetti 
           x={gameState.confettiPos.x + 24} 
           y={gameState.confettiPos.y} 
           onDone={() => setGameState(p => ({ ...p, showConfetti: false }))} 
         />
      )}

      {transitioning && (
         <div className="transition-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'var(--gb-darkest)', pointerEvents: 'none', zIndex: 1000 }} />
      )}

      {gameState.showCheat && (
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'var(--gb-darkest)', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="blink-fast" style={{ color: 'var(--gb-light)', fontSize: '24px', fontFamily: "'Press Start 2P'", marginBottom: '40px' }}>CHEAT ACTIVATED!</div>
            <div style={{ padding: '20px', border: '4px solid var(--gb-light)', color: 'var(--gb-light)', fontSize: '10px', fontFamily: "'Press Start 2P'", lineHeight: '2' }}>
               YOU FOUND THE SECRET!<br/><br/>HERE IS MY DIRECT EMAIL:<br/>agent@vansh.dev
            </div>
            <button 
               onClick={() => {
                  navigator.clipboard.writeText('agent@vansh.dev');
                  setGameState(p => ({ ...p, showCheat: false }));
               }}
               style={{ marginTop: '20px', padding: '10px 20px', background: 'var(--gb-light)', color: 'var(--gb-darkest)', border: 'none', fontFamily: "'Press Start 2P'", cursor: 'pointer' }}
            >
               COPY & CLOSE
            </button>
         </div>
      )}

      <GameHUD 
         x={gameState.x} 
         currentRoom={gameState.currentRoom} 
         roomScrollX={gameState.roomScrollX} 
         score={gameState.score} 
         musicOn={musicOn} 
         toggleMusic={() => setMusicOn(p => !p)} 
         toggleFullscreen={toggleFullscreen} 
         completedRooms={gameState.completedRooms}
         theme={theme}
         setTheme={setTheme}
         themes={themes}
         onNext={goToNextRoom}
         onPrev={goToPrevRoom}
         visitorCount={visitorCount}
      />

      {gameState.activeHotspot && (
        <DialogueBox 
           hotspot={gameState.activeHotspot} 
           onClose={() => setGameState(prev => ({ ...prev, activeHotspot: null }))} 
           onComplete={handleDialogueComplete}
        />
      )}

    </div>
  );
};

export default GameEngine;
