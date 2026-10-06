import React, { useEffect, useState } from 'react'
import { outrasNoticias } from '../../../services/newServices';

export const UltimasNoticias = () => {
  const [pesquisa, setPesquisa] = useState([]);
  const [carregando, setCarregando] = useState(true)
  useEffect(()=>{
      async function carregarNoticias() {
        setCarregando(true)
        const data = await outrasNoticias();
        setPesquisa(data)
        setCarregando(false)
      };
      carregarNoticias()
  },[])
  return (
    <section>
        <h1>Veja mais</h1>
        <p>O que acabou de ser publicado pelas fontes que acompanhamos</p>

        <div className='grid grid-cols-3'>
          {pesquisa.map((noticia)=>(
            <div>
              <img src={noticia.image} alt="" />
              <h1>{noticia.title}</h1>
            </div>
          ))}
        </div>
    </section>
  )
}
