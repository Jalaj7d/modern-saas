"use client";
import { useState } from "react";

const faqs = [
  { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial on all plans." },
  { q: "Do I need to enter credit card to start?", a: "No, credit card is not required for free trial." },
  { q: "Can I cancel anytime?", a: "Absolutely, you can cancel or switch plans at any time." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-white dark:bg-black">
      <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border p-4 rounded-xl">
            <button className="w-full text-left font-medium" onClick={() => setOpenIndex(i === openIndex ? null : i)}>
              {faq.q}
            </button>
            {openIndex === i && <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
