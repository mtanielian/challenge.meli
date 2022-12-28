import { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'


const useMetaTags = () => {
  const {products, productDetail} = useContext(ProductContext)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  let search = searchParams.get('search')    

  let title = 'Pagina de inicio MELI'
  let description = 'Nunca dejes de buscar'
  let image = 'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2'


  // pagina de busqueda
  if (Boolean(search) && products.length > 0) {
    title = `Busqueda de ${search}`
    description = `pagina de busqueda, ${search}`
    image = products[0]?.thumbnail
  }

  //pagina de detalle
  const { id } = useParams()
  if (Boolean(id) && Object.keys(productDetail).length > 0) {
    title = `Detalle del producto ${productDetail.title}`
    description = `pagina de busqueda, ${productDetail.title}`
    image = productDetail.pictures[0].url
  }


  return {title, description, image}
}

export default useMetaTags