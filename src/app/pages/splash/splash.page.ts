import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule],
})
export class SplashPage implements OnInit {
  /*
    Duración mínima del Splash para que el usuario perciba la validación
    y para evitar cambios bruscos de pantalla.
  */
  private readonly splashDelayMs = 900;

  /*
    Ruta de destino cuando no hay sesión activa.
    En esta primera versión (solo frontend), siempre enviaremos a /login.
  */
  private readonly anonymousNextRoute = '/login';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    /*
      Requerimiento funcional (MVP):
      - Mostrar Splash con “Validando sesión…”
      - Simular validación de sesión
      - Redirigir automáticamente

      Nota: cuando implementes persistencia real, aquí se consultará el estado de sesión
      (por ejemplo, con Capacitor Preferences o un backend) para decidir entre /alarms y /login.
    */
    window.setTimeout(() => {
      void this.router.navigateByUrl(this.anonymousNextRoute, { replaceUrl: true });
    }, this.splashDelayMs);
  }
}
