import React from 'react';

const GameHUD = ({ x, currentRoom, roomScrollX, score, musicOn, toggleMusic, toggleFullscreen, theme, setTheme, themes, onNext, onPrev }) => {
  const ROOM_NAMES = ['ABOUT', 'SKILLS', 'PROJECTS', 'OPEN SOURCE', 'ACHIEVEMENTS', 'CONTACT'];
  const currentThemeIndex = themes ? themes.findIndex(t => t.id === theme) : -1;
  
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50, pointerEvents: 'none' }}>
       
       {/* 1. Top-Left Avatar + Name */}
       <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* 16x16 face */}
          <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--gb-medium)', position: 'relative', border: '2px solid var(--gb-darkest)' }}>
             {/* Eyes */}
             <div style={{ position: 'absolute', left: '2px', top: '4px', width: '2px', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
             <div style={{ position: 'absolute', right: '2px', top: '4px', width: '2px', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
             {/* Mouth */}
             <div style={{ position: 'absolute', left: '4px', bottom: '2px', width: '4px', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
          </div>
          <div style={{ fontSize: '12px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
            VANSH
          </div>
       </div>

       {/* 2. Top-Center Room Name + Navigation */}
       <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          pointerEvents: 'auto' 
       }}>
          <button 
             onClick={onPrev}
             className="nav-btn"
             disabled={currentRoom === 0}
             style={{ 
                background: 'var(--gb-medium)', 
                border: '2px solid var(--gb-darkest)', 
                color: 'var(--gb-darkest)', 
                fontSize: '10px', 
                fontFamily: "'Press Start 2P'", 
                padding: '4px 8px', 
                cursor: currentRoom === 0 ? 'default' : 'pointer',
                opacity: currentRoom === 0 ? 0 : 1,
                visibility: currentRoom === 0 ? 'hidden' : 'visible',
                boxShadow: '2px 2px 0px var(--gb-dark)'
             }}
          >
             ←
          </button>

          <div style={{ 
             fontSize: '12px', 
             fontFamily: "'Press Start 2P'", 
             color: 'var(--gb-darkest)',
             backgroundColor: 'var(--gb-medium)',
             padding: '4px 10px',
             border: '2px solid var(--gb-darkest)',
             minWidth: '200px',
             textAlign: 'center'
          }}>
             {ROOM_NAMES[currentRoom]}
          </div>

          <button 
             onClick={onNext}
             className="nav-btn"
             disabled={currentRoom === ROOM_NAMES.length - 1}
             style={{ 
                background: 'var(--gb-medium)', 
                border: '2px solid var(--gb-darkest)', 
                color: 'var(--gb-darkest)', 
                fontSize: '10px', 
                fontFamily: "'Press Start 2P'", 
                padding: '4px 8px', 
                cursor: currentRoom === ROOM_NAMES.length - 1 ? 'default' : 'pointer',
                opacity: currentRoom === ROOM_NAMES.length - 1 ? 0 : 1,
                visibility: currentRoom === ROOM_NAMES.length - 1 ? 'hidden' : 'visible',
                boxShadow: '2px 2px 0px var(--gb-dark)'
             }}
          >
             →
          </button>
       </div>

       {/* 3 & 6. Top-Right Score + Buttons */}
       <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ fontSize: '12px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
             SCORE {score.toString().padStart(4, '0')}
          </div>
          <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
             <button 
                onClick={() => {
                   const nextIndex = (currentThemeIndex + 1) % themes.length;
                   setTheme(themes[nextIndex].id);
                }} 
                style={{ background: 'var(--gb-medium)', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '8px', fontFamily: "'Press Start 2P'", padding: '6px', cursor: 'pointer' }}
             >
                {themes[currentThemeIndex]?.name || 'THEME'}
             </button>
             <button 
                onClick={toggleMusic} 
                style={{ background: 'var(--gb-medium)', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '8px', fontFamily: "'Press Start 2P'", padding: '6px', cursor: 'pointer' }}
             >
                {musicOn ? 'M:ON' : 'M:OFF'}
             </button>
             <button 
                onClick={toggleFullscreen} 
                style={{ background: 'var(--gb-medium)', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '8px', fontFamily: "'Press Start 2P'", padding: '6px', cursor: 'pointer' }}
             >
                [ ]
             </button>
          </div>
       </div>

       {/* 4. Bottom Minimap (160x20 bar) */}
       <div style={{ position: 'absolute', bottom: '45px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px' }}>
          {ROOM_NAMES.map((_, idx) => (
             <div key={idx} style={{ width: '28px', height: '14px', backgroundColor: currentRoom === idx ? 'var(--gb-darkest)' : 'var(--gb-medium)', position: 'relative', border: '1px solid var(--gb-darkest)' }}>
                {currentRoom === idx && (
                   <div className="blink-fast" style={{ 
                      position: 'absolute', 
                      bottom: '6px',
                      left: `${(x / 800) * 24}px`, 
                      width: '2px', height: '2px', 
                      backgroundColor: 'var(--gb-light)' 
                   }} />
                )}
             </div>
          ))}
       </div>

       {/* 8. Secondary minimap for Projects internally scaling */}
       {currentRoom === 2 && (
          <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '6px', backgroundColor: 'var(--gb-dark)', border: '2px solid var(--gb-darkest)', boxSizing: 'border-box' }}>
             <div style={{ 
                position: 'absolute', top: '0px', left: `${(roomScrollX / 800) * 66}px`, 
                width: '10px', height: '2px', backgroundColor: 'var(--gb-light)', transition: 'left 0.1s linear'
             }} />
          </div>
       )}

       {/* 7. Bottom Hint Bar */}
       <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', textAlign: 'center', fontSize: '8px', fontFamily: "'Press Start 2P'", color: 'var(--gb-light)', backgroundColor: 'var(--gb-darkest)', padding: '10px 0', borderTop: '2px solid var(--gb-light)' }}>
          ← → MOVE &nbsp;&nbsp;&nbsp; E: INTERACT &nbsp;&nbsp;&nbsp; F/L: LINKS &nbsp;&nbsp;&nbsp; M: MUSIC &nbsp;&nbsp;&nbsp; ESC: CLOSE
       </div>
    </div>
  );
};

export default GameHUD;
