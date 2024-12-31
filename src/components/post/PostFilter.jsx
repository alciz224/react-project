import React from 'react'
import Button from '@mui/material/Button'
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { useSearchParams } from 'react-router-dom'
const PostFilter = ({handleFilter}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterSet = [
    {filterKey: "all", filterName: "Tout"},
    {filterKey: "week", filterName: "Cette semaine"},
    {filterKey: "month", filterName: "Ce mois"},
    {filterKey: "year", filterName: "Cette année"    }]
  return (
    <Stack overflow="scroll" direction="row" spacing={1} pb={2}>
    {filterSet.map(filter=>(
      <Chip color={filter.filterKey===searchParams.get("filter_by")? 'secondary':'default'} key={filter.filterKey} 
      label={filter.filterName}
      component={Button}
      onClick={()=>handleFilter(filter.filterKey)}
      />
    ))}
    </Stack>
  )
}

export default PostFilter

