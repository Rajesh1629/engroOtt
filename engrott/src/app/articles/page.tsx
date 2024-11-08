import React from 'react'
import '../../../public/article.css'
import { getCommonListingData } from '../components/apiSever'
const ArticleListing = async () => {
  const articleData = await getCommonListingData('2','content','playlist');    
  
  const [ {content=[] }= {}] = articleData 
  const [{images = [],name = ''}={}] = content
  
  return (
    <div>
  <div className="big-article-card">
    <div className="image-section">
      <img src={images?.[0]?.imageUrl} alt="Article Image" />
    </div>
    <div className="content-section">
      <h2 className="article-title">{name || "Default Article Title"}</h2>
      <button className="read-more">Read More</button>
    </div>
  </div>


<div>
  <div className="article-list">
    {articleData?.slice(0,)?.map((item: any, index: any) =>
      item.content.slice(1,).map((item1: any, index1: any) => (
        <a href={`/articledetails/${item1.key}`}>
        <div className="article" key={`${index}-${index1}`}>
          {item1.images?.[0] && (
            <img src={item1.images[0].imageUrl} alt="Article Image" />
          )}
          <div className="article-content">
            <p className="article-text">{item1?.name}</p>
          </div>
        </div>
        </a>
      ))
    )}
  </div>
</div>


  </div>
  
  );
};


export default ArticleListing