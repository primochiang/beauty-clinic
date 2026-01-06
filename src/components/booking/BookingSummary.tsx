import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { BookableService, PaymentMethod } from '../../types';

interface BookingSummaryProps {
  service: BookableService | null;
  date: string | null;
  time: string | null;
  paymentMethod: PaymentMethod | null;
}

export default function BookingSummary({
  service,
  date,
  time,
  paymentMethod
}: BookingSummaryProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} (${weekDays[d.getDay()]})`;
  };

  const paymentMethodName = {
    credit_card: '信用卡付款',
    transfer: '銀行轉帳'
  };

  if (!service) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h4 className="font-bold text-primary mb-4">預約摘要</h4>
        <p className="text-muted text-sm">請選擇服務項目</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
      <h4 className="font-bold text-primary mb-4">預約摘要</h4>

      {/* 服務圖片 */}
      <div
        className="h-32 bg-cover bg-center rounded-xl mb-4"
        style={{ backgroundImage: `url('${service.image}')` }}
      />

      {/* 服務名稱 */}
      <h5 className="font-bold text-primary text-lg mb-2">{service.name}</h5>

      {/* 預約資訊 */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm">
          <FaMapMarkerAlt className="text-secondary mr-3" />
          <span className="text-muted">美研醫美診所</span>
        </div>
        {date && (
          <div className="flex items-center text-sm">
            <FaCalendarAlt className="text-secondary mr-3" />
            <span className="text-muted">{formatDate(date)}</span>
          </div>
        )}
        {time && (
          <div className="flex items-center text-sm">
            <FaClock className="text-secondary mr-3" />
            <span className="text-muted">{time}</span>
          </div>
        )}
      </div>

      {/* 價格明細 */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted">療程費用</span>
          <span className="text-primary">NT$ {service.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted">預付訂金</span>
          <span className="text-secondary font-medium">
            NT$ {service.deposit.toLocaleString()}
          </span>
        </div>
        {paymentMethod && (
          <div className="flex justify-between text-sm">
            <span className="text-muted">付款方式</span>
            <span className="text-primary">{paymentMethodName[paymentMethod]}</span>
          </div>
        )}
      </div>

      {/* 總計 */}
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-muted">應付訂金</span>
          <span className="text-2xl font-bold text-secondary">
            NT$ {service.deposit.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-muted mt-2">
          * 剩餘款項 NT$ {(service.price - service.deposit).toLocaleString()} 於療程當日支付
        </p>
      </div>
    </div>
  );
}
