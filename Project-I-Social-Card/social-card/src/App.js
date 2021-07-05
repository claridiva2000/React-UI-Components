import React from 'react';
import './App.css';
import Content from "./components/CardComponents/CardContent";
import Footer from "./components/FooterComponents/Footer"
import Header from "./components/HeaderComponents/HeaderContainer"
const App = () => {
  return (
    <div className="App">
    <a href="https://www.reactjs.org">
    <Header />
    <Content />
    </a>
    <Footer />
    </div>
  );
};


export default App;
