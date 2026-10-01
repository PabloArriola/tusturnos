import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#062217] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#d0ef68]/30 animate-in slide-in-from-bottom-5 duration-200">
      <span className="material-symbols-outlined text-[20px] text-[#d0ef68]">check_circle</span>
      <span className="text-xs font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white/60 hover:text-white focus:outline-none"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
