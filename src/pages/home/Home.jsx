import React from 'react'
import Layout from '../../component/layout/Layout';
import Hero from '../../component/Hero/Hero';
import NavBar from '../../component/NavBarComponent/NavBar';
import ChooseUS from '../../component/ChooseUS/ChooseUS';
import Services from '../../component/Services/Services';
import Advices from '../../component/Advices/Advices';
import Footer from '../../component/Footer/Footer';

function Home() {
  return (
    <div className=''>
      <Layout>
        <div className="home">
          <NavBar/>
          <Hero/> 
          <ChooseUS/>
          <Services/>
          <Advices/> 
          <Footer/>
        </div>
      </Layout>
    </div>
  )
}

export default Home