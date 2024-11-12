import React from 'react';
import './App.css';
import TextToImageGenerator from './components/TextToImageGenerator'; 
import "@fontsource/poppins";
import Header from './components/Header';
import FooterLow from './components/FooterLow';
import AuthComponent from './components/AuthComponent';


function App() {
  return (
    <div className="App">
     <div>
      <Header />
     
       </div>
       <AuthComponent />
      <main className="p-4">
        <TextToImageGenerator />
      </main>
   <FooterLow />
    </div>
  );
}

export default App;
