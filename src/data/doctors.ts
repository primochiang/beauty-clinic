import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: 'chen',
    name: '陳美玲',
    title: '院長',
    specialty: '皮膚科專科醫師',
    education: '台大醫學系畢業',
    experience: '台大醫院皮膚科主治醫師',
    certification: '中華民國皮膚科專科醫師',
    expertise: ['雷射治療', '微整形', '抗老療程', '痘疤治療'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    isDirector: true
  },
  {
    id: 'lin',
    name: '林志明',
    title: '主治醫師',
    specialty: '整形外科專科醫師',
    education: '陽明醫學系畢業',
    experience: '榮總整形外科主治醫師',
    certification: '中華民國整形外科專科醫師',
    expertise: ['玻尿酸填充', '肉毒桿菌', '臉部拉提', '輪廓雕塑'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80'
  },
  {
    id: 'wang',
    name: '王雅婷',
    title: '主治醫師',
    specialty: '美容醫學專科醫師',
    education: '長庚醫學系畢業',
    experience: '長庚醫院美容中心主治醫師',
    certification: '中華民國美容醫學專科醫師',
    expertise: ['電波拉提', '水光注射', '體雕療程', '美學規劃'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80'
  }
];

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id);
};
