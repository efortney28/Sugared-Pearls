import React, { useState } from "react"
import styled from "styled-components"
import { Input, message } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  const { TextArea } = Input

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = () => {}

  return (
    <Layout>
      <SEO title="Contact Us - Sugared Pearls Bake Shoppe" />
      <PageContainer>
        <ContactHeader>
          Sugared Pearls | <RedText>Contact Us</RedText>
        </ContactHeader>
        <PageDescription>
          Need something custom? Not sure if we deliver to your area? Have some
          other question? Well contact us and let us help you with whatever you
          may need!
        </PageDescription>
        <FormContainer>
          <StyledForm
            id="contact-form"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/"
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
            <TextArea
              style={textAreaStyle}
              onChange={e => setMessage(e.target.value)}
              name="message"
              placeholder="How can we help you?"
            />
            <StyledButton type="submit" onClick={handleSubmit}>
              Submit
            </StyledButton>
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
  background-color: #ff7c7c;
  border: none;
  padding: 1rem 2rem;
  color: #fefefe;
  font-family: "Poppins SemiBold";
  font-size: 1rem;
`
