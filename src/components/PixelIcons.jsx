import React from 'react';

// All icons are pure CSS divs, 2-color pixel art scaled for shelf display

const px = (color = 'var(--gb-light)') => ({
  width: '2px', height: '2px', backgroundColor: color, display: 'inline-block'
});

// React atom icon
export const ReactIcon = () => (
  <div style={{ width: '16px', height: '16px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Nucleus */}
    <div style={{ position: 'absolute', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--gb-light)', left: '6px', top: '6px' }} />
    {/* Orbit 1 */}
    <div style={{ position: 'absolute', width: '14px', height: '6px', border: '1px solid var(--gb-light)', borderRadius: '50%', top: '5px', left: '1px' }} />
    {/* Orbit 2 */}
    <div style={{ position: 'absolute', width: '14px', height: '6px', border: '1px solid var(--gb-light)', borderRadius: '50%', top: '5px', left: '1px', transform: 'rotate(60deg)' }} />
    {/* Orbit 3 */}
    <div style={{ position: 'absolute', width: '14px', height: '6px', border: '1px solid var(--gb-light)', borderRadius: '50%', top: '5px', left: '1px', transform: 'rotate(120deg)' }} />
  </div>
);

// JS block icon
export const JsIcon = () => (
  <div style={{ width: '14px', height: '14px', backgroundColor: 'var(--gb-light)', position: 'relative' }}>
    <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '4px', height: '6px', backgroundColor: 'var(--gb-darkest)' }} />
    <div style={{ position: 'absolute', bottom: '2px', left: '2px', width: '4px', height: '4px', border: '2px solid var(--gb-darkest)', borderTop: 'none', borderLeft: 'none' }} />
  </div>
);

// Python snake icon (simplified)
export const PythonIcon = () => (
  <div style={{ width: '14px', height: '14px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '6px', border: '2px solid var(--gb-light)', borderRadius: '3px 3px 0 0' }} />
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '6px', border: '2px solid var(--gb-light)', borderRadius: '0 0 3px 3px' }} />
    <div style={{ position: 'absolute', top: '3px', left: '1px', width: '2px', height: '2px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', bottom: '3px', right: '1px', width: '2px', height: '2px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
  </div>
);

// Node.js hexagon
export const NodeIcon = () => (
  <div style={{ width: '14px', height: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '6px', height: '10px', backgroundColor: 'var(--gb-light)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
    <div style={{ position: 'absolute', fontSize: '4px', color: 'var(--gb-darkest)', fontFamily: "'Press Start 2P'", fontWeight: 'bold', lineHeight: 1 }}>N</div>
  </div>
);

// Database cylinder
export const DbIcon = () => (
  <div style={{ width: '12px', height: '14px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '12px', height: '4px', backgroundColor: 'var(--gb-light)', borderRadius: '3px' }} />
    <div style={{ width: '12px', height: '6px', backgroundColor: 'var(--gb-medium)', borderLeft: '1px solid var(--gb-light)', borderRight: '1px solid var(--gb-light)' }} />
    <div style={{ width: '12px', height: '4px', backgroundColor: 'var(--gb-light)', borderRadius: '3px' }} />
  </div>
);

// Git branch icon  
export const GitIcon = () => (
  <div style={{ width: '14px', height: '14px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '1px', left: '3px', width: '4px', height: '4px', borderRadius: '50%', border: '2px solid var(--gb-light)' }} />
    <div style={{ position: 'absolute', bottom: '1px', left: '3px', width: '4px', height: '4px', borderRadius: '50%', border: '2px solid var(--gb-light)' }} />
    <div style={{ position: 'absolute', bottom: '1px', right: '1px', width: '4px', height: '4px', borderRadius: '50%', border: '2px solid var(--gb-light)' }} />
    <div style={{ position: 'absolute', left: '5px', top: '5px', width: '1px', height: '5px', backgroundColor: 'var(--gb-light)' }} />
    <div style={{ position: 'absolute', left: '5px', top: '7px', width: '5px', height: '1px', backgroundColor: 'var(--gb-light)' }} />
    <div style={{ position: 'absolute', right: '3px', top: '5px', width: '1px', height: '4px', backgroundColor: 'var(--gb-light)' }} />
  </div>
);

// Docker whale
export const DockerIcon = () => (
  <div style={{ width: '16px', height: '12px', position: 'relative' }}>
    {/* Whale body */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '16px', height: '8px', backgroundColor: 'var(--gb-light)', borderRadius: '2px 2px 0 0' }} />
    {/* Containers stacked */}
    <div style={{ position: 'absolute', bottom: '8px', left: '2px', width: '4px', height: '3px', backgroundColor: 'var(--gb-medium)', border: '1px solid var(--gb-darkest)' }} />
    <div style={{ position: 'absolute', bottom: '8px', left: '7px', width: '4px', height: '3px', backgroundColor: 'var(--gb-medium)', border: '1px solid var(--gb-darkest)' }} />
    {/* Spout */}
    <div style={{ position: 'absolute', top: 0, right: '2px', width: '2px', height: '4px', backgroundColor: 'var(--gb-light)' }} />
  </div>
);

// Rust gear icon
export const RustIcon = () => (
  <div style={{ width: '14px', height: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Gear outer */}
    <div style={{ width: '10px', height: '10px', backgroundColor: 'transparent', border: '2px solid var(--gb-light)', borderRadius: '50%', position: 'absolute' }} />
    {/* Gear teeth */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <div key={i} style={{
        position: 'absolute', width: '2px', height: '4px', backgroundColor: 'var(--gb-light)',
        transform: `rotate(${deg}deg) translateY(-6px)`,
        transformOrigin: 'center 6px'
      }} />
    ))}
    {/* Inner hole */}
    <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--gb-darkest)', borderRadius: '50%', position: 'absolute' }} />
  </div>
);

// AI/ML brain
export const AIIcon = () => (
  <div style={{ width: '16px', height: '14px', position: 'relative' }}>
    {/* Left brain lobe */}
    <div style={{ position: 'absolute', left: 0, top: '2px', width: '7px', height: '10px', border: '2px solid var(--gb-light)', borderRadius: '50% 20% 20% 50%' }} />
    {/* Right brain lobe */}
    <div style={{ position: 'absolute', right: 0, top: '2px', width: '7px', height: '10px', border: '2px solid var(--gb-light)', borderRadius: '20% 50% 50% 20%' }} />
    {/* Center line */}
    <div style={{ position: 'absolute', left: '7px', top: '2px', width: '2px', height: '10px', backgroundColor: 'var(--gb-darkest)', borderTop: '2px solid var(--gb-light)', borderBottom: '2px solid var(--gb-light)' }} />
    {/* Synapse dots */}
    <div style={{ position: 'absolute', left: '3px', top: '5px', width: '2px', height: '2px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', right: '3px', top: '7px', width: '2px', height: '2px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
  </div>
);

// TypeScript T-block
export const TsIcon = () => (
  <div style={{ width: '14px', height: '14px', backgroundColor: 'var(--gb-medium)', position: 'relative', border: '1px solid var(--gb-light)' }}>
    <div style={{ position: 'absolute', top: '2px', left: '0', width: '90%', height: '2px', backgroundColor: 'var(--gb-light)' }} />
    <div style={{ position: 'absolute', top: '2px', left: '5px', width: '2px', height: '9px', backgroundColor: 'var(--gb-light)' }} />
  </div>
);

// Cloud icon for AWS/Cloud
export const CloudIcon = () => (
  <div style={{ width: '16px', height: '12px', position: 'relative' }}>
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '16px', height: '6px', backgroundColor: 'var(--gb-light)', borderRadius: '0 0 3px 3px' }} />
    <div style={{ position: 'absolute', bottom: '4px', left: '2px', width: '6px', height: '6px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', bottom: '4px', right: '2px', width: '5px', height: '5px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', bottom: '6px', left: '5px', width: '7px', height: '7px', backgroundColor: 'var(--gb-light)', borderRadius: '50%' }} />
  </div>
);

// Map skill names to icons
export const SKILL_ICONS = {
  'React': ReactIcon,
  'JavaScript': JsIcon,
  'TypeScript': TsIcon,
  'Python': PythonIcon,
  'Node.js': NodeIcon,
  'PostgreSQL': DbIcon,
  'MongoDB': DbIcon,
  'Git': GitIcon,
  'Docker': DockerIcon,
  'Rust': RustIcon,
  'AI/ML': AIIcon,
  'TensorFlow': AIIcon,
  'AWS': CloudIcon,
  'Linux': DockerIcon,
};

export default SKILL_ICONS;
