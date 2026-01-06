import { BookableService, RefundRule, TimeSlot, AvailableDate } from '../types';

// 可預約服務
export const bookableServices: BookableService[] = [
  {
    id: 'hyaluronic',
    name: '玻尿酸填充',
    category: 'micro',
    duration: 60,
    price: 15000,
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    description: '利用玻尿酸填充凹陷部位，打造自然立體輪廓，效果維持約6-12個月。'
  },
  {
    id: 'botox',
    name: '肉毒桿菌',
    category: 'micro',
    duration: 30,
    price: 12000,
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    description: '改善動態紋路，如魚尾紋、抬頭紋、皺眉紋，效果維持約4-6個月。'
  },
  {
    id: 'picosecond',
    name: '皮秒雷射',
    category: 'laser',
    duration: 45,
    price: 8000,
    deposit: 2000,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
    description: '新一代雷射技術，有效改善色素斑點、毛孔粗大、膚色不均。'
  },
  {
    id: 'cleanskin',
    name: '淨膚雷射',
    category: 'laser',
    duration: 30,
    price: 3500,
    deposit: 1000,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
    description: '溫和改善膚質，縮小毛孔、均勻膚色，適合定期保養。'
  },
  {
    id: 'hydrafacial',
    name: '水光注射',
    category: 'face',
    duration: 45,
    price: 6000,
    deposit: 1500,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80',
    description: '深層補水保濕，改善乾燥、細紋，打造水潤透亮肌膚。'
  },
  {
    id: 'thermage',
    name: '電波拉提',
    category: 'face',
    duration: 90,
    price: 25000,
    deposit: 5000,
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=80',
    description: '非侵入式緊緻療程，刺激膠原蛋白增生，改善鬆弛下垂。'
  },
  {
    id: 'bodycontour',
    name: '體雕塑身',
    category: 'body',
    duration: 60,
    price: 18000,
    deposit: 4000,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    description: '針對局部脂肪堆積，雕塑完美曲線，打造理想身材。'
  },
  {
    id: 'hairremoval',
    name: '雷射除毛',
    category: 'body',
    duration: 30,
    price: 2500,
    deposit: 500,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&q=80',
    description: '永久性減少毛髮生長，告別除毛困擾，肌膚光滑細緻。'
  }
];

// 退款規則
export const refundRules: RefundRule[] = [
  {
    daysBeforeService: 7,
    refundPercentage: 100,
    description: '服務日 7 天前取消'
  },
  {
    daysBeforeService: 3,
    refundPercentage: 70,
    description: '服務日 3-7 天前取消'
  },
  {
    daysBeforeService: 1,
    refundPercentage: 50,
    description: '服務日 1-3 天前取消'
  },
  {
    daysBeforeService: 0,
    refundPercentage: 0,
    description: '服務日當天或 24 小時內取消'
  }
];

// 取得服務列表
export const getBookableServices = (): BookableService[] => {
  return bookableServices;
};

// 依分類取得服務
export const getServicesByCategory = (category: string): BookableService[] => {
  if (category === 'all') return bookableServices;
  return bookableServices.filter((s) => s.category === category);
};

// 依 ID 取得服務
export const getServiceById = (serviceId: string): BookableService | undefined => {
  return bookableServices.find((s) => s.id === serviceId);
};

// 取得退款規則
export const getRefundRules = (): RefundRule[] => {
  return refundRules;
};

// 計算退款金額
export const calculateRefundAmount = (deposit: number, daysBeforeService: number): number => {
  const rule = refundRules.find((r) => daysBeforeService >= r.daysBeforeService);
  if (!rule) return 0;
  return Math.ceil((deposit * rule.refundPercentage) / 100);
};

// 產生可預約日期（Demo 用）
export const getAvailableDates = (_serviceId: string): AvailableDate[] => {
  const dates: AvailableDate[] = [];
  const today = new Date();

  // 產生未來 30 天的可預約日期
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // 週日不營業
    if (date.getDay() === 0) continue;

    const dateStr = date.toISOString().split('T')[0];
    const slots = generateTimeSlots(date.getDay());

    dates.push({
      date: dateStr,
      dayOfWeek: date.getDay(),
      slots
    });
  }

  return dates;
};

// 產生時段（Demo 用）
const generateTimeSlots = (dayOfWeek: number): TimeSlot[] => {
  const slots: TimeSlot[] = [];

  // 週六營業時間較短
  const startHour = 10;
  const endHour = dayOfWeek === 6 ? 17 : 20;

  for (let hour = startHour; hour < endHour; hour++) {
    // 隨機設定部分時段為已預約
    const available1 = Math.random() > 0.3;
    const available2 = Math.random() > 0.3;

    slots.push({
      id: `slot-${hour}-00`,
      time: `${hour.toString().padStart(2, '0')}:00`,
      available: available1
    });

    slots.push({
      id: `slot-${hour}-30`,
      time: `${hour.toString().padStart(2, '0')}:30`,
      available: available2
    });
  }

  return slots;
};

// 取得指定日期的時段
export const getTimeSlotsForDate = (_serviceId: string, date: string): TimeSlot[] => {
  const availableDates = getAvailableDates(_serviceId);
  const targetDate = availableDates.find((d) => d.date === date);
  return targetDate?.slots || [];
};
