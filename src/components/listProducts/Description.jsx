import PropTypes from 'prop-types'
import { formatPrice } from '../../utils/numbers'
import { Typography } from '@mui/material'


const Description = ({title, price, prices, shipping}) => {
  return (
    <>
      <Typography sx={{fontSize:24, mt:'32px', mb:'16px'}}>
        {formatPrice({
            price, currency: prices.presentation.display_currency
          })
        } {shipping?.free_shipping && <img src='/ic_shipping.png' alt='Envio gratis' />}
      </Typography>
      <Typography sx={{fontSize:18}}>
        {title}
      </Typography>
    </>
  )
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  prices: PropTypes.object.isRequired,
  shipping: PropTypes.object.isRequired
}

export default Description