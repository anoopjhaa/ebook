import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/carousel1.webp'
import img2 from '../assets/carousel2.webp'
import img3 from '../assets/carousel3.webp'

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img1}
          style={{ height: '60vh' }}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img2}
          style={{ height: '60vh' }}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={img3}
          style={{ height: '60vh' }}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MainCarousel
