import React from 'react'
import '../../../public/article.css'
import { getArticleDetailData } from '../components/apiSever'
const ArticleDetail = async({params}:any) => {
  let {section = []} = params
  const articleId = section[1]
  const articleData = await getArticleDetailData(articleId)  
  let {data = {}} = articleData
  let {excerpt = '',articleBody = '',createdAt = '',images = []} = data
  console.log(images,'hghfdsghfgds');
  let [{imageUrl = ''}={}] = images
  function removeHtmlTags(text:any) {
    return text.replace(/<[^>]*>/g, '');
  }
  return (
<div className="article-detail-page">
  <div className="image-container">
    <img src= {imageUrl} alt="Article Image" />
  </div>
  <div className="content-container">
    <h1 className="article-title">{excerpt}</h1>
    <p className="article-author">{createdAt}</p>
    <p className="article-description">
      {removeHtmlTags(articleBody)}
    </p>
  </div>
</div>
  )
}

export default ArticleDetail