import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import { IoSearch } from "react-icons/io5";
import { pesquisarNoticia } from '../../services/newServices';

export const SearchBar = () => {
    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();
    function pesquisar() {
      if (!pesquisa.trim()) return;

      navigate(`/search?q=${pesquisa}`);
      console.log(pesquisa)
    }

    function handleKeyDown(e) {
      if (e.key === "Enter") {
        pesquisar();
      }
    }

    useEffect(()=>{
      async function  pesquisaDeNoticias() {
        if (!pesquisa) return;
        const data = await pesquisarNoticia(pesquisa)
        setNoticia(data);
      }
      pesquisaDeNoticias()
    },[pesquisa])

  return (
    <div className='flex gap-5 items-center border border-gray-300 w-90 py-2 px-4 rounded-2xl'>
      <IoSearch size={20}/>
        <input 
        type="text"  
        className='w-full p-1 focus:border-none outline-0'
        placeholder="Buscar notícias..." 
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      
        
    </div>
  )
}
