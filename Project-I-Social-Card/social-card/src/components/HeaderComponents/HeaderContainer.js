import React from 'react';
import './Header.css';
import Thumbnail from './ImageThumbnail';
import HeaderCont from './HeaderContent';

const Header = () => {
  return (
    <div className="Header">
  <Thumbnail />
  <HeaderCont />
  </div>
  );
};


export default Header;