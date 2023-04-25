import React from 'react'
import './index.css'

export default function SecundaryGrandientButton({icon, text}) {
    return (
        <button className='secundaryGrandientButton'>
            {icon}
            {text}
        </button>
      )
}
