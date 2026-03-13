import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonRow, IonGrid, CommonModule, ReactiveFormsModule, IonContent],
})
export class LoginPage {
  /*
    Controla si el formulario está enviándose
    para evitar doble submit.
  */
  isSubmitting = false;

  /*
    Controla si ya se intentó enviar el formulario.
    Sirve para mostrar validaciones aunque el usuario
    no haya salido manualmente del campo.
  */
  hasSubmitted = false;

  /*
    Mensaje de error general para credenciales inválidas.
    En esta fase queda preparado para cuando haya autenticación real.
  */
  authErrorMessage = '';

  /*
    Formulario reactivo del login.
    Reglas:
    - username: obligatorio, mínimo 3, máximo 30
    - password: obligatoria, mínimo 6, máximo 50
  */
  readonly loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/^(?=.*\S).+$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern(/^(?=.*\S).+$/),
      ],
    ],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    addIcons({ notificationsOutline });
  }

  /*
    Getters para simplificar el template
  */
  get usernameControl(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get passwordControl(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  /*
    Determina si un campo debe mostrar error:
    - si fue tocado
    - o si ya se intentó enviar el formulario
  */
  shouldShowFieldError(control: AbstractControl | null): boolean {
    if (!control) {
      return false;
    }

    return control.invalid && (control.touched || this.hasSubmitted);
  }

  /*
    Mensajes de error para usuario
  */
  get usernameErrorMessage(): string {
    const control = this.usernameControl;

    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'El usuario es obligatorio.';
    }

    if (control.errors['minlength']) {
      return 'El usuario debe tener al menos 3 caracteres.';
    }

    if (control.errors['maxlength']) {
      return 'El usuario no debe superar 30 caracteres.';
    }

    if (control.errors['pattern']) {
      return 'El usuario no puede contener solo espacios.';
    }

    return 'El usuario no es válido.';
  }

  /*
    Mensajes de error para contraseña
  */
  get passwordErrorMessage(): string {
    const control = this.passwordControl;

    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'La contraseña es obligatoria.';
    }

    if (control.errors['minlength']) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (control.errors['maxlength']) {
      return 'La contraseña no debe superar 50 caracteres.';
    }

    if (control.errors['pattern']) {
      return 'La contraseña no puede contener solo espacios.';
    }

    return 'La contraseña no es válida.';
  }

  /*
    Acción principal del login.
    Fase actual:
    - valida formulario
    - simula autenticación
    - navega a onboarding
  */
  async onSubmit(): Promise<void> {
    this.hasSubmitted = true;
    this.authErrorMessage = '';

    if (this.loginForm.invalid || this.isSubmitting) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      /*
        Simulación de latencia
      */
      await new Promise((resolve) => setTimeout(resolve, 450));

      /*
        En una versión futura:
        - llamar servicio real
        - validar credenciales
        - si falla, poblar authErrorMessage
      */
      await this.router.navigateByUrl('/onboarding', { replaceUrl: true });
    } catch {
      this.authErrorMessage = 'No fue posible iniciar sesión. Intenta nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }

  /*
    Acción secundaria.
    Se deja preparada para flujo futuro.
  */
  onForgotPassword(): void {
    // Futuro: recuperación de contraseña
  }

  /*
    Controla estado del botón principal
  */
  get canSubmit(): boolean {
    return this.loginForm.valid && !this.isSubmitting;
  }
}