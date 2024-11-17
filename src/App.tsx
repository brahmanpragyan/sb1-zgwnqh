import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import API from './pages/API';
import ApiExamples from './components/ApiExamples';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <IntroAnimation />
      <AnimatePresence mode="wait">
        <PageTransition key={`transition-${location.pathname}`} />
        <Routes location={location} key={`route-${location.pathname}`}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/api" element={<API />} />
          <Route path="/api/examples" element={<ApiExamples />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;