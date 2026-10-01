import React, { useState } from 'react';
import { TabType } from '../../types';
import { PLANS, PRICING_FAQ } from '../../data/mockData';

interface PricingViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenTrialModal: (email?: string, plan?: string) => void;
  onOpenDemoModal: () => void;
  onShowToast: (msg: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  onSelectTab,
  onOpenTrialModal,
  onOpenDemoModal,
  onShowToast,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSelectPlan = (planName: string) => {
    onOpenTrialModal('', `${planName} (${billingCycle === 'annual' ? 'Anual 20% OFF' : 'Mensual'})`);
  };

  return (
    <div className="w-full">
      {/* 1. HEADER SECTION & BILLING TOGGLE */}
      <section className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#d0ef68]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2eae6] text-[#062217] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#526600]"></span>
            <span className="text-[11px] font-bold tracking-wider uppercase">
              PLANES CLAROS Y SIN LETRA CHICA
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#062217] tracking-tight leading-[1.14] mb-4">
            Elegí el plan perfecto para el tamaño de tu negocio.
          </h1>

          <p className="text-base sm:text-lg text-[#424844] max-w-2xl mb-8 leading-relaxed">
            Sin contratos de permanencia, sin costos ocultos de instalación. Pagás mes a mes y podés cancelar cuando quieras.
          </p>

          {/* Toggle Billing Cycle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#e8f0ec] shadow-inner border border-[#dde4e0]">
            <button
              onClick={() => {
                setBillingCycle('monthly');
                onShowToast('Facturación mensual seleccionada');
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#062217] shadow-sm font-bold'
                  : 'text-[#424844] hover:text-[#062217]'
              }`}
            >
              Facturación mensual
            </button>
            <button
              onClick={() => {
                setBillingCycle('annual');
                onShowToast('Facturación anual con 20% de descuento');
              }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs transition-all duration-200 ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#062217] shadow-sm font-bold'
                  : 'text-[#424844] hover:text-[#062217]'
              }`}
            >
              <span>Anual</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#d0ef68] text-[#171e00] font-bold text-[10px] tracking-wide">
                20% OFF en anual
              </span>
            </button>
          </div>
        </div>

        {/* 2. THREE PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PLANS.map((plan) => {
            const isHighlight = plan.highlighted;
            const currentPrice = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all ${
                  isHighlight
                    ? 'bg-[#062217] text-white shadow-xl scale-[1.02] z-10 border-2 border-[#d0ef68]/40 overflow-hidden'
                    : 'bg-white text-[#161d1b] shadow-sm border border-[#dde4e0] hover:shadow-md'
                }`}
              >
                {/* Glow accent */}
                {isHighlight && (
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#d0ef68]/15 rounded-full blur-2xl pointer-events-none"></div>
                )}

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    {isHighlight ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d0ef68] text-[#171e00] text-[10px] tracking-wider uppercase font-extrabold shadow-xs">
                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                        MÁS ELEGIDO
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold tracking-widest uppercase text-[#424844]">
                        {plan.tag}
                      </span>
                    )}

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isHighlight ? 'bg-white/10 text-[#d0ef68]' : 'bg-[#e8f0ec] text-[#062217]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {plan.id === 'plan-1' ? 'person' : plan.id === 'plan-2' ? 'group' : 'corporate_fare'}
                      </span>
                    </div>
                  </div>

                  <h2 className={`font-display text-2xl font-bold mb-1 ${isHighlight ? 'text-white' : 'text-[#062217]'}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-xs mb-6 min-h-[36px] ${isHighlight ? 'text-[#afcebb]' : 'text-[#424844]'}`}>
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className={`font-display text-5xl font-extrabold tracking-tight ${isHighlight ? 'text-white' : 'text-[#062217]'}`}>
                      ${currentPrice.toLocaleString('es-AR')}
                    </span>
                    <span className={`text-xs font-semibold ${isHighlight ? 'text-[#afcebb]' : 'text-[#424844]'}`}>
                      / mes
                    </span>
                  </div>

                  <div className={`w-full h-px mb-6 ${isHighlight ? 'bg-white/10' : 'bg-[#dde4e0]'}`}></div>

                  {/* Feature list */}
                  <div className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <span className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${isHighlight ? 'text-[#d0ef68]' : 'text-[#526600]'}`}>
                          check_circle
                        </span>
                        <span className={isHighlight ? 'text-white' : 'text-[#161d1b]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 px-6 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm ${
                    isHighlight
                      ? 'bg-[#d0ef68] hover:bg-[#b5d24e] text-[#171e00]'
                      : 'bg-[#e8f0ec] hover:bg-[#dde4e0] text-[#062217]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {isHighlight ? 'bolt' : 'arrow_forward'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 3. BANNER CORPORATIVO */}
        <div className="relative w-full rounded-3xl bg-[#eef5f1] border border-[#dde4e0] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs mb-16 overflow-hidden">
          <div className="flex items-center gap-5 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#dde4e0] flex items-center justify-center text-[#062217] shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[30px]">domain</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase text-[#526600] tracking-wider">
                SOLUCIÓN A MEDIDA
              </span>
              <h3 className="font-display text-xl font-bold text-[#062217]">
                ¿Tenés más de 3 sucursales o más profesionales?
              </h3>
              <p className="text-xs sm:text-sm text-[#424844]">
                Armamos un plan a tu medida con integraciones API personalizadas, acuerdos SLA y atención preferencial.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectTab('contacto')}
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#062217] hover:bg-[#1d382b] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Contactar a Ventas</span>
            <span className="material-symbols-outlined text-[18px]">headset_mic</span>
          </button>
        </div>

        {/* 4. METRIC SHOWCASE STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white border border-[#dde4e0] flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#d0ef68]/40 flex items-center justify-center text-[#062217] shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#062217]">99.9% Uptime</p>
              <p className="text-xs text-[#424844]">Tus pacientes reservan a cualquier hora</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#dde4e0] flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#d0ef68]/40 flex items-center justify-center text-[#062217] shrink-0">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#062217]">0% Comisión</p>
              <p className="text-xs text-[#424844]">Tus ingresos son 100% tuyos</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#dde4e0] flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#d0ef68]/40 flex items-center justify-center text-[#062217] shrink-0">
              <span className="material-symbols-outlined text-[22px]">cancel</span>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#062217]">Sin permanencia</p>
              <p className="text-xs text-[#424844]">Pausá o cancelá con un clic</p>
            </div>
          </div>
        </div>

        {/* 5. DETAILED COMPARISON TABLE */}
        <div className="flex flex-col mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#062217] tracking-tight mb-2">
              Comparativa completa de funciones
            </h2>
            <p className="text-xs sm:text-sm text-[#424844]">
              Conocé al detalle qué incluye cada nivel y elegí con total tranquilidad.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-3xl bg-white border border-[#dde4e0] shadow-sm">
            <table className="w-full text-left min-w-[720px] text-xs">
              <thead>
                <tr className="bg-[#e8f0ec] border-b border-[#dde4e0]">
                  <th className="py-4 px-6 font-bold text-[#062217] text-sm">Características y Módulos</th>
                  <th className="py-4 px-4 font-bold text-[#062217] text-center text-sm">1 Agenda</th>
                  <th className="py-4 px-4 font-bold text-[#062217] text-center text-sm bg-[#d0ef68]/20">2 Agendas</th>
                  <th className="py-4 px-4 font-bold text-[#062217] text-center text-sm">3 Agendas o +</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde4e0]">
                {/* GESTIÓN DE TURNOS */}
                <tr className="bg-[#f4fbf7]">
                  <td className="py-3 px-6 font-bold text-[11px] text-[#526600] uppercase tracking-wider" colSpan={4}>
                    Gestión de Turnos y Agendas
                  </td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 font-medium text-[#161d1b]">Agendas independientes simultáneas</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">1</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217] bg-[#d0ef68]/10">2</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">3 o más</td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Ficha clínica / historial del paciente</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Página de reserva personalizada con logo</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Múltiples sucursales y ubicaciones</td>
                  <td className="py-3.5 px-4 text-center text-gray-400"><span className="material-symbols-outlined text-[18px]">remove</span></td>
                  <td className="py-3.5 px-4 text-center text-gray-400 bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">remove</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>

                {/* NOTIFICACIONES Y COMUNICACIÓN */}
                <tr className="bg-[#f4fbf7]">
                  <td className="py-3 px-6 font-bold text-[11px] text-[#526600] uppercase tracking-wider" colSpan={4}>
                    Notificaciones y Comunicación
                  </td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Recordatorios automáticos por WhatsApp</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Confirmación instantánea de reserva por correo</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Reprogramación y cancelación autónoma</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>

                {/* PAGOS Y FACTURACIÓN */}
                <tr className="bg-[#f4fbf7]">
                  <td className="py-3 px-6 font-bold text-[11px] text-[#526600] uppercase tracking-wider" colSpan={4}>
                    Pagos y Facturación
                  </td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Cobro de señas y pagos totales por Mercado Pago</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Comisión sobre turnos reservados</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">0%</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217] bg-[#d0ef68]/10">0%</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">0%</td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Reportes analíticos de facturación e ingresos</td>
                  <td className="py-3.5 px-4 text-center text-[#424844]">Básico</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217] bg-[#d0ef68]/10">Avanzado</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">Completo + Exportación</td>
                </tr>

                {/* SEGURIDAD Y SOPORTE */}
                <tr className="bg-[#f4fbf7]">
                  <td className="py-3 px-6 font-bold text-[11px] text-[#526600] uppercase tracking-wider" colSpan={4}>
                    Seguridad, Roles y Soporte
                  </td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Roles y permisos diferenciados para secretaría</td>
                  <td className="py-3.5 px-4 text-center text-gray-400"><span className="material-symbols-outlined text-[18px]">remove</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Sincronización en vivo con Google Calendar</td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600] bg-[#d0ef68]/10"><span className="material-symbols-outlined text-[18px]">check</span></td>
                  <td className="py-3.5 px-4 text-center text-[#526600]"><span className="material-symbols-outlined text-[18px]">check</span></td>
                </tr>
                <tr className="hover:bg-[#f4fbf7] transition-colors">
                  <td className="py-3.5 px-6 text-[#161d1b]">Canal de atención y soporte técnico</td>
                  <td className="py-3.5 px-4 text-center text-[#424844]">Email (24 hs)</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217] bg-[#d0ef68]/10">WhatsApp Prioritario</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#062217]">Account Manager Dedicado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. FAQ SECTION */}
        <div className="flex flex-col max-w-3xl mx-auto mb-20">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold text-[#526600] tracking-wider uppercase">
              RESOLVÉ TUS DUDAS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#062217] tracking-tight mt-1">
              Preguntas frecuentes sobre facturación
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {PRICING_FAQ.map((faq, idx) => {
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
                    <div className="mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-[#424844] leading-relaxed animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. BOTTOM CONVERSION CARD */}
        <div className="relative rounded-3xl bg-[#062217] text-white p-8 md:p-14 overflow-hidden shadow-2xl mb-12">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#d0ef68]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl flex flex-col items-start gap-4">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#d0ef68] text-[10px] uppercase tracking-wider font-bold">
              EMPEZÁ HOY MISMO
            </span>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sumate a los más de 1.800 profesionales que ya simplificaron su día.
            </h3>

            <p className="text-sm sm:text-base text-[#afcebb] leading-relaxed">
              Creá tu enlace de reservas en 5 minutos y dejá que TusTurnos se ocupe de tus pacientes y tus señas.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenTrialModal()}
                className="px-8 py-3.5 rounded-full bg-[#d0ef68] hover:bg-[#b5d24e] text-[#171e00] text-xs font-bold transition-all shadow-md active:scale-95"
              >
                Comenzar prueba gratuita de 14 días
              </button>
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Hablar con un asesor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
