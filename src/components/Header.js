import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active" >홈</NavLink>
      <NavLink to="/about/NAME" className="item" activeClassName="active">소개</NavLink>
      <NavLink to="/user" className="item" activeClassName="active">사용자</NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
    </div>
  );
};

export default Header;