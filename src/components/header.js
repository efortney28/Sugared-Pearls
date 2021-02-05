import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { HamburgerArrowAlt } from "react-animated-burgers"
import { Link } from "gatsby"
import { links } from "../constants/links"
import Logo from "../../assets/logo.svg"
import menuFile from "../../assets/menu.pdf"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    []
  )

  return (
    <HeaderContainer>
      <section className="brand">
        <h1 style={{ margin: "0" }} className="brand-text">
          <Link className="brand-link" to="/">
            <Logo style={logoStyle} />
          </Link>
        </h1>
      </section>
      <section className="menu">
        <HamburgerArrowAlt
          className="menu-button"
          buttonColor={isActive ? "#B91313" : "#FEFEFE"}
          barColor={isActive ? "#FEFEFE" : "#6F6F6F"}
          buttonWidth={25}
          style={menuButtonStyle}
          {...{ isActive, toggleButton }}
        />
        {isActive && (
          <MenuContainer>
            {links.map(link => (
              <Link
                className="menu-link"
                key={link.text}
                style={linkStyle}
                to={link.to}
              >
                {link.text}
              </Link>
            ))}
            <a style={linkStyle} href={menuFile}>
              Menu
            </a>
          </MenuContainer>
        )}
      </section>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sugared Pearls Bake Shoppe`,
}

const HeaderContainer = styled.nav`
  background-color: #fefefe;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const logoStyle = {
  width: "auto",
  height: "75px",
}

const MenuContainer = styled.section`
  background-color: #b91313;
  padding: 2rem 4rem;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
`

const menuButtonStyle = {
  position: "sticky",
  top: "2.5rem",
  right: "1.5rem",
  border: "none",
  zIndex: "99",
}

const linkStyle = {
  textDecoration: "none",
  color: "#FEFEFE",
  fontSize: "1.5rem",
  padding: "1rem 0",
}

export default Header
