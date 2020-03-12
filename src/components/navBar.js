import React from "react"
import { Link } from "gatsby"
import './navbar.scss'

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>  
    <div className="navDiv">
      <Navbar expand="lg" className="Navbar sticky-top" > 
     <div className="navWidth">
      
  <div className="mobileNav">
  <Link to="/home">
    <div className="navLogo">
    
    <img className="calsyNav" src="https://i.imgur.com/3xylq8A.png" /> 
        </div>
    </Link>

        <div className="navToggle">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainNav" />
        </div>
        </div>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="mainNav">
        

            <Link class="about" to="/about">
            
                WHO WE ARE
            </Link>
            {/* <div className="bullet">
            •
            </div> */}
            <Link class="services" to="/services">
              
               WHAT WE DO
                
            </Link>
            {/* <div className="bullet">
            •
            </div> */}
            <Link class="contact" to="/contact">
               WHERE WE ARE
                
            </Link>
            
       
         
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  )
}

export default CustomNavbar
