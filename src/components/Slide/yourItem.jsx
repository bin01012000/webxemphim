import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Item(props) {
    return (
        <NavLink to={props.link}><img style={{ paddingLeft: props.padding }} src={props.item} alt="bogia" className='imgFilm' loading='eager'/></NavLink>
    )
}
