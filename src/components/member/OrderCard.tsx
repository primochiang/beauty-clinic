import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { Order } from '../../types';
import { OrderStatusBadge, PaymentStatusBadge } from './OrderStatusBadge';
import { getDoctorById } from '../../data/doctors';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const doctor = getDoctorById(order.doctorId);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return `${d.getMonth() + 1}/${d.getDate()} (${weekDays[d.getDay()]})`;
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-primary text-lg">{order.serviceName}</h3>
            <p className="text-sm text-muted">{order.storeName}</p>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>

        {/* 預約資訊 */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <FaCalendarAlt className="text-secondary mr-2 w-4" />
            <span className="text-muted">{formatDate(order.date)}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaClock className="text-secondary mr-2 w-4" />
            <span className="text-muted">{order.timeSlot}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaMapMarkerAlt className="text-secondary mr-2 w-4" />
            <span className="text-muted">{order.storeAddress}</span>
          </div>
        </div>

        {/* 金額與付款狀態 */}
        <div className="flex items-center justify-between py-4 border-t border-b mb-4">
          <div>
            <span className="text-muted text-sm">訂金金額</span>
            <p className="font-bold text-secondary">
              NT$ {order.deposit.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <span className="text-muted text-sm">付款狀態</span>
            <div className="mt-1">
              <PaymentStatusBadge status={order.paymentStatus} />
            </div>
          </div>
        </div>

        {/* 醫師資訊 */}
        {doctor && (
          <div className="flex items-center mb-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="text-sm font-medium text-primary">{doctor.name} 醫師</p>
              <p className="text-xs text-muted">{doctor.specialty}</p>
            </div>
          </div>
        )}

        {/* 操作按鈕 */}
        <div className="flex gap-3">
          {order.status === 'upcoming' && (
            <>
              <Link
                to={`/member/refund/${order.id}`}
                className="flex-1 text-center py-2 border border-gray-200 text-muted rounded-lg text-sm hover:border-red-300 hover:text-red-500 transition"
              >
                取消訂單
              </Link>
              <button className="flex-1 py-2 border border-gray-200 text-muted rounded-lg text-sm hover:border-secondary hover:text-secondary transition">
                改期
              </button>
            </>
          )}
          {order.status === 'completed' && (
            <>
              <Link
                to={`/member/feedback/${order.id}`}
                className="flex-1 text-center py-2 border border-secondary text-secondary rounded-lg text-sm hover:bg-secondary hover:text-white transition"
              >
                意見回饋
              </Link>
              <Link
                to="/booking"
                className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-sm hover:bg-accent transition"
              >
                再次預約
              </Link>
            </>
          )}
          {order.status === 'cancelled' && (
            <Link
              to="/booking"
              className="flex-1 text-center py-2 bg-primary text-white rounded-lg text-sm hover:bg-accent transition"
            >
              重新預約
            </Link>
          )}
        </div>
      </div>

      {/* 查看詳情 */}
      <Link
        to={`/member/orders/${order.id}`}
        className="flex items-center justify-center py-3 bg-light text-muted text-sm hover:bg-gray-100 transition"
      >
        查看訂單詳情
        <FaChevronRight className="ml-1 text-xs" />
      </Link>
    </div>
  );
}
