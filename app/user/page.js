import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Header from '@/components/Header'
import Boarding from '@/components/Boarding'
import UserCard from '@/components/UserCard'

export default function Home() {
  return (
    <div className={styles['background-image']}>
      <head>
        <title>ATC Login</title>
      </head>
      <Navbar/>
      <Header heading="Connect with ATC"/>
      <div className='d-flex justify-content-around'>
        <Boarding boarding="" />
        <UserCard />
      </div>
    </div>
  )
}
