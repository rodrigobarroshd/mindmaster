import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Header, Logo, HeaderMain, Tittle, Subtitle } from './styles/styles'
import  Button  from './components/Button';

function App() {
  return (
  
    <>
      <GlobalStyles/>

      <Header>
      <Logo>
        <img src="/images/logo_mindmaster.webp" alt="" />
      </Logo>

      </Header>

      <HeaderMain>
        <p>PENSAMENTO COMPUTACIONAL</p>
        <Tittle>
          MindMaster - Computational Thinking <span>.</span>
        </Tittle>

        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Subtitle>

      </HeaderMain>

      
      

      <Button text="Inscreva-se"/>
      
    </>
  );
}

export default App;
