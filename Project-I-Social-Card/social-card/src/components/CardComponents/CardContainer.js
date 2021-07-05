import React from 'react';
import './Card.css';

import Content from "./components/CardComponents/CardContent";
import Footer from "./components/FooterComponents/Footer"

const CardContainer = () => {
  return (
    <div className="CardContainer">
    <Content />
    <Footer />
    </div>
  );
};


export default CardContainer;