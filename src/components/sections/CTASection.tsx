import { Link } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText = '立即預約諮詢',
  buttonLink = '/contact'
}: CTASectionProps) {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 text-lg mb-8">{subtitle}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary/90 transition"
        >
          <FaCalendarCheck className="mr-2" />
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
