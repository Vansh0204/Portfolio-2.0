import React from 'react';

const AboutRoom = () => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>
      {/* 2. Back wall */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '450px', backgroundColor: 'var(--gb-medium)' }} />
      
      {/* 1. Floor */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '100px', 
        backgroundColor: 'var(--gb-dark)',
        backgroundImage: `
          repeating-linear-gradient(45deg, var(--gb-darkest) 25%, transparent 25%, transparent 75%, var(--gb-darkest) 75%, var(--gb-darkest)),
          repeating-linear-gradient(45deg, var(--gb-darkest) 25%, transparent 25%, transparent 75%, var(--gb-darkest) 75%, var(--gb-darkest))
        `,
        backgroundPosition: '0 0, 10px 10px',
        backgroundSize: '20px 20px'
      }} />

      {/* 5. Bookshelf */}
      <div style={{ 
        position: 'absolute', left: '40px', bottom: '100px', width: '80px', height: '200px', 
        backgroundColor: 'var(--gb-medium)', border: '4px solid var(--gb-darkest)', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column-reverse', padding: '6px 0px 6px 2px'
      }}>
         <div style={{ display: 'flex' }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ width: '12px', height: '30px', backgroundColor: i % 2 === 0 ? 'var(--gb-dark)' : 'var(--gb-darkest)' }} />
            ))}
         </div>
      </div>
      {/* Enhanced Label for Library */}
      <div style={{ 
        position: 'absolute', bottom: '80px', left: '40px', width: '80px', 
        display: 'flex', justifyContent: 'center'
      }}>
        <div style={{ 
          padding: '4px 8px', backgroundColor: 'var(--gb-darkest)', color: 'var(--gb-light)', 
          fontSize: '8px', fontFamily: "'Press Start 2P'", borderRadius: '2px', border: '2px solid var(--gb-light)'
        }}>
          LIBRARY
        </div>
      </div>

      {/* 3. Wooden desk */}
      <div style={{ position: 'absolute', left: '260px', bottom: '100px', width: '10px', height: '20px', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ position: 'absolute', left: '290px', bottom: '100px', width: '10px', height: '20px', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ position: 'absolute', left: '400px', bottom: '100px', width: '10px', height: '20px', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ position: 'absolute', left: '430px', bottom: '100px', width: '10px', height: '20px', backgroundColor: 'var(--gb-darkest)' }} />
      <div style={{ position: 'absolute', left: '250px', bottom: '120px', width: '200px', height: '60px', backgroundColor: 'var(--gb-darkest)' }} />

      {/* 4. Computer monitor on desk */}
      <div style={{ 
        position: 'absolute', left: '310px', bottom: '180px', width: '80px', height: '60px', 
        backgroundColor: 'var(--gb-darkest)', display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
         <div style={{ width: '72px', height: '52px', backgroundColor: 'var(--gb-light)', position: 'relative' }}>
            <div className="monitor-cursor" style={{ position: 'absolute', top: '4px', left: '4px', width: '2px', height: '16px', backgroundColor: 'var(--gb-darkest)' }} />
         </div>
      </div>
      {/* Enhanced Label for Monitor */}
      <div style={{ 
        position: 'absolute', left: '250px', bottom: '135px', width: '200px', 
        display: 'flex', justifyContent: 'center'
      }}>
        <div style={{ 
          padding: '4px 8px', backgroundColor: 'var(--gb-darkest)', color: 'var(--gb-light)', 
          fontSize: '8px', fontFamily: "'Press Start 2P'", borderRadius: '2px', border: '2px solid var(--gb-light)'
        }}>
          WORKSPACE
        </div>
      </div>

      {/* 6. Window on right wall */}
      <div style={{ position: 'absolute', right: '60px', bottom: '250px', width: '100px', height: '80px', border: '4px solid var(--gb-darkest)', backgroundColor: 'var(--gb-light)', overflow: 'hidden', boxSizing: 'border-box' }}>
         <div style={{ position: 'absolute', left: '46px', top: 0, width: '4px', height: '100%', backgroundColor: 'var(--gb-darkest)' }} />
         <div style={{ position: 'absolute', top: '36px', left: 0, width: '100%', height: '4px', backgroundColor: 'var(--gb-darkest)' }} />
         <div style={{ position: 'absolute', top: '10px', right: '10px', width: '15px', height: '15px', backgroundColor: 'var(--gb-dark)' }} />
         <div style={{ position: 'absolute', top: '20px', right: '25px', width: '10px', height: '10px', backgroundColor: 'var(--gb-dark)' }} />
      </div>

      {/* 7. Small pixel plant in corner */}
      <div style={{ position: 'absolute', right: '40px', bottom: '100px' }}>
         <div style={{ position: 'absolute', bottom: 0, left: '10px', width: '20px', height: '15px', backgroundColor: 'var(--gb-darkest)' }} />
         <div style={{ position: 'absolute', bottom: '12px', left: '4px', width: '12px', height: '24px', backgroundColor: 'var(--gb-dark)', borderRadius: '12px 0 12px 0', transform: 'rotate(-30deg)' }} />
         <div style={{ position: 'absolute', bottom: '15px', left: '12px', width: '14px', height: '30px', backgroundColor: 'var(--gb-dark)', borderRadius: '50%' }} />
         <div style={{ position: 'absolute', bottom: '12px', left: '22px', width: '12px', height: '24px', backgroundColor: 'var(--gb-dark)', borderRadius: '0 12px 0 12px', transform: 'rotate(30deg)' }} />
      </div>

      {/* 8. Framed pixel portrait */}
      <div style={{ position: 'absolute', left: '440px', bottom: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={{ width: '40px', height: '50px', border: '4px solid var(--gb-darkest)', backgroundColor: 'var(--gb-medium)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '4px', boxSizing: 'border-box' }}>
            <div style={{ width: '20px', height: '30px', backgroundColor: 'var(--gb-dark)' }} />
         </div>
         <div style={{ fontSize: '8px', color: 'var(--gb-darkest)', marginTop: '6px', transform: 'scale(0.5)', transformOrigin: 'top center', fontFamily: "'Press Start 2P'", letterSpacing: '2px' }}>PORTRAIT</div>
      </div>
    </div>
  );
};

export default AboutRoom;
