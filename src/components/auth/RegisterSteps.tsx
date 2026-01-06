import { useState } from 'react';
import { FaPhone, FaEnvelope, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';
import { RegisterStep } from '../../types';
import VerificationInput from './VerificationInput';

interface RegisterStepsProps {
  currentStep: RegisterStep;
  onStepComplete: (step: RegisterStep, data?: Record<string, string>) => void;
}

export default function RegisterSteps({ currentStep, onStepComplete }: RegisterStepsProps) {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Step 1: 選擇註冊方式 + 輸入帳號
  if (currentStep === 'account') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-primary mb-2">選擇註冊方式</h3>
          <p className="text-muted text-sm">請選擇您想要使用的註冊方式</p>
        </div>

        {/* 註冊方式選擇 */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setMethod('phone')}
            className={`flex-1 p-4 rounded-xl border-2 transition ${
              method === 'phone'
                ? 'border-secondary bg-secondary/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <FaPhone className={`text-2xl mx-auto mb-2 ${method === 'phone' ? 'text-secondary' : 'text-muted'}`} />
            <span className={`text-sm font-medium ${method === 'phone' ? 'text-primary' : 'text-muted'}`}>
              手機號碼
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMethod('email')}
            className={`flex-1 p-4 rounded-xl border-2 transition ${
              method === 'email'
                ? 'border-secondary bg-secondary/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <FaEnvelope className={`text-2xl mx-auto mb-2 ${method === 'email' ? 'text-secondary' : 'text-muted'}`} />
            <span className={`text-sm font-medium ${method === 'email' ? 'text-primary' : 'text-muted'}`}>
              電子郵件
            </span>
          </button>
        </div>

        {/* 帳號輸入 */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            {method === 'phone' ? '手機號碼' : '電子郵件'}
          </label>
          <div className="relative">
            {method === 'phone' && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">+886</span>
            )}
            <input
              type={method === 'phone' ? 'tel' : 'email'}
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder={method === 'phone' ? '912345678' : 'example@email.com'}
              className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition ${
                method === 'phone' ? 'pl-16' : ''
              }`}
            />
          </div>
        </div>

        <button
          onClick={() => onStepComplete('account', { method, account })}
          disabled={!account}
          className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          發送驗證碼
        </button>
      </div>
    );
  }

  // Step 2: 驗證碼
  if (currentStep === 'verify') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-primary mb-2">輸入驗證碼</h3>
          <p className="text-muted text-sm">
            驗證碼已發送至您的{method === 'phone' ? '手機' : '信箱'}
          </p>
        </div>

        <VerificationInput
          length={6}
          onComplete={(code) => onStepComplete('verify', { code })}
        />

        <div className="text-center">
          <button className="text-secondary text-sm hover:underline">
            重新發送驗證碼
          </button>
        </div>
      </div>
    );
  }

  // Step 3: 填寫資料
  if (currentStep === 'info') {
    const handleSubmit = () => {
      if (password !== confirmPassword) {
        return;
      }
      onStepComplete('info', { name, password });
    };

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-primary mb-2">填寫基本資料</h3>
          <p className="text-muted text-sm">請填寫您的基本資料完成註冊</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">姓名</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="請輸入您的姓名"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">設定密碼</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請設定密碼（至少6位）"
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
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

        <div>
          <label className="block text-sm font-medium text-primary mb-2">確認密碼</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="請再次輸入密碼"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm mt-1">密碼不一致</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!name || !password || password !== confirmPassword || password.length < 6}
          className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          完成註冊
        </button>
      </div>
    );
  }

  // Step 4: 完成
  if (currentStep === 'complete') {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">註冊成功！</h3>
        <p className="text-muted mb-8">歡迎加入美研醫美，開始享受專屬優惠</p>
        <button
          onClick={() => onStepComplete('complete')}
          className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition"
        >
          前往會員中心
        </button>
      </div>
    );
  }

  return null;
}
