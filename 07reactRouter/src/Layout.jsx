import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// outlet helps to keep header and footer as it is and uses only things that are going to chane in our case it is home component

function Layout() {
  return (
    <>
        <Header />  
                <Outlet />
        <Footer />
    </>
  )
}

export default Layout
