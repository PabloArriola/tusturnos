import { PlanInfo, Testimonial } from '../types';

export const PLANS: PlanInfo[] = [
  {
    id: 'plan-1',
    name: 'Plan 1 Agenda',
    tag: 'Inicial',
    description: 'Para profesionales independientes, consultorios individuales o terapeutas.',
    priceMonthly: 27500,
    priceAnnual: 22000,
    features: [
      '1 Agenda y profesional',
      'Ficha de clientes ilimitada',
      'Recordatorios automáticos por WhatsApp',
      'Cobro de señas vía Mercado Pago',
      'Soporte por email 24/7'
    ],
    ctaText: 'Elegir Plan 1 Agenda'
  },
  {
    id: 'plan-2',
    name: 'Plan 2 Agendas',
    badge: 'MÁS ELEGIDO',
    tag: 'Crecimiento',
    description: 'Para consultorios compartidos, salones, spas o duplas profesionales.',
    priceMonthly: 32700,
    priceAnnual: 26160,
    highlighted: true,
    features: [
      '2 Agendas simultáneas',
      'Gestión de servicios avanzada',
      'Reportes de asistencia e ingresos',
      'Cobro online con Mercado Pago',
      'Soporte prioritario por WhatsApp',
      'Sincronización Google Calendar en tiempo real'
    ],
    ctaText: 'Comenzar con 2 Agendas'
  },
  {
    id: 'plan-3',
    name: 'Plan 3 Agendas o Equipo',
    tag: 'Centro / Equipo',
    description: 'Para clínicas, centros integrales y equipos multidisciplinarios.',
    priceMonthly: 37800,
    priceAnnual: 30240,
    features: [
      '3 Agendas y profesionales',
      'Múltiples sucursales y ubicaciones',
      'Permisos por usuario y roles diferenciados',
      'Todas las funciones premium ilimitadas',
      'Onboarding 1 a 1 y soporte dedicado'
    ],
    ctaText: 'Elegir Plan 3 Agendas'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'salud',
    category: 'SALUD',
    quote: 'El ausentismo cayó prácticamente a cero en nuestros tres consultorios odontológicos. La confirmación por WhatsApp es infalible.',
    author: 'Dr. Esteban Morales',
    role: 'Clínica Dental Morales',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kiDlxQMM-ZcSeAtLsezQeXzPLALlaf_95qooF4bkZAvGDrjd0TvJodSLIwhGLc3iBWPSJzeAwDXfjKesJiZldsP9-CDvrSTuUmbLJZtfrMJWJAZdjM0zZbDpBMy2ZewcwwNWP_E290P2AVbfhYW-agOuffcmauRSvRsCyyudb3itRMLzM_hvn5sdAoeEsa03HSLzQd3AB7yQjtOTUoVXV3aWhPi1S-TXrUKldx_uhbNSNIeBskUC',
    rating: 5
  },
  {
    id: 'belleza',
    category: 'BELLEZA',
    quote: 'Antes pasaba 3 horas diarias respondiendo Instagram. Con TusTurnos y la seña por Mercado Pago, ya no tengo huecos sin cobrar.',
    author: 'Sofía Valenzuela',
    role: 'Atelier Studio Hair',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpknSyej33nVI9iiMn0x-u_qBoLPRTCWVTykRPV8dD0wVjAQeJWJoc1c7ZmKgqZzrOgJGOwVMx3g2SQboX-2SY5d6mcQDyj1-BwDUlxkBw1oOuv5Q9WFrSeRmkeImKxK0aUDeevEEQcCoChkFaYkhZdvNijCFv4TsOSQJfd-Zj7MSAc7J0PouzZSIAB1JAuYoM0bqrzHSJf4JvnlkdfsHIMCgapFfXDZteM8wT5Vk7wPqyZdyr5Bsj',
    rating: 5
  },
  {
    id: 'consultoria',
    category: 'CONSULTORÍA',
    quote: 'Coordino clientes de Argentina, Chile y España. La conversión automática de zona horaria y la integración de Google Meet me cambió la vida.',
    author: 'Ignacio Ríos',
    role: 'Ríos & Asociados Tax',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHAy8axqRVrwzbvuxlHfqe_tW7tBwJbrzulxKS-Znv0FNqRPJZoenypNiNX4X7eHL4k_13F1628Smtkt36zXaP_fCuKkDyOFDkdApBVn2iuziTnkpOaVDRAz4eZychaZp3LySXIGMBBTm4irk-B9TfUs9JtjjjVN_EkKqVQrEnNuzCPKv3_OKD3aAodSjWp3xxmKy7lhGtmcyIGKVdPeO_BfHg8RwwPlKWR-9bLKxA8UZ-V1UAzlNQ',
    rating: 5
  },
  {
    id: 'deportes',
    category: 'DEPORTES',
    quote: 'Gestionamos 6 canchas de padel y fútbol. El sistema de seña previa terminó con los partidos cancelados 10 minutos antes.',
    author: 'Camila Benítez',
    role: 'Club Deportivo Central',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0_2iOu0477uy4tbpdI1BfpcLACocn_DkQMzbf6jEhwt7l4psthsqPmv93SoxQtXg4rKUuwSQuoOk8Ls27Ld2DZy6E9y0iwygT4wQjB_YRl8zVGpiO1fcLN_bRRm_qGKVOw1I3WyS_qPILSSPJhUDkR_hq_tccdRZ0SroQF_w6LnpEoWppADWmc9jQD87CyGMo2VTyimkyW4uRvvr4k1DtTSFGom7Uq3XTGFaL07_ZgrH8deBxzeiw',
    rating: 5
  }
];

