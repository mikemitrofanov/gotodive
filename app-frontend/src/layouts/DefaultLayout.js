import React from 'react'

import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
