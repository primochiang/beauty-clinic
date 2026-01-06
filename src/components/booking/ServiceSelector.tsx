import { FaClock, FaCheck } from 'react-icons/fa';
import { BookableService } from '../../types';
import { treatmentCategories } from '../../data/treatments';

interface ServiceSelectorProps {
  services: BookableService[];
  selectedServiceId: string | null;
  onSelect: (serviceId: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ServiceSelector({
  services,
  selectedServiceId,
  onSelect,
  activeCategory,
  onCategoryChange
}: ServiceSelectorProps) {
  const categories = [
    { id: 'all', name: '全部' },
    ...treatmentCategories.slice(0, 4).map((c) => ({ id: c.id, name: c.name }))
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div>
      {/* 分類篩選 */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-muted hover:bg-gray-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 服務列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const isSelected = selectedServiceId === service.id;
          return (
            <div
              key={service.id}
              onClick={() => onSelect(service.id)}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer transition ${
                isSelected
                  ? 'ring-2 ring-secondary shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              <div
                className="h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-primary mb-1">{service.name}</h3>
                <p className="text-muted text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold">
                    NT$ {service.price.toLocaleString()}
                  </span>
                  <span className="text-muted text-sm flex items-center">
                    <FaClock className="mr-1" />
                    {service.duration} 分鐘
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
