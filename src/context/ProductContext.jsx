import { createContext, useState } from "react";
export const ProductContext = createContext()






export const ProductContextProvider = ({children}) => {

  const [search, setSearch] = useState('')
  const [productId, setProductId] = useState('')

  return (
    <ProductContext.Provider value={{
      search, setSearch,
      productId, setProductId
    }}>
      {children}
    </ProductContext.Provider>
  )
}