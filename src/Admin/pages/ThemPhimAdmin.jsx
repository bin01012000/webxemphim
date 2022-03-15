import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import FormThemFilm from '../components/FormThemFilm'
import './HomeAdmin.scss'

export default function ThemPhimAdmin() {
  return (
    <div className='squareAdmin'>
      <div className='containHomeAdmin'>

        <div className="leftHomeAdmin">
          <LeftAdmin />
        </div>
        <div className='rightHomeAdmin'>          
          <FormThemFilm/>
        </div>
      </div>
    </div>
  )
}
