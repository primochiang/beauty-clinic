import { Link } from 'react-router-dom';
import { FaGraduationCap, FaHospital, FaCertificate, FaHeart, FaShieldAlt, FaComments } from 'react-icons/fa';
import PageHeader from '../components/sections/PageHeader';
import CTASection from '../components/sections/CTASection';
import { doctors } from '../data/doctors';

export default function DoctorsPage() {
  return (
    <>
      <PageHeader title="醫師團隊" subtitle="專業背景、豐富經驗，值得您信賴的醫師陣容" />

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">專業、用心、值得信賴</h2>
          <p className="text-muted text-lg leading-relaxed">
            美研醫美的醫師團隊由皮膚科、整形外科、美容醫學等專科醫師組成，
            每位醫師皆具備豐富的臨床經驗與專業認證。我們重視每一次與您的諮詢，
            用心傾聽您的需求，提供最適合您的療程建議。
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{doctor.name} 醫師</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        doctor.isDirector
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {doctor.title}
                    </span>
                  </div>
                  <p className="text-secondary font-medium mb-4">{doctor.specialty}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-muted flex items-start">
                      <FaGraduationCap className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{doctor.education}</span>
                    </p>
                    <p className="text-sm text-muted flex items-start">
                      <FaHospital className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{doctor.experience}</span>
                    </p>
                    <p className="text-sm text-muted flex items-start">
                      <FaCertificate className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{doctor.certification}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-primary mb-2">專長領域</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-light text-muted text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary text-white py-3 rounded-full hover:bg-accent transition"
                  >
                    預約諮詢
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="診所環境"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">我們的理念</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <FaHeart className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">以人為本</h3>
                    <p className="text-muted">
                      每位患者的需求都是獨特的，我們用心傾聽，給予最適切的建議與治療方案。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <FaShieldAlt className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">安全至上</h3>
                    <p className="text-muted">
                      嚴格把關每項療程的安全性，使用合格認證的醫療設備與藥品，確保療程安全有效。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <FaComments className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">專業溝通</h3>
                    <p className="text-muted">
                      重視醫病關係，術前詳細說明療程內容，術後完整追蹤，讓您安心放心。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="與專業醫師面對面諮詢"
        subtitle="讓我們的醫師團隊為您量身打造最適合的療程方案"
      />
    </>
  );
}
