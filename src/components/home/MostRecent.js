import React from "react"
import styled from "styled-components"

import CakeImg from "../cakeImg"

export default function MostRecent() {
  return (
    <MostRecentContainer>
      <MostRecentTitle>Most Recent Creations</MostRecentTitle>
      <CakeImg />
    </MostRecentContainer>
  )
}

const MostRecentContainer = styled.section`
  margin-top: 2rem;
  background-color: #ff7c7c;
  padding-bottom: 2rem;
`
const MostRecentTitle = styled.h3`
  font-family: "Poppins SemiBold";
  color: #fefefe;
  text-align: center;
`
