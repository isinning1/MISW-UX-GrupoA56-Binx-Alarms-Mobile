export type AlarmCategory = 'casa' | 'salud' | 'trabajo';
export type AlarmStatus = 'pendiente' | 'atendida';

export interface Alarm {
  id: string;
  title: string;
  time: string; // formato 24h: "06:00"
  dateLabel: string; // "Hoy", "06 feb", etc.
  category: AlarmCategory;
  status: AlarmStatus;
  critical: boolean;
  postponedCount: number;
}