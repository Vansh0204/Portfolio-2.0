import React from 'react';

const Star = ({ x, y }) => (
  <div style={{ position: 'absolute', left: x, top: y }}>
    <div style={{ position: 'absolute', left: '2px', top: '2px', width: '4px', height: '4px', backgroundColor: 'var(--gb-light)' }} />
    <div style={{ position: 'absolute', left: '3px', top: '0px', width: '2px', height: '8px', backgroundColor: 'var(--gb-light)' }} />
    <div style={{ position: 'absolute', left: '0px', top: '3px', width: '8px', height: '2px', backgroundColor: 'var(--gb-light)' }} />
  </div>
);

const OpenSourceRoom = ({ nearestHotspotId }) => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>
      
      {/* 2. Back Wall (--gb-dark) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '450px', backgroundColor: 'var(--gb-dark)' }}>
        {/* Vertical pillar dividers every 200px (8x400px, --gb-darkest) */}
        {[200, 400, 600].map(x => (
          <div key={x} style={{ position: 'absolute', left: `${x - 4}px`, bottom: 0, width: '8px', height: '400px', backgroundColor: 'var(--gb-darkest)' }} />
        ))}
        
        {/* 7. Star decorations (4-pointed pixel stars) */}
        <Star x="80px" y="60px" />
        <Star x="350px" y="40px" />
        <Star x="550px" y="80px" />
        <Star x="150px" y="260px" />
        <Star x="730px" y="100px" />
        <Star x="280px" y="180px" />
        <Star x="640px" y="300px" />
      </div>

      {/* 1. Floor: pixel marble pattern alternating 32x32px tiles */}
      <div style={{ 
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', 
        backgroundImage: `conic-gradient(var(--gb-medium) 90deg, var(--gb-light) 90deg 180deg, var(--gb-medium) 180deg 270deg, var(--gb-light) 270deg)`,
        backgroundSize: '64px 64px'
      }} />

      {/* 6. Banner hanging from ceiling */}
      <div style={{ 
        position: 'absolute', top: '20px', left: 0, width: '100%', 
        textAlign: 'center', fontSize: '12px', transform: 'scale(0.5)', transformOrigin: 'top center',
        fontFamily: "'Press Start 2P'", color: 'var(--gb-light)', letterSpacing: '4px' 
      }}>
        OPEN SOURCE
      </div>

      {/* 3. Four contribution PLAQUES on the wall */}
      {['TURBOREPO', 'P5.JS', 'FASTIFY', 'CORS'].map((name, idx) => {
         const num = idx + 1;
         const leftPos = 40 + (idx * 200); // perfectly centers between the 200px pillars
         const plaqueId = `pr${num}`;
         const glow = nearestHotspotId === plaqueId ? '0 0 8px 4px var(--gb-light)' : 'none';
         return (
           <div key={num} style={{ 
             position: 'absolute', left: `${leftPos}px`, top: '80px', width: '120px', height: '140px', 
             border: '4px solid var(--gb-darkest)', backgroundColor: 'var(--gb-medium)', boxSizing: 'border-box',
             boxShadow: glow, transition: 'box-shadow 0.2s',
             display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'
           }}>
              {/* MERGE icon styling */}
              <div style={{ position: 'relative', width: '16px', height: '16px', marginBottom: '10px' }}>
                 {/* circle 1 */}
                 <div style={{ position: 'absolute', left: 0, bottom: 0, width: '6px', height: '6px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
                 {/* circle 2 */}
                 <div style={{ position: 'absolute', right: 0, top: 0, width: '6px', height: '6px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
                 {/* connective path */}
                 <div style={{ position: 'absolute', left: '3px', bottom: '3px', width: '10px', height: '10px', borderTop: '2px solid var(--gb-light)', borderRight: '2px solid var(--gb-light)', borderTopRightRadius: '4px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ fontSize: '10px', color: 'var(--gb-light)', transform: 'scale(0.6)', fontFamily: "'Press Start 2P'", marginBottom: '8px' }}>
                PR #{num}
              </div>
              <div style={{ fontSize: '8px', color: 'var(--gb-darkest)', fontFamily: "'Press Start 2P'", textAlign: 'center', lineHeight: 1.4, marginBottom: '12px' }}>
                {name}
              </div>
              {/* Blank dialogue lines */}
              <div style={{ width: '80%', height: '4px', backgroundColor: 'var(--gb-dark)', marginBottom: '10px' }} />
              <div style={{ width: '60%', height: '4px', backgroundColor: 'var(--gb-dark)', alignSelf: 'flex-start', marginLeft: '10%' }} />
           </div>
         );
      })}

      {/* 5. Pixel contribution graph simulating GitHub heatmap */}
      <div style={{ position: 'absolute', left: '40px', bottom: '130px', display: 'flex', gap: '2px', padding: '4px', backgroundColor: 'var(--gb-darkest)', border: '2px solid var(--gb-dark)' }}>
        {[...Array(12)].map((_, col) => (
           <div key={`col-${col}`} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[...Array(7)].map((_, row) => {
                 // deterministic pseudo-random map
                 const rand = (col * 17 + row * 23) % 10;
                 return (
                   <div key={`row-${row}`} style={{ 
                     width: '8px', height: '8px', 
                     backgroundColor: rand > 7 ? 'var(--gb-light)' : (rand > 3 ? 'var(--gb-medium)' : 'var(--gb-dark)') 
                   }} />
                 );
              })}
           </div>
        ))}
      </div>

      {/* 4. Trophy shelf at bottom center */}
      <div style={{ position: 'absolute', left: '200px', bottom: '100px', width: '400px', height: '20px', backgroundColor: 'var(--gb-darkest)', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', boxSizing: 'border-box' }}>
          {/* Trophies resting on top of shelf */}
          {[1,2,3].map(i => (
             <div key={i} style={{ position: 'relative', width: '24px', height: '40px', bottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Cup Rim (--gb-light) */}
                <div style={{ width: '24px', height: '4px', backgroundColor: 'var(--gb-light)' }} />
                {/* Cup Body (--gb-dark) */}
                <div style={{ width: '24px', height: '16px', backgroundColor: 'var(--gb-dark)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} />
                {/* Stem (--gb-dark) */}
                <div style={{ width: '8px', height: '12px', backgroundColor: 'var(--gb-dark)' }} />
                {/* Base (--gb-dark) with slight light accent */}
                <div style={{ width: '20px', height: '8px', backgroundColor: 'var(--gb-dark)', borderTop: '2px solid var(--gb-medium)', boxSizing: 'border-box' }} />
             </div>
          ))}
      </div>

    </div>
  );
};

export default OpenSourceRoom;
