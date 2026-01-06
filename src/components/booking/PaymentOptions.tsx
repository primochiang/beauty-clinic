import { FaCreditCard, FaUniversity, FaCheck } from 'react-icons/fa';
import { PaymentMethod } from '../../types';

interface PaymentOptionsProps {
  selectedMethod: PaymentMethod | null;
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentOptions({
  selectedMethod,
  onSelect
}: PaymentOptionsProps) {
  const methods = [
    {
      id: 'credit_card' as PaymentMethod,
      name: '信用卡付款',
      description: '支援 VISA、MasterCard、JCB',
      icon: FaCreditCard
    },
    {
      id: 'transfer' as PaymentMethod,
      name: '銀行轉帳',
      description: 'ATM 轉帳或網路銀行',
      icon: FaUniversity
    }
  ];

  return (
    <div className="space-y-4">
      <h4 className="font-medium text-primary mb-4">選擇付款方式</h4>

      {methods.map((method) => {
        const isSelected = selectedMethod === method.id;
        const Icon = method.icon;

        return (
          <div
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition ${
              isSelected
                ? 'border-secondary bg-secondary/10'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  isSelected ? 'bg-secondary text-white' : 'bg-gray-100 text-muted'
                }`}
              >
                <Icon className="text-xl" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-primary">{method.name}</h5>
                <p className="text-sm text-muted">{method.description}</p>
              </div>
              {isSelected && (
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* 信用卡表單（Demo 展示） */}
      {selectedMethod === 'credit_card' && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                卡號
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                maxLength={19}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  有效期限
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  安全碼
                </label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 轉帳說明 */}
      {selectedMethod === 'transfer' && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <h5 className="font-medium text-primary mb-3">轉帳資訊</h5>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-muted">銀行：</span>
              <span className="text-primary font-medium">中國信託（822）</span>
            </p>
            <p>
              <span className="text-muted">帳號：</span>
              <span className="text-primary font-medium">1234-5678-9012-345</span>
            </p>
            <p className="text-muted mt-3">
              請於 12 小時內完成轉帳，並保留轉帳收據
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
