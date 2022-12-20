import { Breadcrumbs, Container, Typography } from "@mui/material"

const MigajasDePan = ({filters = []}) => {
  if (!filters || filters.length === 0) return 
  
  return (
    <Container style={{marginTop: '16px', marginBottom: '16px', padding:0 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {filters.map( ({ values }) => { return (
          <Typography color="body2">{values[0].name}</Typography>
        )})}
      </Breadcrumbs>
    </Container>
  )
}

export default MigajasDePan