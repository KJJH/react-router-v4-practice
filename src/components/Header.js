import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="item">홈</Link>
      <Link to="/about/NAME" className="item">소개</Link>
      <Link to="/user" className="item">사용자</Link>
      <Link to="/posts" className="item">포스트</Link>
    </div>
  );
};

export default Header;