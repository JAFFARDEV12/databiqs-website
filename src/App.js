
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import BlogDetail from './components/blog/BlogDetail';
import InsightsInnovation from './components/insights-innovation/InsightsInnovation';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';
import ScrollToTop from './components/home/ScrollToTop';
import CaseStudies from './components/case-studies/caseStudies';

function App() {
  return (
    <>
      <Router>
         <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/insights-and-innovation" element={<InsightsInnovation />} />
            <Route path="/case-studies" element={<CaseStudies />} /> {/* Placeholder for Case Studies page */}

              

          </Routes>
        </div>
      </Router>
      <Chatbot />
    </>
  );
}

export default App;
