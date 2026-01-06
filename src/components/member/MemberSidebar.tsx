import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaClipboardList,
  FaUser,
  FaHeadset,
  FaSignOutAlt
} from 'react-icons/fa';
import { getCurrentMember } from '../../data/member';

const menuItems = [
  { path: '/member', icon: FaHome, label: '會員首頁', exact: true },
  { path: '/member/orders', icon: FaClipboardList, label: '我的訂單' },
  { path: '/member/account', icon: FaUser, label: '帳戶資訊' },
  { path: '/member/support', icon: FaHeadset, label: '客服支援' }
];

export default function MemberSidebar() {
  const navigate = useNavigate();
  const member = getCurrentMember();

  const handleLogout = () => {
    // Demo: 直接導向首頁
    navigate('/');
  };

  return (
    <aside className="bg-white rounded-2xl p-6 shadow-sm">
      {/* 會員資訊 */}
      <div className="flex items-center mb-6 pb-6 border-b">
        <img
          src={member.avatar || 'https://via.placeholder.com/64'}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-primary">{member.name}</h3>
          <p className="text-sm text-muted">{member.phone}</p>
        </div>
      </div>

      {/* 導航選單 */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-secondary/20 text-secondary font-medium'
                    : 'text-muted hover:bg-gray-50 hover:text-primary'
                }`
              }
            >
              <Icon className="mr-3" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* 登出按鈕 */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center px-4 py-3 mt-6 text-red-500 hover:bg-red-50 rounded-xl transition"
      >
        <FaSignOutAlt className="mr-3" />
        登出
      </button>
    </aside>
  );
}
