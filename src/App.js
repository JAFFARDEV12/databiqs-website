
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import BlogDetail from './components/blog/BlogDetail';
import './App.css';
import ScrollToTop from './components/home/ScrollToTop';
import CaseStudies from './components/case-studies/caseStudies';
import CaseStudiesDetails from './components/case-studies/caseStudiesDetails';
import InsightsInnovation from './components/blog-page/InsightsInnovation';
import Services from './components/services/Services';
import ServiceDetail from './components/services/ServiceDetail';
import Chatbot from './components/Chatbot/Chatbot';
import BookConsultation from './components/consultation/BookConsultation';
import DoorIntro from './components/intro/DoorIntro';

function AppRoutes({ introDone, setIntroDone }) {
  const location = useLocation();

  const shouldShowIntro = location.pathname === '/' && !introDone;

  return (
    <>
      {shouldShowIntro ? (
        <DoorIntro
          onDone={() => {
            setIntroDone(true);
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
        />
      ) : null}

      {!shouldShowIntro ? <Header /> : null}

      <div className={`App ${shouldShowIntro ? 'App--introHidden' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/blog-page" element={<InsightsInnovation />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudiesDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const root = document.documentElement;

    const isTextInput = (el) =>
      el instanceof HTMLElement &&
      el.matches(
        'input:not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, [contenteditable="true"]'
      );

    const updateKeyboardOffset = () => {
      if (!window.visualViewport) {
        root.style.setProperty('--keyboard-offset', '0px');
        return;
      }

      const viewport = window.visualViewport;
      const keyboardHeight = Math.max(
        0,
        window.innerHeight - viewport.height - viewport.offsetTop
      );
      root.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
    };

    const handleFocusIn = (event) => {
      if (!isTextInput(event.target)) return;
      document.body.classList.add('keyboard-open');
      updateKeyboardOffset();

      setTimeout(() => {
        if (event.target instanceof HTMLElement) {
          event.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }, 120);
    };

    const handleFocusOut = () => {
      setTimeout(() => {
        if (!isTextInput(document.activeElement)) {
          document.body.classList.remove('keyboard-open');
          root.style.setProperty('--keyboard-offset', '0px');
        }
      }, 120);
    };

    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);
    window.addEventListener('resize', updateKeyboardOffset);
    window.visualViewport?.addEventListener('resize', updateKeyboardOffset);
    window.visualViewport?.addEventListener('scroll', updateKeyboardOffset);

    return () => {
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
      window.removeEventListener('resize', updateKeyboardOffset);
      window.visualViewport?.removeEventListener('resize', updateKeyboardOffset);
      window.visualViewport?.removeEventListener('scroll', updateKeyboardOffset);
      root.style.setProperty('--keyboard-offset', '0px');
      document.body.classList.remove('keyboard-open');
    };
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <AppRoutes introDone={introDone} setIntroDone={setIntroDone} />
      </Router>
      {introDone ? <Chatbot /> : null}
    </>
  );
}

export default App;
