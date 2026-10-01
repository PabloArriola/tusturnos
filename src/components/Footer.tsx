import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenLegalModal }) => {
  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLegalModal(
      'Política de Privacidad',
      'En TusTurnos, la privacidad y el resguardo de la información de tus pacientes y clientes es prioridad absoluta. Implementamos encriptación de datos bajo estándares SSL de grado bancario. No comercializamos datos con terceros y tus agendas son de tu exclusiva propiedad.'
    );
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLegalModal(
      'Términos de Servicio',
      'El servicio de TusTurnos se brinda bajo la modalidad de suscripción mensual o anual sin permanencia forzosa. Podés pausar o cancelar tu cuenta en cualquier momento desde tu panel de administración. La prueba gratuita de 14 días no requiere tarjeta de crédito ni renovación automática obligatoria.'
    );
  };

  return (
    <footer className="w-full bg-[#eef5f1] border-t border-[#dde4e0] mt-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#dde4e0]">
          {/* Brand Info */}
          <div className="flex flex-col gap-2 max-w-sm">
            <button
              onClick={() => handleNavClick('inicio')}
              className="flex items-center gap-2 text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-[#062217] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[18px] text-[#d0ef68]">calendar_today</span>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-[#062217]">
                Tus<span className="text-[#526600]">Turnos</span>
              </span>
            </button>
            <p className="text-xs text-[#424844]">
              De los turnos, nos encargamos nosotros.
            </p>
            <div className="flex flex-col gap-1 text-[11px] text-[#555d58] mt-2">
              <p className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#526600]">call</span>
                <a href="https://wa.me/5493794825713" target="_blank" rel="noopener noreferrer" className="hover:text-[#062217] font-medium">
                  +54 3794 825713
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#526600]">location_on</span>
                <span>Corrientes Capital. Argentina.</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-[#424844]">
            <button onClick={() => handleNavClick('inicio')} className="hover:text-[#062217] transition-colors">
              Inicio
            </button>
            <button onClick={() => handleNavClick('como-funciona')} className="hover:text-[#062217] transition-colors">
              ¿Cómo funciona?
            </button>
            <button onClick={() => handleNavClick('beneficios')} className="hover:text-[#062217] transition-colors">
              Beneficios
            </button>
            <button onClick={() => handleNavClick('precios')} className="hover:text-[#062217] transition-colors">
              Precios
            </button>
            <button onClick={() => handleNavClick('contacto')} className="hover:text-[#062217] transition-colors">
              Contacto
            </button>
          </nav>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-[#424844]">
          <p>© 2026 TusTurnos. Todos los derechos reservados. Desarrollado por <strong className="text-[#062217] font-semibold">Mainumby</strong>.</p>
          <div className="flex items-center gap-6">
            <button onClick={openPrivacy} className="hover:text-[#062217] transition-colors underline-offset-2 hover:underline">
              Privacidad
            </button>
            <button onClick={openTerms} className="hover:text-[#062217] transition-colors underline-offset-2 hover:underline">
              Términos de servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
