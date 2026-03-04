import { Routes } from '@angular/router';

/*
  Configuración de rutas (Mobile - Ionic + Angular Standalone)

  Objetivo:
  - Iniciar siempre en Splash.
  - Mantener rutas explícitas y fáciles de leer.
  - Usar parámetros en URL para que el flujo de alarmas represente el uso real.
  - Definir una ruta de respaldo para cualquier URL desconocida.
*/

export const routes: Routes = [
  /*
    Punto de entrada por defecto.
    Redirige la ruta vacía a la pantalla Splash.
  */
  { path: '', pathMatch: 'full', redirectTo: 'splash' },

  /*
    Pantalla Splash.
    Simula validación de sesión y redirige a:
    - /alarms si hay sesión activa
    - /login si no hay sesión
  */
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },

  /*
    Autenticación.
    Pantalla para credenciales y transición a onboarding o a alarms.
  */
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  /*
    Onboarding.
    Flujo inicial posterior al primer ingreso antes de ir a alarmas.
  */
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },

  /*
    Pantalla principal: listado de alarmas.
  */
  {
    path: 'alarms',
    loadComponent: () =>
      import('./pages/alarms/alarms.page').then((m) => m.AlarmsPage),
  },

  /*
    Perfil de usuario.
    Pantalla para ver/editar información de la cuenta.
  */
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user.page').then((m) => m.UserPage),
  },

  /*
    Preferencias.
    Pantalla para configuraciones como vibración, modo discreto, etc.
  */
  {
    path: 'preferences',
    loadComponent: () =>
      import('./pages/preferences/preferences.page').then(
        (m) => m.PreferencesPage
      ),
  },

  /*
    Edición de alarma.
    :id identifica la alarma a editar.
  */
  {
    path: 'alarm/:id/edit',
    loadComponent: () =>
      import('./pages/alarm-edit/alarm-edit.page').then((m) => m.AlarmEditPage),
  },

  /*
    Alarma sonando.
    :id identifica la alarma activa.
    Desde aquí se puede atender, posponer o reprogramar.
  */
  {
    path: 'alarm/:id/ring',
    loadComponent: () =>
      import('./pages/alarm-ring/alarm-ring.page').then((m) => m.AlarmRingPage),
  },

  /*
    Posponer alarma.
    :id identifica la alarma que se está posponiendo.
  */
  {
    path: 'alarm/:id/postpone',
    loadComponent: () =>
      import('./pages/alarm-postpone/alarm-postpone.page').then(
        (m) => m.AlarmPostponePage
      ),
  },

  /*
    Reprogramar alarma.
    :id identifica la alarma que se está reprogramando.
  */
  {
    path: 'alarm/:id/reprogram',
    loadComponent: () =>
      import('./pages/alarm-reprogram/alarm-reprogram.page').then(
        (m) => m.AlarmReprogramPage
      ),
  },

  /*
    Pantallas de estado / confirmación.
    :id identifica la alarma.
    :type define qué estado mostrar, por ejemplo:
      - attended
      - postponed
      - blocked
  */
  {
    path: 'alarm/:id/status/:type',
    loadComponent: () =>
      import('./pages/alarm-status/alarm-status.page').then(
        (m) => m.AlarmStatusPage
      ),
  },

  /*
    Ruta opcional para desarrollo.
    Mantener solo si estás usando la Home del starter para pruebas rápidas.
    Puedes eliminarla cuando /alarms sea tu landing principal.
  */
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  /*
    Ruta de respaldo.
    Cualquier ruta desconocida redirige a Splash.
  */
  { path: '**', redirectTo: 'splash' },
];