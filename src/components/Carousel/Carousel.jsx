import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Carousel.scss";
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import img1 from "../../assets/carousel-5.webp"
import img2 from "../../assets/carousel-1.webp"
import img3 from "../../assets/carousel-2.webp"
import img4 from "../../assets/carousel-3.webp"
import img5 from "../../assets/carousel-4.webp"

const Carousel = () => {

  return (
    <section className='carousel'>
        <div className="container">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel__item">
            <div className="carousel__text">
                <h2>55 years of inovation, <br /> a week of wonder</h2>
                <p>Celebrate Samsung's 55<sup>th</sup> anniversary with our newest products</p>
                <div className="carousel__btns">
                    <button className='btn__one'>Learn More</button>
                    <button className='btn__two'>Shop Now</button>
                </div>
            </div>
            <div className="carousel__img">
                <img src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel__item">
            <div className="carousel__text">
                <h4>Save up to $1,400</h4>
                <h2>Our brightest idea</h2>
                <p>Save $1,400 off a 85"Class Samsung Neo QLED 4K QN85D and experience the brightness of Quantum Matrix with Mini LEDs. Enjoy savings during Samsung Week to celebrate our 55<sup>th</sup> anniversary</p>
                <div className="carousel__btns">
                    <button className='btn__two'>Shop Now</button>
                </div>
            </div>
            <div className="carousel__img">
                <img src={img2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel__item">
            <div className="carousel__text">
                <h4>Save up to $1,05+</h4>
                <h2>Epic savings, your way</h2>
                <p>Get to $750 instant trade-in<sup>0</sup>  or up to $350 without trade-in<sup>B</sup>  towards <br /> Galaxy S24 Ultra. Plus, get double the storage on us<sup>Ω</sup>  and up to 30% off <br /> Galaxy Watch Ultra with purchase.<sup>±</sup></p>
                <div className="carousel__btns">
                    <button className='btn__two'>Shop Now</button>
                </div>
            </div>
            <div className="carousel__img">
                <img src={img3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel__item">
            <div className="carousel__text">
                <h4>Save up to $945</h4>
                <h2>Unleash epic new <br /> possibilities</h2>
                <p>Get up to $650 trade-in credit<sup>0</sup> towards Galaxy Z Flip6 or up to <br /> $150 off without trade-in<sup>Π</sup>   Plus, get $100 off select colors and <br /> 30% off Galaxy Watch Ultra.<sup>±</sup></p>
                <div className="carousel__btns">
                    <button className='btn__two'>Shop Now</button>
                </div>
            </div>
            <div className="carousel__img">
                <img src={img4} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel__item">
            <div className="carousel__text">
                <h4>Save up to $1,100</h4>
                <h2>Upgrade to the perfect<br /> laundry duo</h2>
                <p>Get up to $900 off select laundry sets. Plus, receive $200 Samsung Credit<sup>o</sup>  and more.</p>
                <div className="carousel__btns">
                    <button className='btn__two'>Shop Now</button>
                </div>
            </div>
            <div className="carousel__img">
                <img src={img5} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>

    </section>
  )
}

export default Carousel