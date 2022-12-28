import Breadcrumbs from '../components/Breadcrumbs'
import ListProducts from '../components/listProducts/ListProducts'
import SkeletonLoading from '../components/listProducts/SkeletonLoading'
import useFetchProducts from '../hooks/useFetchProducts'
import { Container } from '@mui/system'

const SearchProductResultsPage = () => {
  const { loading, error, products } = useFetchProducts()
    
  if (error) return <>Error....</>
  if (!loading && !error && products.length === 0) return <>Empty State. no se encontraron productos para su busqueda</>
  
  return (
    <>
      <Breadcrumbs />
      <Container sx={{ height:'80%', backgroundColor:'white', borderRadius: '5xp'}}>
        {loading ?
          <SkeletonLoading cantItems={4} />
          : <ListProducts /> }
      </Container>
    </>
  )
}

export default SearchProductResultsPage