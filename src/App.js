import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';

import App from "./App";

const root = createRoot(document.getElementById('root'));

root.render(<App />);





import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import Update from './Pages/Update';
import {Container} from 'react-bootstrap';

const App = () => {
  return (

    <BrowserRouter>
     <Header />
     <Container>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/add' element={<AddProduct />} />
<Route path='/update' element={<Update />} />
<Route path='/login' element={<Login />} />
</Routes>

</Container>
   </BrowserRouter>


  )
}

export default App
