import React from 'react'
import { Link } from 'react-router';


export const Navigation = () => {
  const topicos = [
  { nome: "Início", rota: "/" },
  { nome: "Brasil", rota: "/categoria/brasil" },
  { nome: "Mundo", rota: "/categoria/mundo" },
  { nome: "Tecnologia", rota: "/categoria/tecnologia" },
  { nome: "Negócios", rota: "/categoria/negocios" },
  { nome: "Ciência", rota: "/categoria/ciencia" },
  { nome: "Esportes", rota: "/categoria/esportes" },
  { nome: "Entretenimento", rota: "/categoria/entretenimento" },
];
  return (
    <ul className=' flex gap-5 container font-body text-sm justify-center p-4 font-medium '>
        {topicos.map((item)=>(
            <li key={item.item} >
              <Link to={item.rota} className='hover:text-accent-hover transition-colors'>{item.nome}</Link>
            </li>
        ))}
    </ul>
  )
}
