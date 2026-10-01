import React, { useState } from 'react';
import { TabType } from '../../types';
import { TESTIMONIALS } from '../../data/mockData';

interface BenefitsViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenTrialModal: (email?: string, plan?: string) => void;
  onOpenDemoModal: () => void;
  onShowToast: (msg: string) => void;
}

export const BenefitsView: React.FC<BenefitsViewProps> = ({
  onSelectTab,
  onOpenTrialModal,
  onOpenDemoModal,
  onShowToast,
}) => {
  const [waConfirmed, setWaConfirmed] = useState(false);

  const handleConfirmWhatsapp = () => {
    setWaConfirmed(true);
    onShowToast('✓ Turno reconfirmado automáticamente por el bot de WhatsApp');
  };

  const handleRescheduleWhatsapp = () => {
    onShowToast('Enviando enlace de autogestión de reprogramación...');
  };

  return (
    <div className="w-full">
      {/* 1. EDITORIAL HEADER */}
      <section className="relative w-full overflow-hidden pt-10 md:pt-16 pb-12">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-[#d0ef68]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1280px] mx-auto w-full px-4 md:px-8">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2eae6] shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-[#062217]">stars</span>
              <span className="text-[11px] text-[#062217] tracking-wider uppercase font-bold">
                Ventajas Exclusivas
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#062217] tracking-tight font-extrabold leading-[1.12]">
              Todo lo que ganás al automatizar tu sistema de turnos.
            </h1>

            <p className="text-base sm:text-lg text-[#424844] max-w-2xl mt-2 leading-relaxed">
              Menos ausentismo, cero tiempo perdido respondiendo mensajes y clientes mucho más satisfechos desde el primer día.
            </p>

            {/* Quick Proof Indicator */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d0ef68] shadow-[0_0_8px_rgba(208,239,104,0.9)]"></span>
                <span className="text-xs font-bold text-[#062217]">
                  Sincronización instantánea con WhatsApp y Agenda
                </span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#062217] text-[18px]">verified</span>
                <span className="text-xs text-[#424844]">
                  Activación inmediata sin contratos forzosos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGH IMPACT METRICS BENTO */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Metric 1: -80% Ausencias */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-xs border border-[#dde4e0] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0ef68]/30 rounded-bl-[80px] -z-0"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#062217] text-[#d0ef68] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">notifications_active</span>
              </div>
              <div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#062217] tracking-tight">
                  -80%
                </div>
                <div className="font-display text-lg font-bold text-[#062217] mt-1">
                  De ausencias confirmadas
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Gracias a recordatorios automáticos por WhatsApp con confirmación interactiva, tus pacientes y clientes reconfirman su cita con un solo toque.
              </p>
            </div>

            {/* Micro Visual Widget */}
            <div className="relative z-10 mt-6 pt-4 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[#424844] text-[11px]">
                <span className="flex items-center gap-1.5 font-bold text-[#062217]">
                  <span className="material-symbols-outlined text-[16px] text-[#526600]">mark_chat_read</span>
                  WhatsApp Bot
                </span>
                <span className="font-mono">10:42 AM</span>
              </div>
              <p className="text-xs text-[#062217] leading-relaxed">
                ¿Confirmás tu turno mañana a las 16:30 hs?
              </p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleConfirmWhatsapp}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    waConfirmed
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#062217] text-white hover:bg-[#1d382b]'
                  }`}
                >
                  {waConfirmed ? 'Confirmado ✓' : 'Confirmar ✓'}
                </button>
                <button
                  onClick={handleRescheduleWhatsapp}
                  className="px-3 py-1.5 bg-[#e2eae6] hover:bg-[#dde4e0] text-[#062217] rounded-full text-xs font-semibold transition-colors"
                >
                  Reprogramar
                </button>
              </div>
            </div>
          </div>

          {/* Metric 2: +15 hs Semanales libres (Forest Slate Hero Card) */}
          <div className="lg:col-span-4 bg-[#062217] text-white rounded-3xl p-8 shadow-md border border-emerald-950 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-[#1d382b]/80 rounded-full blur-xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#d0ef68] text-[#171e00] flex items-center justify-center font-bold shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">schedule</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1d382b] text-[#d0ef68] text-[10px] font-bold uppercase tracking-wider">
                  TIEMPO RECUPERADO
                </span>
              </div>

              <div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#d0ef68] tracking-tight">
                  +15 hs
                </div>
                <div className="font-display text-lg font-bold text-white mt-1">
                  Semanales libres
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#afcebb] leading-relaxed">
                Delegá el agotador ida y vuelta de <em>“¿qué horario te queda cómodo?”</em> a un link inteligente que muestra sólo tus huecos disponibles.
              </p>
            </div>

            {/* Time Distribution Visual Indicator */}
            <div className="relative z-10 mt-6 bg-[#1d382b]/70 border border-white/10 rounded-2xl p-4">
              <div className="flex justify-between items-center text-[#afcebb] text-[11px] mb-2">
                <span>Ahorro mensual acumulado</span>
                <span className="text-[#d0ef68] font-bold font-mono">60 horas netas</span>
              </div>
              <div className="w-full bg-[#062217] h-2.5 rounded-full overflow-hidden flex">
                <div className="bg-[#d0ef68] h-full rounded-full transition-all duration-700 w-[78%]"></div>
              </div>
              <div className="flex justify-between text-[11px] text-[#afcebb] mt-2.5">
                <span>Antes: Chat manual</span>
                <span className="font-bold text-white">Ahora: Autogestión</span>
              </div>
            </div>
          </div>

          {/* Metric 3: 100% Señas Aseguradas */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-xs border border-[#dde4e0] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/60 rounded-bl-[80px] -z-0"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e2eae6] text-[#062217] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[24px]">payments</span>
              </div>
              <div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#062217] tracking-tight">
                  100%
                </div>
                <div className="font-display text-lg font-bold text-[#062217] mt-1">
                  De señas aseguradas
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Reducí turnos fantasma cobrando un anticipo o la totalidad del servicio directo por Mercado Pago o tarjeta antes de agendar.
              </p>
            </div>

            {/* Checkout Flow Pill Bar */}
            <div className="relative z-10 mt-6 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#526600] text-[22px]">lock</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#062217]">Seña acreditada</span>
                  <span className="text-[11px] text-[#424844]">Vía Checkout Mercado Pago</span>
                </div>
              </div>
              <span className="font-display text-base font-bold text-[#062217] font-mono">$4.500</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPACIDADES DE LA PLATAFORMA */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-[11px] font-bold text-[#526600] tracking-widest uppercase">
              Capacidades de la Plataforma
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight">
              Diseñado para responder con precisión a la realidad de tu día a día.
            </h2>
          </div>
          <p className="text-sm text-[#424844] max-w-sm">
            Herramientas profundas con una curva de aprendizaje casi nula para vos, tus asistentes y tus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#dde4e0] shadow-xs flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217]">
                  <span className="material-symbols-outlined text-[24px]">tune</span>
                </div>
                <span className="text-[10px] font-bold bg-[#eef5f1] text-[#062217] px-3 py-1 rounded-full uppercase tracking-wider">
                  Flexibilidad Total
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#062217]">
                  Gestión Integral de Servicios y Precios
                </h3>
                <p className="text-xs sm:text-sm text-[#424844] mt-2 leading-relaxed">
                  Configurá duraciones personalizadas por prestación, amortiguadores de tiempo entre turnos para sanitizar o descansar y actualizaciones de tarifas en un clic sin desorganizar lo ya programado.
                </p>
              </div>

              <ul className="flex flex-col gap-2 mt-2 text-xs text-[#161d1b]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Tiempos de descanso y preparación dinámicos (buffer time)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Diferenciación de precios por profesional o categoría</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Políticas de cancelación y reembolsos automatizadas</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-[#062217]">Servicio: Consulta Diagnóstica</span>
                <span className="text-[10px] font-bold text-[#424844] bg-[#dde4e0] px-2 py-0.5 rounded">45 min</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#424844]">
                <span>Intervalo post-turno: 10 min de desinfección</span>
                <span className="font-bold text-[#062217] font-mono">$12.000 ARS</span>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#dde4e0] shadow-xs flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217]">
                  <span className="material-symbols-outlined text-[24px]">folder_shared</span>
                </div>
                <span className="text-[10px] font-bold bg-[#eef5f1] text-[#062217] px-3 py-1 rounded-full uppercase tracking-wider">
                  Historial Clínico y Estético
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#062217]">
                  Ficha Digital del Cliente e Historial
                </h3>
                <p className="text-xs sm:text-sm text-[#424844] mt-2 leading-relaxed">
                  Registro integral de citas previas, notas médicas, observaciones estéticas, alergias, fórmulas aplicadas y métricas de puntualidad para brindar un trato de primer nivel a cada cliente.
                </p>
              </div>

              <ul className="flex flex-col gap-2 mt-2 text-xs text-[#161d1b]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Notas privadas por cita accesibles sólo por el profesional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Tasa de asistencia, reprogramaciones y cancelaciones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Adjunto de imágenes o documentos en PDF</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#062217] text-[#d0ef68] flex items-center justify-center font-bold text-xs shrink-0">
                MP
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#062217] truncate">Martina Pellegrini (14 turnos)</span>
                <span className="text-[11px] text-[#424844] truncate">Última visita: Hace 12 días • 100% puntualidad</span>
              </div>
              <span className="ml-auto material-symbols-outlined text-[#062217] text-[18px]">chevron_right</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#dde4e0] shadow-xs flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217]">
                  <span className="material-symbols-outlined text-[24px]">devices</span>
                </div>
                <span className="text-[10px] font-bold bg-[#eef5f1] text-[#062217] px-3 py-1 rounded-full uppercase tracking-wider">
                  Acceso Multiplataforma
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#062217]">
                  Disponibilidad Real Time & Multidispositivo
                </h3>
                <p className="text-xs sm:text-sm text-[#424844] mt-2 leading-relaxed">
                  Consultá tu agenda desde el celular, tablet o computadora, en tiempo real y en la nube. Cambios de último minuto reflejados instantáneamente para todo tu equipo sin sobreturnos accidentales.
                </p>
              </div>

              <ul className="flex flex-col gap-2 mt-2 text-xs text-[#161d1b]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Sincronización bidireccional con Google Calendar y Apple iCal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Modo rápido offline para consultar contactos sin señal</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Cifrado SSL bancario para resguardo absoluto de datos</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d0ef68] animate-pulse"></span>
                <span className="text-xs font-bold text-[#062217]">Live Sync Activo</span>
              </div>
              <span className="text-xs text-[#424844]">3 dispositivos conectados</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-3xl p-8 border border-[#dde4e0] shadow-xs flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0ec] flex items-center justify-center text-[#062217]">
                  <span className="material-symbols-outlined text-[24px]">store</span>
                </div>
                <span className="text-[10px] font-bold bg-[#eef5f1] text-[#062217] px-3 py-1 rounded-full uppercase tracking-wider">
                  Escalabilidad
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#062217]">
                  Multisucursal y Gestión de Equipo
                </h3>
                <p className="text-xs sm:text-sm text-[#424844] mt-2 leading-relaxed">
                  Organizá múltiples agendas, permisos segmentados para colaboradores, boxes o consultorios físicos desde un panel unificado de control gerencial sin mezclar cajas ni facturación.
                </p>
              </div>

              <ul className="flex flex-col gap-2 mt-2 text-xs text-[#161d1b]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Roles con permisos diferenciados (Recepcionista, Profesional, Admin)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Asignación automática de consultorio, sillón o equipamiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#526600]">check_circle</span>
                  <span>Reportes comparativos de productividad y rendimiento por sede</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 bg-[#f4fbf7] border border-[#dde4e0] rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#062217] text-[18px]">domain</span>
                <span className="text-xs font-bold text-[#062217]">Sede Palermo • Sede Belgrano</span>
              </div>
              <span className="text-[10px] bg-[#dde4e0] text-[#062217] px-2.5 py-1 rounded-full font-bold">
                4 Consultorios
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVA DE OPERACIÓN */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-6">
        <div className="bg-[#eef5f1] border border-[#dde4e0] rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-bold text-[#526600] tracking-widest uppercase">
              Comparativa de Operación
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#062217] tracking-tight mt-1">
              El cambio real en tu rutina cotidiana.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="bg-white/70 border border-[#dde4e0] rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-red-600">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
                <span className="text-xs font-bold uppercase tracking-wider">Método Tradicional</span>
              </div>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#424844]">
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">×</span>
                  <span>Responder mensajes fuera de horario laboral un domingo por la noche.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">×</span>
                  <span>Huecos de 2 horas sin facturar por clientes que simplemente no avisan.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">×</span>
                  <span>Cuadernos de papel manchados o planillas de Excel que nadie actualiza.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">×</span>
                  <span>Incertidumbre sobre quién confirmó o quién debe la seña.</span>
                </p>
              </div>
            </div>

            {/* The TusTurnos Way */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dde4e0] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#526600]">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span className="text-xs font-bold uppercase tracking-wider">Con TusTurnos</span>
              </div>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#062217] font-medium">
                <p className="flex items-start gap-2">
                  <span className="text-[#526600] font-bold shrink-0">✓</span>
                  <span>Tu link de reservas trabaja 24/7 sin interrumpir tus momentos de descanso.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#526600] font-bold shrink-0">✓</span>
                  <span>Recordatorios por WhatsApp automáticos que liberan cupos si alguien cancela.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#526600] font-bold shrink-0">✓</span>
                  <span>Historial ordenado de fichas médicas y pagos sincronizado en la nube.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#526600] font-bold shrink-0">✓</span>
                  <span>Cobro del anticipo directo con Mercado Pago antes de bloquear la franja.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASOS DE ÉXITO REALES */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-20">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-[#526600] tracking-widest uppercase">
            Casos de Éxito Reales
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#062217] tracking-tight mt-1">
            Líderes que transformaron su negocio
          </h2>
          <p className="text-sm text-[#424844] mt-2">
            Descubrí cómo clínicas, centros de estética, consultores y complejos deportivos operan al máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-xs border border-[#dde4e0] flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#eef5f1] text-[#062217] text-[10px] font-bold tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex text-[#526600]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#062217] italic leading-relaxed mt-2">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-100">
                <img
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover shadow-xs ring-1 ring-[#dde4e0]"
                  src={item.imageUrl}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[#062217] truncate">{item.author}</span>
                  <span className="text-[11px] text-[#424844] truncate">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONVERSION BANNER */}
      <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 pb-20">
        <div className="w-full bg-[#062217] rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#d0ef68]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d382b] text-[#d0ef68] text-[10px] uppercase tracking-wider font-bold w-fit">
                Prueba gratuita por 14 días
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Empezá a ahorrar tiempo hoy mismo con TusTurnos.
              </h2>
              <p className="text-sm sm:text-base text-[#afcebb] leading-relaxed">
                Configurá tu perfil en menos de 5 minutos, compartí tu link y disfrutá de una agenda llena sin esfuerzo. Sin tarjeta de crédito requerida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenTrialModal()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-[#171e00] bg-[#d0ef68] hover:bg-[#b5d24e] transition-all shadow-md text-center active:scale-95"
              >
                <span>Comenzar gratis ahora</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-xs font-semibold text-white bg-[#1d382b] hover:bg-[#2c4e3e] transition-colors text-center"
              >
                Agendar una demo guiada
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-x-8 gap-y-2 mt-10 pt-6 border-t border-white/10 text-[#afcebb] text-xs">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#d0ef68] text-[16px]">check</span>
              Sin contratos de permanencia
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#d0ef68] text-[16px]">check</span>
              Soporte personalizado en español
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#d0ef68] text-[16px]">check</span>
              Migración asistida de tus clientes actuales
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
