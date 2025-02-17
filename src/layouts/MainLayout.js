import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive'


const MainLayout = (props) => {
  return (
    <div>
      <Header />
        {props.children ? props.children : 'not found'}
      <Footer />
    </div>
  )
}

export default MainLayout