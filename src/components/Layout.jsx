import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
      <div className="Layout">
          <Header/>
          <main className='pt-[8vh]'>
            {props.children}
          </main>
          <Footer/>
      </div>
  )
}

export default Layout