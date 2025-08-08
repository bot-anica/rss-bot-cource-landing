import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Payment from './pages/Payment';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToAnchor from './components/common/ScrollToAncor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-white bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/payment/:plan" element={<Payment />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
