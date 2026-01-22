import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import BlogDetail from './components/blog/BlogDetail';
import InsightsInnovation from './components/insights-innovation/InsightsInnovation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/insights-and-innovation" element={<InsightsInnovation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
