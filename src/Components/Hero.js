import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div style={{color: '#fff', fontSize: '3em'}}>
      <ReactTypingEffect
        text={["Allene Norton", "Full-Stack Web Developer", "Software Development Instructor"]}
        eraseDelay={2000}
        typingDelay={1200}
        speed={80}
        eraseSpeed={30}
      />
    </div>
  );
};

export default Hero