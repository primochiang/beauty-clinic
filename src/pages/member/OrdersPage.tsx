import { useState } from 'react';
import PageHeader from '../../components/sections/PageHeader';
import FilterTabs from '../../components/ui/FilterTabs';
import MemberSidebar from '../../components/member/MemberSidebar';
import OrderCard from '../../components/member/OrderCard';
import { getCurrentMember } from '../../data/member';
import { getOrdersByCategory } from '../../data/orders';

const filterTabs = [
  { id: 'all', label: '全部訂單' },
  { id: 'upcoming', label: '即將到來' },
  { id: 'completed', label: '已完成' },
  { id: 'cancelled', label: '已取消' }
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('all');
  const member = getCurrentMember();
  const orders = getOrdersByCategory(member.id, activeTab);

  return (
    <>
      <PageHeader title="我的訂單" subtitle="查看所有預約紀錄" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1">
              {/* 篩選標籤 */}
              <FilterTabs
                tabs={filterTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* 訂單列表 */}
              <div className="mt-8">
                {orders.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {orders.map((order) => (
                      <OrderCard key={order.id} order={order} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-12 text-center">
                    <p className="text-muted mb-4">此分類尚無訂單</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
