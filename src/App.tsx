import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { ToastContainer } from 'react-toastify';
import Layout from './core/components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Landing = lazy(() => import('./pages/Landing'));
const PrePayment = lazy(() => import('./pages/PrePayment'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <AnimatePresence mode="wait">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path=":courseUrlParam" element={<Landing />} />
                  <Route path=":courseUrlParam/prepayment" element={<PrePayment />} />
                </Route>
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </Router>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
