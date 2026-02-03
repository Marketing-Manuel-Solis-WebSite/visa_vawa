import React from 'react';
import { X } from 'lucide-react';

interface PanicButtonProps {
  label: string;
  tooltip: string;
  onPanic: () => void;
}

export default function PanicButton({ label, tooltip, onPanic }: PanicButtonProps) {
  return (
    <button
      onClick={onPanic}
      className="fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center space-x-2 transition-transform transform hover:scale-105 border-4 border-white"
      title={tooltip}
      aria-label="Panic Button"
    >
      <X size={20} className="animate-pulse" />
      <span>{label}</span>
    </button>
  );
}