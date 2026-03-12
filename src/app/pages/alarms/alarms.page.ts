import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  checkmarkCircleOutline,
  createOutline,
  ellipsisHorizontal,
  menuOutline,
  micOutline,
  notificationsOutline,
  personOutline,
  searchOutline,
  trashOutline,
} from 'ionicons/icons';

import { Alarm } from '../../models/alarm.model';
import { ALARMS_MOCK } from '../../core/mock/alarms.mock';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.page.html',
  styleUrls: ['./alarms.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
})
export class AlarmsPage {
  alarms: Alarm[] = [...ALARMS_MOCK];
  searchTerm = '';
  selectedAlarmId: string | null = this.alarms.length ? this.alarms[0].id : null;
  isOptionsOpen = false;

  constructor(private readonly router: Router) {
    addIcons({
      alertCircleOutline,
      checkmarkCircleOutline,
      createOutline,
      ellipsisHorizontal,
      menuOutline,
      micOutline,
      notificationsOutline,
      personOutline,
      searchOutline,
      trashOutline,
    });
  }

  get filteredAlarms(): Alarm[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.alarms;
    }

    return this.alarms.filter((alarm) => {
      return (
        this.getAlarmTitle(alarm).toLowerCase().includes(term) ||
        this.getReadableDateLabel(alarm).toLowerCase().includes(term) ||
        this.getCategoryLabel(alarm.category).toLowerCase().includes(term) ||
        this.getStatusLabel(alarm).toLowerCase().includes(term) ||
        alarm.time.toLowerCase().includes(term)
      );
    });
  }

  trackByAlarmId(_: number, alarm: Alarm): string {
    return alarm.id;
  }

  onSelectAlarm(alarm: Alarm): void {
    this.selectedAlarmId = alarm.id;
  }

  onOpenAlarm(alarm: Alarm): void {
    this.selectedAlarmId = alarm.id;
    this.isOptionsOpen = false;
    void this.router.navigateByUrl(`/alarm/${alarm.id}/ring`);
  }

  onEditAlarm(alarm: Alarm): void {
    this.selectedAlarmId = alarm.id;
    this.isOptionsOpen = false;
    void this.router.navigateByUrl(`/alarm/${alarm.id}/edit`);
  }

  onDeleteAlarm(alarm: Alarm): void {
    const wasSelected = this.selectedAlarmId === alarm.id;
    this.alarms = this.alarms.filter((item) => item.id !== alarm.id);

    if (wasSelected) {
      this.selectedAlarmId = this.alarms.length ? this.alarms[0].id : null;
    }
  }

  onOpenUser(): void {
    this.isOptionsOpen = false;
    void this.router.navigateByUrl('/user');
  }

  onMoreOptions(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  onOpenMenu(): void {
    this.isOptionsOpen = false;
  }

  onOpenNotifications(): void {
    this.isOptionsOpen = false;

    const alarm = this.selectedAlarmId
      ? this.alarms.find((item) => item.id === this.selectedAlarmId)
      : this.alarms[0];

    if (alarm) {
      this.onOpenAlarm(alarm);
    }
  }

  onVoiceSearch(): void {
    this.searchTerm = '';
  }

  isSelected(alarm: Alarm): boolean {
    return this.selectedAlarmId === alarm.id;
  }

  getAlarmIconName(alarm: Alarm): string {
    return alarm.critical ? 'alert-circle-outline' : 'notifications-outline';
  }

  getAlarmIconClass(alarm: Alarm): string {
    return alarm.critical
      ? 'alarm-row__leading-icon alarm-row__leading-icon--critical'
      : 'alarm-row__leading-icon alarm-row__leading-icon--standard';
  }

  getCategoryClass(category: string): string {
    switch (category.toLowerCase()) {
      case 'home':
      case 'casa':
        return 'alarm-category--home';
      case 'health':
      case 'salud':
        return 'alarm-category--health';
      case 'work':
      case 'trabajo':
        return 'alarm-category--work';
      default:
        return 'alarm-category--default';
    }
  }

  getCategoryLabel(category: string): string {
    switch (category.toLowerCase()) {
      case 'home':
        return 'Casa';
      case 'health':
        return 'Salud';
      case 'work':
        return 'Trabajo';
      default:
        return category;
    }
  }

  getStatusLabel(alarm: Alarm): string {
    const status = alarm.status.toLowerCase();

    if (status === 'attended') {
      return 'Atendida';
    }

    if (status === 'pending') {
      return 'Pendiente';
    }

    return alarm.status;
  }

  getStatusClass(alarm: Alarm): string {
    return alarm.status.toLowerCase() === 'attended'
      ? 'alarm-status alarm-status--attended'
      : 'alarm-status alarm-status--pending';
  }

  getStatusIcon(alarm: Alarm): string {
    return alarm.status.toLowerCase() === 'attended'
      ? 'checkmark-circle-outline'
      : 'alert-circle-outline';
  }

  getReadableDateLabel(alarm: Alarm): string {
    const value = alarm.dateLabel.trim().toLowerCase();

    if (value === 'today') {
      return 'Hoy';
    }

    if (value === 'tomorrow') {
      return 'Mañana';
    }

    return alarm.dateLabel;
  }

  getAlarmTitle(alarm: Alarm): string {
    const title = alarm.title.trim().toLowerCase();

    switch (title) {
      case 'take medication':
        return 'Tomar antibiótico';
      case 'walk the dog':
        return 'Sacar al perro';
      case 'team meeting':
        return 'Alistar reunión';
      case 'buy groceries':
        return 'Comprar víveres';
      default:
        return alarm.title;
    }
  }
}