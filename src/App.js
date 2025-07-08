import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">EasyHome Pro Web</h1>
      <nav className="mt-4">
        <Link to="/" className="mr-4 text-yellow-600">Inicio</Link>
        <Link to="/login" className="text-yellow-600">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Bienvenido a EasyHome Pro Web</div>} />
        <Route path="/login" element={<div>Pantalla de login (demo)</div>} />
      </Routes>
    </div>
  );
}
