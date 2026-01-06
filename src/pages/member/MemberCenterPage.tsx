import { Link } from 'react-router-dom';
import { FaClipboardList, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import OrderCard from '../../components/member/OrderCard';
import { getCurrentMember } from '../../data/member';
import {
  getOrdersByMemberId,
  getUpcomingOrdersCount,
  getTotalOrdersCount,
  getOrdersByStatus
} from '../../data/orders';

export default function MemberCenterPage() {
  const member = getCurrentMember();
  const upcomingCount = getUpcomingOrdersCount(member.id);
  const totalCount = getTotalOrdersCount(member.id);
  const completedCount = getOrdersByStatus(member.id, 'completed').length;
  const recentOrders = getOrdersByMemberId(member.id).slice(0, 2);

  const stats = [
    { icon: FaClipboardList, label: '總訂單', value: totalCount, color: 'bg-primary' },
    { icon: FaCalendarAlt, label: '即將到來', value: upcomingCount, color: 'bg-secondary' },
    { icon: FaCheckCircle, label: '已完成', value: completedCount, color: 'bg-green-500' }
  ];

  return (
    <>
      <PageHeader title="會員中心" subtitle="管理您的預約與帳戶" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1">
              {/* 歡迎訊息 */}
              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-2">
                  歡迎回來，{member.name}！
                </h2>
                <p className="text-white/80">
                  您有 {upcomingCount} 個即將到來的預約
                </p>
              </div>

              {/* 統計卡片 */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm text-center"
                    >
                      <div
                        className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <Icon className="text-white text-xl" />
                      </div>
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* 最近訂單 */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-primary">最近訂單</h3>
                  <Link
                    to="/member/orders"
                    className="text-secondary text-sm hover:underline"
                  >
                    查看全部
                  </Link>
                </div>

                {recentOrders.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {recentOrders.map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-8 text-center">
                    <p className="text-muted mb-4">尚無訂單記錄</p>
                    <Link
                      to="/booking"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-accent transition"
                    >
                      立即預約
                    </Link>
                  </div>
                )}
              </div>

              {/* 快速操作 */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">快速操作</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    to="/booking"
                    className="flex flex-col items-center p-4 bg-light rounded-xl hover:bg-secondary/10 transition"
                  >
                    <FaCalendarAlt className="text-2xl text-secondary mb-2" />
                    <span className="text-sm text-primary">預約療程</span>
                  </Link>
                  <Link
                    to="/member/orders"
                    className="flex flex-col items-center p-4 bg-light rounded-xl hover:bg-secondary/10 transition"
                  >
                    <FaClipboardList className="text-2xl text-secondary mb-2" />
                    <span className="text-sm text-primary">訂單查詢</span>
                  </Link>
                  <Link
                    to="/member/account"
                    className="flex flex-col items-center p-4 bg-light rounded-xl hover:bg-secondary/10 transition"
                  >
                    <FaCheckCircle className="text-2xl text-secondary mb-2" />
                    <span className="text-sm text-primary">帳戶設定</span>
                  </Link>
                  <Link
                    to="/member/support"
                    className="flex flex-col items-center p-4 bg-light rounded-xl hover:bg-secondary/10 transition"
                  >
                    <FaTimesCircle className="text-2xl text-secondary mb-2" />
                    <span className="text-sm text-primary">客服支援</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
