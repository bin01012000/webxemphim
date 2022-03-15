import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import TableCate from '../components/TableCate'
import './HomeAdmin.scss'

export default function ListCateAdmin() {
  return (
    <div className='squareAdmin'>
      <div className='containHomeAdmin'>

        <div className="leftHomeAdmin">
          <LeftAdmin />
        </div>
        <div className='rightHomeAdmin'>
          <TableCate/>
        </div>
      </div>
    </div>
  )
}
