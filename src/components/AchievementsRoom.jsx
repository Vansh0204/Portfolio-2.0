import React from 'react';

const Trophy = ({ x, y }) => (
  <div style={{ position: 'absolute', left: x, bottom: y, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
    {/* Cup Body */}
    <div style={{ width: '16px', height: '12px', backgroundColor: 'var(--gb-light)', position: 'relative', borderRadius: '0 0 4px 4px', border: '2px solid var(--gb-darkest)' }}>
      {/* Left Handle */}
      <div style={{ position: 'absolute', left: '-6px', top: '2px', width: '4px', height: '6px', border: '2px solid var(--gb-darkest)', borderRight: 'none', borderRadius: '4px 0 0 4px' }} />
      {/* Right Handle */}
      <div style={{ position: 'absolute', right: '-6px', top: '2px', width: '4px', height: '6px', border: '2px solid var(--gb-darkest)', borderLeft: 'none', borderRadius: '0 4px 4px 0' }} />
    </div>
    {/* Stem */}
    <div style={{ width: '4px', height: '6px', backgroundColor: 'var(--gb-darkest)' }} />
    {/* Base */}
    <div style={{ width: '14px', height: '4px', backgroundColor: 'var(--gb-darkest)', borderRadius: '2px' }} />
  </div>
);

const Poster = ({ x, y, text, color }) => (
  <div style={{ 
    position: 'absolute', left: x, top: y, 
    width: '64px', height: '80px', 
    backgroundColor: color || 'var(--gb-medium)', 
    border: '3px solid var(--gb-darkest)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '6px', boxSizing: 'border-box'
  }}>
    <div style={{ fontSize: '6px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)', textAlign: 'center', lineHeight: 1.5 }}>
      {text}
    </div>
  </div>
);

const AchievementsRoom = () => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>
      {/* Wall and Floor */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '350px', backgroundColor: 'var(--gb-medium)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '200px', backgroundColor: 'var(--gb-dark)', borderTop: '4px solid var(--gb-darkest)' }} />

      {/* Gallery Banners removed */}

      {/* Tekron Posters */}
      <Poster x="80px" y="120px" text="TEKRON 2.0 LEAD" color="var(--gb-light)" />
      <Poster x="150px" y="140px" text="TEKRON '25 ORG" color="var(--gb-light)" />
      <Poster x="220px" y="120px" text="ROBOTICS CLUB PRESIDENT" color="var(--gb-light)" />

      {/* Hackathon Wall (Polaroids) */}
      {[
        "ADOBE HACK", "SCRATCH CODE", "0 TO 1 HACK", "SHARK TANK", "PITCH CAFE"
      ].map((h, i) => (
        <div key={i} style={{ 
          position: 'absolute', left: `${320 + i * 85}px`, top: `${150 + (i%2 === 0 ? 0 : 30)}px`,
          width: '75px', height: '75px', backgroundColor: 'var(--gb-light)', border: '2px solid var(--gb-darkest)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px'
        }}>
           <div style={{ fontSize: '6px', fontFamily: "'Press Start 2P'", color: 'var(--gb-darkest)', textAlign: 'center', lineHeight: 1.3 }}>{h}</div>
        </div>
      ))}

      {/* Trophies on pedestals */}
      <div style={{ position: 'absolute', left: '100px', bottom: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Trophy x="5px" y="50px" />
        <div style={{ width: '40px', height: '50px', backgroundColor: 'var(--gb-darkest)', borderTop: '4px solid var(--gb-light)', boxSizing: 'border-box' }} />
      </div>

      <div style={{ position: 'absolute', left: '380px', bottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Trophy x="5px" y="40px" />
        <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--gb-darkest)', borderTop: '4px solid var(--gb-light)', boxSizing: 'border-box' }} />
      </div>

      <div style={{ position: 'absolute', left: '660px', bottom: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Trophy x="5px" y="60px" />
        <div style={{ width: '40px', height: '60px', backgroundColor: 'var(--gb-darkest)', borderTop: '4px solid var(--gb-light)', boxSizing: 'border-box' }} />
      </div>

      {/* Labels on floor */}
      <div style={{ position: 'absolute', left: '100px', bottom: '130px', color: 'var(--gb-light)', fontSize: '6px', fontFamily: "'Press Start 2P'" }}>ROBO SOCCER</div>
      <div style={{ position: 'absolute', left: '380px', bottom: '100px', color: 'var(--gb-light)', fontSize: '6px', fontFamily: "'Press Start 2P'" }}>TEKRON CHAMP</div>
      <div style={{ position: 'absolute', left: '660px', bottom: '160px', color: 'var(--gb-light)', fontSize: '6px', fontFamily: "'Press Start 2P'" }}>CLUB LEADER</div>

    </div>
  );
};

export default AchievementsRoom;
