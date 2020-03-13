import React from "react"
import './vehicleGraphics.scss'
import Layout from "../components/layout"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const InternalSignagePage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {internalSignage: {eq: true}}, fields: {slug: {}}}) {
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
              <div className="section8 internalSignageBanner">
                <img className="serviceLogo" src="https://i.imgur.com/yhfdnjl.png" alt="internal signage"></img>
                </div>
              <div className="section1">
                <p className="serviceIntro">Interior signs have a wealth of different uses, created in many forms to suit a diverse blend of environments, budgets and purposes. Internal signage is key in showing people who you are, where to go, what you do and more...</p>
                <p><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
                <h2 className="threeSteps signageSubheading"> INTERIOR SIGNAGE TYPES</h2>
                <div className="clothingList">
                  GLOWING<span className="blueDot">•</span>
               
                  NEON <span className="redDot">•</span>
              
                
                  TRAY <span className="yellowDot">•</span>
                
                  SIMPLE BOARD <span className="blueDot">•</span>
               
                  CUT OUT LETTERS
                </div>
                </div>
                
                <div className="section1">
                <h2 > Take a look at some of our work </h2>
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


export default InternalSignagePage




