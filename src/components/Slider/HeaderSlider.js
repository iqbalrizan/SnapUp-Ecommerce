import React from 'react'
import "./HeaderSlider.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/slider_img_1.jpg"
import slider2 from "../../assets/slider_img_2.jpg"
import slider3 from "../../assets/slider3.jpg"
import slider5 from "../../assets/slider5.png"


const HeaderSlider = () => {

    var settings = {
        autoplay: true,
    autoplaySpeed: 3000,
    arrow : true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='slider'>
      <div className='container'>
        <div className="wrapperslider">
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src = {slider1} alt = "" />
            </div>
            <div className='slider-item'>
              <img src = {slider2} alt = "" />
            </div>
          </Slider>
        </div>
        <div className="sliderimage">
            <img src={slider3} alt="" />
            <img src={slider5} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider