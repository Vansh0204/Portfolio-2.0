import React from 'react';

const Cloud = ({ x, y }) => (
  <div style={{ position: 'absolute', left: x, top: y }}>
    <div style={{ position: 'absolute', left: '15px', top: '-10px', width: '30px', height: '30px', backgroundColor: 'var(--gb-medium)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', left: '0', top: '0', width: '50px', height: '20px', backgroundColor: 'var(--gb-medium)', borderRadius: '10px' }} />
    <div style={{ position: 'absolute', left: '30px', top: '-5px', width: '25px', height: '25px', backgroundColor: 'var(--gb-medium)', borderRadius: '50%' }} />
  </div>
);

const Tree = ({ x, y }) => (
  <div style={{ position: 'absolute', left: x, bottom: y, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--gb-dark)' }} />
     <div style={{ width: '10px', height: '30px', backgroundColor: 'var(--gb-darkest)' }} />
  </div>
);

const ContactRoom = () => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. Sky */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '330px', backgroundColor: 'var(--gb-light)' }} />

      {/* 5. Clouds */}
      <Cloud x="120px" y="60px" />
      <Cloud x="450px" y="100px" />
      <Cloud x="680px" y="40px" />

      {/* 7. Bird animated */}
      <div className="bird-container" style={{ position: 'absolute', top: '150px', zIndex: 10 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '4px', backgroundColor: 'var(--gb-darkest)', transform: 'rotate(-25deg)' }} />
          <div style={{ position: 'absolute', left: '6px', top: 0, width: '4px', height: '4px', backgroundColor: 'var(--gb-darkest)', transform: 'rotate(25deg)' }} />
      </div>

      {/* 2. Ground */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '220px', backgroundColor: 'var(--gb-dark)' }}>
        {/* Grass tufts perfectly along the geometric 1D horizon using structural divs */}
        <div style={{ display: 'flex', position: 'absolute', top: '-4px', left: 0, width: '100%' }}>
          {[...Array(200)].map((_, i) => (
            <div key={i} style={{ 
              width: '4px', height: '4px', 
              backgroundColor: 'var(--gb-dark)', 
              marginTop: i % 2 === 0 ? '0' : '4px' 
            }} />
          ))}
        </div>
      </div>

      {/* 6. Trees horizontally cutting the horizon */}
      <Tree x="80px" y="210px" />
      <Tree x="450px" y="220px" />
      <Tree x="510px" y="200px" />
      
      {/* 8. Stone winding path to mailbox */}
      {[ [380, 10], [350, 25], [320, 35], [290, 45], [260, 50] ].map((pos, i) => (
         <div key={`path-${i}`} style={{ position: 'absolute', left: `${pos[0]}px`, bottom: `${pos[1]}px`, width: '20px', height: '10px', backgroundColor: 'var(--gb-medium)' }} />
      ))}

      {/* 3. Mailbox */}
      <div style={{ position: 'absolute', left: '220px', bottom: '60px', zIndex: 20 }}>
         {/* Post */}
         <div style={{ position: 'absolute', left: '20px', bottom: 0, width: '10px', height: '80px', backgroundColor: 'var(--gb-darkest)' }} />
         {/* Box Body */}
         <div style={{ position: 'absolute', left: 0, bottom: '80px', width: '50px', height: '35px', backgroundColor: 'var(--gb-darkest)', borderTopLeftRadius: '20px' }}>
             {/* door flap */}
             <div style={{ position: 'absolute', right: '5px', top: '5px', width: '10px', height: '25px', border: '2px solid var(--gb-medium)', boxSizing: 'border-box' }} />
             {/* Animating flag */}
             <div className="mailbox-flag" style={{ position: 'absolute', left: '15px', bottom: '15px', width: '16px', height: '4px', backgroundColor: 'var(--gb-light)', transformOrigin: 'right center' }} />
         </div>
      </div>

      {/* 4. House right background */}
      <div style={{ position: 'absolute', left: '600px', bottom: '220px', zIndex: 15 }}>
         {/* Roof (Triangle border trick) */}
         <div style={{ position: 'absolute', left: '-10px', bottom: '80px', width: 0, height: 0, borderLeft: '70px solid transparent', borderRight: '70px solid transparent', borderBottom: '40px solid var(--gb-darkest)' }} />
         {/* Walls */}
         <div style={{ width: '120px', height: '80px', backgroundColor: 'var(--gb-medium)' }} />
         {/* Door */}
         <div style={{ position: 'absolute', left: '50px', bottom: 0, width: '20px', height: '30px', backgroundColor: 'var(--gb-darkest)' }} />
         {/* Window Left */}
         <div style={{ position: 'absolute', left: '15px', bottom: '30px', width: '20px', height: '20px', backgroundColor: 'var(--gb-dark)', border: '2px solid var(--gb-darkest)', boxSizing: 'border-box' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, width: '2px', height: '100%', backgroundColor: 'var(--gb-darkest)' }} />
            <div style={{ position: 'absolute', top: '7px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
         </div>
         {/* Window Right */}
         <div style={{ position: 'absolute', left: '85px', bottom: '30px', width: '20px', height: '20px', backgroundColor: 'var(--gb-dark)', border: '2px solid var(--gb-darkest)', boxSizing: 'border-box' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, width: '2px', height: '100%', backgroundColor: 'var(--gb-darkest)' }} />
            <div style={{ position: 'absolute', top: '7px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
         </div>
      </div>

      {/* 9. Notice Board (HIRE ME!) */}
      <div style={{ position: 'absolute', right: '120px', bottom: '40px', zIndex: 30 }}>
         {/* Post */}
         <div style={{ position: 'absolute', left: '35px', bottom: 0, width: '10px', height: '60px', backgroundColor: 'var(--gb-darkest)' }} />
         {/* Board (sways dynamically) */}
         <div className="sway-board" style={{ position: 'absolute', left: 0, bottom: '50px', width: '80px', height: '100px', border: '4px solid var(--gb-darkest)', backgroundColor: 'var(--gb-medium)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ color: 'var(--gb-darkest)', fontSize: '10px', fontFamily: "'Press Start 2P'", letterSpacing: '2px', textAlign: 'center', transform: 'scale(0.5)' }}>
              HIRE<br/><br/>ME!
            </div>
         </div>
      </div>

    </div>
  );
};

export default ContactRoom;
