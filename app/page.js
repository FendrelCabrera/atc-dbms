'use client'
// import LoginPage from './components/loginPage';
import Display from './components/homePage';

import { createContext, useState } from 'react'
import UserPage from './user/userPage';
import LoginPage from './login/loginPage';
import AdminPage from './admin/adminPage';

const Auth = createContext();

export default function Home() {
  const [user, setUser] = useState(-3);

  return (
    <Auth.Provider value={{user, setUser}}>
      <Display />
      <LoginPage />  
      <AdminPage />
      <UserPage />
    </Auth.Provider>
  )
}

export { Auth }

