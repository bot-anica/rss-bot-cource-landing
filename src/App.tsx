import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing';
import PrePayment from './pages/PrePayment';
import Home from './pages/Home';
import Layout from './core/components/layout/Layout';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":courseUrlParam" element={<Landing />} />
                <Route path=":courseUrlParam/prepayment" element={<PrePayment />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
