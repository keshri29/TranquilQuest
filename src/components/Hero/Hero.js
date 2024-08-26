import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5e6d3;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 50%; 
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  color: #333;
  border: 1px solid #333;
  cursor: pointer;
`;

const HeroImage = styled.img`
  max-width: 38%; /* Adjust as needed */
  height: auto;
  border-radius: 8px; /* Optional: Rounded corners */
`;

const ScrollingTextWrapper = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

const messages = [
  "Smoking",
  "Masturbation",
  "Alcohol Drinking",
  "P*rn Addiction",
  "Screen Time",
  "Mental Illness",
  "Impulsiveness",
];

function Hero() {
  const [wrapWidth, setWrapWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const wrapRef = useRef(null);
  const animationFrameId = useRef(null);
  

  useEffect(() => {
    setWrapWidth(messages.length * 220); 
    move(); 
    return () => {
      window.cancelAnimationFrame(animationFrameId.current);
    };
  }, [wrapWidth]);
  
  const handleMouseEnter = () => {
    window.cancelAnimationFrame(animationFrameId.current);
  };
  const handleMouseLeave = () => {
    move();
  };

  const move = () => {
    animationFrameId.current = window.requestAnimationFrame(() => {
      setOffset((offset) => {
        if (-offset >= wrapWidth / 2) {
          return 0;
        }
        return offset - 2; 
      });
      move();
    });
  };


  return (
    <HeroWrapper>
      <HeroContentWrapper>
        <HeroContent>
          <HeroTitle>Break Free from Compulsive Habits</HeroTitle>
          <HeroText>
            Discover our transformative courses designed to help you overcome compulsive behaviors and reclaim your life.
          </HeroText>
          <ButtonGroup>
            <PrimaryButton>Explore Courses</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <HeroImage src="/assets/habbit.jpg" alt="Break Free" />
      </HeroContentWrapper>
      
      <ScrollingTextWrapper>
     <div className="wrap"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       style={{ overflow: "hidden", whiteSpace: "nowrap" }}
     >
  <div
    className="msg-wrap"
    ref={wrapRef}
    style={{
      width: `${wrapWidth * 2}px`,
      transform: `translateX(${offset}px) translateZ(50px)`, 
      perspective: "1000px",
    }}
  >
    {[...messages, ...messages].map((msg, i) => (
      <span
      className="msg-item"
      key={i}
      style={{
        display: "inline-block",
        cursor:"pointer",
        width: "200px",
        textAlign: "center",
        padding: "15px 20px", 
        backgroundColor: "#333", 
        borderRadius: "8px", 
        margin: "0 10px",
        color: "#fff",
      }}
    >
      {msg}
    </span>
    
    ))}
  </div>
</div>
      </ScrollingTextWrapper>
    </HeroWrapper>
  );
}

export default Hero;
