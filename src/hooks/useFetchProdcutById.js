import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { getProductById } from '../services/search.services'

const useFetchProdcutById = () => {
  const { id } = useParams()
  const { loading, setLoading, error, setError, setProductDetail, productDetail, setFilters, setProducts } = useContext(ProductContext)

  const loadProductDetail = async () => {

    setLoading(true)
    setError(false)
    try {
      const {item, description, filters} = await getProductById({ id })
      setProductDetail({...item, ...description})
      setFilters(filters)
      setProducts([])
      setLoading(false)
    } catch (error) {
      setError(true)
    }
    
  }

  useEffect(() => {
    loadProductDetail()
  }, [])

  return { loading, error, productDetail }
}

export default useFetchProdcutById