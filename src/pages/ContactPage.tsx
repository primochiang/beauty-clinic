import { useState } from 'react';
import { FaPhone, FaLine, FaEnvelope, FaMapMarkerAlt, FaSubway, FaPaperPlane } from 'react-icons/fa';
import PageHeader from '../components/sections/PageHeader';
import FAQ from '../components/ui/FAQ';
import { faqItems } from '../data/cases';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('預約資料已送出！我們將盡快與您聯繫確認預約時間。');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      treatment: '',
      message: '',
      privacy: false
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <>
      <PageHeader title="聯絡我們" subtitle="預約諮詢，開始您的美麗旅程" />

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="tel:0227711234"
              className="flex items-center p-6 bg-light rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition">
                <FaPhone className="text-primary text-xl group-hover:text-secondary transition" />
              </div>
              <div>
                <p className="text-sm text-muted">電話預約</p>
                <p className="font-bold text-primary">(02) 2771-1234</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center p-6 bg-light rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition">
                <FaLine className="text-primary text-xl group-hover:text-secondary transition" />
              </div>
              <div>
                <p className="text-sm text-muted">LINE 諮詢</p>
                <p className="font-bold text-primary">@beautyclinic</p>
              </div>
            </a>

            <a
              href="mailto:info@beauty-clinic.com.tw"
              className="flex items-center p-6 bg-light rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition">
                <FaEnvelope className="text-primary text-xl group-hover:text-secondary transition" />
              </div>
              <div>
                <p className="text-sm text-muted">電子郵件</p>
                <p className="font-bold text-primary text-sm">info@beauty-clinic.com.tw</p>
              </div>
            </a>

            <a
              href="#map"
              className="flex items-center p-6 bg-light rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition">
                <FaMapMarkerAlt className="text-primary text-xl group-hover:text-secondary transition" />
              </div>
              <div>
                <p className="text-sm text-muted">診所地址</p>
                <p className="font-bold text-primary text-sm">忠孝東路四段123號5樓</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex gap-12">
            {/* Booking Form */}
            <div className="md:w-2/3 mb-12 md:mb-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-6">線上預約諮詢</h2>
                <p className="text-muted mb-8">填寫以下表單，我們將盡快與您聯繫確認預約時間。</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                        placeholder="請輸入您的姓名"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        聯絡電話 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                        placeholder="請輸入您的電話"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">電子郵件</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                        placeholder="請輸入您的 Email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">希望預約日期</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      想諮詢的療程 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                    >
                      <option value="">請選擇療程類別</option>
                      <option value="micro">微整形（玻尿酸、肉毒桿菌）</option>
                      <option value="laser">雷射療程（皮秒、淨膚雷射）</option>
                      <option value="face">臉部管理（水光注射、電波拉提）</option>
                      <option value="body">身體療程（體雕、除毛）</option>
                      <option value="custom">客製化美學方案</option>
                      <option value="other">其他 / 尚未確定</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">諮詢內容</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition resize-none"
                      placeholder="請簡述您的需求或問題（選填）"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted">
                      我已閱讀並同意{' '}
                      <a href="#" className="text-secondary hover:underline">
                        隱私權政策
                      </a>
                      ，同意本診所蒐集、處理及利用本人之個人資料。
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-accent transition flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    送出預約
                  </button>
                </form>
              </div>
            </div>

            {/* Clinic Info */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">診所資訊</h3>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <FaMapMarkerAlt className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">診所地址</p>
                      <p className="text-muted text-sm">台北市大安區忠孝東路四段 123 號 5 樓</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <FaPhone className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">預約電話</p>
                      <p className="text-muted text-sm">(02) 2771-1234</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <FaEnvelope className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">電子郵件</p>
                      <p className="text-muted text-sm">info@beauty-clinic.com.tw</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <FaSubway className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">交通資訊</p>
                      <p className="text-muted text-sm">捷運忠孝復興站 3 號出口步行約 3 分鐘</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-6">營業時間</h3>

                <div className="space-y-3">
                  {[
                    { day: '週一', time: '10:00 - 21:00' },
                    { day: '週二', time: '10:00 - 21:00' },
                    { day: '週三', time: '10:00 - 21:00' },
                    { day: '週四', time: '10:00 - 21:00' },
                    { day: '週五', time: '10:00 - 21:00' },
                    { day: '週六', time: '10:00 - 18:00' },
                    { day: '週日', time: '休診', closed: true }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-muted">{item.day}</span>
                      <span className={item.closed ? 'text-red-500 font-medium' : 'text-primary font-medium'}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted mt-4">
                  <FaMapMarkerAlt className="inline mr-1" />
                  國定假日休診，建議預約前來電確認
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">診所位置</h2>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7311411362454!2d121.54396731500663!3d25.041280983970885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5b-g5a2d5p2x6Lev5Zub5q61!5e0!3m2!1szh-TW!2stw!4v1640000000000!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="診所位置"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">常見問題</h2>
          <FAQ items={faqItems} />
        </div>
      </section>
    </>
  );
}
