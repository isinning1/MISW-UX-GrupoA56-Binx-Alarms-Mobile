import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alarm-ring',
  templateUrl: './alarm-ring.page.html',
  styleUrls: ['./alarm-ring.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmRingPage {
  alarmId = '';
  alarmTitle = 'Sacar al perro';
  alarmCategory = 'Casa';
  alarmTime = '07:42';
  alarmDate = 'Dom, Feb 08';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.alarmId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  onAttend(): void {
    if (this.alarmId) {
      void this.router.navigateByUrl(`/alarm/${this.alarmId}/status/attended`);
      return;
    }

    void this.router.navigateByUrl('/alarms');
  }

  onPostpone(): void {
    if (this.alarmId) {
      void this.router.navigateByUrl(
        `/alarm/${this.alarmId}/postpone/limit?count=2`
      );
      return;
    }

    void this.router.navigateByUrl('/alarms');
  }

  onReprogram(): void {
    if (this.alarmId) {
      void this.router.navigateByUrl(`/alarm/${this.alarmId}/reprogram`);
      return;
    }

    void this.router.navigateByUrl('/alarms');
  }
}