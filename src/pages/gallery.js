import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Carousel, Image } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Gallery({ data }) {
  const posts = data.allContentfulGalleryPost.edges

  return (
    <Layout>
      <SEO title="Gallery - Sugared Pearls Bake Shoppe" />
      <PageContainer>
        <GalleryHeader>
          Sugared Pearls | <RedText>Gallery</RedText>
        </GalleryHeader>
        <PageDescription>
          Sugared Pearls Bake Shoppe offers a wide variety of sweets and
          desserts, so there is something for everyone! Whether you want a cake,
          macaroons, cookies, cheesecake, or more, Sugared Pearls Bake Shoppe
          has you covered! If you are local to the Baytown area, all sweets can
          even be delivered! Don't see something listed that you want? Contact
          us and we will give you a quote on anything custom!
        </PageDescription>
        <GalleryContainer>
          {posts.map(post => (
            <CarouselContainer>
              <CTitle>{post.node.title}</CTitle>
              <Carousel autoplay>
                {post.node.images.map(img => (
                  <div>
                    <Image
                      width={300}
                      height={300}
                      src={img.file.url}
                      alt="Delicious sweets, delivered!"
                    />
                  </div>
                ))}
              </Carousel>
            </CarouselContainer>
          ))}
        </GalleryContainer>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allContentfulGalleryPost {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`
const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`
const GalleryHeader = styled.h2`
  text-align: center;
  font-size: 1.75rem;
`
const RedText = styled.span`
  color: #b91313;
`
const PageDescription = styled.p`
  padding-right: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 1000px) {
    width: 60%;
    margin: 0 auto;
  }
`

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const CarouselContainer = styled.section`
  width: 300px;
  background-color: #ff7c7c;
  margin-bottom: 3rem;
  box-shadow: 1px 1px 2px;
  @media screen and (min-width: 1000px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`

const CTitle = styled.h3`
  color: #fefefe;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
`
