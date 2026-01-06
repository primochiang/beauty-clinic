import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { articles } from '../../data/articles';
import { getDoctorById } from '../../data/doctors';

export default function ArticlePreview() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">醫師專欄</h2>
            <p className="text-muted text-lg">專業觀點，為您解答醫美疑惑</p>
          </div>
          <Link
            to="/articles"
            className="hidden md:inline-flex items-center text-secondary hover:text-primary transition"
          >
            查看全部 <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestArticles.map((article) => {
            const doctor = getDoctorById(article.doctorId);
            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor?.image}
                      alt={doctor?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-primary text-sm">{doctor?.name}醫師</p>
                      <p className="text-xs text-muted">{doctor?.specialty}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{article.title}</h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted">{article.date}</span>
                    <Link
                      to="/articles"
                      className="text-secondary text-sm hover:text-primary transition"
                    >
                      閱讀更多 →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/articles"
            className="inline-flex items-center text-secondary hover:text-primary transition"
          >
            查看全部文章 <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
