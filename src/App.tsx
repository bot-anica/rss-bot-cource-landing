import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing';
import Checkout from './pages/Checkout';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import ScrollToAnchor from './core/components/common/ScrollToAncor';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToAnchor />
        <div className="min-h-screen bg-white bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/checkout/:plan" element={<Checkout />} />
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
