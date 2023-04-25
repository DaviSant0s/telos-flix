import React from 'react'
import PrimaryGrandientButton from '../primaryGrandientButton'
import { PersonOutline } from '@mui/icons-material'

export default function LoginButton() {
  return (
    <PrimaryGrandientButton text="Fazer Login" icon={<PersonOutline/>}/>
  )
}
