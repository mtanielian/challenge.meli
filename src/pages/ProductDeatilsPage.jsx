import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getProductById } from "../services/search.services";



const ProductDeatilsPage = () => {
  const { id } = useParams();
  const loadProductDetail = async () => {
    const {item, description} = await getProductById({ id })
    console.log(item)
    console.log(description)
  }




  useEffect(() => {
    if (id)
      loadProductDetail()

  }, [id])




  return (
    <div>ProductDeatilsPage</div>
  )
}

export default ProductDeatilsPage