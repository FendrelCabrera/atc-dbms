import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Header from '@/components/Header'
import Boarding from '@/components/Boarding'
import UserCard from '@/components/UserCard'
import { useContext } from 'react'
import { Auth } from '../page'

export default function UserPage() {
  const { user } = useContext(Auth)

  if(user < 0)
    return null;

  return (
    <div>
      <Navbar/>
      <div className={styles['background-image']}>
        <Header heading="Connect with ATC"/>
        <div className='d-flex justify-content-around'>
          <Boarding boarding="" />
          <UserCard />
        </div>
      </div>
    </div>
  )
}
