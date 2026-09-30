import React from 'react'
import { Link } from 'react-router';
export const Hero = ({article}) => {
    if (!article) return null;
    console.log(article)
  return (
    <Link to={article.link}>
        <img src={article.image_url} alt="" className='w-[100%] h-[600px] rounded-2xl'/>
        <div>
          <span>{article.keywords[0]}</span>
          <span>{article.pubDate}</span>
        </div>
        <h1 className='font-title text-5xl mt-5'>{article.title}</h1>
        <p className='font-body line-clamp-4'>{article.description}</p>
    </Link>
  )
}
