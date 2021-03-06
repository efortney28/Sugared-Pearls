import React from "react"
import styled from "styled-components"
import { Link, navigate, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import Favorites from "../components/home/Favorites"
import Testamonials from "../components/home/Testamonials"

const IndexPage = ({ data }) => {
  const reviews = data.allContentfulReviewPost.edges
  const favorites = data.allContentfulFavoritesPost.edges
  const goToOrder = () => {
    navigate(`/order`)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <ImagesContainer>
        <Image />
      </ImagesContainer>
      <TextContainer>
        <Avatar />
        <P>
          With over 30 years of experience,{" "}
          <Span>Sugared Pearls Bake Shoppe</Span> is your new local desserts and
          sweets shop located in the Baytown, TX area. Whether you're looking
          for cookies, cakes, pies, macaroons, hot chocolate bombs, or anything
          in between, we have you covered.
        </P>

        <P>
          <Span>Sugared Pearls Bake Shoppe</Span> holds a State of Texas Food
          Handler Certification, so you know that we mean quality.
        </P>

        <P>All costs must be paid by cash or PayPal.</P>

        <P>
          Need something custom? We do that too! With{" "}
          <Span>Sugared Pearls Bake Shoppe</Span>, quality is a licensed
          guarantee. This food is made in a home kitchen and is not inspected by
          the Department of State Health Services or a local health department.
        </P>
        <Button onClick={goToOrder} className="CTA-button">
          ORDER NOW
        </Button>
      </TextContainer>
      <Favorites favorites={favorites} style={{ paddingTop: "0.5rem" }} />
      <Testamonials reviews={reviews} />
    </Layout>
  )
}

const ImagesContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    height: 800px;
    object-fit: cover;
  }
`
const TextContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    width: 60%;
    margin: 0 auto;
  }
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
  background-color: #ffe4e4;
  border: none;
  padding: 1rem 2rem;
  color: #4a4a4a;
  font-family: "Poppins SemiBold";
  font-size: 1rem;
`

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulReviewPost {
      edges {
        node {
          author
          comments {
            internal {
              content
            }
          }
          id
        }
      }
    }
    allContentfulFavoritesPost {
      edges {
        node {
          image {
            file {
              url
            }
          }
          id
        }
      }
    }
  }
`
