import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  personCircleOutline,
} from 'ionicons/icons';

interface UserFormModel {
  fullName: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {
  model: UserFormModel = {
    fullName: '',
    username: '',
    password: '',
  };

  isSaving = false;
  showPassword = false;

  constructor(private readonly router: Router) {
    addIcons({
      arrowBackOutline,
      personCircleOutline,
    });
  }

  onBack(): void {
    void this.router.navigateByUrl('/alarms');
  }

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid || this.isSaving) {
      form.control.markAllAsTouched();
      return;
    }

    try {
      this.isSaving = true;

      // Aquí puedes conectar el servicio real cuando lo tengas.
      console.log('Guardando usuario:', {
        fullName: this.model.fullName,
        username: this.model.username,
        password: this.model.password,
      });

      await new Promise((resolve) => setTimeout(resolve, 700));
    } finally {
      this.isSaving = false;
    }
  }
}