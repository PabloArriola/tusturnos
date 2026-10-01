import React, { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenDemoModal: () => void;
  onOpenTrialModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenDemoModal,
  onOpenTrialModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: TabType }[] = [
    { label: 'Inicio', tab: 'inicio' },
    { label: '¿Cómo funciona?', tab: 'como-funciona' },
    { label: 'Beneficios', tab: 'beneficios' },
    { label: 'Precios', tab: 'precios' },
    { label: 'Contacto', tab: 'contacto' },
  ];

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f4fbf7]/90 backdrop-blur-xl border-b border-[#dde4e0]/60 shadow-[0_1px_8px_rgba(6,34,23,0.04)]">
      <div className="h-20 w-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#062217] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[20px] text-[#d0ef68]">calendar_today</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-[#062217]">
            Tus<span className="text-[#526600]">Turnos</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-sm font-medium transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#062217] font-semibold'
                    : 'text-[#424844] hover:text-[#062217]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#062217] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-[#062217] bg-white border border-[#dde4e0] hover:bg-[#e8f0ec] hover:border-[#c2c8c2] transition-all shadow-xs"
          >
            Pedir demo
          </button>
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 rounded-full text-xs font-bold text-[#171e00] bg-[#d0ef68] hover:bg-[#b5d24e] transition-all shadow-sm active:scale-95"
          >
            Comenzar gratis
          </button>

          {/* User profile button */}
          <button
            onClick={onOpenTrialModal}
            title="Mi cuenta / Iniciar sesión"
            className="w-8 h-8 rounded-full bg-[#062217] text-white flex items-center justify-center hover:bg-[#1d382b] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#062217] hover:bg-[#e8f0ec] transition-colors"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#dde4e0] bg-[#f4fbf7] px-6 py-5 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left text-base py-2 px-3 rounded-xl font-medium transition-colors ${
                  currentTab === item.tab
                    ? 'bg-[#e2eae6] text-[#062217] font-bold'
                    : 'text-[#424844] hover:bg-[#e8f0ec]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#dde4e0] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3 rounded-full text-xs font-bold text-[#062217] bg-white border border-[#dde4e0] text-center"
              >
                Pedir demo guiada
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 rounded-full text-xs font-bold text-[#171e00] bg-[#d0ef68] text-center"
              >
                Comenzar gratis (14 días)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
