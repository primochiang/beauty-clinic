import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import RefundRules from '../../components/member/RefundRules';
import { getOrderById } from '../../data/orders';
import { calculateRefundAmount } from '../../data/services';

export default function RefundPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const order = orderId ? getOrderById(orderId) : null;
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!order) {
    return (
      <>
        <PageHeader title="申請退款" subtitle="填寫退款申請" />
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

  // 計算距離服務日天數
  const serviceDate = new Date(order.date);
  const today = new Date();
  const diffTime = serviceDate.getTime() - today.getTime();
  const daysBeforeService = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 計算退款金額
  const refundAmount = calculateRefundAmount(order.deposit, daysBeforeService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: 顯示成功訊息
    setSubmitted(true);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="申請退款" subtitle="填寫退款申請" />
        <section className="py-8">
          <div className="max-w-lg mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">退款申請已送出</h2>
              <p className="text-muted mb-6">
                我們將在 3-5 個工作日內處理您的退款申請
              </p>
              <div className="bg-light rounded-xl p-4 mb-6 text-left">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted">訂單編號</span>
                  <span className="text-primary font-medium">{order.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">預計退款金額</span>
                  <span className="text-secondary font-bold">
                    NT$ {refundAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              <Link
                to="/member/orders"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition"
              >
                返回訂單列表
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="申請退款" subtitle="填寫退款申請" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1 max-w-2xl">
              {/* 返回按鈕 */}
              <Link
                to={`/member/orders/${order.id}`}
                className="inline-flex items-center text-muted hover:text-primary mb-6 transition"
              >
                <FaArrowLeft className="mr-2" />
                返回訂單詳情
              </Link>

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* 警告提示 */}
                <div className="bg-yellow-50 p-4 border-b border-yellow-100">
                  <div className="flex items-start">
                    <FaExclamationTriangle className="text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">
                        取消訂單後將無法恢復
                      </p>
                      <p className="text-sm text-yellow-700 mt-1">
                        請確認您是否要取消此預約，退款將依據退款規則處理
                      </p>
                    </div>
                  </div>
                </div>

                {/* 訂單摘要 */}
                <div className="p-6 border-b">
                  <h3 className="font-medium text-primary mb-4">訂單資訊</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">訂單編號</span>
                      <span className="text-primary">{order.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">服務項目</span>
                      <span className="text-primary">{order.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">預約日期</span>
                      <span className="text-primary">{formatDate(order.date)} {order.timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">已付訂金</span>
                      <span className="text-primary font-medium">
                        NT$ {order.deposit.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 退款規則 */}
                <div className="p-6 border-b">
                  <RefundRules />
                </div>

                {/* 退款計算 */}
                <div className="p-6 border-b bg-light">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted">
                        距離服務日還有 {daysBeforeService} 天
                      </p>
                      <p className="text-sm text-muted">
                        預計退款比例：
                        {daysBeforeService >= 7
                          ? '100%'
                          : daysBeforeService >= 3
                            ? '70%'
                            : daysBeforeService >= 1
                              ? '50%'
                              : '0%'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted">預計退款金額</p>
                      <p className="text-2xl font-bold text-secondary">
                        NT$ {refundAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 退款表單 */}
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary mb-2">
                      取消原因 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                      placeholder="請說明取消訂單的原因..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition resize-none"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="flex-1 py-3 border-2 border-gray-200 text-muted rounded-xl font-medium hover:border-gray-300 transition"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition"
                    >
                      確認取消訂單
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
