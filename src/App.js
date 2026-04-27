
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import BlogDetail from './components/blog/BlogDetail';

import Chatbot from './components/Chatbot/Chatbot';
import './App.css';
import ScrollToTop from './components/home/ScrollToTop';
import CaseStudies from './components/case-studies/caseStudies';
import InsightsInnovation from './components/blog-page/InsightsInnovation';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Router>
         <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/blog-page" element={<InsightsInnovation />} />
            <Route path="/case-studies" element={<CaseStudies />} /> {/* Placeholder for Case Studies page */}
            <Route path="/services" element={<Services />} />
              

          </Routes>
        </div>
      </Router>
      <Chatbot />
    </>
  );
}

export default App;
