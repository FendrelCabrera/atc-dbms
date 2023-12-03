'use client'
import LoginPage from './components/loginPage';
import Display from './components/homePage';

import { createContext, useState } from 'react'

const Auth = createContext();

export default function Home() {
  const [user, setUser] = useState(-3);

  return (
    <Auth.Provider value={{user, setUser}}>
      <Display />
      <LoginPage />  
    </Auth.Provider>
  )
}

export { Auth }

