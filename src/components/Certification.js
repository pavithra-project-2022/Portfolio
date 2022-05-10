import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;

`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.2rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media (min-width:0px) and (max-width:770px){
    padding: 1rem;
    width: 50vw;
    height: 30vh;
    left: calc(5rem + 5vw);
   }
`
const MainSide =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  right: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media (min-width:0px) and (max-width:770px){
    padding: 1rem;
    width: 50vw;
    height: 25vh;
    left: calc(5rem + 5vw);
    top:25rem;
   }
`





const Certification = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        
<Box>
<LogoComponent theme='dark'/>
          <SocialIcons theme='dark'/>
<PowerButton />

<ParticleComponent theme='dark' />

       
        <Main>
        <h3>Certification Course</h3><br/>
        <p>* Certification Course completed of FULL STACK DEVELOPMENT with a First class in April 2022 in Guvi Geek Network Private Limited affiliated by IIT Madras and IIM .</p><br/>
        <p>* Certification completed in DOTNET TECHNOLOGY  Specialized in following areas(accord info matrix in  2013) (C#.NET,ASP.NET,AJAX ,SILVERLIGHT).</p><br/>
        <p>* Certification Course completed of Human Resource  Management with a First class in April 2010.</p>
        </Main>

        <MainSide>
            <h3>Educational Details</h3><br/>
            <p>* B.Sc CS  --- 85%</p><br/>
            <p>* HSC  --- 77.5%</p><br/>
            <p>* SSLC  --- 72.2%</p><br/>
       </MainSide>


        </Box>

        </ThemeProvider>
        
    )
}

export default Certification
