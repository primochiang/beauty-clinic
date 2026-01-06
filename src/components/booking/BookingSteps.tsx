import Stepper from '../ui/Stepper';

interface BookingStepsProps {
  currentStep: string;
}

const steps = [
  { id: 'service', label: '選擇服務' },
  { id: 'date', label: '選擇日期' },
  { id: 'time', label: '選擇時段' },
  { id: 'payment', label: '確認付款' }
];

export default function BookingSteps({ currentStep }: BookingStepsProps) {
  return <Stepper steps={steps} currentStep={currentStep} />;
}
