import { Skeleton, Stack } from '@mui/material'

function SkeletonLoading({ cantItems = 4 }) {
  const cant = [...new Array(cantItems).keys()]
  return (
    <Stack spacing={2} sx={{ paddingTop: '15px'}}>
      {cant.map( (index) => <Skeleton key={index} variant='rounded' style={{width:'100%', height: '200px'}} /> )}
    </Stack>
  )
}

export default SkeletonLoading