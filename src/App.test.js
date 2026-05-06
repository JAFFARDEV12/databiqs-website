import { render, screen } from '@testing-library/react';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
    Routes: ({ children }) => <div data-testid="routes">{children}</div>,
    Route: ({ element }) => element,
    useLocation: () => ({ pathname: '/' }),
  }),
  { virtual: true }
);

jest.mock('./components/home/Header', () => () => <div>Header</div>);
jest.mock('./components/home/Home', () => () => <div>Home</div>);
jest.mock('./components/about/AboutUs', () => () => <div>About</div>);
jest.mock('./components/contact/Contact', () => () => <div>Contact</div>);
jest.mock('./components/blog/BlogDetail', () => () => <div>BlogDetail</div>);
jest.mock('./components/home/ScrollToTop', () => () => null);
jest.mock('./components/case-studies/caseStudies', () => () => <div>CaseStudies</div>);
jest.mock('./components/case-studies/caseStudiesDetails', () => () => <div>CaseStudiesDetails</div>);
jest.mock('./components/blog-page/InsightsInnovation', () => () => <div>InsightsInnovation</div>);
jest.mock('./components/services/Services', () => () => <div>Services</div>);
jest.mock('./components/services/ServiceDetail', () => () => <div>ServiceDetail</div>);
jest.mock('./components/Chatbot/Chatbot', () => () => <div>Chatbot</div>);
jest.mock('./components/consultation/BookConsultation', () => () => <div>BookConsultation</div>);

jest.mock('./components/intro/DoorIntro', () => () => <div>DoorIntro</div>);

test('shows intro on home route by default', () => {
  const App = require('./App').default;
  render(<App />);
  expect(screen.getByText('DoorIntro')).toBeInTheDocument();
});
