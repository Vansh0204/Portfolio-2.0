import React from 'react';

const PixelCharacter = ({ x, y, isMoving, direction }) => {
  return (
    <div 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '16px',
        height: '24px',
        transform: `translate(${x}px, ${y}px)`,
        zIndex: 1000,
        pointerEvents: 'none',
        opacity: 0.9,
      }}
    >
      <div 
        style={{
          width: '100%',
          height: '100%',
          transformOrigin: 'top left',
          transform: `scale(3) scaleX(${direction === 'left' ? -1 : 1})`,
          filter: 'drop-shadow(1px 0 0 var(--gb-darkest)) drop-shadow(-1px 0 0 var(--gb-darkest)) drop-shadow(0 1px 0 var(--gb-darkest)) drop-shadow(0 -1px 0 var(--gb-darkest))'
        }}
      >
        {/* Isolate the animation inside the scaled wrapper so it doesn't overwrite the scale transform! */}
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'idle-bob 0.8s ease-in-out infinite alternate'
        }}>
          {/* Ghost Head (Rounded top) */}
          <div style={{ 
            width: '12px', height: '14px', 
            backgroundColor: 'var(--gb-light)', 
            borderTopLeftRadius: '6px', borderTopRightRadius: '6px',
            position: 'relative'
          }}>
            {/* Eyes */}
            <div style={{ 
              position: 'absolute', top: '5px', left: '2px', 
              width: '3px', height: '4px', backgroundColor: 'var(--gb-darkest)',
              borderRadius: '50%'
            }} />
            <div style={{ 
              position: 'absolute', top: '5px', right: '2px', 
              width: '3px', height: '4px', backgroundColor: 'var(--gb-darkest)',
              borderRadius: '50%'
            }} />
          </div>
          {/* Ghost Body + Wavy Bottom */}
          <div style={{ 
            width: '12px', height: '6px', 
            backgroundColor: 'var(--gb-light)',
            position: 'relative'
          }}>
            {/* Waves at the bottom */}
            <div style={{ position: 'absolute', bottom: '-4px', left: 0, display: 'flex' }}>
               <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
               <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
               <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelCharacter;
