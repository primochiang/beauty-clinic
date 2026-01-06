import { Article, ArticleCategory } from '../types';

export const articleCategories: { id: ArticleCategory; name: string }[] = [
  { id: 'knowledge', name: '醫美知識' },
  { id: 'aftercare', name: '術後保養' },
  { id: 'myths', name: '迷思破解' }
];

export const articles: Article[] = [
  {
    id: '1',
    title: '玻尿酸與肉毒的差異解析',
    excerpt: '許多人對於玻尿酸與肉毒桿菌的差異不太清楚，常常混淆這兩種療程的適用情況。本篇將從作用原理、適用部位、效果維持時間等面向，為您詳細說明兩者的差異，幫助您在諮詢時能更清楚自己的需求。',
    category: 'knowledge',
    doctorId: 'chen',
    date: '2024.12.20',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80'
  },
  {
    id: '2',
    title: '雷射術後保養全攻略',
    excerpt: '雷射療程後的保養是影響效果的關鍵因素。正確的術後護理可以讓療程效果更加顯著，也能避免不必要的副作用。本文將詳細說明雷射術後的保養重點，包括清潔方式、保濕產品選擇、防曬注意事項等。',
    category: 'aftercare',
    doctorId: 'lin',
    date: '2024.12.15',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&q=80'
  },
  {
    id: '3',
    title: '如何選擇適合自己的醫美療程',
    excerpt: '面對琳瑯滿目的醫美療程，如何選擇最適合自己的方案？本篇將提供專業的評估角度與建議，從膚質分析、預算考量到期望效果，幫助您做出最適合的選擇。',
    category: 'knowledge',
    doctorId: 'wang',
    date: '2024.12.10',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80'
  },
  {
    id: '4',
    title: '破解醫美五大常見迷思',
    excerpt: '網路上充斥著各種醫美相關的說法，有些是正確的，有些卻是誤解。本文將針對最常見的五個醫美迷思進行專業解析，幫助您建立正確的醫美觀念。',
    category: 'myths',
    doctorId: 'chen',
    date: '2024.12.05',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80'
  },
  {
    id: '5',
    title: '微整形後的日常護理指南',
    excerpt: '微整形療程後的護理對於效果維持非常重要。本文將分享玻尿酸、肉毒桿菌等微整形療程後的日常護理要點，讓您的療程效果更持久。',
    category: 'aftercare',
    doctorId: 'wang',
    date: '2024.11.28',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80'
  },
  {
    id: '6',
    title: '打完肉毒會臉僵？醫師這樣說',
    excerpt: '許多人擔心打完肉毒桿菌會讓臉部表情變得僵硬不自然。本文將從專業角度解釋肉毒桿菌的作用原理，以及如何避免「臉僵」的情況發生。',
    category: 'myths',
    doctorId: 'lin',
    date: '2024.11.20',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80'
  }
];

export const getArticlesByCategory = (category: ArticleCategory): Article[] => {
  return articles.filter(a => a.category === category);
};
