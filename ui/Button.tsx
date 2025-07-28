import { cn } from "@/lib/Utils";

export default function Button({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <button className={cn("px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition", className)}>
      {children}
    </button>
  );
}
