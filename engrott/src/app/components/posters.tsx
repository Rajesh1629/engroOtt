import React from "react";

export default function Posters({data,image}:any){
    console.log("databfgg",data);
    
    return(
<div className="posters">
    <h2>{data?.name||''}</h2>
        <div className="movie-gallery">
          {data.content.slice(0,6).map((item: any, index: any) => {
            const { images = [] } = item;
            const img_url = images?.find((item: any) => item?.imageCategory == image);

            return (
              <div className="movie-item" key={index}>
                <a href="/detail">
                <img
                  src={img_url?.imageUrl?.[0] || ''}
                  alt="image"
                  />
                  </a>
                <div className="movie-info">
                  <h3>{item?.name || ''}</h3>
                  <p>2021 &nbsp;&nbsp; +18 &nbsp;&nbsp; Action</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
}