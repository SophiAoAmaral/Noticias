import React from 'react'
import { Link } from 'react-router'
export const TreadingNews = ({article}) => {
    console.log(article)
  return (
    <div>
        {article.map((noticia)=>(
            <Link to={noticia.link} className='mb-5 block'>
                <img src={noticia.image_url} alt=""  className='w-70 h-40'/>
                <h1>{noticia.title}</h1>
            </Link>
        ))}

    </div>
  )
}
