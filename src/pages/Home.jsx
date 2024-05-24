import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
function Home() {
  return (
    // landing page
    <>
    <Header/>
    <div className='d-flex align-items-center justify-content-center rounded border p-5 shadow' style={{height:'100vh',width:'100%'}}>
     <div className='container'>
          <div className='row align-items-center'>
          <div className='col-lg-6'>
              <img style={{width:'100%'}} className='img-fluid' src="https://www.iwebscraping.com/images/Competitive-Pricing-Intelligence1.gif" alt="" />
            </div>
            <div className='col-lg-6'>
              <p style={{fontSize:'60px',fontWeight:'600',color:'black'}}>Keep Track of Your Income & Expenses</p>
             <p style={{textAlign:'justify'}}>
            View all your income and expenses flow in one dashboard
             </p>
           
             <Link style={{backgroundColor:'orange',color:'white'}} to={'/login'} className='btn '>Track your performance <i className='fa-solid fa-arrow-right'></i></Link>
            
            </div>
            

            </div> 
            </div>

    </div>
    </>
  )
}

export default Home