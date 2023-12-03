import React, { useContext } from 'react'
import styles from './homepage.module.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Boarding from '@/components/Boarding'
import Card from '@/components/Card'
import { Auth } from '../page'
import { Carousel } from 'react-bootstrap'


export default function Display() {
  const { user } = useContext(Auth);

    if(user != -3)
        return null;

  return (
    <div>
      
      <Navbar/>
    <div className="container-fluid vh-100" style={{backgroundImage: "url('/airportbg.jpg')", backgroundSize: "cover", backgroundPosition: "center",  height: "100vh"}}>
      <Header heading="Welcome to CCJ"/>
      <div className='row justify-content-center'>
        <Boarding boarding=""/>
        <TourCarousel />
      </div>
    </div>
    </div>
  )
}

const TourCarousel = () => {
  return (
    <Carousel className='col-md-6'>
      <Carousel.Item>
      <img class="d-block w-100" src="/dubai.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="/bangalore.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="/calicut.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}