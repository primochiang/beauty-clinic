import { Order, OrderStatus } from '../types';

// Mock 訂單資料
export const orders: Order[] = [
  {
    id: 'ORD-20240120-001',
    memberId: 'member-001',
    serviceId: 'hyaluronic',
    serviceName: '玻尿酸填充',
    storeName: '美研醫美診所',
    storeAddress: '台北市大安區忠孝東路四段123號5樓',
    doctorId: 'lin',
    date: '2024-02-15',
    timeSlot: '14:00',
    status: 'upcoming',
    amount: 15000,
    deposit: 3000,
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    createdAt: '2024-01-20T10:30:00'
  },
  {
    id: 'ORD-20240115-002',
    memberId: 'member-001',
    serviceId: 'picosecond',
    serviceName: '皮秒雷射',
    storeName: '美研醫美診所',
    storeAddress: '台北市大安區忠孝東路四段123號5樓',
    doctorId: 'chen',
    date: '2024-02-20',
    timeSlot: '10:30',
    status: 'upcoming',
    amount: 8000,
    deposit: 2000,
    paymentMethod: 'transfer',
    paymentStatus: 'paid',
    createdAt: '2024-01-15T14:20:00'
  },
  {
    id: 'ORD-20240105-003',
    memberId: 'member-001',
    serviceId: 'hydrafacial',
    serviceName: '水光注射',
    storeName: '美研醫美診所',
    storeAddress: '台北市大安區忠孝東路四段123號5樓',
    doctorId: 'huang',
    date: '2024-01-10',
    timeSlot: '15:00',
    status: 'completed',
    amount: 6000,
    deposit: 1500,
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    createdAt: '2024-01-05T09:15:00'
  },
  {
    id: 'ORD-20231220-004',
    memberId: 'member-001',
    serviceId: 'botox',
    serviceName: '肉毒桿菌',
    storeName: '美研醫美診所',
    storeAddress: '台北市大安區忠孝東路四段123號5樓',
    doctorId: 'lin',
    date: '2023-12-28',
    timeSlot: '11:00',
    status: 'completed',
    amount: 12000,
    deposit: 3000,
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    createdAt: '2023-12-20T16:45:00'
  },
  {
    id: 'ORD-20231210-005',
    memberId: 'member-001',
    serviceId: 'thermage',
    serviceName: '電波拉提',
    storeName: '美研醫美診所',
    storeAddress: '台北市大安區忠孝東路四段123號5樓',
    doctorId: 'wu',
    date: '2023-12-18',
    timeSlot: '14:30',
    status: 'cancelled',
    amount: 25000,
    deposit: 5000,
    paymentMethod: 'credit_card',
    paymentStatus: 'refunded',
    createdAt: '2023-12-10T11:30:00',
    cancelledAt: '2023-12-15T10:00:00',
    cancelReason: '臨時有事無法前往'
  }
];

// 依會員 ID 取得訂單
export const getOrdersByMemberId = (memberId: string): Order[] => {
  return orders.filter((o) => o.memberId === memberId);
};

// 依狀態篩選訂單
export const getOrdersByStatus = (memberId: string, status: OrderStatus): Order[] => {
  return orders.filter((o) => o.memberId === memberId && o.status === status);
};

// 依分類取得訂單
export const getOrdersByCategory = (memberId: string, category: string): Order[] => {
  if (category === 'all') {
    return getOrdersByMemberId(memberId);
  }
  return orders.filter((o) => o.memberId === memberId && o.status === category);
};

// 依 ID 取得單一訂單
export const getOrderById = (orderId: string): Order | undefined => {
  return orders.find((o) => o.id === orderId);
};

// 取得即將到來的訂單數量
export const getUpcomingOrdersCount = (memberId: string): number => {
  return orders.filter((o) => o.memberId === memberId && o.status === 'upcoming').length;
};

// 取得總訂單數量
export const getTotalOrdersCount = (memberId: string): number => {
  return orders.filter((o) => o.memberId === memberId).length;
};
