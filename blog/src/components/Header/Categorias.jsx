import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { buscaPorCategoria } from '../../services/newServices';

export const Categorias = () => {
    const {categoria} = useParams()
    const {state} = useLocation();
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        async function carregarNoticia() {
          setLoading(true)
          const data = await buscaPorCategoria(categoria)
          setNoticias(data)
          setLoading(false)
        }
        carregarNoticia()
    },[categoria]);

    if (loading) {
      return <div className='text-center mt-50 text-xl'>Carregando...</div>;
    }
  return (
    <div className='container'>
      <h1 className='capitalize'>{state.nome}</h1>
        {noticias.map((noticia)=>(
          <div key={noticia.title}>
            <h1>{noticia.title}</h1>
          </div>
        ))}
      </div>
  )
}
