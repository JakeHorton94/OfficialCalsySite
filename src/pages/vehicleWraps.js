import React from "react"
import './bespokeStickers.scss'
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const VehicleWrapsPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {vehicleWraps: {eq: true}}, fields: {slug: {}}}) {
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
              <div className="section8 vehicleWrapsBanner">
            
                <img className="serviceLogo" src="https://i.imgur.com/mxHclKP.png" alt="vehicle wraps"></img>
                </div>
              <div className="section1">
                <p className="serviceIntro">Cards and Leaflets provide a physical example of your brand and are great at leaving a lasting impression.</p>
                <p><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
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


export default VehicleWrapsPage




