import { FaPhone, FaLine, FaEnvelope, FaClock } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import ChatSupport from '../../components/member/ChatSupport';

export default function SupportPage() {
  return (
    <>
      <PageHeader title="客服支援" subtitle="有任何問題嗎？我們在這裡幫助您" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1">
              <div className="lg:flex lg:gap-8">
                {/* 線上客服 */}
                <div className="lg:flex-1 mb-8 lg:mb-0">
                  <ChatSupport />
                </div>

                {/* 其他聯繫方式 */}
                <div className="lg:w-80 space-y-6">
                  {/* 聯繫方式卡片 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-primary mb-4">其他聯繫方式</h3>

                    <div className="space-y-4">
                      <a
                        href="tel:0227711234"
                        className="flex items-center p-3 bg-light rounded-xl hover:bg-secondary/10 transition"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <FaPhone className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">客服專線</p>
                          <p className="font-medium text-primary">(02) 2771-1234</p>
                        </div>
                      </a>

                      <a
                        href="#"
                        className="flex items-center p-3 bg-light rounded-xl hover:bg-secondary/10 transition"
                      >
                        <div className="w-10 h-10 bg-[#00B900]/10 rounded-full flex items-center justify-center mr-3">
                          <FaLine className="text-[#00B900]" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">LINE 客服</p>
                          <p className="font-medium text-primary">@beautyclinic</p>
                        </div>
                      </a>

                      <a
                        href="mailto:support@beauty-clinic.com.tw"
                        className="flex items-center p-3 bg-light rounded-xl hover:bg-secondary/10 transition"
                      >
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                          <FaEnvelope className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">電子郵件</p>
                          <p className="font-medium text-primary text-sm">
                            support@beauty-clinic.com.tw
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* 服務時間 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-primary mb-4">服務時間</h3>

                    <div className="flex items-start">
                      <FaClock className="text-secondary mt-1 mr-3" />
                      <div className="text-sm">
                        <p className="text-primary font-medium mb-2">線上客服</p>
                        <p className="text-muted">週一至週五 09:00 - 21:00</p>
                        <p className="text-muted">週六 10:00 - 18:00</p>
                        <p className="text-muted">週日及國定假日休息</p>
                      </div>
                    </div>
                  </div>

                  {/* 常見問題 */}
                  <div className="bg-secondary/10 rounded-2xl p-6">
                    <h3 className="font-bold text-primary mb-3">常見問題</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/contact#faq" className="text-secondary hover:underline">
                          如何取消或改期預約？
                        </a>
                      </li>
                      <li>
                        <a href="/contact#faq" className="text-secondary hover:underline">
                          退款需要多久時間？
                        </a>
                      </li>
                      <li>
                        <a href="/contact#faq" className="text-secondary hover:underline">
                          療程前需要注意什麼？
                        </a>
                      </li>
                      <li>
                        <a href="/contact#faq" className="text-secondary hover:underline">
                          如何查詢訂單狀態？
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
