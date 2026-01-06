import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import PageHeader from '../components/sections/PageHeader';
import CTASection from '../components/sections/CTASection';
import FilterTabs from '../components/ui/FilterTabs';
import { getCasesByCategory } from '../data/cases';
import { treatmentCategories, getCategoryInfo } from '../data/treatments';
import { getDoctorById } from '../data/doctors';

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: '全部案例' },
    ...treatmentCategories.slice(0, 4).map((c) => ({ id: c.id, label: c.name }))
  ];

  const filteredCases = getCasesByCategory(activeCategory);

  return (
    <>
      <PageHeader title="案例分享" subtitle="真實案例，見證美麗蛻變" />

      {/* Disclaimer */}
      <section className="py-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-muted flex items-center justify-center">
            <FaInfoCircle className="mr-2" />
            本頁案例皆經當事人同意分享，實際效果因人而異，建議親自諮詢醫師評估。
          </p>
        </div>
      </section>

      <FilterTabs tabs={filterTabs} activeTab={activeCategory} onTabChange={setActiveCategory} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCases.map((caseItem) => {
              const categoryInfo = getCategoryInfo(caseItem.category);
              const doctor = getDoctorById(caseItem.doctorId);
              return (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="md:flex">
                    <div
                      className="md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${caseItem.image}')` }}
                    >
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                          {categoryInfo?.name}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6">
                      <h3 className="text-xl font-bold text-primary mb-3">{caseItem.title}</h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start">
                          <span className="text-secondary font-medium text-sm w-20 flex-shrink-0">
                            療程項目
                          </span>
                          <span className="text-muted text-sm">{caseItem.treatment}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-secondary font-medium text-sm w-20 flex-shrink-0">
                            療程次數
                          </span>
                          <span className="text-muted text-sm">{caseItem.sessions}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-secondary font-medium text-sm w-20 flex-shrink-0">
                            主治醫師
                          </span>
                          <span className="text-muted text-sm">{doctor?.name}醫師</span>
                        </div>
                      </div>
                      <p className="text-muted text-sm mb-4">{caseItem.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center text-muted text-xs">
                          <FaUserCheck className="mr-1" /> {caseItem.clientInfo}
                        </div>
                        <Link
                          to="/contact"
                          className="text-secondary text-sm font-medium hover:text-primary transition flex items-center"
                        >
                          我也想諮詢 <FaArrowRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition">
              載入更多案例
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="開始您的美麗旅程"
        subtitle="預約諮詢，讓專業醫師為您量身規劃療程方案"
      />
    </>
  );
}
