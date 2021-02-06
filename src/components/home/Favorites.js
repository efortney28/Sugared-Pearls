import React from "react"
import styled from "styled-components"

export default function Favorites(props) {
  const favorites = props.favorites
  return (
    <FavoritesContainer>
      <FavoriteTitle>Our Favorite Creations</FavoriteTitle>
      <ImagesContainer>
        {favorites &&
          favorites.map(fav => (
            <Img
              alt="one of our favorites"
              src={fav.node.image.file.url}
              key={fav.node.id}
            />
          ))}
      </ImagesContainer>
    </FavoritesContainer>
  )
}

const FavoritesContainer = styled.section`
  margin-top: 2rem;
  background-color: #ffe4e4;
  padding-bottom: 2rem;
`
const FavoriteTitle = styled.h3`
  font-family: "Poppins SemiBold";
  font-size: 1.3rem;
  color: #4a4a4a;
  text-align: center;
  padding: 1rem 0;
`
const ImagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
const Img = styled.img`
  height: 200px;
  margin: 1rem;
  box-shadow: 1px 1px 2px;
`
