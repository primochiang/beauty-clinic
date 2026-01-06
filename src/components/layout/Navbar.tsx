import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  const isActive = (path: string) => location.pathname === path;

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
            <Link
              to="/contact"
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
            <Link
              to="/contact"
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
