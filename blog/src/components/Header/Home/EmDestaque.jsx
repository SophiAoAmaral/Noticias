import {React, useEffect, useState} from 'react'
import { destaquesNoticia } from '../../../services/newServices';
import { Link } from 'react-router';
export const EmDestaque = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
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
    <div className="bg-[#0C0D0F] font-body mb-20">
      <div className="container p-10">
        <div className="flex flex-col mb-2 ">
          <span className="uppercase text-band-accent text-sm">
            Ganhando relêvancia agora
          </span>
          <h1 className="text-white text-5xl font-title mt-2">Em destaque</h1>
          <span className="text-faint self-end">
            Atualizado as {horas}:{minutos}
          </span>
        </div>

        <div className="flex">
          {noticias.map((noticia, index) => (
            <Link key={noticia} to={noticia.link} className='flex flex-col gap-2 border border-gray-300/40 p-5'>
              <span className="text-band-accent text-5xl font-code font-light">0{index + 1}</span>
              <span className='text-faint uppercase text-xs'>{}</span>
              <h2 className='font-title text-white text-2xl'>{noticia.title}</h2>
              <span className='text-faint capitalize'> {noticia.creator == null ? noticia.name : noticia.creator }</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
