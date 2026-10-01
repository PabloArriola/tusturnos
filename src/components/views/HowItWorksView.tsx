import React, { useState } from 'react';
import { TabType } from '../../types';
import { HOW_IT_WORKS_FAQ } from '../../data/mockData';

interface HowItWorksViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenTrialModal: (email?: string, plan?: string) => void;
  onOpenDemoModal: () => void;
  onOpenPatientModal: () => void;
  onShowToast: (msg: string) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({
  onSelectTab,
  onOpenTrialModal,
  onOpenDemoModal,
  onOpenPatientModal,
  onShowToast,
}) => {
  const [selectedDay, setSelectedDay] = useState('JUE');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeClientStep, setActiveClientStep] = useState<1 | 2 | 3>(2);

  const copyLink = () => {
    navigator.clipboard?.writeText('https://tusturnos.app/estudio-aura');
    onShowToast('¡Enlace tusturnos.app/estudio-aura copiado al portapapeles!');
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/5491123940228?text=Hola!%20Tengo%20dudas%20sobre%20c%C3%B3mo%20funciona%20TusTurnos', '_blank', 'noopener,noreferrer');
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#d0ef68]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="max-w-[1280px] mx-auto w-full px-4 md:px-8 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2eae6] text-[#062217] shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#526600]"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#062217]">
              PASO A PASO SIMPLE
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#062217] tracking-tight leading-[1.12]">
            Empezá a gestionar tus turnos en <span className="text-[#526600]">3 simples pasos</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#424844] mt-6 max-w-2xl mx-auto leading-relaxed">
            Sin instalaciones complejas ni configuraciones eternas. Configurás tu negocio hoy y tus clientes reservan desde el minuto uno.
          </p>

          {/* Micro stats strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#424844] text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#526600] text-[20px]">check_circle</span>
              <span>Configuración en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#526600] text-[20px]">check_circle</span>
              <span>Sin tarjeta requerida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#526600] text-[20px]">check_circle</span>
              <span>14 días de prueba gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED STEPS SECTION */}
      <section className="w-full bg-[#eef5f1] py-16 md:py-24 border-y border-[#dde4e0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-20 md:gap-28">
          {/* STEP 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d0ef68] text-[#062217] font-display text-2xl font-bold shadow-xs mb-6">
                01
              </div>
              <span className="text-[11px] font-bold uppercase text-[#526600] tracking-widest mb-2">
                PASO INICIAL
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062217] tracking-tight">
                Configurá tus servicios y horarios
              </h2>
              <p className="text-base text-[#424844] mt-4 leading-relaxed">
                Definí la duración de cada cita, profesionales disponibles, sucursales y valores de señas. Creá tus franjas horarias con intervalos personalizados y pausas para descanso.
              </p>

              <div className="mt-8 flex flex-col gap-3 w-full">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white shadow-xs border border-[#dde4e0]">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f0ec] flex items-center justify-center text-[#062217] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">access_time</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#062217]">Tiempos inteligentes de atención</p>
                    <p className="text-xs text-[#424844]">Bloques de 30, 45 o 60 min con márgenes de desinfección automáticos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white shadow-xs border border-[#dde4e0]">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f0ec] flex items-center justify-center text-[#062217] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">payments</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#062217]">Señas configurables por servicio</p>
                    <p className="text-xs text-[#424844]">Cobrá porcentaje fijo (ej. 30%) o valor total por adelantado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Mockup Step 1 */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-[#dde4e0] relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-[#dde4e0] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-[#d0ef68]"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs text-[#424844] ml-2 font-mono">tusturnos.app/admin/servicios</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#d0ef68] text-[#062217] text-[10px] font-bold uppercase tracking-wider">
                    En vivo
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Service item 1 */}
                  <div className="p-4 rounded-2xl bg-[#f4fbf7] border border-[#dde4e0] flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#062217]">Consulta Médica General</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#526600]"></span>
                    </div>
                    <div className="flex items-center gap-2 text-[#424844] text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>45 minutos</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-[#062217] font-mono">$12.000 ARS</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#e2eae6] text-[#424844] text-[10px] font-bold">Seña: $4.000</span>
                    </div>
                  </div>

                  {/* Service item 2 */}
                  <div className="p-4 rounded-2xl bg-[#f4fbf7] border border-[#dde4e0] flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#062217]">Control y Seguimiento</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#526600]"></span>
                    </div>
                    <div className="flex items-center gap-2 text-[#424844] text-xs">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>30 minutos</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-[#062217] font-mono">$8.500 ARS</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#e2eae6] text-[#424844] text-[10px] font-bold">Seña: 50%</span>
                    </div>
                  </div>
                </div>

                {/* Schedule Visual Matrix */}
                <div className="mt-6 p-4 rounded-2xl bg-[#e8f0ec]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#062217]">Disponibilidad semanal del equipo</span>
                    <span className="text-xs text-[#424844]">Lunes a Sábados</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {[
                      { day: 'LUN', hours: '09-18h' },
                      { day: 'MAR', hours: '09-18h' },
                      { day: 'MIÉ', hours: '09-18h' },
                      { day: 'JUE', hours: '09-18h' },
                      { day: 'VIE', hours: '09-16h' },
                      { day: 'SÁB', hours: '09-13h' },
                    ].map((item) => (
                      <button
                        key={item.day}
                        onClick={() => setSelectedDay(item.day)}
                        className={`px-3 py-2 rounded-xl text-center flex-1 min-w-[65px] transition-all ${
                          selectedDay === item.day
                            ? 'bg-[#062217] text-white shadow-xs'
                            : 'bg-white text-[#424844] hover:bg-[#dde4e0]'
                        }`}
                      >
                        <p className={`text-[10px] font-bold uppercase ${selectedDay === item.day ? 'text-[#d0ef68]' : 'text-gray-500'}`}>
                          {item.day}
                        </p>
                        <p className="font-bold text-xs mt-0.5 font-mono">{item.hours}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floating Sync Pill */}
                <div className="mt-4 bg-[#f4fbf7] border border-[#dde4e0] px-4 py-2.5 rounded-2xl shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d0ef68] animate-pulse"></span>
                    <span className="text-xs font-bold text-[#062217]">Sincronizado con Google Calendar</span>
                  </div>
                  <span className="text-[11px] text-[#526600] font-semibold">Tiempo real</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Mockup Step 2 (Left on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-[#dde4e0]">
                {/* Share URL interactive style box */}
                <div className="p-4 rounded-2xl bg-[#f4fbf7] border border-[#dde4e0] flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-xl bg-[#062217] flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined text-[20px] text-[#d0ef68]">link</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase font-bold text-[#424844]">Tu enlace único</p>
                      <p className="text-xs font-bold text-[#062217] font-mono truncate">tusturnos.app/estudio-aura</p>
                    </div>
                  </div>
                  <button
                    onClick={copyLink}
                    className="w-full md:w-auto px-5 py-2.5 rounded-full bg-[#d0ef68] text-[#171e00] text-xs font-bold hover:bg-[#b5d24e] transition-colors shrink-0 flex items-center justify-center gap-2 active:scale-95 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    <span>Copiar Link</span>
                  </button>
                </div>

                {/* Distribution Channels Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-[#eef5f1] flex flex-col items-start gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#dde4e0] flex items-center justify-center text-[#062217]">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <p className="text-xs font-bold text-[#062217]">WhatsApp Bot</p>
                    <p className="text-[11px] text-[#424844] leading-relaxed">Respuesta automática al pedir turno 24/7.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#eef5f1] flex flex-col items-start gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#dde4e0] flex items-center justify-center text-[#062217]">
                      <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                    </div>
                    <p className="text-xs font-bold text-[#062217]">Bio de Instagram</p>
                    <p className="text-[11px] text-[#424844] leading-relaxed">El link directo en tu perfil sin intermediarios.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#eef5f1] flex flex-col items-start gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#dde4e0] flex items-center justify-center text-[#062217]">
                      <span className="material-symbols-outlined text-[20px]">language</span>
                    </div>
                    <p className="text-xs font-bold text-[#062217]">Widget Web</p>
                    <p className="text-[11px] text-[#424844] leading-relaxed">Incrustá el botón flotante en tu web actual.</p>
                  </div>
                </div>

                {/* Live customer mobile frame mockup */}
                <div className="mt-6 p-4 rounded-2xl bg-[#e8f0ec] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#d0ef68] flex items-center justify-center text-[#171e00] font-bold text-xs">
                      IG
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#062217]">Click en biografía de Instagram</p>
                      <p className="text-[11px] text-[#424844]">Abre directamente el flujo sin login requerido</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#526600] text-[20px]">arrow_forward</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d0ef68] text-[#062217] font-display text-2xl font-bold shadow-xs mb-6">
                02
              </div>
              <span className="text-[11px] font-bold uppercase text-[#526600] tracking-widest mb-2">
                DIFUSIÓN INMEDIATA
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062217] tracking-tight">
                Compartí tu enlace personalizado
              </h2>
              <p className="text-base text-[#424844] mt-4 leading-relaxed">
                Enviá tu link por WhatsApp, pegalo en tu biografía de Instagram o insertalo en tu sitio web existente. Tus clientes ingresan desde cualquier celular o computadora al instante.
              </p>

              <div className="mt-8 flex flex-col gap-3 w-full text-xs font-medium text-[#161d1b]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#526600] text-[20px]">check</span>
                  <span>Compatible con WhatsApp Business y respuestas rápidas.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#526600] text-[20px]">check</span>
                  <span>Código QR imprimible para colocar en tu mostrador o recepción.</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#526600] text-[20px]">check</span>
                  <span>Cero descargas de apps pesadas para tus clientes.</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d0ef68] text-[#062217] font-display text-2xl font-bold shadow-xs mb-6">
                03
              </div>
              <span className="text-[11px] font-bold uppercase text-[#526600] tracking-widest mb-2">
                AUTOMATIZACIÓN TOTAL
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062217] tracking-tight">
                Recibí reservas y cobros automáticos
              </h2>
              <p className="text-base text-[#424844] mt-4 leading-relaxed">
                Tus clientes eligen fecha y hora disponible 24/7, pagan la seña por Mercado Pago y reciben el recordatorio por WhatsApp sin que muevas un solo dedo. Reducí el ausentismo a menos del 3%.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="p-4 rounded-2xl bg-white border border-[#dde4e0] shadow-xs">
                  <p className="font-display text-3xl font-extrabold text-[#062217]">-92%</p>
                  <p className="text-xs text-[#424844] mt-1">Ausentismo con señas y recordatorios automáticos.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#dde4e0] shadow-xs">
                  <p className="font-display text-3xl font-extrabold text-[#062217]">24/7</p>
                  <p className="text-xs text-[#424844] mt-1">Turnos confirmados mientras dormís o atendés.</p>
                </div>
              </div>
            </div>

            {/* Visual Mockup Step 3 */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-[#dde4e0] flex flex-col gap-5">
                {/* Payment Flow */}
                <div className="p-5 rounded-2xl bg-[#eef5f1] flex items-center justify-between border border-[#dde4e0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <span className="material-symbols-outlined text-[22px]">paid</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#062217]">Cobro de seña acreditado</p>
                      <p className="text-xs text-[#424844]">Mercado Pago • $5.000 ARS instantáneo</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#d0ef68] text-[#062217] text-[10px] font-bold uppercase tracking-wider">
                    Acreditado
                  </span>
                </div>

                {/* WhatsApp Message Card Simulation */}
                <div className="p-5 rounded-2xl bg-[#f4fbf7] border border-[#dde4e0] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#526600] text-[20px]">mark_chat_read</span>
                      <span className="text-xs font-bold text-[#062217]">Mensaje de WhatsApp automático</span>
                    </div>
                    <span className="text-xs text-[#424844]">Enviado a las 09:30</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white text-[#161d1b] text-xs leading-relaxed shadow-xs border border-[#dde4e0]">
                    "¡Hola Camila! 🌿 Tu turno para <strong>Consulta Nutricional</strong> el jueves 14/11 a las 16:30 hs está confirmado. Te esperamos en Av. Libertador 2450. Para reprogramar haz clic aquí: <u>tusturnos.app/r/a89f</u>"
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#424844] font-medium">
                    <span>Recordatorio: 24h previas + 2h previas</span>
                    <span className="text-[#526600] font-bold">Estado: Entregado</span>
                  </div>
                </div>

                {/* Calendar Event Pinned */}
                <div className="p-4 rounded-2xl bg-[#062217] text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1d382b] flex items-center justify-center text-[#d0ef68]">
                      <span className="material-symbols-outlined text-[20px]">event_available</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Agenda actualizada en tiempo real</p>
                      <p className="text-[11px] text-[#afcebb]">El turno se bloqueó en la agenda de tu staff</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#d0ef68] text-[22px]">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISTA DUAL: CLIENTE VS PROFESIONAL */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f0ec] text-[#062217] text-[10px] font-bold uppercase tracking-wider mb-3">
            VISTA DUAL
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">
            Dos experiencias pensadas para la perfección
          </h2>
          <p className="text-sm sm:text-base text-[#424844] mt-3">
            Comprobá cómo la simplicidad radical para tu cliente se traduce en control y tranquilidad absoluta para tu negocio.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Client Side */}
          <div className="flex flex-col rounded-3xl bg-[#f4fbf7] border border-[#dde4e0] p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#dde4e0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#062217] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[22px] text-[#d0ef68]">smartphone</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#526600]">Lado Cliente</p>
                  <h3 className="font-display text-lg font-bold text-[#062217]">Reserva en 3 clics</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white border border-[#dde4e0] text-[#062217] text-[10px] font-bold">
                30 segundos
              </span>
            </div>

            {/* Interactive simulated steps */}
            <div className="flex flex-col gap-4 flex-1">
              <button
                onClick={() => {
                  setActiveClientStep(1);
                  onShowToast('Paso 1: Servicio seleccionado');
                }}
                className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  activeClientStep === 1
                    ? 'bg-white border-[#062217] shadow-sm'
                    : 'bg-white/80 border-[#dde4e0] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#d0ef68] text-[#062217] font-bold text-xs flex items-center justify-center">
                    1
                  </div>
                  <span className="text-xs font-semibold text-[#062217]">Elige servicio y profesional</span>
                </div>
                <span className="text-xs text-[#424844]">Lifting de pestañas</span>
              </button>

              <button
                onClick={() => {
                  setActiveClientStep(2);
                  onShowToast('Paso 2: Horario seleccionado');
                }}
                className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  activeClientStep === 2
                    ? 'bg-white border-[#062217] shadow-sm'
                    : 'bg-white/80 border-[#dde4e0] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#d0ef68] text-[#062217] font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <span className="text-xs font-semibold text-[#062217]">Selecciona día y horario libre</span>
                </div>
                <span className="text-xs text-[#526600] font-bold">Jue 16:30 hs</span>
              </button>

              <button
                onClick={() => {
                  setActiveClientStep(3);
                  onShowToast('Paso 3: Seña de $5.000 completada vía Mercado Pago');
                }}
                className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                  activeClientStep === 3
                    ? 'bg-white border-[#062217] shadow-sm'
                    : 'bg-white/80 border-[#dde4e0] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#d0ef68] text-[#062217] font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <span className="text-xs font-semibold text-[#062217]">Paga seña con Mercado Pago</span>
                </div>
                <span className="text-xs text-[#526600] font-bold">¡Listo!</span>
              </button>

              {/* Feedback notification */}
              <div className="mt-auto pt-4 p-4 rounded-2xl bg-[#e8f0ec] flex items-center gap-3">
                <span className="material-symbols-outlined text-[#526600] text-[22px]">verified</span>
                <p className="text-xs text-[#062217]">
                  No requiere crearse cuenta, recordar contraseñas ni descargar apps.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Side */}
          <div className="flex flex-col rounded-3xl bg-[#062217] text-white p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1d382b]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#073b25] flex items-center justify-center text-[#d0ef68]">
                  <span className="material-symbols-outlined text-[22px]">dashboard</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#d0ef68]">Lado Profesional</p>
                  <h3 className="font-display text-lg font-bold text-white">Panel de Control Inteligente</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#1d382b] text-[#afcebb] text-[10px] font-bold">
                Vista en vivo
              </span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {/* Metric row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#1d382b] flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#afcebb]">Turnos de hoy</span>
                  <span className="font-display text-2xl font-bold text-white mt-1">14 / 14</span>
                  <span className="text-xs text-[#d0ef68] mt-1 font-semibold">100% ocupación</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#1d382b] flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#afcebb]">Señas cobradas</span>
                  <span className="font-display text-2xl font-bold text-white mt-1">$58.400</span>
                  <span className="text-xs text-[#afcebb] mt-1">Acreditado directo</span>
                </div>
              </div>

              {/* Next Appointment Alert Item */}
              <div className="p-4 rounded-2xl bg-[#1d382b] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-3 h-3 rounded-full bg-[#d0ef68] shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">Próximo: Sofía Albarracín</p>
                    <p className="text-[11px] text-[#afcebb] truncate">En 15 min • Manicuría Rusa • Seña OK</p>
                  </div>
                </div>
                <button
                  onClick={onOpenPatientModal}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase transition-colors shrink-0"
                >
                  Ver ficha
                </button>
              </div>

              {/* Bottom perks */}
              <div className="mt-auto pt-4 p-4 rounded-2xl bg-[#1d382b]/60 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d0ef68] text-[22px]">sync</span>
                <p className="text-xs text-[#afcebb]">
                  Historial de clientes, notas privadas de ficha técnica y exportación a Excel con un clic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="w-full bg-[#eef5f1] py-16 md:py-24 border-t border-[#dde4e0]">
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f0ec] text-[#062217] text-[10px] font-bold uppercase tracking-wider mb-3">
              RESOLVÉ TUS DUDAS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#062217] tracking-tight">
              Preguntas frecuentes sobre el funcionamiento
            </h2>
            <p className="text-sm text-[#424844] mt-3">
              Todo lo que necesitás saber para poner a rodar tu negocio hoy mismo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {HOW_IT_WORKS_FAQ.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#dde4e0] p-5 shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-display text-base font-bold text-[#062217]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[#eef5f1] flex items-center justify-center text-[#062217] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#062217] text-white' : ''
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs sm:text-sm text-[#424844] leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="relative rounded-3xl bg-[#062217] text-white overflow-hidden px-8 py-14 md:p-16 flex flex-col items-center text-center shadow-2xl">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#d0ef68]/20 blur-[80px] pointer-events-none"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d382b] text-[#d0ef68] text-[10px] font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              EMPEZÁ HOY MISMO
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              ¿Listo para automatizar tu agenda?
            </h2>

            <p className="text-sm sm:text-base text-[#afcebb] mt-4 leading-relaxed">
              Configurá tus turnos en 5 minutos. Sin costo de alta, sin contratos y con 14 días de prueba con todas las funciones incluidas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenTrialModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d0ef68] text-[#171e00] text-xs font-bold hover:bg-[#b5d24e] transition-all shadow-lg active:scale-95"
              >
                <span>Comenzar prueba gratis</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1d382b] text-white text-xs font-semibold hover:bg-[#2c4e3e] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-[#d0ef68]">chat</span>
                <span>Hablar con un asesor por WhatsApp</span>
              </button>
            </div>

            <p className="text-xs text-[#84a291] mt-6">
              ¿Tenés un equipo grande o varias sucursales? Nuestro soporte te ayuda con la migración.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
