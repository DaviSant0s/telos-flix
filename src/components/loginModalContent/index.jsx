import React from 'react';
import './index.css';
import image from './image.png';

export default function LoginModalContent() {
  return (
    <div className='loginModalContent'>
      <div className='firstSection'>
        Login

        <div className='imageContainer'>
          <img width='295' height= '127px' src={image} alt="imagem" />
        </div>

      </div>
      <div className='SecondSection'>Formulário</div>
    </div>
  )
}
