import React from 'react'
import './style.scss'
import './Typist.css'
import Helmet from './helmet'

const Layout = ({ children }) => (
  <div>
    <Helmet />
    {children}
  </div>
)

export default Layout
