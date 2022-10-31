import React from 'react'
import './assignment.css'
import logo from './Na_Nov_26.jpg'


function ErrorPage() {
  return (
    <div className='error-page'>ErrorPage
        <h1>Error 404</h1>
        <h2>Page is not found. Please check your URL</h2>
        {/* <img src={logo} alt="errorimage" style={{width:'500px', height:'300px'}}/> */}
    </div>
  )
}

export default ErrorPage