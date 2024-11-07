import React from 'react'
import '../../../public/article.css'
import { getArticleListingData } from '../components/apiSever'
const ArticleListing = async () => {
  const articleData = await getArticleListingData();  
  
  return (
    <div>
<div>
  <div className="article-list">
    {articleData.map((item: any, index: any) =>
      item.content.map((item1: any, index1: any) => (
        <div className="article" key={`${index}-${index1}`}>
          {item1.images?.[0] && (
            <img src={item1.images[1].imageUrl} alt="Article Image" />
          )}
          <div className="article-content">
            <p className="article-text">{item1?.name}</p>
          </div>
        </div>
      ))
    )}
  </div>
</div>


  </div>
  
  );
};


export default ArticleListing