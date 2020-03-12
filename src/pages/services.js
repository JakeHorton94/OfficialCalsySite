import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './services.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


const ServicesPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="section6">
        </div>
    <div className="servicesHeading">
    <h2> SERVICES. </h2>
    </div>
    
    <div className="servicesGrid">
        <div className="servicesCircle">
            <Link to="/vehicleGraphics">
            <img src="https://i.imgur.com/4Qarum6.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/vehicleWraps">
            <img src="https://i.imgur.com/mxHclKP.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/fleetWork">
            <img src="https://i.imgur.com/YbotLYu.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/internalSignage">
            <img src="https://i.imgur.com/yhfdnjl.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/externalSignage">
            <img src="https://i.imgur.com/LlkPaz7.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/advertisingBanners">
            <img src="https://i.imgur.com/So48JIk.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/clothingBranding">
            <img src="https://i.imgur.com/SrR5hW3.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/bespokeStickers">
            <img src="https://i.imgur.com/fT3Izbq.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/cardsAndLeaflets">
            <img src="https://i.imgur.com/BxbfoOf.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/siteSafety">
            <img src="https://i.imgur.com/we6KtOx.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/wayfinding">
            <img src="https://i.imgur.com/tRlyUy8.png"></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/subcontractor">
            <img src="https://i.imgur.com/6AxvDwB.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/customWork">
            <img src="https://i.imgur.com/wYlLtbw.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/glassManifestation">
            <img src="https://i.imgur.com/WxdCkEP.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/siteHoarding">
            <img src="https://i.imgur.com/RvPYWVw.png"></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/swingAndPavementSigns">
            <img src="https://i.imgur.com/DWdyQCi.png"></img>
            </Link>
        </div>
    </div>
          
  </Layout>
)

export default ServicesPage
