import api from "./api"


export const searchProducts = async ({query, limit = 4}) => {
  const { data } = await api.get(`/search?q=${query}&${limit}=4`)
  return data
}



export const getProductById = async ({ id }) => {
  const getItem = api.get(`/items/​${id}`)
  const getDescription = api.get(`/items/​${id}/description`)
  const [item, description] = await Promise.all([getItem, getDescription])

  console.log({item, description})
}



