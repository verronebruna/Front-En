/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/estatics/navbar/navbar';
import Footer from './components/estatics/footer/footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Login from './pages/login/Login';
import {Grid} from '@material-ui/core';
import Home from './pages/home/Home';
import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';

function App() {
  return (
   <Router>
     <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh'}}>
        <Route exact path='/'>
            <Login />
          </Route>
         <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>
          
          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

        </div>
      </Switch>
    <Footer />
   </Router>
  );
}

export default App;
