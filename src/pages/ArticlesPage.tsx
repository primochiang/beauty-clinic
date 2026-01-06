import { useState } from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/sections/PageHeader';
import CTASection from '../components/sections/CTASection';
import FilterTabs from '../components/ui/FilterTabs';
import { articles, articleCategories } from '../data/articles';
import { getDoctorById } from '../data/doctors';

const categoryColorMap: { [key: string]: string } = {
  knowledge: 'bg-secondary/20 text-secondary',
  aftercare: 'bg-primary/10 text-primary',
  myths: 'bg-accent/10 text-accent'
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: '全部文章' },
    ...articleCategories.map((c) => ({ id: c.id, label: c.name }))
  ];

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const getCategoryName = (categoryId: string) => {
    return articleCategories.find((c) => c.id === categoryId)?.name || '';
  };

  return (
    <>
      <PageHeader title="醫師專欄" subtitle="專業觀點與醫美知識分享" />

      <FilterTabs tabs={filterTabs} activeTab={activeCategory} onTabChange={setActiveCategory} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const doctor = getDoctorById(article.doctorId);
              return (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={doctor?.image}
                        alt={doctor?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-primary">{doctor?.name} 醫師</p>
                        <p className="text-xs text-muted">{doctor?.specialty}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-block text-xs px-3 py-1 rounded-full mb-3 ${
                        categoryColorMap[article.category]
                      }`}
                    >
                      {getCategoryName(article.category)}
                    </span>
                    <h3 className="font-bold text-xl text-primary mb-3">{article.title}</h3>
                    <p className="text-muted text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-xs text-muted flex items-center">
                        <FaCalendar className="mr-1" /> {article.date}
                      </span>
                      <button className="text-secondary text-sm font-medium hover:text-primary transition flex items-center">
                        閱讀全文 <FaArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition">
              載入更多文章
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="有更多問題想諮詢？"
        subtitle="歡迎預約諮詢，讓專業醫師為您解答疑惑"
      />
    </>
  );
}
