import React from 'react'
import Header from '../components/Header'



export default function DefaultLayout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
        <div className="content">
          {children}
        </div>
      </div>

  )
}
