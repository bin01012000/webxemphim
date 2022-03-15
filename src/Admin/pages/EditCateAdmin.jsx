import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import FormEditCate from '../components/FormEditCate'
import './HomeAdmin.scss'

export default function EditCateAdmin() {
    return (
        <div className='squareAdmin'>
            <div className='containHomeAdmin'>

                <div className="leftHomeAdmin">
                    <LeftAdmin />
                </div>
                <div className='rightHomeAdmin'>
                    <FormEditCate />
                </div>
            </div>
        </div>
    )
}
