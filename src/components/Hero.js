import React, { useState} from 'react';
import '../styles/Hero.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

function Hero() {
  const [counterOn, setCounterOn] = useState(false);
  return (
   
    <div className='hero'>
      <div className='flexCol'>
        <p>Total Seminars Available </p>
        <p>Number of Seminars attended</p>
      </div>
      <div className='flexAns'>
      <ScrollTrigger onEnter= {() => setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div className='counter'>
        <p>
          {counterOn && <CountUp start={0} end={30} duration={3} delay={0} />}
          +
        </p>
      </div>
      </ScrollTrigger>
      <p>10</p>

      </div>
     

    </div>
  )
}

export default Hero