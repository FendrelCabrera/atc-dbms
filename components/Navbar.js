import React from 'react';
import styles from './navbar.module.css';

export default function Navbar(){
  return (
    <div>
      <head>
        <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
      </head>
      <nav class="navbar sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href='/'>
            <img src="/atclogowhite.png" alt="Logo" width="30" height="30"></img>
          </a>
          <a class="navbar-text" className={styles['navbartext']}>Air Traffic Control</a>
          <a href='/login'>
            <button class="btn btn-dark btn-outline-warning">Login</button>
          </a>
          
        </div>
      </nav>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
