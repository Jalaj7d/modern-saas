const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["AI Suggestions", "Email Support", "Basic Analytics"]
  },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["Everything in Starter", "Custom Reports", "Team Access"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Pro", "Dedicated Manager", "24/7 Priority Support"]
  }
];

export default function Pricing() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-black">
      <h2 className="text-3xl font-semibold text-center mb-12">Simple & Transparent Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-semibold mb-4">{plan.price}</p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              {plan.features.map((f, idx) => <li key={idx}>✓ {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
