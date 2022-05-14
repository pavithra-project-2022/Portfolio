import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import emailjs from "emailjs-com";
import { useState } from "react";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 0px) and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (min-width: 0px) and (max-width: 770px) {
    width: 40vw;
    height: 40vh;
    margin-left: 4rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4em + 1vw);
  padding: 10px 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }


  input,
  textarea,button {
    margin-left: 6rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 0px) and (max-width: 770px) {
    input,
    textarea,button {
      margin-left: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;
const Descriptionn = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4em + 1vw);
  padding: 10px 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }


 
  @media (min-width: 0px) and (max-width: 770px) {
    
  }
`;

const ResultTag = styled.p`
font-size:15px;
margin-left:4rem;
@media (min-width: 0px) and (max-width: 770px) {
    font-size:10px;
    margin-left:1rem;
  }
`

const Result = () => {
    return <ResultTag >Your message has been succesfully sent.<br/>i will contact you soon :)</ResultTag>;
  };
  

const ContactInfo = () => {
    const [result, showResult] = useState(false);
    function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm('service_f55edvm','template_0lwj2di',e.target,'_mAyVt0D-NBgQWdeN')
      .then(res=>{
        console.log(res);
      }).catch(e=>{
        console.error(e)
      })
      e.target.reset();
      showResult(true);
    }
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>Contact Me</Title>

        
            <form  onSubmit={sendEmail}>
            <Description>
              <input
               
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
               </Description>
               <Description>
              <input
               
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
              />
               </Description>
               <Description>
              <textarea
               
                name="message"
                placeholder="Your Message"
              ></textarea>
               </Description><Description>
              <button className="but" type="submit">
                Send
              </button>
              </Description>
              {result ? <Result /> : null}{" "}
            </form>
         
        </Main>
        <Main>
          <Title>
            Contact Details
          </Title>
          <Descriptionn >
           Email:<br/>pavithrasethuraman92@gmail.com<br/>
           Cell:<br/>91-8838647902
          </Descriptionn>
          <Descriptionn>
           
          </Descriptionn>
          <Descriptionn>
           
          </Descriptionn>
        </Main>

        <BigTitle text="CONTACT" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default ContactInfo;
