import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Header } from './styles/styles'
import  Button  from './components/Button';

function App() {
  return (
  
    <>
      <GlobalStyles/>

      <Header>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

      </Header>

      
      

      <Button text="Inscreva-se"/>
      
    </>
  );
}

export default App;
