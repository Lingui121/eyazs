import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Pages/NavBar';
import planos from './Pages/Planos';
import MinhaConta from './Pages/MinhaConta';
import Footer from './Pages/Footer';
import CardHome from './Pages/CardTiposDePagamentos';
import CardPlanosResidenciais from './Pages/CardPlanosResidenciais';
import PlanosResidenciais from './Pages/PlanosResidenciais';
import PlanosEmpresariais from './Pages/PlanosEmpresariais';
import TiposDePagamentos from './Pages/TiposDePagamentos';
import PaginaNaoEncontrada from './Pages/PaginaNaoEncontrada';
import TermosDeUso from './Pages/TermosDeUso';
import PagamentoEmola from './Pages/PagamentoViaEmola';
import HistoricoPagammento from './Pages/HistoricoPagamentos';
import Login from './Pages/Login';
import PagamentoResidencia from './Pages/PagamentoResidencia';
import PagamentoEmpresa from './Pages/PagamentoEmpresa';
import PagamentoViaMpesa from './Pages/PagamentoViaMpesa';
import Recibo from './Pages/Recibo';
import Admin from './Pages/Admin';
import ReciboUsuario from './Pages/RecibosUsuario';
import RecibosUsuario from './Pages/RecibosUsuario';
import colaboradores from './Pages/colaboradores';
import Clientes from "./Pages/Clientes" 
import DetalhesUsuario from './Pages/DetalhesUsuario';
import AdicionarClientes from './Pages/AdicionarClientes';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <AuthProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' Component={Home} />
            <Route path='/navbar' Component={NavBar} />
            <Route path='/planos' Component={planos} />
            <Route path='/minhaconta' Component={MinhaConta} />
            <Route path='/footer' Component={Footer} />
            <Route path='/cardhome' Component={CardHome} />
            <Route path='/cardplanosresidenciais' Component={CardPlanosResidenciais} />
            <Route path='/planosresidenciais' Component={PlanosResidenciais} />
            <Route path='/planosempresariais' Component={PlanosEmpresariais} />
            <Route path='/tiposdepagamentos' Component={TiposDePagamentos} />
            <Route path='/pagamentoviaemola' Component={PagamentoEmola} />
            <Route path='/historicopagamento' Component={HistoricoPagammento} />
            <Route path='/minhaconta' Component={MinhaConta} />
            <Route path='/termosdeuso' Component={TermosDeUso} />
            <Route path='/planoresidencia/:id' Component={PagamentoResidencia} />
            <Route path='/planoempresa/:id' Component={PagamentoEmpresa}/>
            <Route path='/pagamentoviampesa' Component={PagamentoViaMpesa}/>
            <Route path='/recibo/:id' Component={Recibo} />
            <Route path='/admin/clientes/recibosusuario/:id' Component={RecibosUsuario} />
            <Route path='/admin/clientes' Component={Clientes} />
            <Route path='/admin/clientes/adicionarcliente/:id' Component={AdicionarClientes} />
            <Route path='/admin/clientes/detalhesusuario/:id' Component={DetalhesUsuario} />
            <Route path='/admin/colaboradores' Component={colaboradores} />
            <Route path='/admin' Component={Admin} />
            <Route path='*' Component={PaginaNaoEncontrada} />
          </Routes >
           </AuthProvider>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
