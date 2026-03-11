import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alarm-ring',
  templateUrl: './alarm-ring.page.html',
  styleUrls: ['./alarm-ring.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class AlarmRingPage {
  alarmId: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
    /*
      Se obtiene el id desde la URL para mantener consistencia con el flujo real.
      Ej: /alarm/2/ring
    */
    this.alarmId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  async onAttend(): Promise<void> {
    await this.router.navigateByUrl(`/alarm/${this.alarmId}/status/attended`, { replaceUrl: true });
  }

  async onPostpone(): Promise<void> {
    await this.router.navigateByUrl(`/alarm/${this.alarmId}/postpone`);
  }

  async onReprogram(): Promise<void> {
    await this.router.navigateByUrl(`/alarm/${this.alarmId}/reprogram`);
  }
}
