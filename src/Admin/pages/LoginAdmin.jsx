import React from 'react'
import LoginToAdmin from '../components/LoginAdmin'

export default function LoginAdmin(props) {
  return (
    <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <LoginToAdmin requestSign={props.requestSign}/>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
  )
}
