import { Treatment, TreatmentCategory, TreatmentCategoryInfo } from '../types';

export const treatmentCategories: TreatmentCategoryInfo[] = [
  { id: 'micro', name: '微整形', icon: 'FaSyringe', description: '玻尿酸、肉毒桿菌' },
  { id: 'laser', name: '雷射療程', icon: 'FaBolt', description: '皮秒、淨膚雷射' },
  { id: 'face', name: '臉部管理', icon: 'FaSpa', description: '水光、電波拉提' },
  { id: 'body', name: '身體療程', icon: 'FaChild', description: '體雕、除毛' },
  { id: 'custom', name: '客製化方案', icon: 'FaMagic', description: '美學管理規劃' }
];

export const treatments: Treatment[] = [
  // 微整形
  {
    id: 'hyaluronic',
    name: '玻尿酸填充',
    category: 'micro',
    description: '利用玻尿酸填充凹陷部位，打造自然豐潤的臉部輪廓，改善法令紋、淚溝、蘋果肌等問題。',
    suitable: '臉部凹陷、淚溝明顯、法令紋困擾者',
    duration: '約 6-12 個月',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
  },
  {
    id: 'botox',
    name: '肉毒桿菌',
    category: 'micro',
    description: '透過肉毒桿菌素放鬆過度收縮的肌肉，改善動態紋路，如抬頭紋、魚尾紋、皺眉紋等。',
    suitable: '動態紋路明顯、國字臉、蘿蔔腿者',
    duration: '約 4-6 個月',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80'
  },
  // 雷射療程
  {
    id: 'pico',
    name: '皮秒雷射',
    category: 'laser',
    description: '以皮秒級的超短脈衝光震碎黑色素，有效改善斑點、膚色不均、毛孔粗大等問題。',
    suitable: '斑點、膚色暗沉、毛孔粗大者',
    duration: '3-6 次為一個療程',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400&q=80'
  },
  {
    id: 'cleanskin',
    name: '淨膚雷射',
    category: 'laser',
    description: '溫和的雷射能量作用於真皮層，促進膠原蛋白增生，改善膚質、縮小毛孔、提亮膚色。',
    suitable: '膚色暗沉、毛孔粗大、膚質不佳者',
    duration: '4-6 次為一個療程',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
  },
  // 臉部管理
  {
    id: 'skinbooster',
    name: '水光注射',
    category: 'face',
    description: '將玻尿酸精華以負壓導入方式注入真皮層，快速補充肌膚水分，打造水潤透亮的肌膚。',
    suitable: '肌膚乾燥、細紋、膚色暗沉者',
    duration: '約 3-6 個月',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
  },
  {
    id: 'thermage',
    name: '電波拉提',
    category: 'face',
    description: '利用高頻電波能量深入真皮層與筋膜層，刺激膠原蛋白新生，達到緊緻拉提效果。',
    suitable: '臉部鬆弛、輪廓線不明顯者',
    duration: '約 1-2 年',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80'
  },
  // 身體療程
  {
    id: 'bodyshaping',
    name: '體雕塑形',
    category: 'body',
    description: '非侵入式體雕療程，利用冷凍溶脂或高能量聚焦超音波，減少局部頑固脂肪。',
    suitable: '局部脂肪堆積、運動難以消除者',
    duration: '2-4 次為一個療程',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
  },
  {
    id: 'hairremoval',
    name: '雷射除毛',
    category: 'body',
    description: '利用特定波長雷射光破壞毛囊，達到永久減少毛髮生長的效果，肌膚更加光滑細緻。',
    suitable: '想擺脫毛髮困擾、追求光滑肌膚者',
    duration: '6-8 次為一個療程',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
  }
];

export const getTreatmentsByCategory = (category: TreatmentCategory): Treatment[] => {
  return treatments.filter(t => t.category === category);
};

export const getCategoryInfo = (category: TreatmentCategory): TreatmentCategoryInfo | undefined => {
  return treatmentCategories.find(c => c.id === category);
};
