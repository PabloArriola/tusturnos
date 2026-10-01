import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#dde4e0]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4fbf7] hover:bg-[#dde4e0] text-[#424844] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <h3 className="font-display text-xl font-bold text-[#062217] mb-4">
          {title}
        </h3>

        <div className="text-sm text-[#424844] leading-relaxed space-y-3">
          <p>{content}</p>
          <p className="text-xs text-[#727974]">
            Última actualización: Octubre 2026. Cumplimiento de estándares de protección de datos personales de la República Argentina (Ley 25.326) y normativas internacionales equivalentes.
          </p>
        </div>

        <div className="pt-6 mt-6 border-t border-[#dde4e0]">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full text-xs font-bold bg-[#062217] text-white hover:bg-[#1d382b] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
