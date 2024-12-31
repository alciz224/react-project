import React from 'react'
import Section from "../components/common/Section"
import Carousel from '../components/common/Carousel'
import Divider from "@mui/material/Divider"
import CarouselEventCard from '../components/event/CarouselEventCard'
import Loading from '../components/common/Loading'
import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../api/api'
import Center from "../components/common/utils/Center"
const Events = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents
  })

  if (isLoading){
    return <Loading/>
  }
  if (error){
    return "something went wrong"
  }

  return (
    <>
    <Carousel title="Top Evenement" subtitle="Parcourer les evenements à venir" 
      items={data.results} 
      Component={(props)=><CarouselEventCard {...props}/>}
      slickParameters={{
      }}/>
    <Divider/>
    </>
  )
}

export default Events
