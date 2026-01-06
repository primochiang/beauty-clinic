// 醫師型別
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  education: string;
  experience: string;
  certification: string;
  expertise: string[];
  image: string;
  isDirector?: boolean;
}

// 療程型別
export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategory;
  description: string;
  suitable: string;
  duration: string;
  image: string;
}

export type TreatmentCategory = 'micro' | 'laser' | 'face' | 'body' | 'custom';

export interface TreatmentCategoryInfo {
  id: TreatmentCategory;
  name: string;
  icon: string;
  description: string;
}

// 文章型別
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  doctorId: string;
  date: string;
  image: string;
}

export type ArticleCategory = 'knowledge' | 'aftercare' | 'myths';

// 案例型別
export interface Case {
  id: string;
  title: string;
  category: TreatmentCategory;
  treatment: string;
  sessions: string;
  doctorId: string;
  description: string;
  clientInfo: string;
  image: string;
}

// FAQ 型別
export interface FAQItem {
  question: string;
  answer: string;
}

// 輪播型別
export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  image: string;
}

// ============ 會員模組型別 ============

// 會員型別
export type LoginMethod = 'phone' | 'email' | 'line' | 'google';

export interface Member {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
  createdAt: string;
  loginMethod: LoginMethod;
}

// 註冊步驟
export type RegisterStep = 'account' | 'verify' | 'info' | 'complete';

// ============ 訂單型別 ============

export type OrderStatus = 'upcoming' | 'completed' | 'cancelled';
export type PaymentMethod = 'credit_card' | 'transfer';
export type PaymentStatus = 'paid' | 'pending' | 'refunded' | 'partial_refund';

export interface Order {
  id: string;
  memberId: string;
  serviceId: string;
  serviceName: string;
  storeName: string;
  storeAddress: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  status: OrderStatus;
  amount: number;
  deposit: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  createdAt: string;
  cancelledAt?: string;
  cancelReason?: string;
}

// ============ 預約型別 ============

export type BookingStep = 'service' | 'date' | 'time' | 'payment' | 'complete';

export interface BookableService {
  id: string;
  name: string;
  category: TreatmentCategory;
  duration: number;
  price: number;
  deposit: number;
  image: string;
  description: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface AvailableDate {
  date: string;
  dayOfWeek: number;
  slots: TimeSlot[];
}

// ============ 退款型別 ============

export interface RefundRule {
  daysBeforeService: number;
  refundPercentage: number;
  description: string;
}

export type RefundStatus = 'pending' | 'approved' | 'rejected';

export interface RefundRequest {
  id: string;
  orderId: string;
  reason: string;
  requestedAt: string;
  status: RefundStatus;
  refundAmount: number;
}

// ============ 意見回饋型別 ============

export interface Feedback {
  id: string;
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// ============ 客服型別 ============

export type SupportCategory = 'service' | 'refund' | 'account' | 'other';
export type SupportStatus = 'submitted' | 'processing' | 'closed';

export interface SupportTicket {
  id: string;
  memberId: string;
  orderId?: string;
  category: SupportCategory;
  subject: string;
  description: string;
  status: SupportStatus;
  createdAt: string;
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}
