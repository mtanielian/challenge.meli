import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { searchProducts } from '../services/search.services'

const useFetchProducts = () => {
  const { setProducts, setProductDetail, products,  setFilters, setLoading, setError, error, loading } = useContext(ProductContext) 
  
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)


  const loadProducts = async() => {
    let search = searchParams.get('search')
    if (!search || search.trim().length < 3)
      return navigate('/')
    
    try {
      setLoading(true)
      const query = encodeURI(search)
      const productsFinded = await searchProducts({query, limit: 4})
      setProducts(productsFinded.results)
      if (productsFinded.filters.length > 0)
        setFilters(productsFinded.filters[0].values[0].path_from_root)
            
      
      setProductDetail([])
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }

  }
  
  useEffect(() => {   
    loadProducts()
  }, [location.search])

  return {
    loading, error, products
  }
}

export default useFetchProducts