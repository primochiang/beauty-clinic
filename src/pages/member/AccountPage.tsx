import { useState } from 'react';
import { FaCamera, FaLine, FaGoogle, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import PageHeader from '../../components/sections/PageHeader';
import MemberSidebar from '../../components/member/MemberSidebar';
import { getCurrentMember } from '../../data/member';

export default function AccountPage() {
  const member = getCurrentMember();
  const [formData, setFormData] = useState({
    name: member.name,
    phone: member.phone,
    email: member.email
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: 顯示儲存成功
    console.log('Save account:', formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const loginMethodIcon = {
    phone: FaPhone,
    email: FaEnvelope,
    line: FaLine,
    google: FaGoogle
  };

  const loginMethodName = {
    phone: '手機號碼',
    email: '電子郵件',
    line: 'LINE',
    google: 'Google'
  };

  const LoginIcon = loginMethodIcon[member.loginMethod];

  return (
    <>
      <PageHeader title="帳戶資訊" subtitle="管理您的個人資料" />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* 側邊欄 */}
            <div className="hidden lg:block lg:w-72">
              <MemberSidebar />
            </div>

            {/* 主要內容 */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* 頭像區塊 */}
                <div className="bg-gradient-to-r from-primary to-accent p-8 text-center">
                  <div className="relative inline-block">
                    <img
                      src={member.avatar || 'https://via.placeholder.com/120'}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white"
                    />
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white border-2 border-white hover:bg-secondary/90 transition">
                      <FaCamera />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-4">{member.name}</h2>
                  <p className="text-white/80 text-sm">會員自 {member.createdAt}</p>
                </div>

                {/* 表單 */}
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-6">
                    {/* 姓名 */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                      />
                    </div>

                    {/* 手機號碼 */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        手機號碼
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-muted"
                        readOnly
                      />
                      <p className="text-xs text-muted mt-1">
                        手機號碼為登入帳號，如需變更請聯繫客服
                      </p>
                    </div>

                    {/* 電子郵件 */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        電子郵件
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                      />
                    </div>

                    {/* 登入方式 */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        登入方式
                      </label>
                      <div className="flex items-center px-4 py-3 border border-gray-200 rounded-xl bg-gray-50">
                        <LoginIcon className="text-secondary mr-3" />
                        <span className="text-muted">
                          {loginMethodName[member.loginMethod]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 儲存按鈕 */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-accent transition flex items-center justify-center"
                    >
                      {saved ? (
                        <>
                          <FaCheck className="mr-2" />
                          已儲存
                        </>
                      ) : (
                        '儲存變更'
                      )}
                    </button>
                  </div>
                </form>

                {/* 密碼變更 */}
                <div className="p-6 border-t bg-light">
                  <h3 className="font-medium text-primary mb-4">安全設定</h3>
                  <button className="text-secondary hover:underline text-sm">
                    變更密碼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
