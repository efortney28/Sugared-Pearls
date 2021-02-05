import React from "react"
import styled from "styled-components"
import Email from "../../assets/email.svg"
import Phone from "../../assets/phone.svg"

export default function footer() {
  return (
    <FooterContainer>
      <LinksContainer>
        <Span>
          <Phone style={iconStyle} className="contact-link" /> :{" "}
          <A href="tel:281-739-3164">(281) 739-3164</A>
        </Span>
        <Span>
          <Email style={iconStyle} className="contact-link" /> :{" "}
          <A href="mailto: sugaredpearlsbakeshoppe@gmail.com">
            sugaredpearlsbakeshoppe@gmail.com
          </A>
        </Span>
      </LinksContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: #666666;
  width: 100vw;
  position: static;
`

const LinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
`

const Span = styled.span`
  color: #fefefe;
`

const A = styled.a`
  text-decoration: none;
  color: #fefefe;
`

const iconStyle = {
  width: "1rem",
  height: "1rem",
  color: "#FEFEFE",
}
