import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import { Divider, Grid } from "@mui/material"
import Image from "./Image"
import Description from "./Description"
import Address from "./Address"

const ListProducts = () => {

  const {products = {}} = useContext(ProductContext)
   
  return (
    products.length > 0 && products.map(({ id, title = '', thumbnail = '', price = 0, prices = {}, shipping = {} ,seller_address = {} }) => { return (
      <Grid container sx={{display: 'flex', justifyContent:'center', flexDirection:'row'}} key={id}>
        <Grid item xs={2}>
          <Image title={title} thumbnail={thumbnail} />
        </Grid>
        <Grid item xs={6} style={{display: 'flex', flexDirection:'column'}}>
          <Description title={title} price={price} prices={prices} shipping={shipping} />
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