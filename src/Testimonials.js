import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { setTestimonials } from './TestimonialsSlice';
import testimonialsData from './TestimonialsData.json';
import face1 from './assets/Images/testimonial_face01.png';

const Testimonials = () => {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  console.log(testimonials);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    dispatch(setTestimonials(testimonialsData));
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '410px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '250px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '150px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonials">
        <h2 className="heading">
          Kind words <br /> <span>from our clients</span>
        </h2>
      </div>

      <div className="tesmar">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="test">
              <div className="quotes">
                <blockquote>{testimonial.testimonial}</blockquote>
              </div>

              <div className="text-center">
                <img src={require(`./assets/Images/${testimonial.image}`)} alt="Testimonial Face" style={{ margin: '64px auto 16px' }} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
