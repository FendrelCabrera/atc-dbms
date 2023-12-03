import React from 'react';
import styles from './navbar.module.css';

export default function Navbar(){
  return (
    <div>
      <nav className="navbar sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            <img src="/atclogowhite.png" alt="Logo" width="30" height="30"></img>
          </a>
          <a className={styles['navbartext']}>Air Traffic Control</a>
          <a href='/login'>
            <button className="btn btn-dark btn-outline-warning">Login</button>
          </a>
        </div>
      </nav>
    </div>
  );
};
