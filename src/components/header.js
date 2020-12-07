import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const NavStyle = styled.nav`
  background-color: black;
  height: 100px;
  a {
    text-decoration: none;
    color: white;
    margin-left: 50px;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <NavStyle>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </NavStyle>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
