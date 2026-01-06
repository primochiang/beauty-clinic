interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-20">
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/80 text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
