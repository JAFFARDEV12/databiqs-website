
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/home/ScrollToTop';
const Home = lazy(() => import('./components/home/Home'));
const AboutUs = lazy(() => import('./components/about/AboutUs'));
const Contact = lazy(() => import('./components/contact/Contact'));
const BlogDetail = lazy(() => import('./components/blog/BlogDetail'));
const CaseStudies = lazy(() => import('./components/case-studies/caseStudies'));
const InsightsInnovation = lazy(() => import('./components/blog-page/InsightsInnovation'));
const Services = lazy(() => import('./components/services/Services'));
const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'));

function App() {
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
        <div className="App">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
              <Route path="/blog-page" element={<InsightsInnovation />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </>
  );
}

export default App;
