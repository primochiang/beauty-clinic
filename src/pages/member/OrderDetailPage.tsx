import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaCreditCard,
  FaReceipt
} from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import { OrderStatusBadge, PaymentStatusBadge } from '../../components/member/OrderStatusBadge';
import { getOrderById } from '../../data/orders';
import { getDoctorById } from '../../data/doctors';
import { getRefundRules } from '../../data/services';

export default function OrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const order = orderId ? getOrderById(orderId) : null;
  const doctor = order ? getDoctorById(order.doctorId) : null;
  const refundRules = getRefundRules();

  if (!order) {
    return (
      <>
        <PageHeader title="訂單詳情" subtitle="查看訂單完整資訊" />
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-muted">找不到此訂單</p>
            <Link to="/member/orders" className="text-secondary hover:underline mt-4 inline-block">
              返回訂單列表
            </Link>
          </div>
        </section>
      </>
    );
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} (${weekDays[d.getDay()]})`;
  };

  const formatDateTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  const paymentMethodName = {
    credit_card: '信用卡',
    transfer: '銀行轉帳'
  };

  return (
    <>
      <PageHeader title="訂單詳情" subtitle="查看訂單完整資訊" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1">
              {/* 返回按鈕 */}
              <Link
                to="/member/orders"
                className="inline-flex items-center text-muted hover:text-primary mb-6 transition"
              >
                <FaArrowLeft className="mr-2" />
                返回訂單列表
              </Link>

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* 訂單標頭 */}
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted mb-2">
                        <FaReceipt />
                        <span>訂單編號：{order.id}</span>
                      </div>
                      <h2 className="text-xl font-bold text-primary">
                        {order.serviceName}
                      </h2>
                    </div>
                    <OrderStatusBadge status={order.status} />
                  </div>
                </div>

                {/* 預約資訊 */}
                <div className="p-6 border-b">
                  <h3 className="font-medium text-primary mb-4">預約資訊</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-secondary mr-3 w-5" />
                      <div>
                        <p className="text-sm text-muted">預約日期</p>
                        <p className="font-medium text-primary">{formatDate(order.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-secondary mr-3 w-5" />
                      <div>
                        <p className="text-sm text-muted">預約時段</p>
                        <p className="font-medium text-primary">{order.timeSlot}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-secondary mr-3 w-5" />
                      <div>
                        <p className="text-sm text-muted">診所地址</p>
                        <p className="font-medium text-primary">{order.storeAddress}</p>
                      </div>
                    </div>
                    {doctor && (
                      <div className="flex items-center">
                        <FaUser className="text-secondary mr-3 w-5" />
                        <div>
                          <p className="text-sm text-muted">主治醫師</p>
                          <p className="font-medium text-primary">{doctor.name} 醫師</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 付款資訊 */}
                <div className="p-6 border-b">
                  <h3 className="font-medium text-primary mb-4">付款資訊</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted">療程費用</span>
                      <span className="text-primary">NT$ {order.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">已付訂金</span>
                      <span className="text-secondary font-medium">
                        NT$ {order.deposit.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">待付款項</span>
                      <span className="text-primary">
                        NT$ {(order.amount - order.deposit).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex items-center">
                        <FaCreditCard className="text-secondary mr-2" />
                        <span className="text-muted">{paymentMethodName[order.paymentMethod]}</span>
                      </div>
                      <PaymentStatusBadge status={order.paymentStatus} />
                    </div>
                  </div>
                </div>

                {/* 訂單時間 */}
                <div className="p-6 border-b bg-light">
                  <div className="text-sm text-muted space-y-1">
                    <p>訂單建立：{formatDateTime(order.createdAt)}</p>
                    {order.cancelledAt && (
                      <p>取消時間：{formatDateTime(order.cancelledAt)}</p>
                    )}
                    {order.cancelReason && (
                      <p>取消原因：{order.cancelReason}</p>
                    )}
                  </div>
                </div>

                {/* 退款規則（僅顯示於即將到來的訂單） */}
                {order.status === 'upcoming' && (
                  <div className="p-6 border-b">
                    <h3 className="font-medium text-primary mb-4">取消/退款規則</h3>
                    <div className="bg-light rounded-xl p-4">
                      <ul className="space-y-2 text-sm">
                        {refundRules.map((rule, index) => (
                          <li key={index} className="flex justify-between">
                            <span className="text-muted">{rule.description}</span>
                            <span className="text-primary font-medium">
                              退還 {rule.refundPercentage}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 操作按鈕 */}
                <div className="p-6 flex gap-4">
                  {order.status === 'upcoming' && (
                    <>
                      <Link
                        to={`/member/refund/${order.id}`}
                        className="flex-1 text-center py-3 border-2 border-red-300 text-red-500 rounded-xl font-medium hover:bg-red-50 transition"
                      >
                        取消訂單
                      </Link>
                      <button className="flex-1 py-3 border-2 border-secondary text-secondary rounded-xl font-medium hover:bg-secondary/10 transition">
                        申請改期
                      </button>
                    </>
                  )}
                  {order.status === 'completed' && (
                    <>
                      <Link
                        to={`/member/feedback/${order.id}`}
                        className="flex-1 text-center py-3 bg-secondary text-white rounded-xl font-medium hover:bg-secondary/90 transition"
                      >
                        填寫回饋
                      </Link>
                      <Link
                        to="/booking"
                        className="flex-1 text-center py-3 bg-primary text-white rounded-xl font-medium hover:bg-accent transition"
                      >
                        再次預約
                      </Link>
                    </>
                  )}
                  {order.status === 'cancelled' && (
                    <Link
                      to="/booking"
                      className="flex-1 text-center py-3 bg-primary text-white rounded-xl font-medium hover:bg-accent transition"
                    >
                      重新預約
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
