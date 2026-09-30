import React from 'react'
import { Link } from 'react-router';
export const Hero = ({article}) => {
    if (!article) return null;
    console.log(article)
  return (
    <Link to={article.link}>
        <img src={article.image_url} alt="" className='w-[100%] h-[600px] rounded-2xl '/>
        <div className='flex justify-between mt-2 items-center font-body'>
          <span className='uppercase text-accent font-semibold text-sm  relative detail2 pl-4'>{article.keywords[0]}</span>
          <span className='text-xs'>{article.pubDate}</span>
        </div>
        <h1 className='font-title text-5xl mt-5 w-190 mb-2'>{article.title}</h1>
        <p className='font-body font- line-clamp-4 w-180'>{article.description}</p>

        <div className='mt-5 flex items-center gap-3 font-bodys'>
          <span className='uppercase bg-gray-300 p-2 rounded-[50%]'>{article.source_name.slice(0, 2)}</span>
          <span className='font-semibold'>{article.source_name} </span>
          <span className='text-gray-400 capitalize'>Por {article.creator == null ? article.source_name : article.creator } </span>
        </div>
    </Link>
  )
}
