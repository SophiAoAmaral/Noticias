import {React, useEffect, useState} from 'react'
import { destaquesNoticia } from '../../../services/newServices';

export const EmDestaque = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const numeros = [
        {id:1},
        {id:2},{id:3},{id:4},{id:5}]
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    useEffect(()=>{
        async function  carregarNoticias() {
          setLoading(true)
          const data = await destaquesNoticia();
            setNoticias(data)
            setLoading(false)
        }
        carregarNoticias();
        
      }, []);

      console.log(noticias)
  return (
    <div className="bg-[#0C0D0F] font-body">
      <div className="container p-10">
        <div className="flex flex-col ">
          <span className="uppercase text-band-accent text-sm">
            Ganhando relêvancia agora
          </span>
          <h1 className="text-white text-4xl">Em destaque</h1>
          <span className="text-faint self-end">
            Atualizado as {horas}:{minutos}
          </span>
        </div>

        <div className="flex">
          {noticias.map((noticia, index) => (
            <div key={noticia.article_id} className='flex flex-col border border-gray-300/40 p-5'>
              <span className="text-band-accent text-2xl font-code font-light">0{index + 1}</span>
              <span className='text-faint uppercase'>{noticia.country[0].replace('z', 's')}</span>
              <h2 className='font-title text-white'>{noticia.title}</h2>
              <span className='text-faint'> {noticia.creator == null ? noticia.source_name : noticia.creator }</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
