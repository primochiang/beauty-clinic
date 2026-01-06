import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import FeedbackForm from '../../components/member/FeedbackForm';
import { getOrderById } from '../../data/orders';
import { getDoctorById } from '../../data/doctors';

export default function FeedbackPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const order = orderId ? getOrderById(orderId) : null;
  const doctor = order ? getDoctorById(order.doctorId) : null;
  const [submitted, setSubmitted] = useState(false);

  if (!order) {
    return (
      <>
        <PageHeader title="意見回饋" subtitle="分享您的療程體驗" />
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
    return `${d.getMonth() + 1}/${d.getDate()} (${weekDays[d.getDay()]})`;
  };

  const handleSubmit = (data: { rating: number; comment: string }) => {
    console.log('Feedback submitted:', { orderId, ...data });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="意見回饋" subtitle="分享您的療程體驗" />
        <section className="py-8">
          <div className="max-w-lg mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">感謝您的回饋！</h2>
              <p className="text-muted mb-6">
                您的意見對我們非常重要，將幫助我們提供更好的服務
              </p>
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
      <PageHeader title="意見回饋" subtitle="分享您的療程體驗" />

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
                {/* 訂單摘要 */}
                <div className="p-6 border-b">
                  <h3 className="font-medium text-primary mb-4">療程資訊</h3>
                  <div className="flex items-start gap-4">
                    {doctor && (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-primary">{order.serviceName}</h4>
                      {doctor && (
                        <p className="text-sm text-muted">{doctor.name} 醫師</p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {formatDate(order.date)}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          {order.timeSlot}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 回饋表單 */}
                <div className="p-6">
                  <FeedbackForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
