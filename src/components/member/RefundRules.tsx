import { FaInfoCircle } from 'react-icons/fa';
import { getRefundRules } from '../../data/services';

export default function RefundRules() {
  const rules = getRefundRules();

  return (
    <div className="bg-secondary/10 rounded-xl p-4">
      <div className="flex items-center mb-3">
        <FaInfoCircle className="text-secondary mr-2" />
        <h4 className="font-medium text-primary">退款規則</h4>
      </div>
      <ul className="space-y-2 text-sm">
        {rules.map((rule, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-muted">{rule.description}</span>
            <span
              className={`font-medium ${
                rule.refundPercentage === 0 ? 'text-red-500' : 'text-secondary'
              }`}
            >
              {rule.refundPercentage === 0
                ? '不予退款'
                : `退還 ${rule.refundPercentage}%`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
