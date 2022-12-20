import { Breadcrumbs, Container, Typography } from "@mui/material"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const MigajasDePan = () => {
  const { filters } = useContext(ProductContext)


  if (!filters || filters.length === 0) return <div style={{marginTop: '40px', marginBottom: '20px'}}></div> 
  
  return (
    <Container style={{marginTop: '16px', marginBottom: '16px', padding:0 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {filters.map( ({ values }, index) => { return (
          <Typography key={index} color="body2">{values[0].name}</Typography>
        )})}
      </Breadcrumbs>
    </Container>
  )
}

export default MigajasDePan