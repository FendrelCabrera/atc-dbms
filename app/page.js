'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import LoginPage from './components/loginPage';
import { createContext, useState } from 'react'
import UserPage from './components/userPage';

const Auth = createContext();

export default function Home() {
  const [user, setUser] = useState(0);

  return (
    <Auth.Provider value={{user, setUser}}>
      <LoginPage />  
      <UserPage />
    </Auth.Provider>
  )
}

export { Auth }

