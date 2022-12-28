import { createContext, useState } from 'react'
export const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  
  return (
    <ProductContext.Provider value={{
      products, setProducts,
      filters, setFilters,
      loading, setLoading,
      error, setError,
      productDetail, setProductDetail
    }}>
      {children}
    </ProductContext.Provider>
  )
}