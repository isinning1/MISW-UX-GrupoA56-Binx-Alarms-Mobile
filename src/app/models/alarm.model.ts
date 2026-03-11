export type AlarmCategory = 'Home' | 'Health' | 'Work';
export type AlarmStatus = 'pending' | 'attended';

export interface Alarm {
  id: string;
  title: string;
  time: string;
  dateLabel: string;
  category: AlarmCategory;
  status: AlarmStatus;
  critical: boolean;
  postponedCount: number;
}