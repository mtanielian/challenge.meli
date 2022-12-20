import PropTypes from 'prop-types'
import { formatPrice } from '../../utils/numbers'
import { Box, Button, Typography } from '@mui/material'


const translate = condition => condition === 'new' ? 'Nuevo' : 'Usado'

const InfoSale = ({condition, soldQuantity, title, currencyId, price}) => {
  return (
    <Box>
      <Box mb='16px'><Typography variant='body1' sx={{fontSize:'14px'}}>{translate(condition)} - {soldQuantity} vendidos</Typography></Box>
      <Box mb='32px'><Typography variant='body1' sx={{fontSize:'24px'}}>{title}</Typography></Box>
      <Box mb='32px'>
          <Typography variant='body1' sx={{fontSize:'46px'}}>
          {formatPrice({
            price, currency: currencyId
          })}
        </Typography>
      </Box>
      <Button variant='contained' sx={{width:'200px', backgroundColor: '#3483FA' }}>Comprar</Button>
    </Box>
  )
}

InfoSale.propTypes = {
  title: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.number.isRequired,
  currencyId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default InfoSale