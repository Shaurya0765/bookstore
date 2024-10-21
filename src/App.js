import  React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800 font-sans relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <path d="M0 0h80v80H0z" fill="#047857"/>
            <path d="M0 0h40v40H0z" fill="#065f46"/>
          </svg>
        </div>
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;