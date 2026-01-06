import { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface FeedbackFormProps {
  onSubmit: (data: { rating: number; comment: string }) => void;
}

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    onSubmit({ rating, comment });
  };

  const ratingLabels = ['', '不滿意', '普通', '滿意', '很滿意', '非常滿意'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 星星評分 */}
      <div>
        <label className="block text-sm font-medium text-primary mb-3">
          整體滿意度
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= (hoverRating || rating);
            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-3xl transition-transform hover:scale-110"
              >
                {isFilled ? (
                  <FaStar className="text-yellow-400" />
                ) : (
                  <FaRegStar className="text-gray-300" />
                )}
              </button>
            );
          })}
          {(hoverRating || rating) > 0 && (
            <span className="ml-3 text-muted">
              {ratingLabels[hoverRating || rating]}
            </span>
          )}
        </div>
      </div>

      {/* 文字評論 */}
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          詳細意見（選填）
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="請分享您的療程體驗，您的意見對我們很重要..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition resize-none"
        />
      </div>

      {/* 提交按鈕 */}
      <button
        type="submit"
        disabled={rating === 0}
        className="w-full bg-secondary text-white py-3 rounded-xl font-medium hover:bg-secondary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        提交回饋
      </button>
    </form>
  );
}
