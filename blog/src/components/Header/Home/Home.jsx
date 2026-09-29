import React, { useEffect, useState } from 'react'
import { Hero } from './Hero'
import { TreadingNews } from './TreadingNews'
import { buscarPrincipaisNoticias } from '../../../services/newServices'

export const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const noticiaPrincial= noticias[0];
  const noticiasLaterais = noticias.slice(1,5)
  useEffect(()=>{
    async function  carregarNoticias() {
      const data = await buscarPrincipaisNoticias();
        setNoticias(data)
        console.log(data)
    }
    carregarNoticias();
  }, [])
  return (
    <section className='container mt-10'>
      <div className='grid grid-cols-[70%_auto]  gap-10'>
        <Hero article={noticiaPrincial}/>
        <TreadingNews article={noticiasLaterais}/>
        </div>
    </section>
  )
}
