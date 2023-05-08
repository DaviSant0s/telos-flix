import React from 'react'
import CustomOutlinedInput from '../customOutlinedInput'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility } from '@mui/icons-material'

export default function PasswordOutlinedInput( {setValue} ) {
  return (
    <CustomOutlinedInput 
        setValue={setValue}
        placeholder='Senha' 
        type='password' 
        startAdornment={
            <InputAdornment>
                <IconButton>
                    <Visibility sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
            </InputAdornment>
        }
    />
  )
}
