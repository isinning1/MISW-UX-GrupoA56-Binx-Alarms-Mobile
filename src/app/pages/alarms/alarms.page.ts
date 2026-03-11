import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { Alarm } from '../../models/alarm.model';
import { ALARMS_MOCK } from '../../core/mock/alarms.mock';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.page.html',
  styleUrls: ['./alarms.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
  ],
})
export class AlarmsPage {
  alarms: Alarm[] = [...ALARMS_MOCK];

  constructor(private readonly router: Router) {}

  onOpenAlarm(alarm: Alarm): void {
    void this.router.navigateByUrl(`/alarm/${alarm.id}/ring`);
  }

  onEditAlarm(alarm: Alarm, sliding?: IonItemSliding): void {
    if (sliding) void sliding.close();
    void this.router.navigateByUrl(`/alarm/${alarm.id}/edit`);
  }

  onDeleteAlarm(alarm: Alarm, sliding?: IonItemSliding): void {
    if (sliding) void sliding.close();
    this.alarms = this.alarms.filter((a) => a.id !== alarm.id);
  }
}