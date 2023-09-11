/* import React from 'react';
import '../styles/carousel.css';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import htmlImage from '../assets/testes/html.png';
import cssImage from '../assets/testes/css.png';
import javascriptImage from '../assets/testes/JavaScript.png';
import reactImage from '../assets/testes/React.png';

function Carousel() {
    const data = [
        { id: '1', image: htmlImage },
        { id: '2', image: cssImage },
        { id: '3', image: javascriptImage },
        { id: '4', image: reactImage },
    ];

    return  (
        <div className="carousel">
            <h1 style={{color: '#fff'}} className="title">hola</h1>

            <Swiper slidesPerView={1}
                    pagination={{clickable: true}}
                    navigation>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt="certificação" 
                        className='slide-item'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel; */