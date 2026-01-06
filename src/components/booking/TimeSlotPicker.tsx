import { FaCheck } from 'react-icons/fa';
import { TimeSlot } from '../../types';

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelect: (time: string) => void;
}

export default function TimeSlotPicker({
  slots,
  selectedSlot,
  onSelect
}: TimeSlotPickerProps) {
  // 分類為上午和下午
  const morningSlots = slots.filter((s) => {
    const hour = parseInt(s.time.split(':')[0]);
    return hour < 12;
  });

  const afternoonSlots = slots.filter((s) => {
    const hour = parseInt(s.time.split(':')[0]);
    return hour >= 12;
  });

  const renderSlots = (slotList: TimeSlot[], title: string) => (
    <div className="mb-8">
      <h4 className="text-sm font-medium text-muted mb-4">{title}</h4>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
        {slotList.map((slot) => {
          const isSelected = selectedSlot === slot.time;
          return (
            <button
              key={slot.id}
              onClick={() => slot.available && onSelect(slot.time)}
              disabled={!slot.available}
              className={`py-3 px-2 rounded-xl text-sm font-medium transition relative ${
                isSelected
                  ? 'bg-secondary text-white'
                  : slot.available
                    ? 'bg-white border border-gray-200 text-primary hover:border-secondary hover:bg-secondary/10'
                    : 'bg-gray-100 text-gray-300 cursor-not-allowed line-through'
              }`}
            >
              {slot.time}
              {isSelected && (
                <FaCheck className="absolute top-1 right-1 text-xs" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (slots.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted">此日期無可預約時段</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {morningSlots.length > 0 && renderSlots(morningSlots, '上午')}
      {afternoonSlots.length > 0 && renderSlots(afternoonSlots, '下午')}

      {/* 圖例 */}
      <div className="flex items-center justify-center gap-6 text-sm border-t pt-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-6 bg-white border border-gray-200 rounded" />
          <span className="text-muted">可預約</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-6 bg-secondary rounded" />
          <span className="text-muted">已選擇</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-6 bg-gray-100 rounded" />
          <span className="text-muted">已額滿</span>
        </div>
      </div>
    </div>
  );
}
