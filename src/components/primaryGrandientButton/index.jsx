import React from 'react';
import './index.css'

export default function PrimaryGrandientButton({text, icon}) {
  return (
    <button className='primaryGrandientButton'>
        {icon}
        {text}
    </button>
  )
}
