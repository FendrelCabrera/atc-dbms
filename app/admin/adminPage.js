import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Header from '@/components/Header'
import Card from '@/components/Card'
import RouteCard from '@/components/RouteCard'
import RunwayCard from '@/components/RunwayCard'
import { useContext } from 'react'
import { Auth } from '../page'

export default function AdminPage() {
  const { user } = useContext(Auth)

  if(user != -1)
    return null;
  
  return (
    <div className={styles['background-image']}>
      <Navbar/>
      <Header heading="Admin Page"/>
      <div className="container">
        <div className="d-flex justify-content-between">
        <RunwayCard title="Runways" description="Manage the status of the airport runways" image="/runway.png" main="Runway" tab="Add" othertab="Update" type="runway" />
        <Card title="Flights" description="Add or remove flights from current airport fleet" image="/flight.png" main="Flights" tab="Add" othertab="Remove" type="flight"/>
        <RouteCard title="Routes" description="Schedule flights for their departure and arrival" image="/routes.png" main="Routes" tab="Add" othertab="Remove" type="route"/>
        </div>
      </div>
    </div>
  )
}