import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const quickQuestions = [
  { id: 'booking', label: '預約問題' },
  { id: 'refund', label: '退款問題' },
  { id: 'service', label: '療程諮詢' },
  { id: 'other', label: '其他問題' }
];

const autoReplies: Record<string, string> = {
  booking: '您好！關於預約問題，您可以在「我的訂單」中查看、取消或改期預約。如需進一步協助，請提供您的訂單編號。',
  refund: '您好！關於退款問題，請參考我們的退款規則：服務日7天前可全額退款，3-7天前退70%，1-3天前退50%，24小時內恕不退款。如有特殊情況請說明。',
  service: '您好！感謝您對我們療程的興趣。我們提供多種專業醫美服務，包括玻尿酸、肉毒桿菌、雷射療程等。請問您想了解哪項療程呢？',
  other: '您好！請詳細描述您的問題，我們的客服人員將盡快為您處理。',
  default: '感謝您的訊息，我們的客服人員將會盡快回覆您。如有緊急問題，歡迎撥打客服專線 (02) 2771-1234。'
};

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: '您好！歡迎來到美研醫美客服中心。請問有什麼可以為您服務的嗎？您可以點選下方快速問題或直接輸入訊息。',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const handleQuickQuestion = (questionId: string) => {
    const question = quickQuestions.find((q) => q.id === questionId);
    if (question) {
      addMessage(question.label, true);
      setTimeout(() => {
        addMessage(autoReplies[questionId], false);
      }, 800);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage(input, true);
    setInput('');

    // Demo: 自動回覆
    setTimeout(() => {
      addMessage(autoReplies.default, false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-TW', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-[600px]">
      {/* 標題 */}
      <div className="bg-primary text-white p-4">
        <h3 className="font-bold">線上客服</h3>
        <p className="text-sm text-white/80">通常在幾分鐘內回覆</p>
      </div>

      {/* 訊息區域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-end gap-2 max-w-[80%] ${
                message.isUser ? 'flex-row-reverse' : ''
              }`}
            >
              {/* 頭像 */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser ? 'bg-secondary' : 'bg-primary'
                }`}
              >
                {message.isUser ? (
                  <FaUser className="text-white text-sm" />
                ) : (
                  <FaRobot className="text-white text-sm" />
                )}
              </div>

              {/* 訊息氣泡 */}
              <div>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-secondary text-white rounded-br-none'
                      : 'bg-gray-100 text-dark rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                <p
                  className={`text-xs text-muted mt-1 ${
                    message.isUser ? 'text-right' : ''
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 快速問題 */}
      <div className="px-4 py-2 border-t bg-light">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleQuickQuestion(q.id)}
              className="flex-shrink-0 px-3 py-1 bg-white border border-secondary text-secondary rounded-full text-sm hover:bg-secondary hover:text-white transition"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* 輸入區域 */}
      <div className="p-4 border-t">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="輸入訊息..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-secondary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
