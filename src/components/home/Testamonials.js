import React from "react"
import styled from "styled-components"

export default function Testamonials() {
  return (
    <TestamonialsContainer>
      <TestamonialContainer>
        <Comment>
          Thank you so much Ms Tammy for the delicious pies on Thanksgiving!!
          The coconut meringue was my absolute favorite and I had to hide a
          piece away for later. The sweet potato and pecan pie was a big hit
          with the family!!! They were absolutely delicious!! Thank you for the
          hard work on all the homemade goodness and I cannot wait for another
          holiday to have more coconut meringue, so I’ll have to make up my own
          holiday to have another one soon❤️❤️ I would absolutely recommend 100
          percent!!! Thank you Ms Tammy!!!
        </Comment>
        <Author>- Paula Marie Hernandez</Author>
      </TestamonialContainer>
      <TestamonialContainer>
        <Comment>
          I made my first order from Tammy. It was done on time no hidden
          costs,and most of all they were the best cake pops I could of ever
          asked for. Already made a second order for a birthday cake for next
          month. 👍👍👍
        </Comment>
        <Author>- Gary Meschede</Author>
      </TestamonialContainer>
    </TestamonialsContainer>
  )
}

const TestamonialsContainer = styled.section`
  margin: 1rem;
`
const TestamonialContainer = styled.section``
const Comment = styled.p`
  font-size: 0.8rem;
`
const Author = styled.span`
  font-family: "Poppins SemiBold";
  font-size: 0.9rem;
`
