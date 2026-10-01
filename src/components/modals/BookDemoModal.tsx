import React, { useState } from 'react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('Mañana, 11:30 hs');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess();
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#dde4e0]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4fbf7] hover:bg-[#dde4e0] text-[#424844] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#bbeece] text-[#002414] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[28px]">video_camera_front</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#062217]">
              ¡Demostración Agendada!
            </h3>
            <p className="text-xs text-[#424844]">
              Te enviamos la invitación de Google Meet a <strong>{email}</strong> con los detalles.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef5f1] text-[#062217] font-bold text-[10px] tracking-wider uppercase mb-3">
              <span className="material-symbols-outlined text-[14px] text-[#526600]">video_call</span>
              Demo en vivo de 15 min
            </div>

            <h3 className="font-display text-2xl font-bold text-[#062217] tracking-tight">
              Agendá una videollamada
            </h3>
            <p className="text-xs text-[#424844] mt-1 mb-5">
              Un especialista modelará tu flujo de trabajo en vivo y responderá dudas de migración.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Camila Valenzuela"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Correo electrónico corporativo *
                </label>
                <input
                  type="email"
                  required
                  placeholder="camila@estudio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Franja horaria preferida
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                >
                  <option value="Hoy, 16:00 hs">Hoy a las 16:00 hs (GMT-3)</option>
                  <option value="Hoy, 18:00 hs">Hoy a las 18:00 hs (GMT-3)</option>
                  <option value="Mañana, 10:30 hs">Mañana a las 10:30 hs (GMT-3)</option>
                  <option value="Mañana, 11:30 hs">Mañana a las 11:30 hs (GMT-3)</option>
                  <option value="Mañana, 16:30 hs">Mañana a las 16:30 hs (GMT-3)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-full font-bold text-xs text-[#171e00] bg-[#d0ef68] hover:bg-[#b5d24e] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Confirmar reserva de Demo</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
