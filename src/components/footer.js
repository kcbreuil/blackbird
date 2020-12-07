import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"

const FooterStyle = styled.footer`
  a {
    color: white;
  }
  i {
    color: white;
  }
`

export default function Footer() {
  return (
    <footer className="footer">
      <FooterStyle className="footer-social footer-section">
        <FontAwesomeIcon icon={faCrow} />
      </FooterStyle>
      <h5>© {new Date().getFullYear()} Blackbird Ordinary</h5>
    </footer>
  )
}
