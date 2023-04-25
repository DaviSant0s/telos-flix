import React from 'react'
import SecundaryGrandientButton from '../secundaryGradientButton'
import { AddBoxOutlined } from '@mui/icons-material'

export default function CriateAccountButton() {
  return (
    <SecundaryGrandientButton
    text="Criar Conta"
    icon= {<AddBoxOutlined/>}
    />
  )
}