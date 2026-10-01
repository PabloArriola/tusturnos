import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { HowItWorksView } from './components/views/HowItWorksView';
import { BenefitsView } from './components/views/BenefitsView';
import { PricingView } from './components/views/PricingView';
import { ContactView } from './components/views/ContactView';
import { StartFreeTrialModal } from './components/modals/StartFreeTrialModal';
import { BookDemoModal } from './components/modals/BookDemoModal';
import { PatientRecordModal } from './components/modals/PatientRecordModal';
import { LegalModal } from './components/modals/LegalModal';
import { Toast } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('inicio');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialEmail, setTrialEmail] = useState('');
  const [trialPlan, setTrialPlan] = useState('Plan 2 Agendas');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL hash if loaded with #precios, etc.
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as TabType;
      if (['inicio', 'como-funciona', 'beneficios', 'precios', 'contacto'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.location.hash = tab;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleOpenTrialModal = (email = '', plan = 'Plan 2 Agendas') => {
    setTrialEmail(email);
    setTrialPlan(plan);
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4fbf7] text-[#161d1b]">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      {/* Main View Container */}
      <main className="flex-1 pt-20">
        {currentTab === 'inicio' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenTrialModal={handleOpenTrialModal}
            onOpenDemoModal={() => setDemoModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'como-funciona' && (
          <HowItWorksView
            onSelectTab={handleSelectTab}
            onOpenTrialModal={handleOpenTrialModal}
            onOpenDemoModal={() => setDemoModalOpen(true)}
            onOpenPatientModal={() => setPatientModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'beneficios' && (
          <BenefitsView
            onSelectTab={handleSelectTab}
            onOpenTrialModal={handleOpenTrialModal}
            onOpenDemoModal={() => setDemoModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'precios' && (
          <PricingView
            onSelectTab={handleSelectTab}
            onOpenTrialModal={handleOpenTrialModal}
            onOpenDemoModal={() => setDemoModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'contacto' && (
          <ContactView
            onSelectTab={handleSelectTab}
            onOpenDemoModal={() => setDemoModalOpen(true)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Unified Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenLegalModal={(title, content) =>
          setLegalModalState({ isOpen: true, title, content })
        }
      />

      {/* Interactive Modals */}
      <StartFreeTrialModal
        isOpen={trialModalOpen}
        initialEmail={trialEmail}
        initialPlan={trialPlan}
        onClose={() => setTrialModalOpen(false)}
        onSuccess={(biz, link) => {
          showToast(`¡Felicitaciones! Agenda activada para ${biz}: ${link}`);
        }}
      />

      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onSuccess={() => {
          showToast('✓ Demostración agendada. Te enviamos la invitación a tu email.');
        }}
      />

      <PatientRecordModal
        isOpen={patientModalOpen}
        onClose={() => setPatientModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        title={legalModalState.title}
        content={legalModalState.content}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Floating Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
