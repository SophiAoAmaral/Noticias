import { api } from "./api";

export async function buscarPrincipaisNoticias() {
const response = await api.get("/latest", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      country: "br",
      language: "pt",
      size: 5,
    },
});
return response.data.results
} ;

export async function buscaPorCategoria(categoria) {
  const response = await api.get('/latest',{
    params:{
      apikey: import.meta.env.VITE_API_KEY,
      category: categoria,
      language: "pt"
    }
  })
  return  response.data.results
}

export async function pesquisarNoticia(pesquisa) {
   const response = await api.get('/latest',{
    params:{
      apikey: import.meta.env.VITE_API_KEY,
      q: pesquisa,
      language: "pt",
      size:30,
    }
  })
  return  response.data.results
};



export async function destaquesNoticia() {
  const response = await api.get('/latest',{
    params:{
      apikey: import.meta.env.VITE_API_KEY,
      category: "wolrd",
      language: "pt"
    }
  })
  return  response.data.results
};

export async function ultimasNoticias() {
  const response = await api.get('/latest',{
    params:{
      apikey: import.meta.env.VITE_API_KEY,
      category: "top",
      language: "pt",
      size: 6,
    }
  })
  return  response.data.results
}