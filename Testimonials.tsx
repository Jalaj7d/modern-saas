const testimonials = [
  {
    name: "Ravi Kumar",
    role: "CMO, AdSpark",
    quote: "ADmyBRAND AI Suite transformed our campaign performance overnight.",
  },
  {
    name: "Sneha Sharma",
    role: "Founder, MarketZen",
    quote: "The analytics are stunning and the features are incredibly powerful!",
  },
  {
    name: "Daniel Roy",
    role: "Growth Lead, PixelAds",
    quote: "Love the speed, simplicity, and intelligence behind this platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md">
            <p className="italic mb-4">“{t.quote}”</p>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
