import React from 'react'
import './BlankLayout.scss'

const BlankLayout = ({ children }) => (
  <>
    <div id="blank-layout">
      <div id="content">
        {children}
      </div>
    </div>
  </>
)

export default BlankLayout
