import { useState, useRef, useEffect } from 'react';

interface VerificationInputProps {
  length?: number;
  onComplete: (code: string) => void;
}

export default function VerificationInput({
  length = 6,
  onComplete
}: VerificationInputProps) {
  const [values, setValues] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // 自動聚焦第一個輸入框
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // 只允許數字
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);

    // 自動跳到下一格
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // 檢查是否完成
    const code = newValues.join('');
    if (code.length === length && !newValues.includes('')) {
      onComplete(code);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Backspace 跳到前一格
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);

    if (!/^\d+$/.test(pastedData)) return;

    const newValues = [...values];
    pastedData.split('').forEach((char, i) => {
      if (i < length) newValues[i] = char;
    });
    setValues(newValues);

    // 聚焦到最後一個填入的輸入框
    const lastIndex = Math.min(pastedData.length, length) - 1;
    inputRefs.current[lastIndex]?.focus();

    // 檢查是否完成
    if (pastedData.length >= length) {
      onComplete(pastedData.slice(0, length));
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
        />
      ))}
    </div>
  );
}
