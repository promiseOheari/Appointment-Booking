import React from 'react'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <Main/>
        <Outlet/>
    </div>
  )
}

export default Layout