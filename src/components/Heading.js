import React, { useEffect} from 'react'
import "../styles/Heading.css";
import semiVideo from "../assets/semiVideo.mp4";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Heading() {
//scroll animation using hook
useEffect(()=> {
  Aos.init({duration:2000})
}, [])

  return (
    <div className='home'>
      <video src={ semiVideo } muted autoPlay loop type = "video/mp4"></video>
      <div className='content'>
        <h1 data-aos="fade-up">Study Abroad</h1>
        <p data-aos="fade-up">India's Largest Higher Studies Institute.</p>
      </div>

    </div>
  )
}

export default Heading