import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { cases } from '../../data/cases';
import { getCategoryInfo } from '../../data/treatments';

export default function CasePreview() {
  const latestCases = cases.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">案例分享</h2>
            <p className="text-muted text-lg">真實案例，見證美麗蛻變</p>
          </div>
          <Link
            to="/cases"
            className="hidden md:inline-flex items-center text-secondary hover:text-primary transition"
          >
            查看全部 <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestCases.map((caseItem) => {
            const categoryInfo = getCategoryInfo(caseItem.category);
            return (
              <div
                key={caseItem.id}
                className="bg-light rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${caseItem.image}')` }}
                />
                <div className="p-6">
                  <span className="inline-block bg-secondary/20 text-secondary text-xs px-3 py-1 rounded-full mb-3">
                    {categoryInfo?.name}
                  </span>
                  <h3 className="font-bold text-lg text-primary mb-2">{caseItem.title}</h3>
                  <p className="text-muted text-sm mb-4">{caseItem.description.slice(0, 60)}...</p>
                  <Link
                    to="/cases"
                    className="text-secondary text-sm hover:text-primary transition"
                  >
                    了解更多 →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/cases"
            className="inline-flex items-center text-secondary hover:text-primary transition"
          >
            查看全部案例 <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
