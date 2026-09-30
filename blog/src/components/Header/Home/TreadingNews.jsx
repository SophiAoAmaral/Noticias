import React from 'react'
import { Link } from 'react-router'
export const TreadingNews = ({article}) => {
    console.log(article)
  return (
    <div className=''>
        {article.map((noticia)=>(
            <Link to={noticia.link} className='mb-5 block'>
                <img src={noticia.image_url} alt=""  className='w-full h-30 rounded-2xl mb-2'/>
                <div>
                    <span>{noticia.keywords[0]}</span>
                </div>
                <h1 className='font-title  font-medium'>{noticia.title}</h1>
            </Link>
        ))}

    </div>
  )
}
