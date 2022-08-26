import React from 'react';
// import './App.css';
import { GlobalStyles } from './styles/globalstyles'
import { Header } from './styles/styles'
import  Button  from './components/Button';

function App() {
  return (
  
    <>
      <GlobalStyles/>

      <Header>
        <h1>Hello World</h1>

      </Header>

      
      

      <Button text="Inscreva-se"/>
      
    </>
  );
}

export default App;
