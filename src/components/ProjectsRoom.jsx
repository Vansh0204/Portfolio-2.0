import React from 'react';
import { ReactIcon, NodeIcon, PythonIcon, DbIcon, AIIcon, TsIcon, CloudIcon, GitIcon } from './PixelIcons';

// Each cabinet has its own pixel art "screenshot" rendered on the screen
const CABINETS = [
  {
    name: 'ASKMYNOTES',
    color: 'var(--gb-medium)',
    Icon: AIIcon,
    tech: ['NEXT.JS', 'PINECONE', 'OPENAI', 'CLERK', 'TAILWIND'],
    description: 'Upload your PDFs and let AI bring them to life.'
  },
  {
    name: 'VOLUNTEERCONNECT',
    color: 'var(--gb-dark)',
    Icon: NodeIcon,
    tech: ['NODE', 'EXPRESS', 'MONGODB', 'JWT', 'REACT', 'REDUX'],
    description: 'Volunteer management platform.'
  },
  {
    name: 'WEAVE',
    color: 'var(--gb-medium)',
    Icon: ReactIcon,
    tech: ['WEBRTC', 'YJS', 'REACT', 'CANVAS', 'WEBSOCKETS'],
    description: 'Decentralized collaborative whiteboard.'
  },
  {
    name: 'NEXUSPARK',
    color: 'var(--gb-dark)',
    Icon: TsIcon,
    tech: ['TYPESCRIPT', 'NODE', 'EXPRESS', 'POSTGRES', 'DOCKER'],
    description: 'Smart parking with design patterns.'
  },
  {
    name: 'BEYOND LIMITS',
    color: 'var(--gb-medium)',
    Icon: CloudIcon,
    tech: ['NEXT.JS', 'SUPABASE', 'TIP TAP', 'AI SDK', 'Framer'],
    description: 'AI-powered CMS blog platform.'
  },
  {
    name: 'AMALGUS',
    color: 'var(--gb-dark)',
    Icon: ReactIcon,
    tech: ['GROQ', 'AI', 'REACT', 'MONGODB', 'EXPRESS'],
    description: 'Glass marketplace with AI Matcher.'
  },
  {
    name: 'MENTORA',
    color: 'var(--gb-medium)',
    Icon: ReactIcon,
    tech: ['FIREBASE', 'REACT', 'CHAKRA UI', 'AUTH', 'REALTIME'],
    description: 'Mentorship and learning platform.'
  },
  {
    name: 'QUICKSTACK',
    color: 'var(--gb-dark)',
    Icon: NodeIcon,
    tech: ['REDIS', 'NODE', 'NEXT.JS', 'CACHING', 'PERF'],
    description: 'Performance caching benchmark.'
  },
];

