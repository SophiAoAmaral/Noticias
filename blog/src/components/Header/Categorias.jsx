import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { buscaPorCategoria } from '../../services/newServices';

export const Categorias = () => {
    const {categoria} = useParams()
    const {state} = useLocation();
    const [noticias, setNoticias] = useState([]);

    useEffect(()=>{
        async function carregarNoticia() {
          const data = await buscaPorCategoria(categoria)
          setNoticias(data)
          console.log(data)
        }
        carregarNoticia()
    },[categoria]);

    
  return (
    <div className='text-'>
      <h1 className='capitalize'>{state.nome}</h1>
        {noticias.map((noticia)=>(
          <div>
            <h1>{noticia.title}</h1>
          </div>
        ))}
      </div>
  )
}
