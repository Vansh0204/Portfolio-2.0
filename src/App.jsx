import React, { useState, useEffect } from 'react';
import './index.css';
import GameEngine from './components/GameEngine';
import StartScreen from './components/StartScreen';
import engine from './AudioEngine';

function App() {
  const [started, setStarted] = useState(false);
  const [scale, setScale] = useState(1);
  const [theme, setTheme] = useState('theme-gb');
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('https://api.counterapi.dev/v1/vansh-portfolio-2-0/visits/increment');
        const data = await response.json();
        if (data.count) {
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };
    fetchVisitors();
  }, []);

  useEffect(() => {
    const handleResize = () => {
       const wrapperWidth = window.innerWidth * 0.95; // 5% padding
       const wrapperHeight = window.innerHeight * 0.95;
       const scaleX = wrapperWidth / 860;
       const scaleY = wrapperHeight / 610;
       setScale(Math.min(scaleX, scaleY));
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
            <GameEngine theme={theme} setTheme={setTheme} visitorCount={visitorCount} />
          ) : (
            <StartScreen onStart={handleStart} theme={theme} setTheme={setTheme} visitorCount={visitorCount} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
