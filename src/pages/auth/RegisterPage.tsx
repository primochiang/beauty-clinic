import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RegisterStep } from '../../types';
import PageHeader from '../../components/sections/PageHeader';
import Stepper from '../../components/ui/Stepper';
import RegisterSteps from '../../components/auth/RegisterSteps';

const steps = [
  { id: 'account', label: '輸入帳號' },
  { id: 'verify', label: '驗證' },
  { id: 'info', label: '填寫資料' },
  { id: 'complete', label: '完成' }
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<RegisterStep>('account');

  const handleStepComplete = (step: RegisterStep, data?: Record<string, string>) => {
    console.log(`Step ${step} completed:`, data);

    // 進入下一步
    const stepOrder: RegisterStep[] = ['account', 'verify', 'info', 'complete'];
    const currentIndex = stepOrder.indexOf(step);

    if (step === 'complete') {
      // 完成註冊，導向會員中心
      navigate('/member');
    } else if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  return (
    <>
      <PageHeader title="會員註冊" subtitle="加入會員，享受專屬優惠" />

      <section className="py-8">
        <div className="max-w-md mx-auto px-4">
          {/* 步驟指示器 */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/* 註冊步驟內容 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <RegisterSteps currentStep={currentStep} onStepComplete={handleStepComplete} />
          </div>

          {/* 返回登入 */}
          {currentStep !== 'complete' && (
            <div className="mt-8 text-center">
              <p className="text-muted text-sm">
                已有帳號？
                <Link to="/login" className="text-secondary font-medium hover:underline ml-1">
                  立即登入
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
