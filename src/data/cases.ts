import { Case, CarouselSlide, FAQItem } from '../types';

export const cases: Case[] = [
  {
    id: '1',
    title: '玻尿酸填充 - 自然豐潤輪廓',
    category: 'micro',
    treatment: '玻尿酸填充（蘋果肌、淚溝）',
    sessions: '1 次',
    doctorId: 'lin',
    description: '患者因臉部凹陷問題困擾已久，經醫師評估後以玻尿酸填充淚溝與蘋果肌，術後立即呈現自然飽滿的臉部輪廓，無明顯恢復期。',
    clientInfo: '30歲女性',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80'
  },
  {
    id: '2',
    title: '皮秒雷射 - 淨白透亮肌膚',
    category: 'laser',
    treatment: '皮秒雷射全臉淨膚',
    sessions: '4 次（每月一次）',
    doctorId: 'chen',
    description: '患者長期受斑點與膚色不均困擾，經 4 次皮秒雷射療程後，明顯改善斑點問題，膚色更加均勻透亮。',
    clientInfo: '35歲女性',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80'
  },
  {
    id: '3',
    title: '電波拉提 - 緊緻 V 型輪廓',
    category: 'face',
    treatment: '電波拉提全臉療程',
    sessions: '1 次',
    doctorId: 'wang',
    description: '患者因年齡增長導致臉部輪廓線鬆弛，經電波拉提療程後，下顎線條明顯緊緻，臉部輪廓更加立體。效果持續改善中。',
    clientInfo: '42歲女性',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80'
  },
  {
    id: '4',
    title: '肉毒桿菌 - 改善動態紋路',
    category: 'micro',
    treatment: '肉毒桿菌（抬頭紋、魚尾紋）',
    sessions: '1 次',
    doctorId: 'lin',
    description: '患者抬頭紋與魚尾紋明顯，經肉毒桿菌注射後 7-10 天開始見效，動態紋路明顯改善，表情依然自然不僵硬。',
    clientInfo: '38歲女性',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80'
  },
  {
    id: '5',
    title: '水光注射 - 深層補水潤澤',
    category: 'face',
    treatment: '水光注射全臉療程',
    sessions: '3 次（每月一次）',
    doctorId: 'wang',
    description: '患者肌膚乾燥缺水，細紋明顯。經 3 次水光注射療程後，肌膚水潤度大幅提升，細紋淡化，整體膚質更加透亮。',
    clientInfo: '28歲女性',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80'
  },
  {
    id: '6',
    title: '體雕塑形 - 局部脂肪改善',
    category: 'body',
    treatment: '冷凍溶脂（腹部）',
    sessions: '2 次（間隔 2 個月）',
    doctorId: 'wang',
    description: '患者腹部脂肪堆積，運動難以消除。經 2 次冷凍溶脂療程後，腹部圍度明顯減少，曲線更加緊實。',
    clientInfo: '33歲女性',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80'
  }
];

export const heroSlides: CarouselSlide[] = [
  {
    id: 1,
    title: '專業醫美 × 客製化療程',
    subtitle: '由專業醫師團隊為你打造最適合的美',
    cta: '立即預約諮詢',
    link: '/contact',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80'
  },
  {
    id: 2,
    title: '多元醫美療程整合',
    subtitle: '微整形、雷射、保養、美學管理',
    cta: '查看療程項目',
    link: '/treatments',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80'
  },
  {
    id: 3,
    title: '醫師專業 × 安心溝通',
    subtitle: '重視每一次諮詢與醫病溝通',
    cta: '認識醫師團隊',
    link: '/doctors',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80'
  }
];

export const faqItems: FAQItem[] = [
  {
    question: '如何預約諮詢？',
    answer: '您可以透過以下方式預約：線上填寫預約表單、撥打預約專線 (02) 2771-1234、或加入 LINE 官方帳號 @beautyclinic 進行預約。我們將於 24 小時內與您確認預約時間。'
  },
  {
    question: '初次諮詢需要付費嗎？',
    answer: '初次諮詢為免費服務，由專業醫師為您評估膚況並提供療程建議。若當日決定進行療程，可享有專屬優惠。'
  },
  {
    question: '療程前需要準備什麼？',
    answer: '建議療程前一週避免使用含酸類保養品，療程當日請素顏前來。若有服用特殊藥物或過敏史，請於諮詢時告知醫師。'
  },
  {
    question: '提供哪些付款方式？',
    answer: '我們提供現金、信用卡（可分期）、Apple Pay、LINE Pay 等多元付款方式。部分療程方案可享有分期零利率優惠。'
  }
];

export const getCasesByCategory = (category: string): Case[] => {
  if (category === 'all') return cases;
  return cases.filter(c => c.category === category);
};
