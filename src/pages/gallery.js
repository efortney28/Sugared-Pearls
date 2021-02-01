import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Carousel, Image } from "antd"

import Layout from "../components/layout"
import SEO from "../components/SEO"

export default function Gallery({ data }) {
  const posts = data.allContentfulGalleryPost.edges

  return (
    <Layout>
      <SEO title="Gallery" />
      <PageContainer>
        <GalleryHeader>Gallery</GalleryHeader>
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
            <section>
              <h3>{post.node.title}</h3>
              <Carousel autoplay>
                {post.node.images.map(img => (
                  <div style={{ textAlign: "center" }}>
                    <Image width={200} height={200} src={img.file.url} />
                  </div>
                ))}
              </Carousel>
            </section>
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
const GalleryHeader = styled.h2``

const PageDescription = styled.p``

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`
