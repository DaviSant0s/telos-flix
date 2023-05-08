import React from 'react';
import './index.css';
import image from './image.png';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { AddBoxOutlined, Email,  Visibility } from '@mui/icons-material';
import PrimaryGrandientButton from '../primaryGrandientButton';
import SecundaryGrandientButton from '../secundaryGradientButton';

export default function LoginModalContent() {
  return (
    <div className='loginModalContent'>
      <div className='firstSection'>
        Login

        <div className='imageContainer'>
          <img width='295' height= '127px' src={image} alt="imagem" />
        </div>

      </div>

      <div className='secondSection'>

      <FormControl sx={{ m: 1, width: '366px' }}>

        {/* Botão 1 */}
        <div className='inputContainer'>
          <label className='input-label'>Email</label>
          <OutlinedInput
          sx={{
            background: 'rgba(238, 238, 238, 0.05)',
            color: '#EEEEEE',
            border: '1px solid rgba(238, 238, 238, 0.05)',
            boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '14px'
          }}
          id='filled-adornment-username'
          type='text'
          placeholder='Email'
          // o startAdornment é a possibilidade de colocar icones no início desse input
          startAdornment={
            <InputAdornment>
              <IconButton>
                <Email sx={{color: '#EEEEEE', opacity: '80%'}}/>
              </IconButton>
            </InputAdornment>
          }
          >
          </OutlinedInput>
        </div>

        {/* Botão 2 */}

        <div className='inputContainer' style={{marginTop: '30px'}}>
          <label className='input-label'>Senha</label>
          <OutlinedInput
            sx={{
              background: 'rgba(238, 238, 238, 0.05)',
              color: '#EEEEEE',
              border: '1px solid rgba(238, 238, 238, 0.05)',
              boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '14px'
            }}
            id='filled-adornment-password'
            type='text'
            placeholder='Senha'
            // o startAdornment é a possibilidade de colocar icones no início desse input
            startAdornment={
              <InputAdornment>
                <IconButton>
                  <Visibility sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
              </InputAdornment>}
          >
          </OutlinedInput>
        </div>

        <div className='buttonsSection'>
          <PrimaryGrandientButton text='Entrar'/>
          <SecundaryGrandientButton text='Quero criar uma conta' icon={<AddBoxOutlined/>}/>
        </div>

      </FormControl>

      </div>
    </div>
  )
}
