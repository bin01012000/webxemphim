import React from 'react'
import LeftAdmin from '../components/LeftAdmin'
import FormEditFilm from '../components/FormEditFilm'

import './HomeAdmin.scss'

export default function EditFilmAdmin() {
    return (
        <div className='squareAdmin'>
            <div className='containHomeAdmin'>

                <div className="leftHomeAdmin">
                    <LeftAdmin />
                </div>
                <div className='rightHomeAdmin'>
                    <FormEditFilm />
                </div>
            </div>
        </div>
    )
}
