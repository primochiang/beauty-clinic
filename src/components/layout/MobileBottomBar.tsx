import { Link } from 'react-router-dom';
import { FaPhone, FaLine, FaStar, FaCalendarCheck } from 'react-icons/fa';

export default function MobileBottomBar() {
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
        <a
          href="#"
          className="flex flex-col items-center justify-center text-primary hover:text-secondary transition"
        >
          <FaLine className="text-lg" />
          <span className="text-xs mt-1">LINE</span>
        </a>
        <Link
          to="/treatments"
          className="flex flex-col items-center justify-center text-primary hover:text-secondary transition"
        >
          <FaStar className="text-lg" />
          <span className="text-xs mt-1">療程</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center bg-secondary text-white"
        >
          <FaCalendarCheck className="text-lg" />
          <span className="text-xs mt-1">預約</span>
        </Link>
      </div>
    </div>
  );
}
