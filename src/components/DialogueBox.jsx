import React, { useState, useEffect, useRef } from 'react';

const DialogueBox = ({ hotspot, onClose, onComplete }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
  const messages = Array.isArray(hotspot.message) ? hotspot.message : [hotspot.message];
  const currentMsg = messages[pageIndex];
  
  const isTyping = displayedText.length < currentMsg.length;
  const isLastPage = pageIndex === messages.length - 1;

  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (i < currentMsg.length) {
        setDisplayedText(currentMsg.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 40);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pageIndex, currentMsg]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      
      if (e.key === ' ' || e.key === 'Enter') {
        if (isTyping) {
           // Skip typing and output message immediately
           if (intervalRef.current) clearInterval(intervalRef.current);
           setDisplayedText(currentMsg);
        } else {
           if (!isLastPage) {
             setPageIndex(p => p + 1);
           } else {
             onComplete();
           }
        }
      }

      if ((e.key === 'f' || e.key === 'F') && !isTyping && isLastPage && hotspot.link) {
        if (hotspot.link.startsWith('mailto:')) {
          window.location.href = hotspot.link;
        } else {
          window.open(hotspot.link, '_blank');
        }
      }

      if ((e.key === 'l' || e.key === 'L') && !isTyping && isLastPage && hotspot.liveLink) {
        window.open(hotspot.liveLink, '_blank');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTyping, isLastPage, currentMsg, hotspot, onClose]);

  const handleBoxClick = () => {
      if (isTyping) {
         if (intervalRef.current) clearInterval(intervalRef.current);
         setDisplayedText(currentMsg);
      } else if (!isLastPage) {
         setPageIndex(p => p + 1);
      } else {
         onComplete();
      }
  };

  return (
    <div 
      className="dialogue-slide-up"
      onClick={handleBoxClick}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '120px',
        backgroundColor: 'var(--gb-darkest)',
        border: '4px solid var(--gb-light)',
        boxSizing: 'border-box',
        zIndex: 1000,
        padding: '20px',
        cursor: 'pointer'
      }}
    >
      <div style={{
        color: 'var(--gb-light)',
        fontFamily: "'Press Start 2P'",
        fontSize: '10px',
        lineHeight: 1.8,
        letterSpacing: '1px'
      }}>
        {displayedText}
      </div>

      {/* Pages Indicator top-right */}
      {messages.length > 1 && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'var(--gb-light)',
          fontFamily: "'Press Start 2P'",
          fontSize: '12px',
          transform: 'scale(0.5)',
          transformOrigin: 'top right'
        }}>
          PAGE {pageIndex + 1}/{messages.length}
        </div>
      )}

      {/* Blinking ▼ arrow next page indicator */}
      {!isTyping && !isLastPage && (
        <div className="blink-fast" style={{
          position: 'absolute',
          bottom: '10px',
          right: '16px',
          color: 'var(--gb-light)',
          fontSize: '12px',
          fontFamily: "'Press Start 2P'",
          transform: 'scale(0.66)',
          transformOrigin: 'bottom right'
        }}>
          ENTER: CONTINUE
        </div>
      )}

      {/* Hotspot Link interaction */}
      {!isTyping && isLastPage && (
        <div className="blink" style={{
          position: 'absolute',
          bottom: '10px',
          left: '16px',
          color: 'var(--gb-light)',
          fontSize: '12px',
          fontFamily: "'Press Start 2P'",
          transform: 'scale(0.66)',
          transformOrigin: 'bottom left'
        }}>
          {hotspot.link || hotspot.liveLink ? (
             (hotspot.link && hotspot.liveLink ? "F: SOURCE | L: LIVE DEMO" : hotspot.link ? "F: OPEN SOURCE" : "L: LIVE DEMO")
          ) : (
            "ENTER: CLOSE"
          )}
        </div>
      )}
    </div>
  );
};

export default DialogueBox;
