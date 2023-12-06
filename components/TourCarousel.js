import { Carousel } from 'react-bootstrap'

export default function TourCarousel(){
    return (
      <div>
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
      </div>
    )
  }