import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLine, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">美研醫美</h3>
            <p className="text-white/70 mb-4">
              專業醫美診所，提供安全、有效的醫美療程服務。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary transition">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition">
                <FaLine className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/treatments" className="text-white/70 hover:text-secondary transition">
                  療程介紹
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-white/70 hover:text-secondary transition">
                  醫師團隊
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-white/70 hover:text-secondary transition">
                  醫師專欄
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-white/70 hover:text-secondary transition">
                  案例分享
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">聯絡資訊</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary flex-shrink-0" />
                <span>台北市大安區忠孝東路四段 123 號 5 樓</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-secondary" />
                <span>(02) 2771-1234</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-secondary" />
                <span>info@beauty-clinic.com.tw</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-4">營業時間</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex justify-between">
                <span>週一至週五</span>
                <span>10:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>週六</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>週日</span>
                <span>休診</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7311411362454!2d121.54396731500663!3d25.041280983970885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5b-g5a2d5p2x6Lev5Zub5q61!5e0!3m2!1szh-TW!2stw!4v1640000000000!5m2!1szh-TW!2stw"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="診所位置"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; 2024 美研醫美診所 Beauty Aesthetic Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
