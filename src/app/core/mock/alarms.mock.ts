import { Alarm } from 'src/app/models/alarm.model';

export const ALARMS_MOCK: Alarm[] = [
  {
    id: '1',
    title: 'Sacar el perro',
    time: '06:00',
    dateLabel: '06 feb',
    category: 'casa',
    status: 'pendiente',
    critical: true,
    postponedCount: 0,
  },
  {
    id: '2',
    title: 'Tomar antibiótico',
    time: '06:00',
    dateLabel: '07 feb',
    category: 'salud',
    status: 'pendiente',
    critical: false,
    postponedCount: 0,
  },
  {
    id: '3',
    title: 'Alistar reunión',
    time: '08:00',
    dateLabel: '06 feb',
    category: 'trabajo',
    status: 'atendida',
    critical: false,
    postponedCount: 0,
  },
  {
    id: '4',
    title: 'Comprar huevos',
    time: '19:00',
    dateLabel: '06 feb',
    category: 'casa',
    status: 'atendida',
    critical: false,
    postponedCount: 0,
  },
];