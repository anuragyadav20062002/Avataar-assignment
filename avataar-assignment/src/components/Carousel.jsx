import React,{useState} from 'react';
import './carousel.css'; // Import your CSS file for styling
import { CarouselData } from './CarouselData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ({slides}) => {
 const [current,setCUrrent] = useState(0);
 const length = slides.length

 const nextSlide = ()=>{
  setCUrrent(current === length-1 ? 0 : current+1);
 }
 const prevSlide = ()=>{
  setCUrrent(current === length-1 ? 0 : current-1);
 }
//  console.log(current)

 if(!Array.isArray(slides) || slides.length <=0){
  return null
 }


  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow'onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return(
          <div className={index===current? 'slide active':'slide'} 
          key={index}>
            {index=== current && (<img  
        src={slide.image} 
        alt={`Slide ${index + 1}`} 
        className='image'
        />  )}
         
          </div>
        )
        
        })}
    </section>
  );
};

export default Carousel;
