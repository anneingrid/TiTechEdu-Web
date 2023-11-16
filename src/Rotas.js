import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Perfil from './Perfil'; 
import EncerrarPerfil from './EncerrarPerfil'; 

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/encerrar-perfil" component={EncerrarPerfil} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
