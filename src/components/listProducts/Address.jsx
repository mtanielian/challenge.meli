import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Address = ({seller_address}) => {
  return (
    <Typography sx={{fontSize:12}}>
      {seller_address.state.name}
    </Typography>
  )
}

Address.propTypes = {
  seller_address: PropTypes.object.isRequired
}

export default Address