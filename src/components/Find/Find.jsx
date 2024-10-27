import React from 'react'
import "./Find.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar } from 'swiper/modules';
import img1 from "../../assets/card-1.webp"
import img2 from "../../assets/card-2.webp"
import img3 from "../../assets/card-3.webp"
import img4 from "../../assets/card-4.webp"
import img5 from "../../assets/card-5.avif"
import img6 from "../../assets/card-6.webp"
import img7 from "../../assets/card-7.webp"
import img8 from "../../assets/card-8.avif"

const Find = () => {
  return (
    <section className="find">
        <div className="container">
            <h3>Find just what you are looking for</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={3}
                scrollbar={{
                    hide: true,
                }}
                modules={[Pagination, Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Holiday Gift Guide</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>New Samsung releasess</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>The latest Galaxy smartphones</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Industry-leading TVs</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Essential home appliances</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img6} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Cutting-edge laptops and tablets</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img7} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Monitors amd memory for unlimited gaming</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__img">
                            <img src={img8} alt="" />
                        </div>
                        <div className="card__title">
                            <h2>Must-have accessories</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Find