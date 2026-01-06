import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaUser, FaStar, FaCalendarCheck } from 'react-icons/fa';

export default function MobileBottomBar() {
  const location = useLocation();

  // Demo: 模擬登入狀態
  const isLoggedIn = true;

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="grid grid-cols-4 h-16">
        <a
          href="tel:0227711234"
          className="flex flex-col items-center justify-center text-primary hover:text-secondary transition"
        >
          <FaPhone className="text-lg" />
          <span className="text-xs mt-1">電話</span>
        </a>

        <Link
          to="/treatments"
          className={`flex flex-col items-center justify-center transition ${
            isActive('/treatments')
              ? 'text-secondary'
              : 'text-primary hover:text-secondary'
          }`}
        >
          <FaStar className="text-lg" />
          <span className="text-xs mt-1">療程</span>
        </Link>

        <Link
          to={isLoggedIn ? '/member' : '/login'}
          className={`flex flex-col items-center justify-center transition ${
            isActive('/member') || isActive('/login')
              ? 'text-secondary'
              : 'text-primary hover:text-secondary'
          }`}
        >
          <FaUser className="text-lg" />
          <span className="text-xs mt-1">{isLoggedIn ? '會員' : '登入'}</span>
        </Link>

        <Link
          to="/booking"
          className={`flex flex-col items-center justify-center ${
            isActive('/booking')
              ? 'bg-secondary/90 text-white'
              : 'bg-secondary text-white'
          }`}
        >
          <FaCalendarCheck className="text-lg" />
          <span className="text-xs mt-1">預約</span>
        </Link>
      </div>
    </div>
  );
}
