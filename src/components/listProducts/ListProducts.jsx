import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import Image from './Image'
import Description from './Description'
import Address from './Address'
import { Divider, Grid } from '@mui/material'


const ListProducts = () => {
  const { products } = useContext(ProductContext)
  const navigate = useNavigate()

  const handleClickDetail = (id) => {
    if (id && id !== '') 
      navigate(`/items/${id}`)
  }
  if (!products || products.length === 0) return <div>Loading...</div>

  return (
    products.length > 0 && products.map(({ id, title = '', thumbnail = '', price = 0, prices = {}, shipping = {} ,seller_address = {} }) => { return (
      <Grid aria-label="product" container sx={{display: 'flex', justifyContent:'center', flexDirection:'row'}} key={id}>
        <Grid item xs={2}>
          <Image title={title} thumbnail={thumbnail} handleClickDetail={() => handleClickDetail(id)} />
        </Grid>
        <Grid item xs={6} style={{display: 'flex', flexDirection:'column'}}>
          <Description 
            title={title} price={price} prices={prices} 
            shipping={shipping}  handleClickDetail={() => handleClickDetail(id)} 
          />
        </Grid>
        <Grid item xs={4} style={{ display:'flex', justifyContent:'center', marginTop: '32px' }}>
          <Address seller_address={seller_address} />
        </Grid>
        <Divider width='100%' />  
      </Grid>
    )})
  )
}

export default ListProducts