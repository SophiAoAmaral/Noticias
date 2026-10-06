import React, { useState } from 'react'
import {useSearchParams, Link} from 'react-router'
import { pesquisarNoticia } from '../../services/newServices';
import { useEffect } from 'react';

export const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const pesquisa = searchParams.get("q");
    const [noticia, setNoticia] = useState([]);
    const [loading, setLoading] = useState()
    console.log(noticia)
     useEffect(() => {
       if (!pesquisa?.trim()) return;

       async function carregarNoticia() {
         setLoading(true);

         const data = await pesquisarNoticia(pesquisa);

         setNoticia(data);
         setLoading(false);
       }

       carregarNoticia();
     }, [pesquisa]);
        if(loading){
            return <div className='text-center mt-50 text-lg'>
                 <p>Carregando....</p>
            </div>
        }
        if (noticia.length === 0) {
          return (
            <div className="flex flex-col items-center justify-center py-20 ">
              <h2 className="text-2xl font-semibold">
                Nenhuma notícia encontrada
              </h2>

              <p className="mt-2 text-gray-500">
                Não encontramos resultados para "{pesquisa}".
              </p>
            </div>
          );
        }
  return (
    <div className='container text-center'>
        <h1 className='font-title text-2xl mt-4 mb-2'>Resultados relacionados a: {pesquisa}</h1>
          
                <div className='grid grid-cols-3 gap-8'>
                    {
                    noticia.map((item)=>(
                        <Link to={item.link} className='mb-5'>
                            <img src={item.image} alt="" className='h-[300px] w-200 object-cover' />
                            <h1 className='font-title mt-2 text-xl'>{item.title}</h1>
                        </Link >
                    ))
          
                    }
                </div>
      </div>
        
        
  )
}
