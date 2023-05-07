import React from 'react'
import PrimaryGrandientButton from '../primaryGrandientButton'
import { PersonOutline } from '@mui/icons-material'

export default function LoginButton( {onClick} ) {
  return (
    <PrimaryGrandientButton 
    onClick={onClick}
    text="Fazer Login" 
    icon={<PersonOutline/>}
    />
  )
}
