'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

export default function Slider({state}:any){  
    let{content = []} = state
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeInUp, setFadeInUp] = useState("");
    const handleSlideChange = (swiper: any) => {
      setActiveIndex(swiper.activeIndex);
      setFadeInUp(""); // Temporarily clear the class to retrigger animation
      setTimeout(() => {
  
        setFadeInUp("fadeInUp");
  
      }, 500);
    };
    useEffect(() => {
      setFadeInUp("fadeInUp");
    }, []);
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next-arrow",
          prevEl: ".prev-arrow",
        }}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        effect="fade"
      >
        {content.map((slide: any, index: any) => {
          const { images = [] } = slide;
          const img_url = images.find((item: any) => item?.imageCategory === "detailsPageBackground");

          return (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <img
                  className="image-container"
                  src={img_url.imageUrl[0]}
                  alt=""
                />
                <div className="swiper-splider-content">
                  <div className="row align-items-center h-100 ">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <h3 className={`animated animatedFadeInUp ${activeIndex === index ? "fadeInUp" : ""}`}>
                        <span className="badge bg-warning text-dark">New</span>
                      </h3>
                      <h1 className={`animated animatedFadeInUp ${activeIndex === index ? "fadeInUp" : ""}`}>
                        {slide.name}
                      </h1>
                      <div
                        className={`slide-info animated animatedFadeInUp ${activeIndex === index ? "fadeInUp" : ""}`}
                      >
                        <span>2021</span> <span className="radius">+18</span>{" "}
                        <span>2h 6m</span>
                      </div>
                      <p className={`animated animatedFadeInUp ${activeIndex === index ? "fadeInUp" : ""}`}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div
                        className={`slider-buttons d-flex align-items-center animated animatedFadeInUp ${activeIndex === index ? "fadeInUp" : ""}`}
                      >
                        <a
                          className="btn hvr-sweep-to-right"
                          href="watch-movie.html"
                        >
                          <i className="fa fa-play mr-2"></i>Play Now
                        </a>
                        <a className="btn hvr-sweep-to-right" href="/detail">
                          <i className="fas fa-plus mr-2"></i>My List
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
        })
        }
        <i className="next-arrow fas fa-chevron-right"></i>
        <i className="prev-arrow fas fa-chevron-left"></i>
      </Swiper>
    )
}