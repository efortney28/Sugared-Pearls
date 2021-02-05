import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export default function Testamonials(props) {
  const reviews = props.reviews
  return (
    <TestamonialsContainer>
      {reviews &&
        reviews.map(review => (
          <TestamonialContainer>
            <Comment>{review.node.comments.internal.content}</Comment>
            <Author>- {review.node.author}</Author>
          </TestamonialContainer>
        ))}
    </TestamonialsContainer>
  )
}

const TestamonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`
const TestamonialContainer = styled.section`
  @media screen and (min-width: 1000px) {
    width: 60%;
    margin: 0 auto;
    padding: 2rem;
  }
`
const Comment = styled.p`
  font-size: 0.8rem;
`
const Author = styled.span`
  font-family: "Poppins SemiBold";
  font-size: 0.9rem;
`
