import React from 'react'
import { Link } from 'react-router';
import { NavLink } from "react-router";


export const Navigation = () => {
  const topicos = [
    {nome: "Início",rota: "/",},
    {nome: "Brasil", rota: "/categoria/top",},
    {nome: "Mundo", rota: "/categoria/world",},
    {nome: "Tecnologia", rota: "/categoria/technology",},
    {nome: "Negócios", rota: "/categoria/business" },
    {nome: "Ciência", rota: "/categoria/science",},
    {nome: "Esportes", rota: "/categoria/sports", },
    { nome: "Entretenimento",  rota: "/categoria/entertainment",},
  ];
  return (
    <ul className=" flex gap-5 container font-body text-sm justify-center p-4 font-medium ">
      {topicos.map((item) => (
        <li key={item.nome} className='relative'>
          <NavLink
            to={item.rota}
            state={{nome: item.nome}}
            className={({ isActive }) =>
              `font-body text-sm relative ${isActive ? "text-accent ativo" : ""}`
            }
          >
            {item.nome}
          </NavLink>
          
        </li>
      ))}
    </ul>
  );
}
