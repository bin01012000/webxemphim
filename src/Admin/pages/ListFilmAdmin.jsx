import React from 'react'
import TableFilm from '../components/TableFilm'
import LeftAdmin from '../components/LeftAdmin'
import './HomeAdmin.scss'

export default function ListFilmAdmin() {
  return (
    <div className='squareAdmin'>
      <div className='containHomeAdmin'>

        <div className="leftHomeAdmin">
          <LeftAdmin />
        </div>
        <div className='rightHomeAdmin'>
          <TableFilm/>
        </div>
      </div>
    </div>
  )
}
