import React, { useState } from 'react';
import { TabType } from '../../types';
import { PLANS } from '../../data/mockData';

interface HomeViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenTrialModal: (email?: string, plan?: string) => void;
  onOpenDemoModal: () => void;
  onShowToast: (msg: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenTrialModal,
  onOpenDemoModal,
  onShowToast,
}) => {
  const [emailInput, setEmailInput] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      onShowToast('Ingresá tu correo para comenzar');
      return;
    }
    onOpenTrialModal(emailInput);
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/5491123940228?text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20TusTurnos', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden relative" id="inicio">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#d0ef68]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-900 text-[11px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px] text-emerald-700">verified_user</span>
                <span>Sistema de gestión y agendamiento online</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#062217] tracking-tight leading-[1.12]">
                Sistema de turnos. <br />
                <span className="text-[#526600]">Diseñado para simplificar y potenciar tu trabajo.</span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-base sm:text-lg text-[#424844] font-normal leading-relaxed max-w-xl">
                La plataforma ágil, simple y flexible que automatiza tus reservas, sincroniza tus clientes y optimiza tus cobros en tiempo real.
              </p>

              {/* Quick Capture Form */}
              <form
                onSubmit={handleHeroSubmit}
                className="max-w-md flex flex-col sm:flex-row items-center gap-2 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-[#062217] transition-all"
              >
                <input
                  type="email"
                  required
                  placeholder="Ingresá tu email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-transparent px-5 py-3 text-sm text-[#161d1b] placeholder-gray-400 focus:outline-none border-none ring-0"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-[#062217] text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-[#1d382b] transition-all shadow-sm"
                >
                  <span>Empezar gratis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </form>

              {/* Social Proof Stack */}
              <div className="pt-2 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    alt="Doctora usuario de TusTurnos"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ40l4DGmXXkfUIAf9_F6AhnMaD1-cV_PDprNtz9hHZStcPmVxxRDNzQBgKwrDfYhY__kq0o8KmQBcrmD2UbaD2d_k2MswAHnst-yjV78LOHNVRkQEM3XCUOkqoms2s5KSTaHeFlg_pVJ3ELq6eZljPjFTdb-BxqSS6zmDcbTDzEeTRlpU96VjbvP0bjGUltIiEwpLJog89t5arU9sLwRnhHNq1xLL6k00PA552HGnLtIQ1i_ZSefo"
                  />
                  <img
                    alt="Profesional usuario"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3Rn0jMHDGcZ7oXui8tkpYSi3vXX5u7xyDTWU-WvIRI7nqdYZZXZq2fNpshMNAiIAw0MP8P3_3zuAEvJ65Qm_ahezY0hzBiQ4Lw9xlO1UTL9XGtw0oqDXM4hGf7x-32C3CGzZq3g7OgSgO-B3HRk2vvVmpMvxdr2gixjSiBsleVymR81tYN_N2jS80RxpHiWcol6yKkPh5ItuRih4WCv50Jwz1J1p3GQRk6vuHoXAwRvIG2wz1HAU"
                  />
                  <img
                    alt="Terapeuta usuario"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3hffoxU7k6HksA3tx6kTJdbwZ7dKVpItw8uZz64nO1lEoSHq0wNaHiF-MmjUcKeGdT39YOKojHSZ6N3Ksdd_lAHgADQb_V9IUQR63ESQSx5mTg86YITda-2V3BUYMOQv7boWuR3CO6J9TzhoXYRaEw1vZ7ky4gRcryzimgJ4o08Epy2poE78_dNaR4_kBE9jC1z9m_KHSfmqF6NGTS1VdlziBekVEGoAJ0e2M9fBAOUiieDplyyc"
                  />
                </div>
                <p className="text-xs text-[#424844] font-medium">
                  Más de <span className="font-bold text-[#062217]">5,000 profesionales</span> y consultorios organizan su día con nosotros.
                </p>
              </div>
            </div>

            {/* Right Graphic / Software Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-[#dbe6cf]/60 rounded-[3rem] transform -rotate-1 scale-95 filter blur-sm"></div>

                <div className="relative bg-[#ebf2e4] rounded-[2.5rem] p-5 sm:p-7 border border-[#d8e3ce] shadow-xl overflow-hidden">
                  {/* Floating Badge 1: Realtime Management */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 mb-4 shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#d0ef68] flex items-center justify-center text-[#171e00] shrink-0 font-bold">
                      <span className="material-symbols-outlined text-[20px]">sync</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#062217] leading-tight">Gestión en Tiempo Real</h4>
                      <p className="text-[11px] text-[#424844] truncate">Calendario sincronizado y disponibilidad 24/7</p>
                    </div>
                  </div>

                  {/* Central Visual Mockup */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200/60 bg-white">
                    <img
                      alt="Pantalla de gestión de turnos TusTurnos"
                      referrerPolicy="no-referrer"
                      className="w-full h-56 sm:h-64 object-cover object-center"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZbB5EYnJFasGYEiIMt-K4EVnd4f5DL9beg3J9jaqv2yYlocbdAN5xbCNwgfNajECPwMImv-Tk1uRjIDE0-puGo5_fnLGI4i1z-WxtcdkC_dbEehFBQbiQSXu_lGpQakvKsLD7RRlQwRqISXAk54cJcAdfH5R_1TBQWWv6ZXEjB1Y_bZCZy_bga6yGVA_RROgouBwc7aGJNj_1rPKTTrAXVm0avFog5OjsYtrmYvjNHi8Ndg1C46cN"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                      <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#062217] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Panel Centralizado TusTurnos v2.4
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 2: WhatsApp Reminder */}
                  <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-gray-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#062217] text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px] text-[#d0ef68]">chat</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#062217] leading-tight">Recordatorios por WhatsApp</h4>
                        <p className="text-[11px] text-[#424844]">Mensajes automáticos personalizados</p>
                      </div>
                    </div>
                    <span className="bg-[#d0ef68] text-[#171e00] font-extrabold text-[10px] px-2 py-0.5 rounded-full shrink-0">
                      -80% ausentismo
                    </span>
                  </div>

                  {/* Floating Badge 3: Online Deposit Payment */}
                  <div className="mt-2.5 bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">payments</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#062217] leading-tight">Cobro de Señas Online</h4>
                        <p className="text-[11px] text-[#424844]">Mercado Pago integrado</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Activo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS SECTION */}
      <section className="border-y border-[#dde4e0] bg-[#edf3e8]/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div className="pt-4 lg:pt-0">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">99.8%</p>
              <p className="text-xs sm:text-sm font-medium text-[#424844] mt-1">Disponibilidad del servicio</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">+500K</p>
              <p className="text-xs sm:text-sm font-medium text-[#424844] mt-1">Turnos agendados</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">3x</p>
              <p className="text-xs sm:text-sm font-medium text-[#424844] mt-1">Aumento en puntualidad</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">100%</p>
              <p className="text-xs sm:text-sm font-medium text-[#424844] mt-1">En la nube y multidispositivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTROS PILARES */}
      <section className="py-20 lg:py-24" id="pilares">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                <span className="material-symbols-outlined text-[16px] text-[#526600]">domain</span>
                <span>Nuestros pilares</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight leading-tight">
                Tu agenda accesible en cualquier momento y lugar.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424844] max-w-md">
              Accedé a tu sistema desde cualquier smartphone, tablet o computadora sin instalaciones complejas ni complicaciones técnicas.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Simple */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img
                alt="Móvil con reserva de turnos en mano"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdzPhrH8SGeLGE8FXkxLZ9T7i3cqlH82i6D1rqbHzC8d3DgHdWPpOSWOE5LFHRnoI5Jsnqye7PbdxhHLtU0mVomaslE84rd_K04qJwk8RMoOFPQxWBpFm6vbDLCe-dCBpdgsLkHroroaxPUSTmQwiBrJNdwIh5ZfJlROt3B_txt9ohMyyYPrYTD-kTG_QciYBi3AxJJGM-UqMy0axxCliwK4CPjINTqOXno-2P6eGjBtJRCKkMoRR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <span className="material-symbols-outlined text-[20px]">smartphone</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">Simple</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  La interfaz es intuitiva, cómoda y diseñada para que vos y tus clientes reserven en cuestión de segundos.
                </p>
              </div>
            </div>

            {/* Card 2: Flexible */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img
                alt="Recepción moderna de consultorio o clínica"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-th-aMPoSEE8v-jxq5xWpSeX8APxVki9C1wfZhYexxDnnUjAoIRdQBYIdMLblUyfTEYKxFZ1cPw-3Rz9I4V59z3b9vsn6KYDpQxeGAQ_WSzRZOryjsNzTbE_s_JxUUQeSaQ2spPT9FPi_sPnHBCelZipzm_QDK9Atr2zkJ06G4ZXMmeUp03xeF1egwCiy0PxpNhnd_hNxezO7G-_-i8g2B50qzlhi4tjS1XIWcoSEjfjlEf7aRJN3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">Flexible</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  Se adapta a consultorios médicos, estética, estudios deportivos, canchas, consultorías y profesionales.
                </p>
              </div>
            </div>

            {/* Card 3: Económico */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img
                alt="Profesional atendiendo a cliente feliz"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7tgbE2S757lTu99LggpmhKYfqskcX1qwA2i9mm2ol0nFL4T1PV57-9rx0M1R1c7RouQVpp2QYqmFWY3RiqJ0gBZAy1jw1379XfWLPDw0QHmQvehwFxTalXpI2cbZ0j8Krx-wspCuanXFlSYfkm5xH5_vdy5eI9k2rC2QO0clduJzcB2wVv-OX91MIVpfroHTW4dJQursTULnL73oq2LR0_AvIpd-1dOJbDVTsV2gd8CzNPUvlsOLd"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <span className="material-symbols-outlined text-[20px]">savings</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">Económico</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  Pagás únicamente por lo que usás, con tarifas mensuales claras y transparentes sin contratos de permanencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS EXCLUSIVOS GRID */}
      <section className="py-20 bg-white border-t border-gray-100" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#526600]">stars</span>
              <span>Beneficios exclusivos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight leading-tight">
              Todo lo que necesitás para tener el control total
            </h2>
            <p className="text-sm sm:text-base text-[#424844] mt-2 max-w-2xl">
              Potenciamos tu actividad diaria reemplazando libretas y mensajes dispersos por un panel moderno y centralizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">category</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Catálogo y Tiempos</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Gestión de Servicios</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Administrá fácilmente tus servicios. Actualizá precios, configurá duraciones personalizadas y bloques de preparación las veces que desees.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('como-funciona')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Configuración instantánea</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">folder_shared</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Historial Digital</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Ficha de Clientes</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Almacenamos los turnos de cada cliente para que consultes su historial de atenciones, notas clínicas o preferencias cuando lo necesites.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('beneficios')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Datos 100% seguros</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#f0f8e2] border border-[#d0ef68]/50 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">En Vivo</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Real Time & En la Nube</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Consultá el estado de tu agenda en cualquier momento. Actualizá tus horarios, bloqueá días de vacaciones y agregá sobreturnos en vivo.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('beneficios')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Sincronización total</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">payments</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Mercado Pago</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Cobro Anticipado y Señas</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Cobrá el servicio completo o una seña de reserva por adelantado. Reducí cancelaciones asegurando el compromiso de cada cliente.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('como-funciona')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Acreditación directa</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Automatización</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Recordatorios por WhatsApp</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Enviá avisos automáticos con links de confirmación, mapa de acceso y detalles de preparación para que nadie olvide su cita.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('como-funciona')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Mensajes personalizables</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Card 6 */}
            <div className="bg-[#fafcfa] p-7 rounded-3xl border border-gray-200/80 hover:border-gray-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#062217] shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">store</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Escalabilidad</span>
                <h3 className="font-display text-lg font-bold text-[#062217] mb-2">Sucursales y Profesionales</h3>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed mb-6">
                  Gestioná diferentes sedes, box de atención y miembros de equipo sin perder de vista la totalidad operativa de tu empresa.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('beneficios')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062217] hover:text-[#526600] text-left"
              >
                <span>Permisos por usuario</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANES CLAROS Y ACCESIBLES */}
      <section className="py-20 lg:py-24 bg-[#f4f7f2]" id="precios-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#526600]">sell</span>
              <span>Planes claros y accesibles</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight leading-tight">
              Elegí el plan perfecto para tu ritmo de trabajo
            </h2>
            <p className="text-sm text-[#424844] mt-3">
              Sin costos ocultos ni compromisos de permanencia. Podés cambiar o cancelar tu suscripción en cualquier momento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PLANS.map((plan) => {
              const isHighlight = plan.highlighted;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    isHighlight
                      ? 'bg-[#062217] text-white border-2 border-emerald-900/60 shadow-xl scale-100 lg:-translate-y-2'
                      : 'bg-white text-[#161d1b] border border-gray-200/90 shadow-sm'
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d0ef68] text-[#171e00] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                      MÁS ELEGIDO
                    </div>
                  )}

                  <div>
                    <span
                      className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                        isHighlight ? 'bg-white/10 text-[#d0ef68]' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {plan.tag}
                    </span>
                    <h3 className={`font-display text-2xl font-extrabold mb-1 ${isHighlight ? 'text-white' : 'text-[#062217]'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mb-6 ${isHighlight ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8">
                      <span className={`font-display text-4xl font-extrabold tracking-tight ${isHighlight ? 'text-white' : 'text-[#062217]'}`}>
                        ${plan.priceMonthly.toLocaleString('es-AR')}
                      </span>
                      <span className={`text-xs font-semibold ${isHighlight ? 'text-gray-400' : 'text-gray-400'}`}>
                        / mes
                      </span>
                    </div>

                    <ul className="space-y-3.5 text-xs font-medium mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className={`material-symbols-outlined text-[18px] shrink-0 ${isHighlight ? 'text-[#d0ef68]' : 'text-[#526600]'}`}>
                            check_circle
                          </span>
                          <span className={isHighlight ? 'text-gray-200' : 'text-gray-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal('', plan.name)}
                    className={`w-full py-3.5 px-4 text-xs font-bold rounded-2xl transition-all ${
                      isHighlight
                        ? 'bg-[#d0ef68] hover:bg-[#b5d24e] text-[#171e00] shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200 text-[#062217]'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onSelectTab('precios')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#062217] hover:text-[#526600] underline-offset-4 hover:underline"
            >
              <span>Ver tabla comparativa completa y opciones de facturación anual (20% OFF)</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#d0ef68] rounded-[2.5rem] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3b541e] block">
              Transformá tu negocio hoy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#062217] tracking-tight leading-tight">
              Empezá hoy a organizar tus turnos de forma profesional.
            </h2>
            <p className="text-base sm:text-lg italic font-medium text-[#2d4017] pt-1">
              "De los turnos, nos encargamos nosotros."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppChat}
              className="inline-flex items-center justify-center gap-2 bg-[#062217] text-white text-xs font-bold px-6 py-4 rounded-full hover:bg-black transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#d0ef68]">chat</span>
              <span>Hablar por WhatsApp</span>
            </button>
            <button
              onClick={() => onOpenTrialModal()}
              className="inline-flex items-center justify-center bg-white text-gray-950 text-xs font-bold px-6 py-4 rounded-full hover:bg-gray-50 transition-all border border-black/5 shadow-xs"
            >
              Crear cuenta gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
