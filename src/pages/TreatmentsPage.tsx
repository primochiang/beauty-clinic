import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSyringe, FaBolt, FaSpa, FaChild, FaMagic, FaCheckCircle } from 'react-icons/fa';
import PageHeader from '../components/sections/PageHeader';
import CTASection from '../components/sections/CTASection';
import FilterTabs from '../components/ui/FilterTabs';
import { treatmentCategories, getTreatmentsByCategory } from '../data/treatments';
import { TreatmentCategory } from '../types';

const iconMap: { [key: string]: React.ReactNode } = {
  FaSyringe: <FaSyringe className="text-primary text-xl" />,
  FaBolt: <FaBolt className="text-primary text-xl" />,
  FaSpa: <FaSpa className="text-primary text-xl" />,
  FaChild: <FaChild className="text-primary text-xl" />,
  FaMagic: <FaMagic className="text-primary text-xl" />
};

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: '全部療程' },
    ...treatmentCategories.map((c) => ({ id: c.id, label: c.name }))
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? treatmentCategories
      : treatmentCategories.filter((c) => c.id === activeCategory);

  return (
    <>
      <PageHeader title="療程介紹" subtitle="專業醫師團隊為您提供全方位醫美服務" />

      <FilterTabs tabs={filterTabs} activeTab={activeCategory} onTabChange={setActiveCategory} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCategories.map((category) => {
            const categoryTreatments = getTreatmentsByCategory(category.id as TreatmentCategory);
            return (
              <div key={category.id} id={category.id} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {iconMap[category.icon]}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{category.name}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {categoryTreatments.map((treatment) => (
                    <div
                      key={treatment.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                    >
                      <div className="md:flex">
                        <div
                          className="md:w-2/5 h-48 md:h-auto bg-cover bg-center"
                          style={{ backgroundImage: `url('${treatment.image}')` }}
                        />
                        <div className="md:w-3/5 p-6">
                          <h3 className="text-xl font-bold text-primary mb-2">{treatment.name}</h3>
                          <p className="text-muted text-sm mb-4">{treatment.description}</p>
                          <div className="mb-4">
                            <p className="text-sm">
                              <span className="text-primary font-medium">適合對象：</span>
                              <span className="text-muted">{treatment.suitable}</span>
                            </p>
                            <p className="text-sm">
                              <span className="text-primary font-medium">效果維持：</span>
                              <span className="text-muted">{treatment.duration}</span>
                            </p>
                          </div>
                          <Link
                            to="/contact"
                            className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm hover:bg-secondary/90 transition"
                          >
                            預約諮詢
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 客製化方案 */}
          {(activeCategory === 'all' || activeCategory === 'custom') && (
            <div id="custom" className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaMagic className="text-primary text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">客製化方案</h2>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm p-8 md:p-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h3 className="text-2xl font-bold text-primary mb-4">專屬美學管理方案</h3>
                    <p className="text-muted mb-6">
                      每個人的膚質狀況與美學需求都不同，我們提供一對一的專業諮詢服務，由醫師根據您的需求，量身打造最適合的療程組合與美學管理計畫。
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        '專業醫師一對一諮詢評估',
                        '客製化療程組合規劃',
                        '完整術前術後追蹤',
                        '定期美學管理建議'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-muted">
                          <FaCheckCircle className="text-secondary mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition"
                    >
                      預約諮詢
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
                      alt="客製化方案"
                      className="rounded-2xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="找到適合您的療程了嗎？"
        subtitle="立即預約諮詢，讓專業醫師為您評估規劃"
      />
    </>
  );
}
