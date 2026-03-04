import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
  ],
})
export class LoginPage {
  /*
    Estado del formulario.
    En esta fase solo se requiere validación mínima para permitir navegación.
  */
  username = '';
  password = '';
  isSubmitting = false;

  constructor(private readonly router: Router) {}

  /*
    Validación mínima del formulario:
    - Evita strings vacíos o espacios
    - Mantiene la UI consistente (botón deshabilitado / submit sin acción)
  */
  private isFormValid(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }

  /*
    Acción principal del Login.
    MVP de interacción (sin backend):
    - Validar campos
    - Simular proceso de autenticación
    - Redirigir al onboarding en el primer flujo
    Nota: en iteración posterior, aquí se llamará el servicio de autenticación real
    y se decidirá el destino (/alarms o /onboarding) según el estado del usuario.
  */
  async onSubmit(): Promise<void> {
    if (!this.isFormValid() || this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      /*
        Simulación de latencia (para que el usuario perciba la acción).
        Ajustable o removible cuando exista backend real.
      */
      await new Promise((resolve) => setTimeout(resolve, 350));

      /*
        Flujo definido para el proyecto (fase actual):
        Login -> Onboarding.
        Más adelante: si onboarding ya fue completado, navegar a /alarms.
      */
      await this.router.navigateByUrl('/onboarding', { replaceUrl: true });
    } finally {
      this.isSubmitting = false;
    }
  }

  /*
    Getter útil para el template:
    - Permite deshabilitar el botón sin duplicar lógica en el HTML
  */
  get canSubmit(): boolean {
    return this.isFormValid() && !this.isSubmitting;
  }
}
