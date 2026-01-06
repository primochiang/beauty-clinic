import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaReceipt } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import { getServiceById } from '../../data/services';

export default function BookingConfirmPage() {
  const location = useLocation();
  const state = location.state as {
    serviceId?: string;
    date?: string;
    time?: string;
    paymentMethod?: string;
  } | null;

  const service = state?.serviceId ? getServiceById(state.serviceId) : null;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} (${weekDays[d.getDay()]})`;
  };

  // 生成假訂單編號
  const orderId = `ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).substr(2, 3).toUpperCase()}`;

  return (
    <>
      <PageHeader title="預約完成" subtitle="您的預約已成功送出" />

      <section className="py-16">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            {/* 成功圖示 */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>

            <h2 className="text-2xl font-bold text-primary mb-2">預約成功！</h2>
            <p className="text-muted mb-8">
              我們已收到您的預約，請準時前往診所報到
            </p>

            {/* 訂單編號 */}
            <div className="bg-light rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-sm text-muted mb-1">
                <FaReceipt />
                <span>訂單編號</span>
              </div>
              <p className="text-lg font-bold text-primary">{orderId}</p>
            </div>

            {/* 預約資訊 */}
            {service && state?.date && state?.time && (
              <div className="text-left border-t pt-6 space-y-4">
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {service.name}
                  </h3>
                  <p className="text-secondary font-medium">
                    訂金 NT$ {service.deposit.toLocaleString()} 已付款
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <FaMapMarkerAlt className="text-secondary mr-3 w-4" />
                    <span className="text-muted">美研醫美診所 - 忠孝東路四段123號5樓</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaCalendarAlt className="text-secondary mr-3 w-4" />
                    <span className="text-muted">{formatDate(state.date)}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaClock className="text-secondary mr-3 w-4" />
                    <span className="text-muted">{state.time}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 提醒事項 */}
            <div className="bg-secondary/10 rounded-xl p-4 mt-6 text-left">
              <h4 className="font-medium text-primary mb-2">注意事項</h4>
              <ul className="text-sm text-muted space-y-1">
                <li>• 請於預約時間前 10 分鐘抵達</li>
                <li>• 如需取消或改期，請於 24 小時前告知</li>
                <li>• 剩餘療程費用請於現場支付</li>
              </ul>
            </div>

            {/* 操作按鈕 */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/member/orders"
                className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-medium hover:bg-accent transition text-center"
              >
                查看訂單
              </Link>
              <Link
                to="/"
                className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-full font-medium hover:bg-primary hover:text-white transition text-center"
              >
                返回首頁
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
