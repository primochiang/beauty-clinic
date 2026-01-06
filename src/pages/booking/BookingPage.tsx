import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingStep, PaymentMethod } from '../../types';
import PageHeader from '../../components/sections/PageHeader';
import {
  BookingSteps,
  ServiceSelector,
  DatePicker,
  TimeSlotPicker,
  PaymentOptions,
  BookingSummary
} from '../../components/booking';
import {
  getBookableServices,
  getServiceById,
  getAvailableDates,
  getTimeSlotsForDate
} from '../../data/services';

export default function BookingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [serviceCategory, setServiceCategory] = useState('all');

  const services = getBookableServices();
  const selectedService = selectedServiceId ? getServiceById(selectedServiceId) : null;
  const availableDates = selectedServiceId ? getAvailableDates(selectedServiceId) : [];
  const timeSlots = selectedServiceId && selectedDate
    ? getTimeSlotsForDate(selectedServiceId, selectedDate)
    : [];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    // 重置後續選擇
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedPayment(null);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleNext = () => {
    const steps: BookingStep[] = ['service', 'date', 'time', 'payment', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const steps: BookingStep[] = ['service', 'date', 'time', 'payment'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleConfirmPayment = () => {
    // Demo: 直接導向確認頁
    navigate('/booking/confirm', {
      state: {
        serviceId: selectedServiceId,
        date: selectedDate,
        time: selectedTime,
        paymentMethod: selectedPayment
      }
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'service':
        return !!selectedServiceId;
      case 'date':
        return !!selectedDate;
      case 'time':
        return !!selectedTime;
      case 'payment':
        return !!selectedPayment;
      default:
        return false;
    }
  };

  return (
    <>
      <PageHeader title="預約服務" subtitle="選擇您想要的療程並預約時間" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* 步驟指示器 */}
          <BookingSteps currentStep={currentStep} />

          <div className="mt-8 lg:flex lg:gap-8">
            {/* 主要內容 */}
            <div className="lg:flex-1">
              {/* Step 1: 選擇服務 */}
              {currentStep === 'service' && (
                <ServiceSelector
                  services={services}
                  selectedServiceId={selectedServiceId}
                  onSelect={handleServiceSelect}
                  activeCategory={serviceCategory}
                  onCategoryChange={setServiceCategory}
                />
              )}

              {/* Step 2: 選擇日期 */}
              {currentStep === 'date' && (
                <DatePicker
                  availableDates={availableDates}
                  selectedDate={selectedDate}
                  onSelect={handleDateSelect}
                />
              )}

              {/* Step 3: 選擇時段 */}
              {currentStep === 'time' && (
                <TimeSlotPicker
                  slots={timeSlots}
                  selectedSlot={selectedTime}
                  onSelect={setSelectedTime}
                />
              )}

              {/* Step 4: 確認付款 */}
              {currentStep === 'payment' && (
                <PaymentOptions
                  selectedMethod={selectedPayment}
                  onSelect={setSelectedPayment}
                />
              )}

              {/* 導航按鈕 */}
              <div className="flex justify-between mt-8">
                {currentStep !== 'service' ? (
                  <button
                    onClick={handlePrev}
                    className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition"
                  >
                    上一步
                  </button>
                ) : (
                  <div />
                )}

                {currentStep !== 'payment' ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    下一步
                  </button>
                ) : (
                  <button
                    onClick={handleConfirmPayment}
                    disabled={!canProceed()}
                    className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    確認付款
                  </button>
                )}
              </div>
            </div>

            {/* 側邊欄：預約摘要 */}
            <div className="hidden lg:block lg:w-80">
              <BookingSummary
                service={selectedService || null}
                date={selectedDate}
                time={selectedTime}
                paymentMethod={selectedPayment}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
