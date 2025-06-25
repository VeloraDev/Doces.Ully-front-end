import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  Container,
  TitleSection,
  Title,
  SliderContainer,
  ImageSlider,
  ActionGroup,
  ActionButton,
} from './styles';

import { ProductContext } from '../../hooks/contextprovider';
import { Line } from '../../styles/ComponentsStyles';
import { ArrowBack, ArrowFront } from '../../assets/index';

function Slider() {
  const { products } = useContext(ProductContext);
  const images = products.map(p => p.img_url);
  const len = images.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  const performSlide = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setPrevIndex(indexRef.current);
    setCurrentIndex(newIndex);
    indexRef.current = newIndex;
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    if (len <= 1) return;
    intervalRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % len;
      performSlide(nextIndex, 'next');
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [len]);

  const handlePrev = () => {
    if (len <= 1 || isAnimating) return;
    clearInterval(intervalRef.current);
    const newIndex = indexRef.current === 0 ? len - 1 : indexRef.current - 1;
    performSlide(newIndex, 'prev');
    startAutoSlide();
  };

  const handleNext = () => {
    if (len <= 1 || isAnimating) return;
    clearInterval(intervalRef.current);
    const newIndex = (indexRef.current + 1) % len;
    performSlide(newIndex, 'next');
    startAutoSlide();
  };

  return (
    <Container>
      <TitleSection>
        <Title>Para você</Title>
      </TitleSection>

      <SliderContainer>
        <ActionGroup>
          <ActionButton onClick={handlePrev} disabled={isAnimating}>
            <ArrowBack />
          </ActionButton>
          <ActionButton onClick={handleNext} disabled={isAnimating}>
            <ArrowFront />
          </ActionButton>
        </ActionGroup>

        {images.map((src, index) => {
          let anim = '';
          if (index === currentIndex) anim = 'in';
          else if (index === prevIndex) anim = 'out';

          return (
            <ImageSlider
              key={index}
              src={src}
              alt={`slide-${index}`}
              $active={index === currentIndex}
              $animation={anim}
              $direction={direction}
              onAnimationEnd={() => setIsAnimating(false)}
            />
          );
        })}
      </SliderContainer>
      <Line />
    </Container>
  );
}

export default Slider;
