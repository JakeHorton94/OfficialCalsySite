import React from "react"
import './home.scss'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="slideBackground"></div>
    <div id="landing-header">
    <img className="bannerCalsy" src="https://i.imgur.com/dlMh926.png" /> 

    <span>
      <h2 className="latestWork">STICKERS. SIGNS. DESIGNS.</h2>

    </span>
    </div>

    <div className="buttonContainer">
      <button className="optionButton aboutButton">
      <Link className="linkStyles" to="/about">

          ABOUT
      </Link>

      </button>
      <button className="optionButton servicesButton">
      <Link className="linkStyles" to="/services">

          SERVICES
      </Link>

      </button>
      
      <button className="optionButton contactButton">
      <Link className="linkStyles" to="/contact">
          CONTACT
      </Link>

      </button>
    </div>
    
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <hr className="homeHr"></hr>
   
        <h1 className="secondaryHeading recentWork">RECENT WORK</h1>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe className="instagramFeed" src="https://cdn.lightwidget.com/widgets/c18be15c3766520691d5f90aabc18e2a.html" scrolling="no" allowtransparency="true" ></iframe>
          
     
  </Layout>
)

export default IndexPage
