import React from 'react';
import { ReactIcon, JsIcon, TsIcon, PythonIcon, NodeIcon, DbIcon, GitIcon, DockerIcon, RustIcon, AIIcon, CloudIcon } from './PixelIcons';

// 4 shelves evenly spaced in 800px room: gaps of ~86px, shelf width 80px
// positions: 40, 220, 400, 580
const SHELVES = [
  {
    name: 'FRONTEND',
    x: 82,
    id: 'frontend',
    skills: [
      { label: 'REACT',  Icon: ReactIcon },
      { label: 'JS',     Icon: JsIcon },
      { label: 'TS',     Icon: TsIcon },
      { label: 'CSS',    Icon: null },
      { label: 'HTML',   Icon: null },
      { label: 'NEXT',   Icon: ReactIcon },
    ]
  },
  {
    name: 'BACKEND',
    x: 267,
    id: 'backend',
    skills: [
      { label: 'NODE',   Icon: NodeIcon },
      { label: 'PYTHON', Icon: PythonIcon },
      { label: 'PG',     Icon: DbIcon },
      { label: 'MONGO',  Icon: DbIcon },
      { label: 'REST',   Icon: null },
      { label: 'GQL',    Icon: null },
    ]
  },
  {
    name: 'TOOLS',
    x: 452,
    id: 'tools',
    skills: [
      { label: 'GIT',    Icon: GitIcon },
      { label: 'DOCKER', Icon: DockerIcon },
      { label: 'AWS',    Icon: CloudIcon },
      { label: 'LINUX',  Icon: null },
      { label: 'VITE',   Icon: null },
      { label: 'CI/CD',  Icon: null },
    ]
  },
  {
    name: 'AI & RUST',
    x: 637,
    id: 'airust',
    skills: [
      { label: 'AI/ML',  Icon: AIIcon },
      { label: 'PYTRCH', Icon: AIIcon },
      { label: 'LLMS',   Icon: AIIcon },
      { label: 'RUST',   Icon: RustIcon },
      { label: 'WASM',   Icon: null },
      { label: 'TF',     Icon: AIIcon },
    ]
  },
];

const SkillTile = ({ label, Icon }) => (
  <div style={{
    width: '72px', height: '34px',
    backgroundColor: 'var(--gb-darkest)',
    border: '2px solid var(--gb-medium)',
    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3px',
    padding: '2px 4px', boxSizing: 'border-box',
    overflow: 'hidden'
  }}>
    {Icon ? (
      <div style={{ flexShrink: 0, transform: 'scale(0.85)', transformOrigin: 'left center' }}><Icon /></div>
    ) : (
      <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--gb-medium)', border: '1px solid var(--gb-light)', flexShrink: 0 }} />
    )}
    <div style={{ fontSize: '4px', fontFamily: "'Press Start 2P'", color: 'var(--gb-light)', lineHeight: 1.4, wordBreak: 'break-all' }}>
      {label}
    </div>
  </div>
);

