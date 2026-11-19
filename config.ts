// Auto-generated configuration for ICP Cita Previa Spain AutoBot

export const config = {
  botName: "ICP Cita Previa Spain",
  country: "Spain",
  provider: "ICP Plus (Cita Previa)",
  destination: "Spain (Internal)",
  loginUrl: "https://icp.administracionelectronica.gob.es/icpplus/index.html",
  centers: [
  "All 52 Spanish Provinces (Madrid, Barcelona, Valencia, Seville, Malaga, etc.)"
],
  visaCategories: [
  "Fingerprinting (Toma de Huellas - 4010)",
  "NIE Assignment (4031)",
  "TIE Collection (4036)",
  "EU Citizen Certificate (4038)",
  "Return Authorization (Autorizaci\u00f3n de Regreso - 4049)",
  "Asylum Application (4078)",
  "Invitation Letter (4037)",
  "Red Card Renewal (4082)"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
