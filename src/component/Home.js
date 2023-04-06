import React from 'react'
import Electro from './Electro/Electro'
import Electask from './electorask/Electask'
import Ask from './electroask2/Ask'
import Footer from './footer/Footer'
import Cards from './cards/Cards'



function Home() {
  return (
    <div>
        <Cards/>
        {/* <Electro/> */}
        <Electask/>
        <Ask/>
        <Footer/>
      
    </div>
  )
}

export default Home