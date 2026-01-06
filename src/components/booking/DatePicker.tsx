import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AvailableDate } from '../../types';

interface DatePickerProps {
  availableDates: AvailableDate[];
  selectedDate: string | null;
  onSelect: (date: string) => void;
}

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

export default function DatePicker({
  availableDates,
  selectedDate,
  onSelect
}: DatePickerProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const availableDateSet = new Set(availableDates.map((d) => d.date));

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const days = [];
  // 填充月初空白
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // 填充日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const formatDate = (day: number) => {
    const month = String(currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${currentYear}-${month}-${dayStr}`;
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm max-w-md mx-auto">
      {/* 月份導航 */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <FaChevronLeft className="text-primary" />
        </button>
        <h3 className="text-lg font-bold text-primary">
          {currentYear} 年 {currentMonth + 1} 月
        </h3>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <FaChevronRight className="text-primary" />
        </button>
      </div>

      {/* 星期標題 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className={`text-center text-sm font-medium py-2 ${
              day === '日' ? 'text-red-400' : 'text-muted'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 日期格子 */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="p-3" />;
          }

          const dateStr = formatDate(day);
          const isAvailable = availableDateSet.has(dateStr);
          const isSelected = selectedDate === dateStr;
          const isTodayDate = isToday(day);
          const isPastDate = isPast(day);

          return (
            <button
              key={day}
              onClick={() => isAvailable && onSelect(dateStr)}
              disabled={!isAvailable || isPastDate}
              className={`p-3 text-center rounded-xl transition relative ${
                isSelected
                  ? 'bg-secondary text-white font-bold'
                  : isAvailable && !isPastDate
                    ? 'hover:bg-secondary/20 text-primary'
                    : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              {day}
              {isTodayDate && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* 圖例 */}
      <div className="flex items-center justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-secondary rounded-full" />
          <span className="text-muted">可預約</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-200 rounded-full" />
          <span className="text-muted">不可預約</span>
        </div>
      </div>
    </div>
  );
}
