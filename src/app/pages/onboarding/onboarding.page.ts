import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class OnboardingPage {
  constructor(private readonly router: Router) {}

  /*
    En el MVP, ambos caminos completan el onboarding y llevan a la pantalla principal.
    Más adelante, aquí se persistirá el estado "onboarding completed".
  */
  async onStart(): Promise<void> {
    await this.router.navigateByUrl('/alarms', { replaceUrl: true });
  }

  async onSkip(): Promise<void> {
    await this.router.navigateByUrl('/alarms', { replaceUrl: true });
  }
}