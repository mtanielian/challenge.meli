import api from "./api"


export const searchProducts = async ({query, limit = 4}) => {
  const { data } = await api.get(`/sites/MLA/search?q=${query}&limit=${limit}`)
  return data
}


export const getProductById = async ({ id }) => {
  const getItem = api.get(`/items/${id}`)
  const getDescription = api.get(`/items/${id}/description`)
  const [{data:item}, {data:description}] = await Promise.all([getItem, getDescription])
  
  const filters = await getCategoriesById({id: item.category_id})
  return {item, description, filters}
}


export const getCategoriesById = async ({ id }) => {
  const { data } = await api.get(`/categories/${id}`)
  return data.path_from_root
  
}