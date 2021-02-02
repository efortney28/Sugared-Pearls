import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Success() {
  return (
    <Layout>
      <SEO title="Success - Sugared Pearls Bake Shoppe" />
      <PageContainer>
        <SuccessHeader>
          Sugared Pearls | <RedText>Success</RedText>
        </SuccessHeader>
        <PageDescription>
          Thanks for contacting us! We will get back to you as soon as possible.
        </PageDescription>
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SuccessHeader = styled.h2`
  text-align: center;
  font-size: 1.75rem;
`
const RedText = styled.span`
  color: #b91313;
`
const PageDescription = styled.p`
  padding-right: 1rem;
  padding-left: 1rem;
`
