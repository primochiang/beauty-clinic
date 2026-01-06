import { FaCheck } from 'react-icons/fa';

interface Step {
  id: string;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: string;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="flex items-center justify-center py-6">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                  isCompleted
                    ? 'bg-secondary text-white'
                    : isCurrent
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-muted'
                }`}
              >
                {isCompleted ? <FaCheck className="text-sm" /> : index + 1}
              </div>
              <span
                className={`mt-2 text-xs text-center max-w-[80px] ${
                  isCurrent ? 'text-primary font-medium' : 'text-muted'
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {!isLast && (
              <div
                className={`w-12 md:w-20 h-1 mx-2 ${
                  isCompleted ? 'bg-secondary' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
