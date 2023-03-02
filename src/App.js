import './App.css';
import SquaresBG from "react-animated-squares";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';

import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";

SwiperCore.use([Autoplay]);

function App() {
  return (
    <>
      <div className='top'>
      <SquaresBG count={15} speed={0.6} backgroundColor='#333333' />
    <div className='namePlate'>
      <div className='nameDiv'>
        <h2>Hunter Davis</h2>
        <p>JavaScript Developer</p>
      </div>
    </div>
      </div>
      
    <div className="experience">
<Swiper
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false
  }}
  >
  <SwiperSlide>
   <div className="slideRow">
<div className="slide">
<img src="/PythonPic.png" alt="image"/>
</div>

<div className="textbox">
  
    <h2>Skill 1: Python</h2>
    <p>I have used python to develop solutions to problems</p>
    </div>
   </div>
   </SwiperSlide>
   <SwiperSlide>
   <div className="slideRow">
<div className="slide">
<img src="/ReactPic.png" alt="image"/>
</div>

<div className="textbox">
    <h2>Skill 2: React and React native</h2>
    <p>I have used react and react native framework to build react and react native projects </p>
    
    </div>
   </div>
   </SwiperSlide>
   <SwiperSlide>
   <div className="slideRow">
<div className="slide">
<img src="/GitHubPic.png" alt="image"/>
</div>

<div className="textbox">
    <h2>Skill 3: Github</h2>
    <p>I have use github to push my projects for others to see and have cloned repositories from other peoples projects to to improve on my skills  </p>
    
    </div>
   </div>
   </SwiperSlide>
    </Swiper>
  </div>
   <div className='workWrapper'>
    <div className='workColumn'>
    <h3>Work History</h3>
    <div id='joblist' data-aos="fade-up-right"  data-aos-duration="3000"  data-aos-easing="linear">
      <div className='work'>
        <div className='years'>2022 - present</div> 
        <div className='job'>Volunteer at Mountaineer camp </div>
      </div> <div className='work'>
        <div className='years'>2018 - 2020</div> 
        <div className='job'>Cabell Coding Consolidate</div>
      </div>
      
      
    
    </div>
    </div>
   </div>

   <div className='workWrapper'>
    <div className='workColumn' id='edColumn'>
    <h3>Education History</h3>
    <div id='schoolList' data-aos="fade-up-left"  data-aos-duration="3000">
      <div className='work'>
        <div className='years'>2017 - 2021</div> 
        <div className='job'>Huntington High School</div>
      </div> <div className='work'>
        <div className='years'>2022 - present</div> 
        <div className='job'>Mountwest Community & Technical College</div>
      </div>
     
      
    
    </div>
    </div>
   </div>

{ /*  1 third view height min 
    dark background and light font
flex container conating at least 1 child element div containing info*/ }

   <div className='footer'>
  <div>
  <p data-aos="fade-up"  data-aos-duration="3000">Learn more about me at my socials </p>
  </div>
  <div data-aos="fade-down"  data-aos-duration="2500">
  <a href= 'npm:“davis202@mctc.edu”' ><AiFillMail className='SocialIcons' color='BB001B' /></a>
  
  </div>
  <div data-aos="fade-up"  data-aos-duration="2000">
  <a href="https://github.com/Huntermd"><AiFillGithub className='SocialIcons' color='lightgreen'/></a>
  
  </div>
  <div data-aos="fade-down"  data-aos-duration="1500">
  <a href="https://www.linkedin.com/in/hunter-davis-99832b252/"><AiFillLinkedin className='SocialIcons' color='#0e76a8'/></a>
  </div>
   </div>
   
    </>
  );
}

export default App;

