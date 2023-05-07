import React from 'react'
import './index.css'

export default function SecundaryGrandientButton({icon, text, onClick}) {
    return (
        <button onClick={onClick} className='secundaryGrandientButton'>
            {icon}
            {text}
        </button>
      )
}
