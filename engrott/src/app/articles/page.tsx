import React from 'react'
import '../../../public/article.css'
import { getArticleListingData } from '../components/apiSever'
const ArticleListing = async () => {
  const articleData = await getArticleListingData();  
  
  return (
    <div>
      <div className="big-article-card">
  <div className="image-section">
  <img src="https://media.gettyimages.com/id/184962061/photo/business-towers.jpg?s=612x612&w=gi&k=20&c=Iw2MruV_UEORrJi036Zb5TOP74HMSpsihyuTnG74XBk=" alt="Article Image"/>
  </div>
  <div className="content-section">
    <h2 className="article-title">Article Title</h2>
    <p className="article-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et semper nisl. Suspendisse potenti. Vivamus eget dolor ut mauris dapibus blandit.
    </p>
    <button className="read-more">Read More</button>
  </div>
</div>

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