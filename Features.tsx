import { Code, Zap, PieChart, Bot, Cloud, Shield } from "lucide-react";

const features = [
  { icon: <Zap />, title: "AI Automation", desc: "Automate repetitive tasks and save hours every week." },
  { icon: <PieChart />, title: "Advanced Analytics", desc: "Get real-time, actionable insights from your data." },
  { icon: <Bot />, title: "Chatbot Builder", desc: "Create custom bots that engage users 24/7." },
  { icon: <Code />, title: "API Access", desc: "Powerful developer tools with full API access." },
  { icon: <Cloud />, title: "Cloud Powered", desc: "100% cloud-based with global scale and performance." },
  { icon: <Shield />, title: "Enterprise Security", desc: "Built-in compliance and user-level permissions." },
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-12">AI Features to Power Your Growth</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="mb-4 text-indigo-600 dark:text-indigo-400">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
