import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';

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

interface EditAlarmFormModel {
  title: string;
  date: string;
  time: string; // HH:mm
  repeat: RepeatOption;
  reason: string;
  category: AlarmCategory;
  critical: boolean;
}

@Component({
  selector: 'app-alarm-edit',
  templateUrl: './alarm-edit.page.html',
  styleUrls: ['./alarm-edit.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmEditPage {
  alarmId = '';
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

  model: EditAlarmFormModel = {
    title: 'Sacar al perro',
    date: this.getDefaultDate(),
    time: '01:00',
    repeat: 'Nunca',
    reason: 'Rutina diaria',
    category: 'Casa',
    critical: false,
  };

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    addIcons({
      checkmarkOutline,
      closeOutline,
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
      return '01:00 AM';
    }

    const suffix = hours >= 12 ? 'PM' : 'AM';
    const normalizedHour = hours % 12 === 0 ? 12 : hours % 12;
    const minuteText = `${minutes}`.padStart(2, '0');

    return `${normalizedHour.toString().padStart(2, '0')} : ${minuteText} ${suffix}`;
  }

  async onSave(form: NgForm): Promise<void> {
    if (form.invalid || this.isSaving) {
      form.control.markAllAsTouched();
      return;
    }

    try {
      this.isSaving = true;

      console.log('Editando alarma:', {
        alarmId: this.alarmId,
        ...this.model,
      });

      await new Promise((resolve) => setTimeout(resolve, 450));

      void this.router.navigateByUrl('/alarms');
    } finally {
      this.isSaving = false;
    }
  }

  onCancel(): void {
    void this.router.navigateByUrl('/alarms');
  }

  trackByValue(_: number, item: string): string {
    return item;
  }
}