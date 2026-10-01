import React, { useState } from 'react';

interface StartFreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
  initialEmail?: string;
  onSuccess: (businessName: string, link: string) => void;
}

export const StartFreeTrialModal: React.FC<StartFreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Plan 2 Agendas',
  initialEmail = '',
  onSuccess,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [businessName, setBusinessName] = useState('');
  const [rubro, setRubro] = useState('belleza');
  const [customSlug, setCustomSlug] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial email if provided
  React.useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
  }, [initialEmail]);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    setBusinessName(val);
    if (!customSlug) {
      setCustomSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-')
          .slice(0, 24)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      onSuccess(businessName || 'Mi Negocio', `tusturnos.app/${customSlug || 'estudio-aura'}`);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-[#dde4e0] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4fbf7] hover:bg-[#dde4e0] text-[#424844] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#d0ef68] text-[#171e00] font-bold text-[10px] tracking-wider uppercase">
                14 Días Gratis
              </span>
              <span className="text-xs text-[#424844] font-medium">• {initialPlan}</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#062217] tracking-tight">
              Creá tu agenda en 2 minutos
            </h3>
            <p className="text-xs text-[#424844] mt-1 mb-6">
              Sin tarjeta de crédito requerida. Tus clientes podrán reservar inmediatamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Nombre de tu negocio o consultorio *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Estudio Aura o Dr. Morales"
                  value={businessName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Rubro o especialidad
                </label>
                <select
                  value={rubro}
                  onChange={(e) => setRubro(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                >
                  <option value="belleza">Belleza & Estética (Pestañas, Uñas, Peluquería)</option>
                  <option value="salud">Salud & Clínicas (Odontología, Medicina, Kinesiología)</option>
                  <option value="terapias">Psicología, Coaching & Terapias</option>
                  <option value="deporte">Deportes, Canchas & Gimnasios</option>
                  <option value="consultoria">Consultoría Legal, Contable o Profesional</option>
                  <option value="otro">Otro rubro con turnos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#062217] mb-1">
                  Tu enlace único para compartir
                </label>
                <div className="flex items-center rounded-xl bg-[#f4fbf7] border border-[#dde4e0] px-3.5 py-2.5 text-xs">
                  <span className="text-[#424844] font-mono">tusturnos.app/</span>
                  <input
                    type="text"
                    required
                    value={customSlug}
                    onChange={(e) => setCustomSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                    placeholder="estudio-aura"
                    className="flex-1 bg-transparent font-bold text-[#062217] focus:outline-none font-mono text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#062217] mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#062217] mb-1">
                    WhatsApp para avisos *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-bold text-xs text-[#171e00] bg-[#d0ef68] hover:bg-[#b5d24e] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Creando tu espacio...</span>
                  ) : (
                    <>
                      <span>Activar prueba de 14 días sin costo</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#424844]">
                Sin compromiso de permanencia. Podés cancelar en cualquier momento con un clic.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d0ef68] text-[#171e00] flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#062217]">
              ¡Tu agenda está lista!
            </h3>

            <p className="text-xs text-[#424844] max-w-sm mx-auto">
              Te enviamos las credenciales de acceso a <strong>{email}</strong> y un mensaje de bienvenida a tu WhatsApp.
            </p>

            <div className="p-4 rounded-2xl bg-[#eef5f1] border border-[#dde4e0] text-center">
              <p className="text-[11px] text-[#424844] uppercase font-bold tracking-wider mb-1">
                Tu enlace de reservas público
              </p>
              <p className="font-mono text-sm font-bold text-[#062217]">
                tusturnos.app/{customSlug || 'mi-agenda'}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-[#062217] hover:bg-[#1d382b] transition-all"
            >
              Ir al panel de administración
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
