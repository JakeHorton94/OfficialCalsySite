import React from "react"
import './vehicleGraphics.scss'
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'


const VehicleGraphicsPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {vehicleGraphics: {eq: true}}, fields: {slug: {}}}) {
          edges {
            node {
              fields {
                slug 
              }
              frontmatter {
                title
                date
                thumbnail
              }
            }
          }
        }
      }`)

        return (
            <Layout>
              <Helmet>
      <title>Vehicle Graphics</title>
    </Helmet>
              <div className="section8 vehicleGraphicsBanner">
              <img className="serviceLogo" src="https://i.imgur.com/4Qarum6.png" alt="vehicle graphics"></img>
              </div>
              
              <div className="section1">
                <p className="serviceIntro">Vehicle & van graphics are the best way to promote your business and your services while on the move. First impressions are very important and we will ensure that your vehicle or van perfectly represents you and your business.</p>
                <p><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
                <h2 className="threeSteps"> VEHICLE GRAPHICS IN 3 EASY STEPS</h2>
                <div className="point">
                  <span className="listNumber1">1.</span><p>Our in-house design team will work with you to produce a free no-obligation design and quotation.</p>
                </div>
                <div className="point">
                  <span className="listNumber2">2.</span><p>Your vehicle will be booked in with us at a time that is convenient for you. We even offer local fully insured vehicle collection and return for a flat rate of £29.99 + VAT.</p>
                </div>
                <div className="point">
                  <span className="listNumber3">3.</span><p>Your vehicle is ready to collect or be returned to you fully branded, all artwork is released and you leave happy. Safe in the knowledge that the work carried has been carried out to the highest standard and is covered by unrivalled aftercare.</p>
                </div>
                </div>

              <div className="section1">
                <h2> Take a look at some of our work </h2>
                </div>
                <div className="galleryContainer">
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                            <Link to= {"blog/" + edge.node.fields.slug} aria-label={"Link to " + edge.node.fields.slug}>
                                <h2 className="postHeading">{edge.node.frontmatter.title}</h2>
                                <img src={edge.node.frontmatter.thumbnail} alt=""/>
                            </Link>
                            </li>
                        )
                    })}
                </ol>
                </div>
                
                
            </Layout>
        )
  }


export default VehicleGraphicsPage




