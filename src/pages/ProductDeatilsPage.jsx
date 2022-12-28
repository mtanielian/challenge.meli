import Breadcrumbs from '../components/Breadcrumbs'
import { Container, Skeleton } from '@mui/material'
import useFetchProdcutById from '../hooks/useFetchProdcutById'
import ProductDetail from '../components/productDetail/ProductDetail'

const ProductDeatilsPage = () => {
  const { loading, productDetail } =  useFetchProdcutById()

  return (
    <>
      <Breadcrumbs />
      <Container sx={{ height:'auto', backgroundColor:'white', borderRadius: '5xp',  }}>
        {loading && Object.keys(productDetail).length === 0 ? <Skeleton variant='rounded' sx={{height:'100%', width:'100%'}} />
          : <ProductDetail />}
      </Container>
    </>
  )
}

export default ProductDeatilsPage