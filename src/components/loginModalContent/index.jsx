import React from 'react';
import './index.css';
import image from './image.png';
import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { AddBoxOutlined, Email } from '@mui/icons-material';
import PrimaryGrandientButton from '../primaryGrandientButton';
import SecundaryGrandientButton from '../secundaryGradientButton';
import CustomOutlinedInput from '../customOutlinedInput';
import PasswordOutlinedInput from '../passwordOutlinedInput';

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

        {/* Input 1 */}
        <div className='inputContainer'>
          
          <label className='input-label'>Email</label>

          <CustomOutlinedInput 
          placeholder='Email' 
          type='text' 
          startAdornment={
            <InputAdornment>
              <IconButton>
                <Email sx={{color: '#EEEEEE', opacity: '80%'}}/>
              </IconButton>
            </InputAdornment>
          }/>

        </div>

        {/* Botão 2 */}

        <div className='inputContainer' style={{marginTop: '30px'}}>

          <label className='input-label'>Senha</label>
          <PasswordOutlinedInput/>

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
