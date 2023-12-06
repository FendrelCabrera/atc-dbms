import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Header from '@/components/Header'
import Boarding from '@/components/Boarding'
import LoginCard from '@/components/LoginCard'
import { Auth } from '../page'
import { useContext } from 'react'

export default function LoginPage() {
  const { user } = useContext(Auth)
  if(user != -2) 
    return null;

  return (
    <div className={styles['background-image']}>
      <Navbar/>
      <Header heading="Connect with ATC"/>
      <div className='d-flex justify-content-around'>
        <Boarding boarding="" />
        <LoginCard login="Ye" />
      </div>
    </div>
  )
}
