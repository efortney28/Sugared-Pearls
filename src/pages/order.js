import React, { useState } from "react"
import styled from "styled-components"
import { Button, Input } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Order() {
  const { TextArea } = Input

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [location, setLocation] = useState()
  const [message, setMessage] = useState()

  return (
    <Layout>
      <SEO title="Order - Sugared Pearls Bake Shoppe" />
      <PageContainer>
        <ContactHeader>
          Sugared Pearls | <RedText>Order</RedText>
        </ContactHeader>
        <PageDescription>
          Ready to order? Fill out the form below and we will get back to you as
          soon as possible! Once we get your message, we will get back to you
          with a quote and then arrange payment.
        </PageDescription>
        <FormContainer>
          <StyledForm
            id="contact-form"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <Input
              style={inputStyle}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Name"
            />
            <Input
              style={inputStyle}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Input
              style={inputStyle}
              onChange={e => setPhone(e.target.value)}
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
            <Input
              style={inputStyle}
              onChange={e => setLocation(e.target.value)}
              type="text"
              name="location"
              placeholder="Your Location"
            />
            <TextArea
              style={textAreaStyle}
              onChange={e => setMessage(e.target.value)}
              name="message"
              placeholder="What would you like to order?"
            />
            {!name || !email || !phone || !location || !message ? (
              <Button size="large" disabled type="submit">
                Submit
              </Button>
            ) : (
              <StyledButton type="submit">Submit</StyledButton>
            )}
          </StyledForm>
        </FormContainer>
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
const ContactHeader = styled.h2`
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
const FormContainer = styled.section``

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`
const inputStyle = {
  padding: "1rem",
  margin: "1rem 0",
}
const textAreaStyle = {
  padding: "1rem",
  margin: "1rem 0",
  height: "200px",
}

const StyledButton = styled.button`
  margin-top: 1rem;
  background-color: #ffe4e4;
  border: none;
  padding: 1rem 2rem;
  color: #4a4a4a;
  font-family: "Poppins SemiBold";
  font-size: 1rem;
`
