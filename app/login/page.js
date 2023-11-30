import styles from './page.module.css'
import Navbar from "../../components/Navbar"
import Header from '../../components/Header'
import LoginCard from '../../components/LoginCard'

export default function Home() {
  return (
    <div className={styles['background-image']}>
      <head>
        <title>ATC Login</title>
      </head>
      <Navbar/>
      <Header heading="Connect with ATC"/>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <LoginCard login="Nah" />
        <LoginCard login="Ye" />
      </div>
    </div>
  )
}
