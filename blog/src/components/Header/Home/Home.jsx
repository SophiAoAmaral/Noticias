import React, { useEffect, useState } from 'react'
import { Hero } from './Hero'
import { TreadingNews } from './TreadingNews'
import { buscarPrincipaisNoticias } from '../../../services/newServices'
import { EmDestaque } from './EmDestaque'

export const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const noticiaPrincial= noticias[0];
  const noticiasLaterais = noticias.slice(1,5)
  useEffect(()=>{
    async function  carregarNoticias() {
      setLoading(true)
      const data = await buscarPrincipaisNoticias();
        setNoticias(data)
        setLoading(false)
    }
    carregarNoticias();
    
  }, []);
  if (loading) {
  return <div className='text-center text-xl mt-50'>
    <p>Carregando...</p>
  </div>
}
  return (
    <section className=' mt-10'>

      <div className='container'>
        <h1 className='text-center font-title text-5xl mb-5 font-semibold'>Últimas noticias</h1>
        <div className='grid grid-cols-[70%_auto]  gap-10 mb-10 items-start border-b border-gray-300'>
          <Hero article={noticiaPrincial}/>
          <TreadingNews article={noticiasLaterais}/>
          </div>
      </div>

      <EmDestaque/>
    </section>
  )
}
