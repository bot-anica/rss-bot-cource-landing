import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import ScrollToAnchor from './core/components/common/ScrollToAncor';
import PrePayment from './pages/PrePayment';
import Home from './pages/Home';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToAnchor />
        <div className="min-h-screen bg-white">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:courseUrlParam" element={<Landing />} />
              <Route path="/:courseUrlParam/prepayment" element={<PrePayment />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
