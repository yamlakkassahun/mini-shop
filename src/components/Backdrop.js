import React from 'react'
import './Backdrop.css'

const Backdrop = ({show, click}) => {
    return show && (
        <ul className='backdrop' onClick={click}>
            
        </ul>
    )
}

export default Backdrop
