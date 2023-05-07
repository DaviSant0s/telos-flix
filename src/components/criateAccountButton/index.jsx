import React from 'react'
import SecundaryGrandientButton from '../secundaryGradientButton'
import { AddBoxOutlined } from '@mui/icons-material'

export default function CriateAccountButton( {onClick} ) {
  return (
    <SecundaryGrandientButton
    onClick={onClick}
    text="Criar Conta"
    icon= {<AddBoxOutlined/>}
    />
  )
}