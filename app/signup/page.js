import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Header from '@/components/Header'
import Boarding from '@/components/Boarding'
import LoginCard from '@/components/LoginCard'
import TourCarousel from '@/components/TourCarousel'

export default function Home() {
  return (
    <div className={styles['background-image']}>
      <head>
        <title>ATC Login</title>
      </head>
      <Navbar/>
      <Header heading="Connect with ATC"/>
      <div className='d-flex justify-content-around'>
        <LoginCard login="Nah" />
        <Boarding boarding="" />
      </div>
    </div>
  )
}
