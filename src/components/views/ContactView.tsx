import React, { useState } from 'react';
import { TabType } from '../../types';

interface ContactViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenDemoModal: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onSelectTab,
  onOpenDemoModal,
  onShowToast,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rubro, setRubro] = useState('');
  const [agendas, setAgendas] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('¡Consulta enviada con éxito! Te responderemos en breve.');
    }, 600);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setRubro('');
    setAgendas('1');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* 1. HEADER & FORM SECTION */}
      <section className="relative w-full overflow-hidden pt-10 md:pt-16 pb-16">
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-[#d0ef68]/20 rounded-full blur-[110px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none -z-10"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-2 mb-12">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#e2eae6] text-[#062217] text-[10px] uppercase font-bold tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#b5d24e] animate-pulse"></span>
              Estamos para ayudarte
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#062217] tracking-tight leading-[1.12]">
              Hablemos. Estamos listos para optimizar tu agenda.
            </h1>
            <p className="text-base sm:text-lg text-[#424844] max-w-2xl mt-2 leading-relaxed">
              Escribinos para solicitar una demostración personalizada, resolver dudas de integración o consultar por planes a medida diseñados para la escala de tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Quick Channels */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* WhatsApp Card */}
              <div className="relative overflow-hidden bg-[#062217] text-white rounded-3xl p-6 sm:p-8 shadow-xl group border border-emerald-950">
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#1d382b]/60 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md">
                      <span className="material-symbols-outlined text-[24px] text-[#d0ef68]">chat</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 font-bold text-[10px] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d0ef68]"></span> En línea ahora
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-[#afcebb] tracking-wider font-bold mb-1">
                      Atención rápida por WhatsApp
                    </p>
                    <h3 className="font-display text-xl font-bold">Chateá con un asesor ahora</h3>
                    <p className="text-sm text-emerald-200 mt-1 font-mono">+54 9 11 2394-0228</p>
                  </div>

                  <a
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-[#d0ef68] hover:bg-[#b5d24e] text-[#171e00] text-xs font-bold transition-all shadow-md active:scale-95"
                    href="https://wa.me/5491123940228?text=Hola!%20Quiero%20charlar%20con%20un%20asesor%20de%20TusTurnos"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Iniciar chat de WhatsApp</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* General Contact Info Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#dde4e0] flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#424844] tracking-wider">Correo y Soporte</span>
                    <a className="font-bold text-[#062217] hover:underline" href="mailto:soporte@tusturnos.com.ar">
                      soporte@tusturnos.com.ar
                    </a>
                    <a className="text-[#424844] hover:text-[#062217] transition-colors" href="mailto:ventas@tusturnos.com.ar">
                      ventas@tusturnos.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#424844] tracking-wider">Horario de Atención</span>
                    <p className="font-bold text-[#062217]">Lunes a Viernes</p>
                    <p className="text-[#424844]">09:00 a 19:00 hs (GMT-3)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f4fbf7] border border-[#dde4e0]">
                  <span className="material-symbols-outlined text-[20px] text-[#526600] shrink-0">bolt</span>
                  <div className="flex items-baseline justify-between w-full">
                    <span className="text-xs text-[#424844]">Tiempo estimado de respuesta</span>
                    <span className="text-xs font-bold text-[#062217] font-mono">&lt; 15 min</span>
                  </div>
                </div>

                {/* Social channels */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-[10px] uppercase font-bold text-[#424844] tracking-wider">Canales Oficiales</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef5f1] hover:bg-[#dde4e0] text-[#062217] text-xs font-semibold transition-colors"
                      href="https://instagram.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                      Instagram
                    </a>
                    <a
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef5f1] hover:bg-[#dde4e0] text-[#062217] text-xs font-semibold transition-colors"
                      href="https://linkedin.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">work</span>
                      LinkedIn
                    </a>
                    <a
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef5f1] hover:bg-[#dde4e0] text-[#062217] text-xs font-semibold transition-colors"
                      href="https://facebook.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">public</span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Dedicated Team Portrait Card */}
              <div className="rounded-3xl bg-[#eef5f1] border border-[#dde4e0] p-4 flex items-center gap-4 shadow-xs">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-white">
                  <img
                    alt="Especialista de operaciones de TusTurnos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS03POgyzxkF6-dT7IDwAjdN-az-nA8-r6PbMTRJa0iHkYWJt-4mYIGnJrGwZYVcItQUmjhwztcjRKddOw59D_orbMMbMy2f_BP0rADZnUHGg6Bup_hLAMwI-1pMspgRUHwola36hubY4sI7TTOKfcZ7WVkqL_2Rirz0VF1D-qLJX7YPq5clovNZhVCixVPW7smObjjvISAPe6wXsi6nNdCqqrWU0sr3TSyItJlYuwLm1tO56AIP18"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#526600] tracking-wide">Equipo Dedicado</span>
                  <p className="text-xs font-bold text-[#062217]">Asistencia técnica y migración guiada</p>
                  <p className="text-[11px] text-[#424844] mt-0.5">Configuramos tus turnos y recordatorios por WhatsApp el mismo día.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#dde4e0] relative">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#dde4e0]">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#526600] tracking-wider">
                      Formulario de Contacto
                    </span>
                    <h2 className="font-display text-2xl font-bold text-[#062217] tracking-tight">
                      Envianos tu consulta
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[#424844] text-[11px] bg-[#f4fbf7] border border-[#dde4e0] px-3 py-1 rounded-full font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#526600]">verified_user</span>
                    Privacidad protegida
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#062217]">Nombre y Apellido *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Camila Valenzuela"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full h-11 px-4 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#062217]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#062217]">Correo Electrónico *</label>
                        <input
                          type="email"
                          required
                          placeholder="nombre@tuempresa.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-11 px-4 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#062217]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#062217]">Teléfono / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+54 11 5555-5555"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-11 px-4 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#062217]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#062217]">Rubro o Tipo de Negocio *</label>
                        <select
                          required
                          value={rubro}
                          onChange={(e) => setRubro(e.target.value)}
                          className="w-full h-11 px-4 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] focus:outline-none focus:ring-2 focus:ring-[#062217]"
                        >
                          <option value="" disabled>Seleccioná tu rubro</option>
                          <option value="salud">Salud & Clínicas Médicas</option>
                          <option value="estetica">Belleza & Estética</option>
                          <option value="deporte">Deportes & Canchas / Gimnasios</option>
                          <option value="consultoria">Consultoría Profesional & Legal</option>
                          <option value="otro">Otro rubro comercial</option>
                        </select>
                      </div>
                    </div>

                    {/* Quantity of Agendas Radio selector */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#062217]">
                        Cantidad de agendas o profesionales
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        {[
                          { val: '1', label: '1 profesional' },
                          { val: '2-5', label: '2 a 5' },
                          { val: '6-15', label: '6 a 15' },
                          { val: '16+', label: '16+ (Clínica)' },
                        ].map((opt) => (
                          <button
                            type="button"
                            key={opt.val}
                            onClick={() => setAgendas(opt.val)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                              agendas === opt.val
                                ? 'bg-[#062217] text-white border-[#062217] shadow-xs'
                                : 'bg-[#f4fbf7] text-[#424844] border-[#dde4e0] hover:bg-[#eef5f1]'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#062217]">Mensaje o consulta</label>
                      <textarea
                        rows={4}
                        placeholder="Contanos sobre tu operativa actual, sistemas que usás o qué te gustaría automatizar..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-4 rounded-xl bg-[#f4fbf7] border border-[#dde4e0] text-sm text-[#062217] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#062217] resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <p className="text-[11px] text-[#424844]">
                        Respuesta garantizada en menos de 15 minutos en horario comercial.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#062217] hover:bg-[#1d382b] text-white text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        {isSubmitting ? (
                          <span>Enviando consulta...</span>
                        ) : (
                          <>
                            <span>Enviar mensaje</span>
                            <span className="material-symbols-outlined text-[16px]">send</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#bbeece] text-[#002414] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[32px]">check_circle</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#062217]">
                      ¡Mensaje recibido con éxito!
                    </h3>
                    <p className="text-xs text-[#424844] max-w-md">
                      Un especialista de TusTurnos ya está revisando tus datos y te contactará en los próximos minutos por correo o WhatsApp.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-3 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#eef5f1] hover:bg-[#dde4e0] text-[#062217] text-xs font-bold transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL COBERTURA SECTION */}
      <section className="w-full bg-[#eef5f1] py-16 border-t border-[#dde4e0] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white border border-[#dde4e0] text-[#062217] text-[10px] uppercase font-bold tracking-wider">
                <span className="material-symbols-outlined text-[16px] text-[#526600]">travel_explore</span>
                Cobertura
              </div>

              <h2 className="font-display text-3xl font-bold text-[#062217] tracking-tight">
                Operando en Argentina, Chile y Uruguay
              </h2>

              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Nuestra infraestructura en la nube está distribuida regionalmente para garantizar latencia mínima, sincronización inmediata con calendarios móviles y pasarelas de pago locales sin fricción.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-2xl border border-[#dde4e0] flex flex-col">
                  <span className="font-display text-base font-bold text-[#062217]">ARG</span>
                  <span className="text-[11px] text-[#424844]">Buenos Aires, CABA</span>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-[#dde4e0] flex flex-col">
                  <span className="font-display text-base font-bold text-[#062217]">CHL</span>
                  <span className="text-[11px] text-[#424844]">Santiago, Las Condes</span>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-[#dde4e0] flex flex-col">
                  <span className="font-display text-base font-bold text-[#062217]">URY</span>
                  <span className="text-[11px] text-[#424844]">Montevideo, Pocitos</span>
                </div>
              </div>
            </div>

            {/* Hub Central Preview Card */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#062217] border border-[#dde4e0] h-72 flex flex-col justify-end p-6 md:p-8">
                {/* Background visual map pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d0ef68_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute top-8 right-8 w-40 h-40 bg-[#d0ef68]/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
                  <div>
                    <p className="font-display text-xl font-bold">Hub Central Cono Sur</p>
                    <p className="text-xs text-[#afcebb] mt-0.5">
                      +3.200 centros y profesionales activos en la región
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-[#d0ef68]">
                    <span className="w-2 h-2 rounded-full bg-[#d0ef68] animate-ping"></span>
                    99.98% Uptime activo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK DEMO VIDEO CALL BANNER */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-[#062217] text-white p-8 md:p-12 shadow-xl border border-emerald-950">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#d0ef68]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#d0ef68] text-[10px] uppercase font-bold tracking-wider">
                <span className="material-symbols-outlined text-[16px]">video_call</span>
                ¿Sin tiempo para escribir?
              </span>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                ¿Preferís una videollamada de demostración de 15 minutos?
              </h2>

              <p className="text-xs sm:text-sm text-[#afcebb] leading-relaxed">
                Un especialista te comparte pantalla, modela tu flujo de atención en vivo y te enseña cómo configurar turnos recurrentes y recordatorios automáticos.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d0ef68] hover:bg-[#b5d24e] text-[#171e00] text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                <span>Agendar Demo online</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
