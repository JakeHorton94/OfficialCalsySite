import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <div className="headerContainer">
  <header className="logo"
  >
    
        <Link
          to="/"
        >
          <img className="headerImg" src="https://i.imgur.com/VCbf2mP.png" alt=""/> 
        </Link>

  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
