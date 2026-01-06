import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaLine, FaStar, FaInstagram } from 'react-icons/fa';

export default function FloatingSidebar() {
  return (
    <aside className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white shadow-lg rounded-l-xl py-4 px-3 space-y-4">
        <Link
          to="/contact"
          className="flex flex-col items-center text-primary hover:text-secondary transition p-2"
          title="立即預約"
        >
          <FaCalendarCheck className="text-xl mb-1" />
          <span className="text-xs">預約</span>
        </Link>
        <a
          href="#"
          className="flex flex-col items-center text-primary hover:text-secondary transition p-2"
          title="線上諮詢"
        >
          <FaLine className="text-xl mb-1" />
          <span className="text-xs">諮詢</span>
        </a>
        <Link
          to="/treatments"
          className="flex flex-col items-center text-primary hover:text-secondary transition p-2"
          title="熱門療程"
        >
          <FaStar className="text-xl mb-1" />
          <span className="text-xs">療程</span>
        </Link>
        <a
          href="#"
          className="flex flex-col items-center text-primary hover:text-secondary transition p-2"
          title="Instagram"
        >
          <FaInstagram className="text-xl mb-1" />
          <span className="text-xs">IG</span>
        </a>
      </div>
    </aside>
  );
}
