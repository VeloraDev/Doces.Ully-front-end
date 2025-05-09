import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  TitleContainer,
  SliderContainer,
  Image,
  BtnContainer,
  Line,
} from './styles';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import ArrowFront from '../../assets/icons/arrow-front.svg';

import Bolo1 from '../../assets/images/bolo-de-pote-2.png';
import Bolo2 from '../../assets/images/bolo-de-pote.png';

const images = [Bolo1, Bolo2, Bolo1, Bolo2];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  function startAutoSlide() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % images.length;
      updateSlide(nextIndex, 'next');
    }, 3000);
  }

  // Atualiza o slide com direção e sincroniza os dois estados
  function updateSlide(newIndex, dir) {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(dir);
    setCurrentIndex(newIndex);
    indexRef.current = newIndex;

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }

  // Botão "anterior"
  function handlePrev() {
    clearInterval(intervalRef.current);
    const prevIndex =
      indexRef.current === 0 ? images.length - 1 : indexRef.current - 1;
    updateSlide(prevIndex, 'prev');
    startAutoSlide(); // Reinicia o slider com base no novo index
  }

  // Botão "próximo"
  function handleNext() {
    clearInterval(intervalRef.current);
    const nextIndex = (indexRef.current + 1) % images.length;
    updateSlide(nextIndex, 'next');
    startAutoSlide(); // Reinicia o slider com base no novo index
  }

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // limpeza
  }, [intervalRef]);

  return (
    <Container>
      <TitleContainer>
        <h1>Para você</h1>
      </TitleContainer>
      <SliderContainer>
        <BtnContainer>
          <button onClick={handlePrev}>
            <img src={ArrowBack} />
          </button>
          <button onClick={handleNext}>
            <img src={ArrowFront} />
          </button>
        </BtnContainer>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`slide-${index}`}
            $active={index === currentIndex ? true : false}
            $animation={
              index === currentIndex
                ? 'in'
                : index === (currentIndex - 1 + images.length) % images.length
                  ? 'out'
                  : ''
            }
            $direction={direction}
          />
        ))}
      </SliderContainer>
      <Line />
    </Container>
  );
}

export default Slider;
