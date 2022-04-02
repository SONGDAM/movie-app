import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import React from 'react';

function App() {
  return (
    <BrowserRouter basename='/movie-app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
