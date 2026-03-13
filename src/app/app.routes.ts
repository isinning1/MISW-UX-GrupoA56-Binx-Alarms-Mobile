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
  { path: '', pathMatch: 'full', redirectTo: 'splash' },

  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },

  {
    path: 'alarms',
    loadComponent: () =>
      import('./pages/alarms/alarms.page').then((m) => m.AlarmsPage),
  },

  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user.page').then((m) => m.UserPage),
  },

  {
    path: 'preferences',
    loadComponent: () =>
      import('./pages/preferences/preferences.page').then(
        (m) => m.PreferencesPage
      ),
  },

  {
    path: 'alarm/:id/edit',
    loadComponent: () =>
      import('./pages/alarm-edit/alarm-edit.page').then((m) => m.AlarmEditPage),
  },

  {
    path: 'alarm/:id/ring',
    loadComponent: () =>
      import('./pages/alarm-ring/alarm-ring.page').then((m) => m.AlarmRingPage),
  },

  /*
    Flujo de posponer
    1. limit  -> alerta / decisión
    2. select -> elegir 5 / 10 / 15
    3. result -> confirmación
  */
  {
    path: 'alarm/:id/postpone/limit',
    loadComponent: () =>
      import('./pages/alarm-postpone/alarm-postpone.page').then(
        (m) => m.AlarmPostponePage
      ),
    data: { view: 'limit' },
  },

  {
    path: 'alarm/:id/postpone',
    loadComponent: () =>
      import('./pages/alarm-postpone/alarm-postpone.page').then(
        (m) => m.AlarmPostponePage
      ),
    data: { view: 'select' },
  },

  {
    path: 'alarm/:id/postpone/result',
    loadComponent: () =>
      import('./pages/alarm-postpone/alarm-postpone.page').then(
        (m) => m.AlarmPostponePage
      ),
    data: { view: 'result' },
  },

  {
    path: 'alarm/:id/reprogram',
    loadComponent: () =>
      import('./pages/alarm-reprogram/alarm-reprogram.page').then(
        (m) => m.AlarmReprogramPage
      ),
  },

  {
    path: 'alarm/:id/status/:type',
    loadComponent: () =>
      import('./pages/alarm-status/alarm-status.page').then(
        (m) => m.AlarmStatusPage
      ),
  },

  { path: '**', redirectTo: 'splash' },
];