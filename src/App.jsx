import React, { useState, useEffect } from 'react';
import './index.css';
import GameEngine from './components/GameEngine';
import StartScreen from './components/StartScreen';
import engine from './AudioEngine';

function App() {
  const [started, setStarted] = useState(false);
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState('theme-gb');

  useEffect(() => {
    const handleResize = () => {
       const wrapperWidth = window.innerWidth;
       const wrapperHeight = window.innerHeight;
       if (wrapperWidth < 850 || wrapperHeight < 600) {
         const scaleX = wrapperWidth / 860;
         const scaleY = wrapperHeight / 610;
         setScale(Math.min(scaleX, scaleY));
       } else {
         setScale(1);
       }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStart = () => {
      // Trigger user-interaction payload for Audio context
      engine.init();
      setStarted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: 'transparent', overflow: 'hidden' }}>
      <div className={`crt-frame ${theme}`} style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <div className="game-viewport">
          <div className="scanline-overlay"></div>
          {started ? (
            <GameEngine theme={theme} setTheme={setTheme} />
          ) : (
            <StartScreen onStart={handleStart} theme={theme} setTheme={setTheme} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
