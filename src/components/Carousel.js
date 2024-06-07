import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const slides = [
        {
            tag: 'Cursos',
            title: 'Plataforma de cursos completa',
            description: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum'
        },
        {
            tag: 'Cursos',
            title: 'Aprenda com os melhores',
            description: 'Aprenda com profissionais renomados e melhore suas habilidades com cursos dinâmicos e interativos.'
        },
        {
            tag: 'Cursos',
            title: 'Certificação reconhecida',
            description: 'Obtenha certificações que são reconhecidas no mercado e aumente suas oportunidades de carreira.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCarousel = (direction) => {
        const totalSlides = slides.length;
        let newSlide = currentSlide + direction;
        if (newSlide >= totalSlides) newSlide = 0;
        if (newSlide < 0) newSlide = totalSlides - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                    >
                        <div className='tag-course'>{slide.tag}</div>
                        <h3>{slide.title}</h3>
                        <div className='info'>
                            <h4>{slide.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className='carousel-bar-horizontal'>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-bar-item ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
            <div className="carousel-navigation">
                <div className="carousel-arrow left-arrow" onClick={() => slideCarousel(-1)}></div>
                <div className="carousel-arrow right-arrow" onClick={() => slideCarousel(1)}></div>
            </div>
        </div>

    );

}
export default Carousel;
