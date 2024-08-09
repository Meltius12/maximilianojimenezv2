import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Matrix from '../img/Matrix.png';
import Pancho from '../img/Pancho.png';
import Perros from '../img/Perros.png';
import '../App.css';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}

    >
      <Carousel.Item>
        <img src={Matrix} alt="" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Pancho} alt="" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Perros} alt="" fluid  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;