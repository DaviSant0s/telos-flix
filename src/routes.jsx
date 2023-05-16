import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Video from './pages/video';
import MovieProvider from './contexts/MovieProvider';

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' exact/>
            <Route element={
              <MovieProvider>
                <Video/>
              </MovieProvider>
            } path='/videos'/>
        </Routes>
    </BrowserRouter>
  )
}

/* Element: O que vai ser exibido na tela */
/* path='/': Indica que é a página inicial */
/* exact: Apenas quando for o barra sem mais nada é que ele vai acessar essa rota home */
/* O header vai ser mostrado idependente da rota que for executada */