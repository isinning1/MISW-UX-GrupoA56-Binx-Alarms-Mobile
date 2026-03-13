import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircleOutline,
  ellipsisHorizontal,
  searchOutline,
  micOutline,
  trashOutline,
  createOutline,
  warningOutline,
  checkmarkOutline,
  menuOutline,
  notificationsSharp,
  addOutline,
} from 'ionicons/icons';

import { Alarm, AlarmStatus } from 'src/app/models/alarm.model';
import { ALARMS_MOCK } from 'src/app/core/mock/alarms.mock';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.page.html',
  styleUrls: ['./alarms.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmsPage {
  alarms: Alarm[] = [...ALARMS_MOCK];
  searchTerm = '';

  constructor(private readonly router: Router) {
    addIcons({
      personCircleOutline,
      ellipsisHorizontal,
      searchOutline,
      micOutline,
      trashOutline,
      createOutline,
      warningOutline,
      checkmarkOutline,
      menuOutline,
      notificationsSharp,
      addOutline,
    });
  }

  get filteredAlarms(): Alarm[] {
    const term = this.searchTerm.trim().toLowerCase();

    const filtered = this.alarms.filter((alarm) => {
      if (!term) return true;

      return (
        alarm.title.toLowerCase().includes(term) ||
        this.getCategoryLabel(alarm.category).toLowerCase().includes(term) ||
        this.getStatusLabel(alarm.status).toLowerCase().includes(term) ||
        alarm.dateLabel.toLowerCase().includes(term) ||
        alarm.time.toLowerCase().includes(term)
      );
    });

    return [...filtered].sort((a, b) => {
      if (a.status !== b.status) {
        return a.status === 'pendiente' ? -1 : 1;
      }
      return a.time.localeCompare(b.time);
    });
  }

  trackByAlarmId(_: number, alarm: Alarm): string {
    return alarm.id;
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'casa':
        return 'Casa';
      case 'salud':
        return 'Salud';
      case 'trabajo':
        return 'Trabajo';
      default:
        return 'General';
    }
  }

  getStatusLabel(status: AlarmStatus): string {
    return status === 'pendiente' ? 'Pendiente' : 'Atendida';
  }

  isPending(alarm: Alarm): boolean {
    return alarm.status === 'pendiente';
  }

  isAttended(alarm: Alarm): boolean {
    return alarm.status === 'atendida';
  }

  formatTime(time: string): string {
    const [hoursString, minutesString] = time.split(':');
    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return time;
    }

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return new Intl.DateTimeFormat('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
      .format(date)
      .replace(/\./g, '')
      .toLowerCase();
  }

  onOpenUser(): void {
    void this.router.navigateByUrl('/user');
  }

  onOpenMenu(): void {
    void this.router.navigateByUrl('/preferences');
  }

  onSearchVoice(): void {
    console.log('Búsqueda por voz');
  }

  onCreateAlarm(): void {
    void this.router.navigateByUrl('/alarm/create');
  }

  onOpenAlarm(alarm: Alarm): void {
    if (alarm.status === 'pendiente') {
      void this.router.navigateByUrl(`/alarm/${alarm.id}/ring`);
      return;
    }

    void this.router.navigateByUrl(`/alarm/${alarm.id}/status/attended`);
  }

  onEditAlarm(alarm: Alarm, event: Event): void {
    event.stopPropagation();
    void this.router.navigateByUrl(`/alarm/${alarm.id}/edit`);
  }

  onDeleteAlarm(alarmId: string, event: Event): void {
    event.stopPropagation();
    this.alarms = this.alarms.filter((alarm) => alarm.id !== alarmId);
  }
}