export const PRICING_FAQ = [
  {
    q: '¿Puedo cambiar de plan más adelante?',
    a: 'Sí, podés subir o bajar de plan en cualquier instante desde tu panel de configuración. La diferencia de precio se prorratea automáticamente en tu próximo ciclo de facturación, sin trámites adicionales ni demoras.'
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y saldo en cuenta a través de Mercado Pago. Emitimos factura electrónica tipo A y B de manera automática todos los meses a nombre de tu empresa o CUIT.'
  },
  {
    q: '¿Cobran alguna comisión por cada turno reservado?',
    a: 'No. TusTurnos no cobra ninguna comisión ni porcentaje sobre los turnos atendidos ni sobre las señas que recibas. El monto de la suscripción mensual o anual es fijo e incluye reservas ilimitadas. Únicamente rige la tarifa estándar de procesamiento que Mercado Pago aplique a tu propia cuenta vinculada.'
  },
  {
    q: '¿Hay período de prueba o compromiso de permanencia?',
    a: 'Ofrecemos 14 días de prueba sin cargo para que puedas configurar tu agenda, conectar tu WhatsApp y comprobar la agilidad del sistema. No solicitamos tarjeta para iniciar la prueba. Podés cancelar en cualquier momento con un solo clic.'
  }
];

export const HOW_IT_WORKS_FAQ = [
  {
    q: '¿Necesito descargar alguna aplicación?',
    a: 'No, ¡para nada! TusTurnos es 100% web y responsive. Funciona a la perfección desde el navegador de cualquier celular, tablet o computadora (Chrome, Safari, etc.). Ni vos ni tus clientes necesitan ocupar memoria en el teléfono ni descargar aplicaciones desde Google Play o App Store.'
  },
  {
    q: '¿Cómo reciben los recordatorios por WhatsApp?',
    a: 'El sistema se conecta a través de nuestra API oficial de WhatsApp Cloud. En el momento en que el cliente reserva, recibe un mensaje instantáneo de confirmación. Además, 24 horas y 2 horas antes de la cita, se le envía un recordatorio automático con un botón para confirmar asistencia o reprogramar a tiempo.'
  },
  {
    q: '¿Se puede sincronizar con Google Calendar?',
    a: 'Sí, la sincronización es bidireccional e instantánea. Cuando alguien toma un turno en TusTurnos, aparece en tu calendario personal. Del mismo modo, si agendás un evento privado o médico en tu Google Calendar, ese bloque de tiempo queda cerrado automáticamente para que nadie pueda reservar.'
  },
  {
    q: '¿Cómo se cobran las señas con Mercado Pago?',
    a: 'Vinculás tu cuenta de Mercado Pago con un solo clic. Vos decidís si exigís una seña fija (ej. $3.000) o un porcentaje del servicio. El dinero va directo a tu cuenta de Mercado Pago sin comisiones adicionales por parte de TusTurnos. Si el pago no se completa en 15 minutos, el horario se libera nuevamente.'
  }
];
