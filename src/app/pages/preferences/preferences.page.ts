import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonToggle, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

interface PreferenceItem {
  key: string;
  label: string;
  description?: string;
  enabled: boolean;
}

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon, IonToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesPage {
  preferences: PreferenceItem[] = [
    {
      key: 'modo-discreto',
      label: 'Modo discreto',
      enabled: true,
    },
    {
      key: 'priorizar-vibracion',
      label: 'Priorizar vibración',
      enabled: false,
    },
    {
      key: 'sonido-reducido',
      label: 'Sonido reducido',
      enabled: false,
    },
    {
      key: 'alarma-persistente',
      label: 'Alarma persistente',
      enabled: false,
    },
  ];

  constructor(private readonly router: Router) {
    addIcons({
      arrowBackOutline,
    });
  }

  onBack(): void {
    void this.router.navigateByUrl('/alarms');
  }

  trackByPreference(_: number, item: PreferenceItem): string {
    return item.key;
  }

  onToggleChange(key: string, checked: boolean): void {
    this.preferences = this.preferences.map((item) =>
      item.key === key
        ? {
            ...item,
            enabled: checked,
          }
        : item
    );

    console.log('Preferencia actualizada:', { key, checked });
  }
}