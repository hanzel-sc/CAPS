import React from 'react';
import Header from './Components/header';
import Footer from './Components/Footer';
import Mainstuff from './Components/main';
import CardSection from './Components/cardsection';
import Events from './Components/events';
import './App.css';


function App() {
  return (
    <div className="app-content">
      <Header/>
      <main className="main-content">
        <Mainstuff/>
        <CardSection/>
        <Events/>  
      </main>
      <Footer/>  
     
    </div>
  );
}

export default App;
