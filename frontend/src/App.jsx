import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import NoteListPage from './pages/NoteListPage'
import RegisterPage from './pages/RegisterPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/notes" element={<NoteListPage />} />
          </Routes>
      </Router>
  );
};
      export default App
