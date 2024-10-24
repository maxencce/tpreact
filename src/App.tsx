import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './components/BeerList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <BeerList/>
                }/>
                <Route path='/about' element={
                    <div>
                        <h1>About</h1>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
