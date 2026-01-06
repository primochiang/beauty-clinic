import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FloatingSidebar, MobileBottomBar } from './components/layout';
import { useScrollToTop } from './hooks/useScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import ArticlesPage from './pages/ArticlesPage';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';

function App() {
  useScrollToTop();

  return (
    <div className="font-sans bg-light text-dark min-h-screen">
      <Navbar />
      <FloatingSidebar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

export default App;
