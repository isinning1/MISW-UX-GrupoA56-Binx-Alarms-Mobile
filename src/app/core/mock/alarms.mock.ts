import { Alarm } from "src/app/models/alarm.model";

export const ALARMS_MOCK: Alarm[] = [
  {
    id: '1',
    title: 'Take medication',
    time: '08:00',
    dateLabel: 'Today',
    category: 'Health',
    status: 'pending',
    critical: true,
    postponedCount: 0,
  },
  {
    id: '2',
    title: 'Walk the dog',
    time: '18:30',
    dateLabel: 'Today',
    category: 'Home',
    status: 'pending',
    critical: false,
    postponedCount: 1,
  },
  {
    id: '3',
    title: 'Team meeting',
    time: '09:00',
    dateLabel: 'Tomorrow',
    category: 'Work',
    status: 'attended',
    critical: false,
    postponedCount: 0,
  },
];