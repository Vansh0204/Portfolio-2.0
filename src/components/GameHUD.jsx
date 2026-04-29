import React from 'react';

const GameHUD = ({ x, currentRoom, roomScrollX, score, musicOn, toggleMusic, toggleFullscreen, theme, setTheme, themes }) => {
  const ROOM_NAMES = ['ABOUT', 'SKILLS', 'PROJECTS', 'OPEN SOURCE', 'CONTACT'];
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
          <div style={{ fontSize: '8px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
            VANSH
          </div>
       </div>

       {/* 2. Top-Center Room Name */}
       <div style={{ position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)', fontSize: '6px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
          ROOM: {ROOM_NAMES[currentRoom]}
       </div>

       {/* 3 & 6. Top-Right Score + Buttons */}
       <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ fontSize: '8px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
             SCORE {score.toString().padStart(4, '0')}
          </div>
          <div style={{ display: 'flex', gap: '10px', pointerEvents: 'auto' }}>
             <button 
                onClick={() => {
                   const nextIndex = (currentThemeIndex + 1) % themes.length;
                   setTheme(themes[nextIndex].id);
                }} 
                style={{ background: 'none', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '6px', fontFamily: "'Press Start 2P'", padding: '4px', cursor: 'pointer' }}
             >
                {themes[currentThemeIndex]?.name || 'THEME'}
             </button>
             <button 
                onClick={toggleMusic} 
                style={{ background: 'none', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '6px', fontFamily: "'Press Start 2P'", padding: '4px', cursor: 'pointer' }}
             >
                {musicOn ? 'M:ON' : 'M:OFF'}
             </button>
             <button 
                onClick={toggleFullscreen} 
                style={{ background: 'none', border: '2px solid var(--gb-darkest)', color: 'var(--gb-darkest)', fontSize: '6px', fontFamily: "'Press Start 2P'", padding: '4px', cursor: 'pointer' }}
             >
                [ ]
             </button>
          </div>
       </div>

       {/* 4. Bottom Minimap (160x20 bar) */}
       <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px' }}>
          {[0, 1, 2, 3, 4].map(idx => (
             <div key={idx} style={{ width: '28px', height: '20px', backgroundColor: currentRoom === idx ? 'var(--gb-darkest)' : 'var(--gb-medium)', position: 'relative' }}>
                {currentRoom === idx && (
                   <div className="blink-fast" style={{ 
                      position: 'absolute', 
                      bottom: '9px',
                      left: `${(x / 800) * 26}px`, 
                      width: '2px', height: '2px', 
                      backgroundColor: 'var(--gb-light)' 
                   }} />
                )}
             </div>
          ))}
       </div>

       {/* 8. Secondary minimap for Projects internally scaling */}
       {currentRoom === 2 && (
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '8px', backgroundColor: 'var(--gb-dark)', border: '2px solid var(--gb-darkest)', boxSizing: 'border-box' }}>
             {/* Indicator sliding from 0 to 66 bounded directly to 800 scope */}
             <div style={{ 
                position: 'absolute', top: '0px', left: `${(roomScrollX / 800) * 66}px`, 
                width: '10px', height: '4px', backgroundColor: 'var(--gb-light)', transition: 'left 0.1s linear'
             }} />
          </div>
       )}

       {/* 7. Bottom Hint Bar */}
       <div style={{ position: 'absolute', bottom: '5px', left: '0', width: '100%', textAlign: 'center', fontSize: '10px', fontFamily: "'Press Start 2P'", color: 'var(--gb-light)', transform: 'scale(0.5)', backgroundColor: 'var(--gb-darkest)', padding: '8px 0', borderTop: '2px solid var(--gb-light)', borderBottom: '2px solid var(--gb-light)' }}>
          ← → MOVE &nbsp;&nbsp;&nbsp; E INTERACT &nbsp;&nbsp;&nbsp; F LINK &nbsp;&nbsp;&nbsp; M MUSIC &nbsp;&nbsp;&nbsp; ESC CLOSE
       </div>
    </div>
  );
};

export default GameHUD;