// Pixel art screen content per project
const TicTacScreen = () => (
  <div style={{ width: '100%', height: '100%', padding: '4px', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
    {['X','O','X','','X','O','O','','X'].map((c, i) => (
      <div key={i} style={{ border: '1px solid var(--gb-darkest)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)', backgroundColor: 'var(--gb-light)' }}>{c}</div>
    ))}
  </div>
);

const ChartScreen = () => (
  <div style={{ width: '100%', height: '100%', padding: '4px', boxSizing: 'border-box', display: 'flex', alignItems: 'flex-end', gap: '3px', justifyContent: 'center' }}>
    {[40, 70, 55, 90, 65, 80].map((h, i) => (
      <div key={i} style={{ width: '6px', height: `${h}%`, backgroundColor: i % 2 === 0 ? 'var(--gb-darkest)' : 'var(--gb-dark)', border: '1px solid var(--gb-darkest)' }} />
    ))}
  </div>
);

const AIScreen = () => (
  <div style={{ width: '100%', height: '100%', padding: '4px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
    {['> QUERY...', '< ANSWER:', '  loading', '  ......'].map((line, i) => (
      <div key={i} style={{ fontSize: '4px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)', lineHeight: 1.2 }}>{line}</div>
    ))}
  </div>
);

const BrowserScreen = () => (
  <div style={{ width: '100%', height: '100%', padding: '2px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '2px' }}>
    {/* Browser bar */}
    <div style={{ height: '6px', backgroundColor: 'var(--gb-dark)', borderRadius: '1px', display: 'flex', alignItems: 'center', padding: '0 2px', gap: '1px' }}>
      <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--gb-light)', borderRadius: '1px' }} />
    </div>
    {/* Content blocks */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <div style={{ width: '80%', height: '4px', backgroundColor: 'var(--gb-dark)' }} />
      <div style={{ width: '100%', height: '20px', backgroundColor: 'var(--gb-medium)' }} />
      <div style={{ width: '60%', height: '3px', backgroundColor: 'var(--gb-dark)' }} />
      <div style={{ width: '90%', height: '3px', backgroundColor: 'var(--gb-dark)' }} />
    </div>
  </div>
);

const ParkingScreen = () => (
  <div style={{ width: '100%', height: '100%', padding: '3px', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
    {[1,0,1,0,0,1,1,0,1,0,1,1].map((occupied, i) => (
      <div key={i} style={{
        backgroundColor: occupied ? 'var(--gb-darkest)' : 'var(--gb-light)',
        border: '1px solid var(--gb-dark)',
        borderRadius: '1px'
      }} />
    ))}
  </div>
);

const getScreen = (name) => {
  if (name === 'NEXUSPARK') return <ParkingScreen />;
  if (name === 'ASKMYNOTES' || name === 'MENTORA') return <AIScreen />;
  if (name === 'AMALGUS' || name === 'WEAVE' || name === 'BEYOND LIMITS' || name === 'VOLUNTEERCONNECT') return <BrowserScreen />;
  return <ChartScreen />;
};

const ProjectsRoom = ({ roomScrollX, isMoving }) => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>

      {/* INNER SCROLLING CONTAINER */}
      <div style={{
        width: '1600px',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translateX(-${roomScrollX}px)`,
        transition: isMoving ? 'none' : 'transform 0.4s steps(6)'
      }}>

        {/* Back wall - dark with stars */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '450px', backgroundColor: 'var(--gb-darkest)' }}>
          <div style={{
            width: '4px', height: '4px', backgroundColor: 'var(--gb-light)',
            boxShadow: '100px 50px var(--gb-medium), 300px 100px var(--gb-light), 500px 40px var(--gb-medium), 700px 150px var(--gb-light), 900px 80px var(--gb-medium), 1100px 120px var(--gb-light), 1300px 60px var(--gb-medium), 1500px 100px var(--gb-light), 200px 200px var(--gb-light), 400px 250px var(--gb-medium), 600px 300px var(--gb-light), 800px 220px var(--gb-medium), 1000px 280px var(--gb-light), 1200px 320px var(--gb-medium), 1400px 200px var(--gb-light)'
          }} />
        </div>

        {/* Floor */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px',
          backgroundColor: 'var(--gb-dark)',
          backgroundImage: 'linear-gradient(var(--gb-light) 2px, transparent 2px), linear-gradient(90deg, var(--gb-light) 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }} />

        {/* INSERT COIN header */}
        <div className="blink" style={{
          position: 'absolute', left: 0, top: '16px', width: '100%',
          textAlign: 'center', color: 'var(--gb-light)', fontSize: '16px', fontFamily: "'Press Start 2P'", letterSpacing: '2px'
        }}>
          INSERT COIN
        </div>

        {/* Arcade Cabinets */}
        {CABINETS.map((cabinet, i) => {
          const x = 80 + (i * 185);
          return (
            <React.Fragment key={cabinet.name}>

              {/* Marquee sign with project name */}
              <div style={{
                position: 'absolute', left: `${x}px`, bottom: '230px',
                width: '74px', height: '34px',
                backgroundColor: 'var(--gb-dark)',
                border: '3px solid var(--gb-light)',
                boxSizing: 'border-box',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  fontSize: '10px', 
                  fontFamily: "'Press Start 2P'", 
                  color: 'var(--gb-light)', 
                  textAlign: 'center', 
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  transform: cabinet.name.length > 6 ? `scale(${6.5 / cabinet.name.length})` : 'none',
                  transformOrigin: 'center center'
                }}>
                  {cabinet.name}
                </div>
              </div>

              {/* Cabinet body */}
              <div style={{ position: 'absolute', left: `${x}px`, bottom: '100px', width: '74px', display: 'flex', flexDirection: 'column' }}>

                {/* Screen housing */}
                <div style={{ width: '74px', height: '86px', backgroundColor: 'var(--gb-darkest)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid var(--gb-dark)', boxSizing: 'border-box' }}>
                  {/* Pixel art screen */}
                  <div className="arcade-screen" style={{ width: '56px', height: '66px', backgroundColor: 'var(--gb-light)', overflow: 'hidden' }}>
                    {getScreen(cabinet.name)}
                  </div>
                </div>

                {/* Tech stack badge strip */}
                <div style={{ width: '74px', height: '18px', backgroundColor: 'var(--gb-medium)', display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 4px', boxSizing: 'border-box', overflow: 'hidden' }}>
                  {cabinet.Icon && (
                    <div style={{ transform: 'scale(0.65)', transformOrigin: 'left center', flexShrink: 0, zIndex: 5, backgroundColor: 'var(--gb-medium)', paddingRight: '2px' }}>
                      <cabinet.Icon />
                    </div>
                  )}
                  <div className="tech-marquee-container" style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div className="tech-marquee-content" style={{ 
                      fontSize: '6px', 
                      fontFamily: "'Press Start 2P'", 
                      color: 'var(--gb-darkest)',
                      animationDuration: `${Math.max(3, cabinet.tech.join(' ').length * 0.4)}s`
                    }}>
                      <span>{cabinet.tech.join(' ')}</span>
                      <span>{cabinet.tech.join(' ')}</span>
                    </div>
                  </div>
                </div>

                {/* Control Panel */}
                <div style={{ width: '74px', height: '20px', backgroundColor: 'var(--gb-dark)', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--gb-darkest)', border: '2px solid var(--gb-medium)' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--gb-darkest)', border: '2px solid var(--gb-medium)' }} />
                  {/* Joystick */}
                  <div style={{ position: 'relative', width: '8px', height: '12px' }}>
                    <div style={{ position: 'absolute', bottom: 0, left: '2px', width: '4px', height: '8px', backgroundColor: 'var(--gb-darkest)' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '4px', backgroundColor: 'var(--gb-darkest)' }} />
                  </div>
                </div>

                {/* Base */}
                <div style={{ width: '74px', height: '20px', backgroundColor: 'var(--gb-dark)', borderTop: '2px solid var(--gb-medium)' }} />
              </div>

              {/* Floor nameplate - high contrast badge */}
              <div style={{
                position: 'absolute', left: `${x}px`, bottom: '64px',
                width: '74px', textAlign: 'center',
                backgroundColor: 'var(--gb-darkest)', border: '2px solid var(--gb-light)',
                padding: '4px 2px', boxSizing: 'border-box',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  fontSize: '10px', 
                  fontFamily: "'Press Start 2P'", 
                  color: 'var(--gb-light)',
                  whiteSpace: 'nowrap',
                  transform: cabinet.name.length > 6 ? `scale(${6.5 / cabinet.name.length})` : 'none',
                  transformOrigin: 'center center'
                }}>
                  {cabinet.name}
                </div>
              </div>

            </React.Fragment>
          );
        })}

        {/* Trophy at far right */}
        <div style={{ position: 'absolute', left: '1480px', bottom: '230px', width: '90px', textAlign: 'center' }}>
          <div style={{ 
            padding: '8px 6px', backgroundColor: 'var(--gb-darkest)', color: 'var(--gb-light)', 
            fontSize: '8px', fontFamily: "'Press Start 2P'", borderRadius: '2px', border: '2px solid var(--gb-light)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
          }}>
            <span>MORE ON</span>
            <span>GITHUB</span>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '1495px', bottom: '100px', width: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '24px', height: '30px', backgroundColor: 'var(--gb-light)', position: 'relative', borderBottomRightRadius: '12px', borderBottomLeftRadius: '12px' }}>
            <div style={{ position: 'absolute', bottom: '-10px', left: '8px', width: '8px', height: '10px', backgroundColor: 'var(--gb-light)' }} />
            <div style={{ position: 'absolute', left: '-8px', top: '4px', width: '8px', height: '14px', border: '3px solid var(--gb-light)', borderRadius: '10px 0 0 10px', borderRight: 'none', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', right: '-8px', top: '4px', width: '8px', height: '14px', border: '3px solid var(--gb-light)', borderRadius: '0 10px 10px 0', borderLeft: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ width: '40px', height: '20px', backgroundColor: 'var(--gb-medium)', marginTop: '10px' }} />
          <div style={{ width: '60px', height: '20px', backgroundColor: 'var(--gb-dark)' }} />
        </div>

      </div>

      {/* Scroll hint */}
      {roomScrollX < 800 && (
        <div className="blink" style={{
          position: 'absolute', right: '10px', top: '250px',
          color: 'var(--gb-light)', fontSize: '8px', fontFamily: "'Press Start 2P'",
          backgroundColor: 'var(--gb-darkest)', padding: '6px', border: '2px solid var(--gb-light)'
        }}>
          →
        </div>
      )}

    </div>
  );
};

export default ProjectsRoom;
