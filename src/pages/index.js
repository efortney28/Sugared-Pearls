import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import MostRecent from "../components/home/MostRecent"
import Testamonials from "../components/home/Testamonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImagesContainer>
      <Image />
      <Avatar />
    </ImagesContainer>
    <TextContainer>
      <P>
        With over 30 years of experience,{" "}
        <Span>Sugared Pearls Bake Shoppe</Span> is your new local desserts and
        sweets shop located in the Baytown, TX area. Whether you're looking for
        cookies, cakes, macaroons, hot chocolate bombs, or anything in between,
        we have you covered.
      </P>

      <P>
        Need something custom? We do that too! We can deliver custom cakes and
        sweets for any occasion in Baytown, Mont Belvieu and surrounding areas.
        With <Span>Sugared Pearls Bake Shoppe</Span>, quality is a licensed
        guarantee.
      </P>
      <Button className="CTA-button">ORDER NOW</Button>
    </TextContainer>
    <MostRecent style={{ paddingTop: "0.5rem" }} />
    <Testamonials />
  </Layout>
)

const ImagesContainer = styled.section`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
`
const TextContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  color: #6f6f6f;
  font-stlye: regular;
`
const Span = styled.span`
  font-family: "Poppins SemiBold";
`
const Button = styled.button`
  margin-top: 1rem;
  background-color: #ff7c7c;
  border: none;
  padding: 1rem 2rem;
  color: #fefefe;
  font-family: "Poppins SemiBold";
  font-size: 1rem;
`

export default IndexPage
