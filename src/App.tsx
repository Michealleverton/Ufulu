import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Analytics } from './pages/Analytics';
import { Community } from './pages/Community';
import { Login } from './userdash/pages/Login';
import { Register } from './userdash/pages/Register';
import { Dashboard } from './userdash/pages/Dashboard';
import { Journal } from './pages/Journal';
import { Trades } from './pages/Trades';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/community" element={
          <>
            <Navbar />
            <Community />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Analytics />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="journal" element={<Journal />} />
          <Route path="trades" element={<Trades />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}