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

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Member Pages
import MemberCenterPage from './pages/member/MemberCenterPage';
import OrdersPage from './pages/member/OrdersPage';
import OrderDetailPage from './pages/member/OrderDetailPage';
import AccountPage from './pages/member/AccountPage';
import RefundPage from './pages/member/RefundPage';
import FeedbackPage from './pages/member/FeedbackPage';
import SupportPage from './pages/member/SupportPage';

// Booking Pages
import BookingPage from './pages/booking/BookingPage';
import BookingConfirmPage from './pages/booking/BookingConfirmPage';

function App() {
  useScrollToTop();

  return (
    <div className="font-sans bg-light text-dark min-h-screen">
      <Navbar />
      <FloatingSidebar />

      <main>
        <Routes>
          {/* 現有路由 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 認證路由 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 會員中心路由 */}
          <Route path="/member" element={<MemberCenterPage />} />
          <Route path="/member/orders" element={<OrdersPage />} />
          <Route path="/member/orders/:orderId" element={<OrderDetailPage />} />
          <Route path="/member/account" element={<AccountPage />} />
          <Route path="/member/refund/:orderId" element={<RefundPage />} />
          <Route path="/member/feedback/:orderId" element={<FeedbackPage />} />
          <Route path="/member/support" element={<SupportPage />} />

          {/* 預約路由 */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/confirm" element={<BookingConfirmPage />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

export default App;
