'use client'
import React, { useEffect, useState } from "react";

export default function({state}:any){
    const posterData = state.content ||[];
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
    const goToPrevious = () => {
        setCurrentIndex((prevState) => ({
          ...prevState,
          bigSlider:
            prevState.bigSlider > 0 ? prevState.bigSlider - 1 : prevState.bigSlider,
        }));
      };
    
      const goToNext = () => {
        setCurrentIndex((prevState) => ({
          ...prevState,
          bigSlider:
            prevState.bigSlider < posterData.length - 1
              ? prevState.bigSlider + 1
              : prevState.bigSlider,
        }));
      };
    
    const isNextDisabled = currentIndex.bigSlider >= posterData.length - 1;
    const isPrevDisabled = currentIndex.bigSlider <= 0;
    return(
        <div className="updated-slider-container">
        <h2 className="updated-slider-title">{state?.name||''}</h2>
        <div className="updated-slider">
          <div
            className="updated-slides"
            style={{
              transform: `translateX(-${currentIndex.bigSlider * 100}%)`,
            }}
          >
            {posterData.map((slide: any, index: any) => {
              let slideClass = "updated-slide";

              if (index === currentIndex.bigSlider) {
                slideClass += " updated-active-slide";
              } else if (
                index ===
                (currentIndex.bigSlider - 1 + posterData.length) %
                posterData.length
              ) {
                slideClass += " updated-slide-left";
              } else if (
                index ===
                (currentIndex.bigSlider + 1) % posterData.length
              ) {
                slideClass += " updated-slide-right";
              }
              const { images = [] } = slide;
              const img_url = images?.find((item: any) => item?.imageCategory === "detailsPageBackground");
              return (
                <div className={slideClass} key={index}>
                  <img src={img_url.imageUrl[0]} alt="detailsPageBackground" />
                  <div className="updated-slide-info">
                    <h3>{slide?.name || ''}</h3>
                    <p>{slide?.description || ''}</p>
                    <div className="updated-buttons">
                      <a href="/detail">
                      <button className="updated-play-button">Play Now</button>
                      </a>
                      <button className="updated-list-button">My List</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {!isPrevDisabled && (
            <button
              className="updated-prev-button"
              disabled={isPrevDisabled}
              onClick={goToPrevious}
            >
              {"<"}
            </button>
          )}
          {!isNextDisabled && (
            <button
              className="updated-next-button"
              disabled={isNextDisabled}
              onClick={goToNext}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    )
}