const SkillsRoom = () => {
  return (
    <div style={{ width: '800px', height: '550px', position: 'relative', overflow: 'hidden', fontFamily: "'Press Start 2P'" }}>

      {/* Back wall */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '460px', backgroundColor: 'var(--gb-medium)' }} />

      {/* Floor */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px',
        backgroundColor: 'var(--gb-dark)',
        backgroundImage: 'linear-gradient(var(--gb-darkest) 1px, transparent 1px), linear-gradient(90deg, var(--gb-darkest) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Chandelier - centered at top */}
      <div style={{ position: 'absolute', left: '370px', top: 0, width: '60px', height: '8px', backgroundColor: 'var(--gb-darkest)' }} />
      {[375, 396, 417].map((lx, i) => (
        <React.Fragment key={i}>
          <div style={{ position: 'absolute', left: `${lx}px`, top: '8px', width: '2px', height: `${16 + i * 4}px`, backgroundColor: 'var(--gb-darkest)' }} />
          <div className="chandelier-light" style={{ position: 'absolute', left: `${lx - 2}px`, top: `${24 + i * 4}px`, width: '8px', height: '12px', backgroundColor: 'var(--gb-light)', animationDelay: `${i * 0.25}s` }} />
        </React.Fragment>
      ))}

      {/* 4 evenly-spaced Skill Shelves */}
      {SHELVES.map((shelf) => (
        <React.Fragment key={shelf.id}>
          {/* Shelf backing */}
          <div style={{
            position: 'absolute', left: `${shelf.x}px`, bottom: '100px',
            width: '82px', height: '320px',
            backgroundColor: 'var(--gb-darkest)',
            border: '3px solid var(--gb-dark)',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            {/* Shelf planks with skill tiles */}
            {shelf.skills.map((skill, ti) => (
              <div key={ti} style={{
                position: 'absolute',
                top: `${6 + ti * 50}px`,
                left: '4px',
              }}>
                <SkillTile label={skill.label} Icon={skill.Icon} />
                {/* shelf plank line */}
                <div style={{ width: '74px', height: '3px', backgroundColor: 'var(--gb-dark)', marginTop: '2px' }} />
              </div>
            ))}
          </div>

          {/* High-contrast name badge below shelf */}
          <div style={{
            position: 'absolute',
            left: `${shelf.x}px`,
            bottom: '68px',
            width: '82px',
            textAlign: 'center',
            backgroundColor: 'var(--gb-darkest)',
            border: '2px solid var(--gb-light)',
            padding: '5px 2px',
            boxSizing: 'border-box'
          }}>
            <span style={{ fontSize: '5px', color: 'var(--gb-light)', fontFamily: "'Press Start 2P'" }}>
              {shelf.name}
            </span>
          </div>
        </React.Fragment>
      ))}

      {/* Pixel cat sitting on top of TOOLS shelf (x=452) */}
      <div style={{ position: 'absolute', left: '482px', bottom: '420px' }}>
        {/* body */}
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '14px', height: '10px', backgroundColor: 'var(--gb-light)' }} />
        {/* head */}
        <div style={{ position: 'absolute', left: '3px', bottom: '10px', width: '10px', height: '9px', backgroundColor: 'var(--gb-light)' }} />
        {/* left ear */}
        <div style={{ position: 'absolute', left: '3px', bottom: '19px', width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '5px solid var(--gb-light)' }} />
        {/* right ear */}
        <div style={{ position: 'absolute', left: '10px', bottom: '19px', width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '5px solid var(--gb-light)' }} />
        {/* eyes */}
        <div style={{ position: 'absolute', left: '5px', bottom: '13px', width: '2px', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
        <div style={{ position: 'absolute', left: '10px', bottom: '13px', width: '2px', height: '2px', backgroundColor: 'var(--gb-darkest)' }} />
        {/* tail curling left */}
        <div style={{ position: 'absolute', left: '-8px', bottom: '0px', width: '8px', height: '14px', borderLeft: '3px solid var(--gb-light)', borderTop: '3px solid var(--gb-light)', borderTopLeftRadius: '10px' }} />
      </div>

      {/* Small open book on floor between shelves 2 and 3 */}
      <div style={{ position: 'absolute', left: '382px', bottom: '108px', display: 'flex' }}>
        <div style={{ width: '18px', height: '12px', backgroundColor: 'var(--gb-light)', border: '2px solid var(--gb-dark)', transform: 'skewY(-15deg)', transformOrigin: 'right bottom' }} />
        <div style={{ width: '18px', height: '12px', backgroundColor: 'var(--gb-light)', border: '2px solid var(--gb-dark)', transform: 'skewY(15deg)', transformOrigin: 'left bottom' }} />
      </div>

      {/* Floor rug - centered */}
      <div style={{
        position: 'absolute', left: '245px', bottom: '30px', width: '310px', height: '36px',
        backgroundColor: 'var(--gb-dark)', border: '4px solid var(--gb-darkest)', boxSizing: 'border-box',
        backgroundImage: 'linear-gradient(45deg, var(--gb-darkest) 25%, transparent 25%, transparent 75%, var(--gb-darkest) 75%), linear-gradient(-45deg, var(--gb-darkest) 25%, transparent 25%, transparent 75%, var(--gb-darkest) 75%)',
        backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px'
      }} />

    </div>
  );
};

export default SkillsRoom;
