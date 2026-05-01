import React, { useEffect, useState } from 'react';
import PixelCharacter from './PixelCharacter';

const StartScreen = ({ onStart, theme, setTheme }) => {
  const [mounted, setMounted] = useState(false);
  
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

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') onStart();
      if (e.key === 't') {
        const nextIndex = (currentThemeIndex + 1) % themes.length;
        setTheme(themes[nextIndex].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart, currentThemeIndex, themes, setTheme]);

  const cycleTheme = (e) => {
    e.stopPropagation();
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id);
  };

  return (
    <div 
      style={{ 
        width: '800px', height: '550px', 
        backgroundColor: 'var(--gb-light)', 
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer'
      }}
      onClick={onStart}
    >
       <div style={{ marginTop: '100px', fontSize: '42px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)', textAlign: 'center', lineHeight: '1.5' }}>
          VANSH<br/>PORTFOLIO
       </div>
       
       <div style={{ position: 'absolute', top: '250px', left: '380px' }}>
          {mounted && <PixelCharacter x={0} y={0} direction="right" isMoving={true} />}
       </div>

       <div 
          onClick={cycleTheme}
          style={{ 
            position: 'absolute', 
            bottom: '180px', 
            fontSize: '10px', 
            fontFamily: "'Press Start 2P'", 
            color: 'var(--gb-darkest)',
            backgroundColor: 'var(--gb-medium)',
            padding: '10px',
            border: '2px solid var(--gb-darkest)',
            cursor: 'pointer'
          }}
       >
          THEME: {themes[currentThemeIndex].name} (PRESS 'T')
       </div>

       <div className="blink" style={{ position: 'absolute', bottom: '130px', fontSize: '12px', fontFamily: "'Press Start 2P'", color: 'var(--gb-dark)' }}>
          PRESS ENTER TO START
       </div>

       <div style={{ position: 'absolute', bottom: '80px', fontSize: '8px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
          ROOMS: 6 &nbsp;&nbsp;&nbsp; PROJECTS: 8 &nbsp;&nbsp;&nbsp; PRS: 4
       </div>

       <div style={{ position: 'absolute', bottom: '30px', right: '30px', fontSize: '8px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)' }}>
          v2.0
       </div>
    </div>
  );
};

export default StartScreen;
