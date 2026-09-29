import React, { useState } from 'react'
import {useSearchParams} from 'react-router'
import { pesquisarNoticia } from '../../services/newServices';
import { useEffect } from 'react';

export const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const pesquisa = searchParams.get("q");
    const [noticia, setNoticia] = useState([]);
    console.log(noticia)
     useEffect(()=>{
          async function  carregarNoticia() {
            if (!pesquisa) return;
            const data = await pesquisarNoticia(pesquisa)
            setNoticia(data);
          }
          carregarNoticia()
        },[pesquisa]);
        if (noticia.length === 0) {
          return (
            <div className="flex flex-col items-center justify-center py-20">
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
        <h1>Resultados relacionados a: {pesquisa}</h1>
          
                <div className='grid grid-cols-3 gap-8'>
                    {
                    noticia.map((item)=>(
                        <div className='mb-10'>
                            <img src={item.image_url} alt="" className='h-[100%]' />
                            <h1>{item.title}</h1>
                        </div>
                    ))
          
                    }
                </div>
      </div>
        
        
  )
}
