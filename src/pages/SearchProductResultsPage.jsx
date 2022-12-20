import { Divider, Grid, Typography } from "@mui/material"
import { border, Container, Stack } from "@mui/system"
import { useDebugValue, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import { searchProducts } from "../services/search.services"
import { formatPrice } from "../utils/numbers"



const SearchProductResultsPage = () => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);


  const loadProducts = async() => {
    let search = searchParams.get('search');
    if (!search || search.trim().length <= 4)
      return navigate("/")

    const query = encodeURI(search)
    const productsFinded = await searchProducts({query})
    setProducts(productsFinded.results)
    setFilters(productsFinded.filters)

  }
  
  useEffect(() => {   
    loadProducts()
  }, [])

  useEffect(()=> {
    loadProducts()
  }, [location])


 return (
      <>
      <Breadcrumbs filters={filters} />
      <Container sx={{ height:'80%', backgroundColor:'white', borderRadius: '5xp'}}>
        {products.length > 0 && products.map( product => { return (
        <Grid container sx={{display: 'flex', justifyContent:'center', flexDirection:'row'}}>
            <Grid item xs={2}>
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                width='180px'
                height='180px'
                style={{marginTop:'16px', borderRadius: '4px'}}

              />
            </Grid>
            <Grid item xs={6} style={{display: 'flex', flexDirection:'column'}}>
                <Typography sx={{fontSize:24, mt:'32px', mb:'16px'}}>
                  {formatPrice({price: product.price, currency: product.prices.presentation.display_currency})} {product.shipping?.free_shipping && <img src='/ic_shipping.png' alt='Envio gratis' />}
                </Typography>
                <Typography sx={{fontSize:18}}>
                  {product.title}
                </Typography>
              
            </Grid>
            <Grid item xs={4} style={{ display:'flex', justifyContent:'center', marginTop: '32px' }}>
              <Typography sx={{fontSize:12}}>
                {product.seller_address.state.name}
              </Typography>
            </Grid>
            <Divider width='100%' />
         
        </Grid>
          )})}
    </Container>
    </>
  )
}

export default SearchProductResultsPage