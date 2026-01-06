import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  size = 'md'
}: ModalProps) {
  // 防止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-2xl shadow-xl w-full ${sizeClasses[size]} animate-fadeIn`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted hover:text-primary transition p-1"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>

        {/* Actions */}
        {actions && (
          <div className="flex justify-end gap-3 p-6 border-t bg-light rounded-b-2xl">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
