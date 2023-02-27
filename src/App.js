import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/routes/Home/Home';
import People from './components/routes/People/People';
import PeopleId from './components/routes/PeopleId/PeopleId';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/people/:id" element={<PeopleId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
