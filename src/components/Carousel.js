import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCarousel = (direction) => {
        const totalSlides = document.querySelectorAll('.carousel-item').length;
        let newSlide = currentSlide + direction;
        if (newSlide >= totalSlides) newSlide = 0;
        if (newSlide < 0) newSlide = totalSlides - 1;
        setCurrentSlide(newSlide);
    };

    useEffect(() => {
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.carousel-bar-item');
        items.forEach((item, index) => {
            item.classList.remove('active');
            dots[index].classList.remove('active');
            if (index === currentSlide) {
                item.classList.add('active');
                dots[index].classList.add('active');
            }
        });
    }, [currentSlide]);

    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <div className='tag-course'>Cursos</div>
                    <h3>Plataforma de cursos completa</h3>
                    <div className='info'>
                        <h4>
                            Lorem ipsum nisl etiam himenaeos ligula augue
                            vehicula gravida tincidunt, etiam magna sapien gravida sodales
                            sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere
                            donec aptent. orci vivamus primis fusce lacinia libero nostra
                            aliquam vestibulum
                        </h4>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='tag-course'>Cursos</div>
                    <h3>Aprenda com os melhores</h3>
                    <div className='info'>
                        <h4>
                            Aprenda com profissionais renomados e melhore suas habilidades com cursos dinâmicos e interativos.
                        </h4>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='tag-course'>Cursos</div>
                    <h3>Certificação reconhecida</h3>
                    <div className='info'>
                        <h4>
                            Obtenha certificações que são reconhecidas no mercado e aumente suas oportunidades de carreira.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='carousel-bar-horizontal'>
                <div className='carousel-bar-item active'></div>
                <div className='carousel-bar-item'></div>
                <div className='carousel-bar-item'></div>
            </div>
            <div className="carousel-navigation">
                <div className="carousel-arrow left-arrow" onClick={() => slideCarousel(-1)}></div>
                <div className="carousel-arrow right-arrow active" onClick={() => slideCarousel(1)}></div>
            </div>
        </div>


    );

}
export default Carousel;
