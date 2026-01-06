import { FaLine } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface SocialLoginButtonsProps {
  onLineLogin: () => void;
  onGoogleLogin: () => void;
}

export default function SocialLoginButtons({
  onLineLogin,
  onGoogleLogin
}: SocialLoginButtonsProps) {
  return (
    <div className="space-y-3">
      <button
        onClick={onLineLogin}
        className="w-full flex items-center justify-center gap-3 bg-[#00B900] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#00A000] transition"
      >
        <FaLine className="text-xl" />
        使用 LINE 登入
      </button>

      <button
        onClick={onGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-dark py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition"
      >
        <FcGoogle className="text-xl" />
        使用 Google 登入
      </button>
    </div>
  );
}
