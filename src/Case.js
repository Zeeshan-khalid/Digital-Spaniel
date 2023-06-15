import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/Images/carousel1.png';
import image2 from './assets/Images/carousel1.png';
import image3 from './assets/Images/carousel1.png';

function Case() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerMode: true,
    centerPadding: '250px', // Adjust the value as needed
  };

  const images = [image1, image2, image3];

  return (
    <div className="case">
      <div className="text-center head">
        <h2>Case Studies</h2>
        <p>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.</p>
      </div>


      <h1 className='text-center text-[red] text-[24px]'>In progress....</h1>

      {/* <div className="image-slider">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
              <div>aomw rwzf</div>
            </div>
          ))}
        </Slider>

        <div className="slider-arrows">
          <button onClick={prevSlide}>
            Previous
          </button>
          <button onClick={nextSlide}>
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Case;
