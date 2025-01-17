import React from 'react'
import Header from './Header/Header'
import Options from './options/Options'
import Divider from './divider/Divider'
import SubHeading from './subheading/SubHeading'
import MiddleSection from './midpart/MiddleSection'
import Footer from './Footer/Footer'

function HomePage() {
  return (
    <div>
        <Header/>
        <Options/>
        <Divider/>
        <SubHeading/>
        <MiddleSection/>
        <Footer/>
    </div>
  )
}

export default HomePage