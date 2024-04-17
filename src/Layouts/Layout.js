import React from 'react'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import { Outlet } from 'react-router-dom'
import AptConfirmation from '../Components/AptConfirmation/AptConfirmation'

function Layout() {
  return (
    <div>
        <Header/>
        {/* <Main/> */}
        <AptConfirmation/>
        <Outlet/>
    </div>
  )
}

export default Layout