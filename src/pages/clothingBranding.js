import React from "react"
import './vehicleGraphics.scss'
import './clothingBranding.scss'
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const ClothingBrandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {clothingBranding: {eq: true}}, fields: {slug: {}}}) {
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
                <img className="serviceLogo" src="https://i.imgur.com/SrR5hW3.png" alt="clothing"></img>
              <div className="section1">
                <p className="serviceIntro">We offer bespoke clothing and workwear branding. Garments can be supplied either by us or by you. Designed around your company image, we can ensure you and your staff look professional in your workplace or on site.</p>
                <p className="serviceIntro"> <Link to="/contact"> Contact us now </Link> for a free no obligation quotation </p>
                <p ><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
                <h2 className="threeSteps"> CLOTHING TYPES </h2>
                <p className="clothingList"> T-shirts <span className="blueDot">•</span> Polo Tops <span className="redDot">•</span> Hoodies <span className="yellowDot">•</span> Jumpers <span className="blueDot">•</span> High-Vis <span className="redDot">•</span> Joggers <span className="yellowDot">•</span> Football/Sports Tops/Kits <span className="blueDot">•</span> Coats/Jackets <span className="redDot">•</span> School Uniform <span className="yellowDot">•</span> Salon <span className="blueDot">•</span> Hospitality <span className="redDot">•</span> and more 
                </p>

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
                                <p className="postDate">{edge.node.frontmatter.date}</p>
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


export default ClothingBrandingPage




