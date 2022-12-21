import PropTypes from 'prop-types'

const Image = ({ thumbnail, title = '', handleClickDetail = () => {} }) => {
  if (!thumbnail) return <></>
  return (
    <img
      src={thumbnail}
      alt={title}
      loading="lazy"
      width='180px'
      height='180px'
      style={{marginTop:'16px', borderRadius: '4px', cursor: 'pointer'}}
      onClick={handleClickDetail}
    />
  )
}

Image.propType = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClickDetail: PropTypes.func.isRequired
}


export default Image