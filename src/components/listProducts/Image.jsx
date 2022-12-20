import PropTypes from 'prop-types'

const Image = ({ thumbnail, title }) => {
  return (
    <img
      src={thumbnail}
      alt={title}
      loading="lazy"
      width='180px'
      height='180px'
      style={{marginTop:'16px', borderRadius: '4px'}}
    />
  )
}

Image.propType = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default Image