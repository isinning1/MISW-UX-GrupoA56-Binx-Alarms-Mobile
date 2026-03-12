import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule],
})
export class SplashPage implements OnInit, OnDestroy {
  /*
    false  -> solo logo BINX
    true   -> muestra "Validando Sesion..."
  */
  showValidationState = false;

  /*
    Tiempos ajustados para que el usuario sí perciba ambas fases.
    - Primero branding
    - Luego validación visible
    - Luego navegación
  */
  private readonly showValidationDelayMs = 900;
  private readonly splashTotalDelayMs = 2600;

  /*
    Ruta de destino cuando no existe sesión activa.
    En esta versión inicial, siempre va a login.
  */
  private readonly anonymousNextRoute = '/login';

  private validationTimerId?: number;
  private navigationTimerId?: number;

  constructor(private readonly router: Router) {
    addIcons({ notificationsOutline });
  }

  ngOnInit(): void {
    /*
      Fase 1: mostrar solo branding
      Fase 2: mostrar validación
      Fase 3: redirigir
    */
    this.validationTimerId = window.setTimeout(() => {
      this.showValidationState = true;
    }, this.showValidationDelayMs);

    this.navigationTimerId = window.setTimeout(() => {
      void this.router.navigateByUrl(this.anonymousNextRoute, {
        replaceUrl: true,
      });
    }, this.splashTotalDelayMs);
  }

  ngOnDestroy(): void {
    if (this.validationTimerId !== undefined) {
      window.clearTimeout(this.validationTimerId);
    }

    if (this.navigationTimerId !== undefined) {
      window.clearTimeout(this.navigationTimerId);
    }
  }
}