import React from 'react'
import Appbar from './Appbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <>
    <Appbar/>
    <Outlet/>
    </>
  )
}

export default PageLayout
