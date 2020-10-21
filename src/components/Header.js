import React from 'react';
import '../styles/header.scss';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}
