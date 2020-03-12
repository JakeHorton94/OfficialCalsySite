import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './about.scss'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
            
    
    
  <div className="section3">
    <img className="connorCircle" src="https://i.imgur.com/A6mi0ho.png"></img>
     <div className="diagram">
       +
     </div>
    <img className="connorCircle" src="https://i.imgur.com/eAZKak4.png"></img>
    <div className="diagram">
       =
     </div>
    <img className="connorCircle" src="https://i.imgur.com/3BUmDa8.png"></img>
    </div>


    <div className="section4 whoAreWe">

    <h2> WHO ARE WE</h2>
    <hr></hr>

                <p > Calsy stickers signs designs ltd is a company started by 2 friends with years of industry experience and a passion for perfection. After working for other companies in the industry for years we noticed a industry trend of poor customer communication and customer satisfaction. Realising we can do better calsy stickers signs designs ltd was born. We have been trading as our own company for 2 years going from strength to strength. Starting out in a small office with shared workspace we have recently moved into our brand new, fully equipped 2000sqft premises. We are fully insured, use only the best materials, provide free no obligation quotes, pride ourselves on quick easy communication, the highest standards of work and unrivalled aftercare. </p>
                <p > <strong> Our work and reviews speak for themselves. </strong> </p>
            </div>

            <div className="aboutGrid">

            <div className="section5">
            <h2>PREMISES</h2>

            <hr></hr>
                <p>Unlike some of our other competitors our 2000sqft, fully equipped, heated  workshop is big enough to accommodate virtually any vehicle. This allows us to ensure your graphics are applied in a clean, dust free environment heated to the temperature specified by the material manufacturer. By using only the highest quality materials, produced and fitted in the correct working environment we can be certain your product leaves us perfect. 
                </p>
            </div>
         

          

            

            <div className="section5">
            <h2>MOTORSPORT </h2>
            
            <hr></hr>
                <p> We are passionate motorsport. It’s not just our hobby but a big part of our business. We sponsor multiple competitors in track, drift and karting events and do everything we can to support grass roots motorsport. If you have a competition or track car that you need graphics or branding for don’t hesitate to give us a call for a free no obligation quotation or better yet pop down and see our personal competition cars for yourselves.</p>
                <p>Check our social media to keep up to date with our latest track day, competition and sponsored competitors updates.                 </p>
            </div>
            </div>
           
           

            
            <h2 className="impact">Thinking of making an impact?</h2>
            <p className="getInTouch"><Link to="/contact">Get in touch!</Link></p>

           
  </Layout>
)

export default AboutPage
