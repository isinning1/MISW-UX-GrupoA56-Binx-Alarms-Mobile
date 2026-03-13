import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, hourglassOutline } from 'ionicons/icons';

type PostponeView = 'select' | 'result' | 'limit';

interface PostponeOption {
  minutes: number;
  label: string;
}

@Component({
  selector: 'app-alarm-postpone',
  templateUrl: './alarm-postpone.page.html',
  styleUrls: ['./alarm-postpone.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmPostponePage {
  alarmId = '';
  view: PostponeView = 'select';

  alarmTitle = 'Sacar al perro';
  selectedMinutes = 5;
  postponeCount = 2;

  readonly postponeOptions: PostponeOption[] = [
    { minutes: 5, label: '5' },
    { minutes: 10, label: '10' },
    { minutes: 15, label: '15' },
  ];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    addIcons({
      arrowBackOutline,
      hourglassOutline,
    });

    this.alarmId = this.route.snapshot.paramMap.get('id') ?? '';
    this.view = (this.route.snapshot.data['view'] as PostponeView) ?? 'select';

    const minutesParam = this.route.snapshot.queryParamMap.get('minutes');
    if (minutesParam) {
      const parsed = Number(minutesParam);
      if (!Number.isNaN(parsed)) {
        this.selectedMinutes = parsed;
      }
    }

    const countParam = this.route.snapshot.queryParamMap.get('count');
    if (countParam) {
      const parsed = Number(countParam);
      if (!Number.isNaN(parsed)) {
        this.postponeCount = parsed;
      }
    }
  }

  trackByMinutes(_: number, item: PostponeOption): number {
    return item.minutes;
  }

  onBack(): void {
    void this.router.navigateByUrl(`/alarm/${this.alarmId}/ring`);
  }

  onCancel(): void {
    void this.router.navigateByUrl('/alarms');
  }

  onContinueToSelection(): void {
    void this.router.navigateByUrl(
      `/alarm/${this.alarmId}/postpone?count=${this.postponeCount}`
    );
  }

  onSelectMinutes(minutes: number): void {
    this.selectedMinutes = minutes;

    void this.router.navigateByUrl(
      `/alarm/${this.alarmId}/postpone/result?minutes=${minutes}`
    );
  }

  onBackToAlarms(): void {
    void this.router.navigateByUrl('/alarms');
  }

  onDecideAgain(): void {
    void this.router.navigateByUrl(`/alarm/${this.alarmId}/ring`);
  }

  onReprogram(): void {
    void this.router.navigateByUrl(`/alarm/${this.alarmId}/reprogram`);
  }
}