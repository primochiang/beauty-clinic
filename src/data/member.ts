import { Member } from '../types';

// Mock 會員資料
export const mockMember: Member = {
  id: 'member-001',
  name: '王小美',
  phone: '0912345678',
  email: 'xiaomei@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  createdAt: '2024-01-15',
  loginMethod: 'phone'
};

// 取得會員資料（Demo 用）
export const getMemberById = (id: string): Member | undefined => {
  return id === mockMember.id ? mockMember : undefined;
};

// 模擬登入狀態（Demo 用）
export const isLoggedIn = (): boolean => {
  // Demo 模式：預設為已登入
  return true;
};

// 取得當前會員（Demo 用）
export const getCurrentMember = (): Member => {
  return mockMember;
};
