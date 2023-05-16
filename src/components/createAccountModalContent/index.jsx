import React, { useState } from 'react'
import CustomOutlinedInput from '../customOutlinedInput'
import { FormControl, IconButton, InputAdornment } from '@mui/material'
import { AddBoxOutlined, CalendarMonth, Email, EmailOutlined, Person, PersonOutline, Phone, PhoneOutlined, Smartphone } from '@mui/icons-material'
import PasswordOutlinedInput from '../passwordOutlinedInput'
import PrimaryGrandientButton from '../primaryGrandientButton'
import SecundaryGrandientButton from '../secundaryGradientButton'
import './index.css'

export default function CreateAccountModalContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='createAccountModalContent'>
      <div className='firstSection'>
        <span>Crie sua conta</span>
        <FormControl sx={{ m: 1, width: '366px' }}>
          {/* Input 1 */}
          <div className='inputContainer' style={{marginTop: '56px'}}>
            
            <label className='input-label'>

              Nome

            </label>
            <CustomOutlinedInput 
            setValue={setEmail}
            placeholder='Nome' 
            type='text' 
            startAdornment={
              <InputAdornment>
                <IconButton>
                  <PersonOutline sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
              </InputAdornment>
            }/>

          </div>
          <div className='inputContainer' style={{marginTop: '46px'}}>
            
            <label className='input-label'>Email</label>
            <CustomOutlinedInput 
            setValue={setEmail}
            placeholder='E-mail' 
            type='text' 
            startAdornment={
              <InputAdornment>
                <IconButton>
                  <EmailOutlined sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
              </InputAdornment>
            }/>

          </div>

          {/* Botão 2 */}

          <div className='inputContainer' style={{marginTop: '46px'}}>

            <label className='input-label'>Celular </label>
            <CustomOutlinedInput 
            setValue={setEmail}
            placeholder='Celular' 
            type='text' 
            startAdornment={
              <InputAdornment>
                <IconButton>
                  <PhoneOutlined sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
              </InputAdornment>
            }/>

          </div>

          <div className='inputContainer' style={{marginTop: '46px'}}>

            <label className='input-label'>Data de nascimento</label>
            <CustomOutlinedInput 
            setValue={setEmail}
            placeholder='Data de nascimento' 
            type='text' 
            endAdornment={
              <InputAdornment>
                <IconButton>
                  <CalendarMonth sx={{color: '#EEEEEE', opacity: '80%'}}/>
                </IconButton>
              </InputAdornment>
            }/>

          </div>



        </FormControl>

      </div>

      <div className='secondSection'>
          

      <FormControl sx={{ m: 1, width: '366px' }}>

          <div className='inputContainer' style={{marginTop: '56px'}}>
            <label className='input-label'>Senha</label>
            <PasswordOutlinedInput setValue={setPassword}/>
          </div>

          <div className='inputContainer' style={{marginTop: '56px'}}>
            <label className='input-label'>Confirmar Senha</label>
            <PasswordOutlinedInput setValue={setPassword}/>
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
