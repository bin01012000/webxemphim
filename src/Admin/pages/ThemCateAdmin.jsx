import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import FormThemCate from '../components/FormThemCate'
import './HomeAdmin.scss'

export default function ThemCateAdmin() {
  return (
    <div className='squareAdmin'>
      <div className='containHomeAdmin'>

        <div className="leftHomeAdmin">
          <LeftAdmin />
        </div>
        <div className='rightHomeAdmin'>                  
          <FormThemCate/>
        </div>
      </div>
    </div>
  )
}
