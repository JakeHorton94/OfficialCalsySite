import React from "react"
import '../components/generalStyling.scss';
import './landing.scss';
import { Link } from "gatsby"



const LandingPage = () => (
<div>
{/* <div id="landing-header">
<Link className="home" to="/home">
<div className="landing">
    
<img className="landingLogo" src="https://i.imgur.com/jIs1B57.png" /> 

<div className="welcome">
  Welcome
</div>

</div>
</Link>


    </div> */}
  

    <section className="animated-grid">
      <div className="cardS one"></div>
      <div className="cardS two"></div>
      <div className="cardS three"></div>
      <div className="cardS four"></div>
      <div className="cardS five"></div>
      <div className="cardS six"></div>
      <div className="cardS seven"></div>
      <div className="cardS eight"></div>
      <div className="cardS nine"></div>
      <div className="cardS ten"></div>
      <div className="cardS eleven"></div>
      <div className="cardS twelve"></div>
      <div className="cardS thirteen"></div>
      <div className="cardS fourteen"></div>
      <div className="cardS fifteen"></div>
      <div className="cardS sixteen"></div>

      <Link className="home" to="/home">
         <div className="landingImage">
           <div className="landingBanner">
           {/* <img className="landingLogo" src="https://i.imgur.com/BgUBT9Q.png" />  */}
           <img className="landingLogo" src="https://i.imgur.com/3xylq8A.png" /> 
           </div>
      </div> 
    </Link>
  </section>
    
    </div>
)
export default LandingPage