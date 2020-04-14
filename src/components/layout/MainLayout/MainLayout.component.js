import React from 'react'
import { Navbar, Footer } from '../../commons'

const MainLayout = ({ className, children }) => {
  return (
    <div className={className}>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
