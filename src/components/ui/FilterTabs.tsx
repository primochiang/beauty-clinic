interface FilterTab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-6 py-2 rounded-full border-2 transition ${
                activeTab === tab.id
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
