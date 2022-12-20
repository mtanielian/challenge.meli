import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import InfoSale from './InfoSale'
import { Grid } from '@mui/material'
import Description from './Description'

const ProductDetail = () => {
  const { productDetail } = useContext(ProductContext)
  const { currency_id, price, title, sold_quantity, pictures, condition, plain_text } = productDetail

  
  return (
    Object.keys(productDetail).length > 0 &&
    <Grid container sx={{display: 'flex', justifyContent:'center', flexDirection:'row', pt:'32px'}}>
      <Grid item xs={8}>
        <img src={pictures[0].url} alt={title} />
      </Grid>
      <Grid item xs={4} style={{display: 'flex', flexDirection:'column'}}>
        <InfoSale
          title={title} 
          condition={condition} 
          soldQuantity={sold_quantity} 
          currencyId={currency_id}
          price={price}
        />
      </Grid>
      <Grid item xs={8} style={{ paddingLeft: '32px',display:'flex', marginTop: '32px' }}>
        <Description description={plain_text} />
      </Grid>
      <Grid item xs={4}/>
    </Grid>
  )
}

export default ProductDetail