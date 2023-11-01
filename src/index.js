import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil'
import Forum  from './pages/Forum'
import Cursos from './pages/Cursos'
import Vagas from './pages/Vagas';
import './App.css';


const roteador = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/perfil', element: <Perfil/>},
  {path: '/forum', element: <Forum/>},
  {path: '/cursos', element: <Cursos/>},
  {path: '/linkedin', element: <Vagas/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={roteador}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
