import { useState } from 'react';
import { FaPhone, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

interface LoginFormProps {
  onSubmit: (data: { account: string; password: string; method: 'phone' | 'email' }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ account, password, method });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 登入方式切換 */}
      <div className="flex border-b">
        <button
          type="button"
          onClick={() => setMethod('phone')}
          className={`flex-1 py-3 text-center font-medium transition ${
            method === 'phone'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted hover:text-primary'
          }`}
        >
          <FaPhone className="inline mr-2" />
          手機登入
        </button>
        <button
          type="button"
          onClick={() => setMethod('email')}
          className={`flex-1 py-3 text-center font-medium transition ${
            method === 'email'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted hover:text-primary'
          }`}
        >
          <FaEnvelope className="inline mr-2" />
          Email 登入
        </button>
      </div>

      {/* 帳號輸入 */}
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          {method === 'phone' ? '手機號碼' : '電子郵件'}
        </label>
        <div className="relative">
          {method === 'phone' && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              +886
            </span>
          )}
          <input
            type={method === 'phone' ? 'tel' : 'email'}
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder={method === 'phone' ? '912345678' : 'example@email.com'}
            className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition ${
              method === 'phone' ? 'pl-16' : ''
            }`}
            required
          />
        </div>
      </div>

      {/* 密碼輸入 */}
      <div>
        <label className="block text-sm font-medium text-primary mb-2">密碼</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* 記住我 & 忘記密碼 */}
      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary mr-2"
          />
          <span className="text-sm text-muted">記住我</span>
        </label>
        <a href="#" className="text-sm text-secondary hover:underline">
          忘記密碼？
        </a>
      </div>

      {/* 登入按鈕 */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-accent transition"
      >
        登入
      </button>
    </form>
  );
}
