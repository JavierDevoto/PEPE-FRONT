import React from 'react';
import '../styles/menu.scss';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="container-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
