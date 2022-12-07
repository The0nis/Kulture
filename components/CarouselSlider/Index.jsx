import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import style from './carouselSlider.module.css';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import three from './assets/three.jpg';
import four from './assets/four.jpg';
import five from './assets/five.jpg';
import six from '../CarouselSlider/assets/six.jpg';
import Image from 'next/image';

function CarouselSlider() {


  const data = [
    {
      src: one,
      caption: 'San Francisco',
      producer: '@Zojaman',
      alternate: 'first producer',
    },
    {
      src: two,
      caption: 'Scotland',
      producer: '@Odiri',
      alternate: 'second producer',
    },
    {
      src: three,
      caption: 'Darjeeling',
      producer: '@Andrew',
      alternate: 'Third producer',
    },
    {
      src: four,
      caption: 'San Francisco',
      producer: '@monitech',
      alternate: 'Fourth producer',
    },
    {
      src: five,
      caption: 'Scotland',
      producer: '@emmeyz',
      alternate: 'fifth producer',
    },
    {
      src: six,
      caption: 'Darjeeling',
      producer: '@ZojaAkpamuman',
      alternate: 'sixth producer',
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.carousel_body}>
        <div className={style.header}>
          <h5>Popular Uploads</h5>
        </div>
        <Splide
            aria-label="My Favorite Images"
            options={ {
              perPage: 4,
              height : '10rem',
              rewind : true,
              gap: '1rem',
              autoplay     : true,
              pauseOnHover : false,
              resetProgress: false,
              type         : 'loop',
              cover       : true,
              arrows: 'slider',
              arrows: false,
              start: 0,
              focus       : 'center',
              breakpoints: {
                300: {
                  perPage: 1.1,
            
                },
                500: {
                  perPage: 2,
            
                },
                550: {
                  perPage: 2,
            
                },
                600: {
                  perPage: 2,
            
                },
                610: {
                  perPage: 2,
            
                },
                622: {
                  perPage: 3,
            
                },
                 640: {
                  perPage: 4,
            
                },
                767: {
                  perPage: 2,
              
                },
                1024: {
                  perPage: 3,
                 
                },
              },
              focus: "center",
              gap: '2em',
              updateOnMove : true,
              pagination: false,
              } }
              className={style.splider_wrapper}
          >
        {data.map((item, idx) => (
         
            <SplideSlide key={idx} className={style.splider_image}>
              <Image src={item.src} alt={item.alternate} />
              <div className={style.carosel_content}>
                <p>{item.caption}</p>
                <h5>{item.producer}</h5>
              </div>
            </SplideSlide>
        ))}
           </Splide>
      </div>
    </div>
  );
}

export default CarouselSlider;
