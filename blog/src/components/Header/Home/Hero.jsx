import React from 'react'
import { Link } from 'react-router';
export const Hero = ({article}) => {
    if (!article) return null;
  return (
    <Link to={article.link}>
        <img src={article.image_url} alt="" className='w-[100%] h-[600px] '/>
        <h1 className='font-title text-5xl my-5'>{article.title}</h1>
        <p>{article.description}</p>
    </Link>
  )
}
