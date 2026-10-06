import React, { useEffect, useState } from 'react'
import { useLocation, useParams , Link} from 'react-router'
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
      <h1 className='capitalize font-title my-5 text-4xl font-semibold'>{state.nome}</h1>
        <div className='grid md:grid-cols-3 gap-5'>
          {noticias.map((noticia)=>(
            <Link to={noticia.source.url} key={noticia.title} className='mb-6 border-b pb-2 border-gray-200'>
              <img src={noticia.image} alt="" className='h-90 w-100 object-cover rounded-2xl' />
              <h1 className='font-title mt-2'>{noticia.title}</h1>
              <span className='text-gray-400 font-body text-sm detail3 pl-5 relative'>{noticia.source.name}</span>
            </Link>
          ))}
        </div>
      </div>
  )
}
