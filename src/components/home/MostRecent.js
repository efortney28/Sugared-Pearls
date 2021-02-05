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
  background-color: #ffe4e4;
  padding-bottom: 2rem;
`
const MostRecentTitle = styled.h3`
  font-family: "Poppins SemiBold";
  font-size: 1.3rem;
  color: #4a4a4a;
  text-align: center;
  padding: 1rem 0;
`
