import styles from './page.module.css'
import Navbar from "../components/Navbar"
import Header from '../components/Header'
import Boarding from '../components/Boarding'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles['background-image']}>
      <head>
        <title>ATC</title>
      </head>
      <Navbar/>
      <Header heading="Welcome to CCJ"/>
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <Boarding boarding="EK374 8:00 9:30 DAMMAM"/>
      <Card title="ATC" description="We strive to make our airport a haven for travellers" image="/routes.png" main="Airport" tab="Airlines" othertab="Destinations"/>
      </div>
    </div>
  )
}
