import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div style={{color: '#fff', fontSize: '3em'}}>
      <ReactTypingEffect
        text={["hi.", "my name is allene.", "you may have already started scrolling.", "but if not...", "i'm glad you're here with me.", "i am a web developer", "currently based in austin, texas.", "i teach at a coding bootcamp.", "i have lots of pets.", "i am also a musician.", "i don't have a favorite food...", "or a favorite anything, really.", "actually...", "i do have a favorite song.", "it is naive melody by the talking heads.", "the live version from stop making sense.",]}
        eraseDelay={2000}
        typingDelay={1200}
        speed={80}
        eraseSpeed={30}
      />
    </div>
  );
};

export default Hero