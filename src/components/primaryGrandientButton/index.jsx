import React from 'react';
import './index.css'

export default function PrimaryGrandientButton({text, icon, onClick}) {
  return (
    <button onClick={onClick} className='primaryGrandientButton'>
        {icon}
        {text}
    </button>
  )
}
