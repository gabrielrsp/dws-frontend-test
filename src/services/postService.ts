import { api } from './api'

export const postService = {
  // Lista todos os posts
  getAll: async () => {
    const { data } = await api.get('/posts/')
    return data
  },

  // Busca post específico
  getById: async (id: string) => {
    const { data } = await api.get(`/posts/${id}`)
    return data
  },
}

export const authorService = {
  // Lista todos os autores
  getAll: async () => {
    const { data } = await api.get('/authors/')
    return data
  },
}

export const categoryService = {
  // Lista todas as categorias
  getAll: async () => {
    const { data } = await api.get('/categories/')
    return data
  },
}
