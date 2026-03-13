import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-alarm-status',
  templateUrl: './alarm-status.page.html',
  styleUrls: ['./alarm-status.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmStatusPage {
  alarmId = '';
  status = 'attended';
  alarmTitle = 'Sacar al perro';
  statusMessage = '¡Atendida!';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    addIcons({
      checkmarkOutline,
    });

    this.alarmId = this.route.snapshot.paramMap.get('id') ?? '';
    this.status = this.route.snapshot.paramMap.get('state') ?? 'attended';

    this.applyStatusPresentation();
  }

  private applyStatusPresentation(): void {
    switch (this.status) {
      case 'attended':
      default:
        this.statusMessage = '¡Atendida!';
        break;
    }
  }

  onContinue(): void {
    void this.router.navigateByUrl('/alarms');
  }
}