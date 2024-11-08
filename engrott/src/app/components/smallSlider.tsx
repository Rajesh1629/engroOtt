'use client'
import React, { useEffect, useState } from "react";

export default function SmallSlider({state}:any){
    const posterData = state.content || [];
  const [currentIndex, setCurrentIndex] = useState({
    slider_1: 0,
    bigSlider: 0,
  });

  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const totalSlides = posterData.length;
  const totalDashes = Math.ceil(totalSlides / slidesToShow);
    return(
        <div className="slider-container">
          <h2>{state.name||''}</h2>
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${currentIndex.slider_1 * (100 / slidesToShow)
                }%)`,
            }}
          >
            {posterData.map((slide: any, index: any) => {
              const { images = [] } = slide;
              const img_url = images?.find((item: any) => item?.imageCategory === "posterImage");
              return (
                <div className="slide" key={index}>
                  <div className="lazy_image">
                    <a href="/detail">
                      <img src={img_url.imageUrl[0]} width="100%" height="100%" alt="posterImage" />
                    </a>
                  </div>
                  <div className="caption">
                    <h3>{slide?.name || ''}</h3>
                    <p>{slide?.info || ''}</p>
                  </div>
                </div>)
            })}
          </div>
        </div>
        <div className="slider-buttons">
          {Array.from({ length: totalDashes }).map((_, index) => (
            <span
              key={index}
              className={`slider-dash ${currentIndex.slider_1 === index ? "active" : ""
                }`}
              onClick={() =>
                setCurrentIndex((prev) => ({ ...prev, slider_1: index }))
              }
            >
              —
            </span>
          ))}
        </div>
      </div>
    )
}