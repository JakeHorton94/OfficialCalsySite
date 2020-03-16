import React from "react"
import './services.scss'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'


const ServicesPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
      <Helmet>
      <title>Services</title>
    </Helmet>
    <div className="section6">
        </div>
    <div className="servicesHeading">
    <h2> SERVICES. </h2>
    </div>
    
    <div className="servicesGrid">
        <div className="servicesCircle">
            <Link to="/vehicleGraphics" aria-label="Link to vehicle graphics page">
            <img src="https://i.imgur.com/4Qarum6.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/vehicleWraps" aria-label="Link to vehicle wraps page">
            <img src="https://i.imgur.com/mxHclKP.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle" >
            <Link to="/fleetWork" aria-label="Link to fleet work page">
            <img src="https://i.imgur.com/YbotLYu.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/internalSignage" aria-label="Link to interal signage page">
            <img src="https://i.imgur.com/yhfdnjl.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/externalSignage">
            <img src="https://i.imgur.com/LlkPaz7.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/advertisingBanners" aria-label="Link to advertising banners page">
            <img src="https://i.imgur.com/So48JIk.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/clothingBranding" aria-label="Link to clothing branding page">
            <img src="https://i.imgur.com/SrR5hW3.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/bespokeStickers" aria-label="Link to bespoke stickers page">
            <img src="https://i.imgur.com/fT3Izbq.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/cardsAndLeaflets" aria-label="Link to cards and leaflets page">
            <img src="https://i.imgur.com/BxbfoOf.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/siteSafety" aria-label="Link to site safety page">
            <img src="https://i.imgur.com/we6KtOx.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/wayfinding" aria-label="Link to wayfinding page">
            <img src="https://i.imgur.com/tRlyUy8.png" alt=""></img>

            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/subcontractor" aria-label="Link to subcontractor page">
            <img src="https://i.imgur.com/6AxvDwB.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/customWork" aria-label="Link to custom work page">
            <img src="https://i.imgur.com/wYlLtbw.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/glassManifestation" aria-label="Link to glass manifestation page">
            <img src="https://i.imgur.com/WxdCkEP.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/siteHoarding" aria-label="Link to site hoarding page">
            <img src="https://i.imgur.com/RvPYWVw.png" alt=""></img>
            </Link>
        </div>
        <div className="servicesCircle">
            <Link to="/swingAndPavementSigns" aria-label="Link to swings and pavement signs page">
            <img src="https://i.imgur.com/DWdyQCi.png" alt=""></img>
            </Link>
        </div>
    </div>
          
  </Layout>
)

export default ServicesPage
