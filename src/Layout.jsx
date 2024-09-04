import React from 'react'

//Me chahta hu ki Header aur Footer saare pages pe same rahe bss andr ka content change hota rahe.
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header />

    {/* Header Same Rahega Footer Same Rahega, lekin uske andr chize cahnge hoti rahegi. */}
    {/* ese hi use nahi hoga, index me jaake batana padega. */}
    <Outlet />

    <Footer />
    </>
  )
}

export default Layout