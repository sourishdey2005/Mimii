
export interface Quote {
  id: number;
  text: string;
}

export enum AppSection {
  ENVELOPE = 'ENVELOPE',
  GREETING = 'GREETING',
  GRATITUDE = 'GRATITUDE',
  FIRST_MET = 'FIRST_MET',
  PROPOSAL = 'PROPOSAL',
  FESTIVALS = 'FESTIVALS',
  ANNIVERSARIES = 'ANNIVERSARIES',
  ROMANTIC = 'ROMANTIC',
  PROMISE = 'PROMISE',
  CLOSING = 'CLOSING'
}
