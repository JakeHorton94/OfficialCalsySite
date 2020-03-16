import React from "react"
import '../components/generalStyling.scss';
import './landing.scss';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'



const LandingPage = () => (
<div>  
<Helmet>
      <title>Landing Page</title>
    </Helmet>

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

      <Link aria-label="home" className="home" to="/home">
         <div className="landingImage">
           <div className="landingBanner">
           <img className="landingLogo" src="https://i.imgur.com/3xylq8A.png" alt="Calsy"/> 
           </div>
      </div> 
    </Link>
  </section>
    
    </div>
)
export default LandingPage