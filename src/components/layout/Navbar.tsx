import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const navLinks = [
  { path: '/', label: '首頁' },
  { path: '/treatments', label: '療程介紹' },
  { path: '/doctors', label: '醫師團隊' },
  { path: '/articles', label: '醫師專欄' },
  { path: '/cases', label: '案例分享' },
  { path: '/contact', label: '聯絡我們' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Demo: 模擬登入狀態（可切換測試）
  const isLoggedIn = true;

  const isActive = (path: string) => location.pathname === path;
  const isMemberPage = location.pathname.startsWith('/member');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">美研醫美</span>
            <span className="text-sm text-secondary">Aesthetic Clinic</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition ${
                  isActive(link.path)
                    ? 'text-primary font-medium'
                    : 'text-muted hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* 會員/登入按鈕 */}
            {isLoggedIn ? (
              <Link
                to="/member"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  isMemberPage
                    ? 'bg-secondary text-white'
                    : 'text-primary hover:bg-gray-100'
                }`}
              >
                <FaUser />
                <span>會員中心</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-primary hover:text-secondary transition"
              >
                <FaUser />
                <span>登入</span>
              </Link>
            )}

            <Link
              to="/booking"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition"
            >
              立即預約
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive(link.path)
                    ? 'text-primary font-medium'
                    : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* 會員/登入連結 */}
            {isLoggedIn ? (
              <Link
                to="/member"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-secondary font-medium"
              >
                <FaUser className="inline mr-2" />
                會員中心
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-muted"
              >
                <FaUser className="inline mr-2" />
                登入 / 註冊
              </Link>
            )}

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center px-6 py-3 rounded-full"
            >
              立即預約
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
