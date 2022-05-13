import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import emailjs from "emailjs-com";
import { useState } from "react";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
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

`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 65vh;
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
  @media (min-width:0px) and (max-width:400px){
    width: 60vw;
  height: 40vh;
}
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

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
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  margin-top:15px;
  margin-left:25px;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
 
`;

const Send = styled.button`
border-radius:5px;
border:2px solid black;
margin-left:8rem;
@media (min-width:0px) and (max-width:400px){
  margin-left:2rem;
}
`
const ResultTag = styled.p`
font-size:15px;
`


const Result = () => {
  return <ResultTag >Your message has been succesfully sent.<br/>i will contact you soon :)</ResultTag>;
};

const Contact = () => {
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
      <LogoComponent/>
      <Box>
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <p>pavithrasethuraman92@gmail.com</p>
          <p>8838647902</p>
          <Title>Contact Me</Title>
          <Description>
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
              <Send className="but" type="submit">
                Send
              </Send>
              </Description>
              {result ? <Result /> : null}{" "}
            </form>
          </Description>
          
        </Main>
        <BigTitle text="CONTACT" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default Contact;

// import './Contact.css'
// import emailjs from "emailjs-com";
// import { useState } from "react";
// import PowerButton from '../subComponents/PowerButton';
// import styled, { keyframes } from 'styled-components'
// import LogoComponent from '../subComponents/LogoComponent';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme } from './Themes';
// import ParticleComponent from '../subComponents/ParticleComponent';

// const Result = () => {
//   return <p className="mess">Your message has been succesfully sent.<br/>i will contact you soon :)</p>;
// };

// function Contact() {
//   const [result, showResult] = useState(false);
//   function sendEmail(e){
//     e.preventDefault();
//     emailjs.sendForm('service_f55edvm','template_0lwj2di',e.target,'_mAyVt0D-NBgQWdeN')
//     .then(res=>{
//       console.log(res);
//     }).catch(e=>{
//       console.error(e)
//     })
//     e.target.reset();
//     showResult(true);
//   }
//   const MainContainer = styled.div`
//   background: ${props => props.theme.body};
//   width: 100vw;
//   height: 100vh;
//   overflow:hidden;

//   position: relative;

//   h2,h3,h4,h5,h6{
//     font-family:'Karla', sans-serif ;
//     font-weight:500;
//   }
//   `
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <PowerButton/>
//       <ParticleComponent theme='light' />
//    <MainContainer>

//      <div className="contact" id="contact">
//       <div className="right">
//       <h2 className='conta'>Contact Me</h2>
//       <form className='contt' onSubmit={sendEmail}>
//         <input className='cont' type="text" name="name" placeholder="Enter Your Name" />
//         <input className='cont' type="email" name="user_email" placeholder="Enter Your Email" />
//         <textarea className='ta' name="message" placeholder="Your Message"></textarea>
//         <button className='but' type="submit">Send</button>
//         {result ? <Result /> : null}
//       </form>
//       </div>

//     </div>
//     </MainContainer>
//     </ThemeProvider>
//   );
// }

// export default Contact;
