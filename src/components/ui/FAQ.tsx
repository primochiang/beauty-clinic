import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FAQItem } from '../../types';

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-medium text-primary">{item.question}</span>
            <FaChevronDown
              className={`text-secondary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-muted">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
