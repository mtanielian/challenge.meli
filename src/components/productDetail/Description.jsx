import PropTypes from 'prop-types'
import { Stack, Typography } from "@mui/material"



const Description = ({ description }) => {
  return (
    <Stack>
      <Typography variant='h4' sx={{fontSize:'28px', mb:'32px'}}>Descripción del producto</Typography>
      <Typography variant='body2' sx={{fontSize:'16px', mb: '32px'}}>{description}</Typography>
    </Stack>
  )
}

Description.propTypes = {
  description: PropTypes.string.isRequired
}

export default Description