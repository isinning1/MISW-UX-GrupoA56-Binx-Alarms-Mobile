import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, checkmarkOutline } from 'ionicons/icons';

type RepeatOption =
  | 'Nunca'
  | 'Lunes'
  | 'Martes'
  | 'Miércoles'
  | 'Jueves'
  | 'Viernes'
  | 'Sábado'
  | 'Domingo';

type AlarmCategory = 'Casa' | 'Salud' | 'Trabajo' | 'Otra';

interface ReprogramFormModel {
  date: string;
  time: string; // HH:mm
  repeat: RepeatOption;
  reason: string;
  category: AlarmCategory;
  critical: boolean;
}

@Component({
  selector: 'app-alarm-reprogram',
  templateUrl: './alarm-reprogram.page.html',
  styleUrls: ['./alarm-reprogram.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmReprogramPage {
  alarmId = '';
  alarmTitle = 'Sacar al perro';
  isSaving = false;

  readonly repeatOptions: RepeatOption[] = [
    'Nunca',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  readonly categoryOptions: AlarmCategory[] = [
    'Casa',
    'Salud',
    'Trabajo',
    'Otra',
  ];

  model: ReprogramFormModel = {
    date: this.getDefaultDate(),
    time: '08:00',
    repeat: 'Nunca',
    reason: 'Cambio de rutina',
    category: 'Casa',
    critical: false,
  };

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    addIcons({
      arrowBackOutline,
      checkmarkOutline,
    });

    this.alarmId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  private getDefaultDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const day = `${today.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  get formattedTime(): string {
    const [hoursString, minutesString] = this.model.time.split(':');
    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return '08:00 AM';
    }

    const suffix = hours >= 12 ? 'PM' : 'AM';
    const normalizedHour = hours % 12 === 0 ? 12 : hours % 12;
    const minuteText = `${minutes}`.padStart(2, '0');

    return `${normalizedHour.toString().padStart(2, '0')}:${minuteText} ${suffix}`;
  }

  async onSave(form: NgForm): Promise<void> {
    if (form.invalid || this.isSaving) {
      form.control.markAllAsTouched();
      return;
    }

    try {
      this.isSaving = true;

      console.log('Reprogramando alarma:', {
        alarmId: this.alarmId,
        title: this.alarmTitle,
        ...this.model,
      });

      await new Promise((resolve) => setTimeout(resolve, 450));

      void this.router.navigateByUrl('/alarms');
    } finally {
      this.isSaving = false;
    }
  }

  onCancel(): void {
    if (this.alarmId) {
      void this.router.navigateByUrl(`/alarm/${this.alarmId}/ring`);
      return;
    }

    void this.router.navigateByUrl('/alarms');
  }

  trackByValue(_: number, item: string): string {
    return item;
  }
}