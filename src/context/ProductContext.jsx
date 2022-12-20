import { createContext, useState } from "react";
export const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [productId, setProductId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  return (
    <ProductContext.Provider value={{
      products, setProducts,
      productId, setProductId,
      filters, setFilters,
      loading, setLoading,
      error, setError
    }}>
      {children}
    </ProductContext.Provider>
  )
}