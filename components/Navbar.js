import React, { useContext } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Auth } from '@/app/page';

export default function Navbar(){
  const { user, setUser } = useContext(Auth)


  return (
      <nav className="navbar sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            <Image src='/atclogowhite.png' width={30} height={30} href="/" alt='Logo'/>
          </Link>
          {/* <a className="navbar-brand" href='/'>
            <img src="/atclogowhite.png" alt="Logo" width="30" height="30"></img>
          </a> */}
          <a className={styles['navbartext']}>Air Traffic Control</a>

          {
            user < -1 ? 
            (<button className="btn btn-dark btn-outline-warning" onClick={() => setUser(-2)}>Login</button>):
            (<button className="btn btn-dark btn-outline-warning" onClick={() => setUser(-3)}>Logout</button>)
          }
        </div>
      </nav>
    
  );
};
