import { useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/sections/PageHeader';
import SocialLoginButtons from '../../components/auth/SocialLoginButtons';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSocialLogin = (provider: 'line' | 'google') => {
    // Demo: 直接導向會員中心
    console.log(`${provider} login`);
    navigate('/member');
  };

  const handleFormLogin = (data: { account: string; password: string; method: 'phone' | 'email' }) => {
    // Demo: 直接導向會員中心
    console.log('Form login:', data);
    navigate('/member');
  };

  return (
    <>
      <PageHeader title="會員登入" subtitle="登入享受更多優惠與服務" />

      <section className="py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* 社群登入 */}
            <SocialLoginButtons
              onLineLogin={() => handleSocialLogin('line')}
              onGoogleLogin={() => handleSocialLogin('google')}
            />

            {/* 分隔線 */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="px-4 text-sm text-muted">或使用一般登入</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* 登入表單 */}
            <LoginForm onSubmit={handleFormLogin} />

            {/* 註冊連結 */}
            <div className="mt-8 text-center">
              <p className="text-muted text-sm">
                尚未註冊？
                <Link to="/register" className="text-secondary font-medium hover:underline ml-1">
                  立即註冊
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
