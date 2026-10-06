import React from 'react'
import { Link } from 'react-router'
export const TreadingNews = ({article}) => {
    console.log(article)
  return (
    <div className=''>
        {article.map((noticia)=>(
            <Link to={noticia.link} className='mb-5 block border-b pb-2 border-gray-300'>
                <img src={noticia.image} alt=""  className='w-full h-40 rounded-2xl mb-2'/>
                <div>
                    <span className={`uppercase text-xs text-accent font-semibold mb-2 block  relative  pl-4 ${noticia.keywords ? 'detail3' : ''}`} >{noticia.keywords?.[0]}</span>
                </div>
                <h1 className='font-title '>{noticia.title}</h1>

                <span className='text-xs font-body font-semibold text-gray-500'>{noticia.source_name}</span>
            </Link>
        ))}

    </div>
  )
}
