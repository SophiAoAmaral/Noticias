import { api } from "./api";
export async function buscarPrincipaisNoticias() {
  const response = await api.get("/top-headlines", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      country: "br",
      lang: "pt",
      max: 5,
    },
  });

  return response.data.articles;
}

export async function buscaPorCategoria(categoria) {
  const response = await api.get("/top-headlines", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      category: categoria,
      country: "br",
      lang: "pt",
      max: 15,
    },
  });

  return response.data.articles;
}

export async function pesquisarNoticia(pesquisa) {
  const response = await api.get("/search", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      q: pesquisa,
      country: "br",
      lang: "pt",
      max: 10,
    },
  });

  return response.data.articles;
}

export async function destaquesNoticia() {
  const response = await api.get("/top-headlines", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      topic: "world",
      lang: "pt",
      max: 5,
    },
  });

  return response.data.articles;
}

export async function ultimasNoticias() {
  const response = await api.get("/top-headlines", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      country: "br",
      lang: "pt",
      max: 6,
    },
  });

  return response.data.articles;
}

export async function outrasNoticias() {
  const response = await api.get("/top-headlines", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      topic: "breaking-news",
      lang: "pt",
      max: 6,
    },
  });

  return response.data.articles;
}