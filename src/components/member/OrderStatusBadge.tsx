import { OrderStatus, PaymentStatus } from '../../types';
import Badge from '../ui/Badge';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

const orderStatusConfig: Record<OrderStatus, { variant: 'success' | 'warning' | 'error' | 'info' | 'neutral'; label: string }> = {
  upcoming: { variant: 'info', label: '即將到來' },
  completed: { variant: 'success', label: '已完成' },
  cancelled: { variant: 'neutral', label: '已取消' }
};

const paymentStatusConfig: Record<PaymentStatus, { variant: 'success' | 'warning' | 'error' | 'info' | 'neutral'; label: string }> = {
  paid: { variant: 'success', label: '已付款' },
  pending: { variant: 'warning', label: '待付款' },
  refunded: { variant: 'neutral', label: '已退款' },
  partial_refund: { variant: 'info', label: '部分退款' }
};

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const config = orderStatusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

export function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const config = paymentStatusConfig[status];
  return <Badge variant={config.variant} size="sm">{config.label}</Badge>;
}

export default OrderStatusBadge;
