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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [images, setImages] = useState([]);

  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  const { products } = useContext(ProductContext);

  useEffect(() => {
    function getImages() {
      setImages(products.map(product => product.img_url));
    }
    getImages();
  }, [products]);

  useEffect(() => {
    if (images.length > 0) {
      startAutoSlide();
    }
    return () => clearInterval(intervalRef.current);
  }, [images]);

  function startAutoSlide() {
    clearInterval(intervalRef.current);
    if (images.length === 0) return;

    intervalRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % images.length;
      updateSlide(nextIndex, 'next');
    }, 3000);
  }

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

  function handlePrev() {
    clearInterval(intervalRef.current);
    const prevIndex =
      indexRef.current === 0 ? images.length - 1 : indexRef.current - 1;
    updateSlide(prevIndex, 'prev');
    startAutoSlide();
  }

  function handleNext() {
    clearInterval(intervalRef.current);
    const nextIndex = (indexRef.current + 1) % images.length;
    updateSlide(nextIndex, 'next');
    startAutoSlide();
  }

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Container>
      <TitleSection>
        <Title>Para você</Title>
      </TitleSection>

      <SliderContainer>
        <ActionGroup>
          <ActionButton onClick={handlePrev}>
            <ArrowBack />
          </ActionButton>
          <ActionButton onClick={handleNext}>
            <ArrowFront />
          </ActionButton>
        </ActionGroup>
        {images.map((src, index) => (
          <ImageSlider
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
