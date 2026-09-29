import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import { IoSearch } from "react-icons/io5";

export const SearchBar = () => {
    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();
    function pesquisar() {
      if (!pesquisa.trim()) return;

      navigate(`/search?q=${pesquisa}`);
    }

    function handleKeyDown(e) {
      if (e.key === "Enter") {
        pesquisar();
      }
    }


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
