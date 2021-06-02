import React from 'react'
import './style.scss'
import './Typist.css'
import Helmet from './helmet'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    {children}
  </div>
)

export default Layout
