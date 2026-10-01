import React from 'react';

interface PatientRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientRecordModal: React.FC<PatientRecordModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#dde4e0] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4fbf7] hover:bg-[#dde4e0] text-[#424844] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#062217] text-[#d0ef68] flex items-center justify-center font-bold text-lg">
            SA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold text-[#062217]">
                Sofía Albarracín
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#d0ef68] text-[#171e00] font-bold text-[10px]">
                100% Asistencia
              </span>
            </div>
            <p className="text-xs text-[#424844]">
              Cliente frecuente • 14 turnos completados • +54 11 4920-8812
            </p>
          </div>
        </div>

        {/* Current Appointment status */}
        <div className="p-4 rounded-2xl bg-[#062217] text-white mb-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#afcebb] mb-1">
            <span>Cita de hoy</span>
            <span className="text-[#d0ef68] font-bold">En 15 minutos</span>
          </div>
          <p className="font-display font-bold text-base text-white">Manicuría Rusa + Kapping Gel</p>
          <div className="flex items-center justify-between text-xs pt-2 mt-2 border-t border-white/10">
            <span>Seña de $5.000 cobrada (Mercado Pago #882194)</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px]">Seña OK</span>
          </div>
        </div>

        {/* Private Clinical / Stylist Notes */}
        <div className="mb-5 space-y-2">
          <label className="block text-xs font-bold text-[#062217] uppercase tracking-wider">
            Notas privadas del profesional
          </label>
          <div className="p-3.5 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-xs text-[#424844] leading-relaxed">
            "Alérgica a componentes con fragancia intensa. Prefiere base niveladora color nude cálido. Muy puntual. Última sesión realizada el 12 de septiembre sin desprendimientos."
          </div>
        </div>

        {/* History timeline */}
        <div className="space-y-2">
          <span className="block text-xs font-bold text-[#062217] uppercase tracking-wider">
            Historial reciente de atenciones
          </span>
          <div className="divide-y divide-[#dde4e0] border border-[#dde4e0] rounded-xl overflow-hidden">
            <div className="p-3 bg-white flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#062217]">Manicuría Rusa combinada</p>
                <p className="text-[#424844] text-[11px]">12 Sep 2026 • Atendió: Camila (Box 2)</p>
              </div>
              <span className="font-bold text-[#062217] font-mono">$18.500 ARS</span>
            </div>
            <div className="p-3 bg-white flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#062217]">Lifting y tinte de pestañas</p>
                <p className="text-[#424844] text-[11px]">18 Ago 2026 • Atendió: Julieta</p>
              </div>
              <span className="font-bold text-[#062217] font-mono">$14.000 ARS</span>
            </div>
            <div className="p-3 bg-white flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#062217]">Service y remoción suave</p>
                <p className="text-[#424844] text-[11px]">25 Jul 2026 • Atendió: Camila (Box 2)</p>
              </div>
              <span className="font-bold text-[#062217] font-mono">$12.500 ARS</span>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5 border-t border-[#dde4e0] flex items-center justify-between gap-3">
          <button
            onClick={() => alert('Abriendo WhatsApp con Sofía Albarracín (+54 11 4920-8812)...')}
            className="flex-1 py-2.5 rounded-full text-xs font-bold bg-[#eef5f1] hover:bg-[#dde4e0] text-[#062217] transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px] text-[#526600]">chat</span>
            Enviar WhatsApp
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-full text-xs font-bold bg-[#062217] text-white hover:bg-[#1d382b] transition-colors"
          >
            Cerrar ficha
          </button>
        </div>
      </div>
    </div>
  );
};
