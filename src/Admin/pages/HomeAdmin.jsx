import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import WelcomeAdmin from '../components/WelcomeAdmin'
import './HomeAdmin.scss'

export default function HomeAdmin() {
  return (
    <div className='squareAdmin'>
      <div className='containHomeAdmin'>

        <div className="leftHomeAdmin">
          <LeftAdmin />
        </div>
        <div className='rightHomeAdmin'>
          <WelcomeAdmin/>
        </div>
      </div>
    </div>
  )
}
