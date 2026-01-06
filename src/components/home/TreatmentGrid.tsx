import { Link } from 'react-router-dom';
import { FaSyringe, FaBolt, FaSpa, FaChild, FaMagic } from 'react-icons/fa';
import { treatmentCategories } from '../../data/treatments';

const iconMap: { [key: string]: React.ReactNode } = {
  FaSyringe: <FaSyringe className="text-2xl text-primary group-hover:text-secondary transition" />,
  FaBolt: <FaBolt className="text-2xl text-primary group-hover:text-secondary transition" />,
  FaSpa: <FaSpa className="text-2xl text-primary group-hover:text-secondary transition" />,
  FaChild: <FaChild className="text-2xl text-primary group-hover:text-secondary transition" />,
  FaMagic: <FaMagic className="text-2xl text-primary group-hover:text-secondary transition" />
};

export default function TreatmentGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">療程項目</h2>
          <p className="text-muted text-lg">為您提供全方位的醫美服務</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {treatmentCategories.map((category) => (
            <Link
              key={category.id}
              to={`/treatments#${category.id}`}
              className="group bg-light rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition">
                {iconMap[category.icon]}
              </div>
              <h3 className="font-medium text-primary">{category.name}</h3>
              <p className="text-sm text-muted mt-1">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
