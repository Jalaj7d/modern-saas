'use client';

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="text-center py-28 bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <motion.h1 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Supercharge Your Marketing with AI
      </motion.h1>
      <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
        Meet <strong>ADmyBRAND AI Suite</strong> – the all-in-one marketing intelligence tool that helps teams make better, faster decisions.
      </p>
      <Button>Start Free Trial</Button>
    </section>
  );
}
