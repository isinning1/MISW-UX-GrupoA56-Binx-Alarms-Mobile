# BINX Alarms Mobile

Aplicación móvil desarrollada con **Ionic + Angular Standalone + Capacitor** para la gestión de alarmas inteligentes en mobile. Este repositorio contiene la implementación del flujo principal de BINX, incluyendo autenticación, onboarding, listado de alarmas, creación, edición, reprogramación, posposición, estados de atención y configuración de usuario/preferencias.

## Descripción general

BINX Alarms Mobile es una aplicación pensada para ofrecer una experiencia clara, amable y funcional alrededor de la administración de alarmas. El proyecto prioriza una interfaz limpia, responsive y coherente con buenas prácticas de UX/UI para mobile.

Dentro de la aplicación se implementan los siguientes flujos principales:

- Splash inicial
- Login
- Onboarding
- Listado de alarmas
- Crear alarma
- Editar alarma
- Alarma sonando
- Posponer alarma
- Reprogramar alarma
- Confirmación de atención
- Perfil de usuario
- Preferencias

## Stack tecnológico

- **Ionic Framework**
- **Angular**
- **Angular Standalone Components**
- **Capacitor**
- **SCSS**
- **Android Studio** para compilación nativa Android

## Requisitos previos

Antes de levantar el proyecto, asegúrate de tener instalado lo siguiente:

### 1. Node.js

Se recomienda usar una versión LTS reciente.

Verificar instalación:

```bash
node -v
npm -v
```

### 2. Ionic CLI

Instalación global:

```bash
npm install -g @ionic/cli
```

Verificar instalación:

```bash
ionic -v
```

### 3. Android Studio

Necesario para compilar y generar el APK Android.

Asegúrate de tener:

- Android Studio instalado
- Android SDK configurado
- Un emulador o dispositivo Android físico disponible

### 4. Java / JDK

Se recomienda tener el JDK correctamente instalado y accesible.

Verificar:

```bash
java -version
javac -version
```

### 5. Capacitor

Capacitor se instala como dependencia del proyecto. No requiere instalación global obligatoria si se usa mediante `npx`.

## Clonar el proyecto

```bash
git clone <https://github.com/isinning1/MISW-UX-GrupoA56-Binx-Alarms-Mobile.git>
cd MISW-UX-GrupoA56-Binx-Alarms-Mobile
```

## Instalación de dependencias

Desde la raíz del proyecto:

```bash
npm install
```

## Estructura general del proyecto

La estructura principal del proyecto sigue una organización por pantallas y recursos compartidos.

```text
src/
  app/
    core/
      mock/
    models/
    pages/
      splash/
      login/
      onboarding/
      alarms/
      alarm-create/
      alarm-edit/
      alarm-ring/
      alarm-postpone/
      alarm-reprogram/
      alarm-status/
      user/
      preferences/
    app.routes.ts
  assets/
  theme/
```

## Levantar la aplicación en entorno web

Para ejecutar la app en desarrollo:

```bash
ionic serve
```

Esto abrirá la aplicación en el navegador con recarga automática al detectar cambios.

## Compilar la aplicación web

Para generar el build productivo:

```bash
ionic build
```

Al finalizar correctamente, la salida queda en:

```text
www/
```

## Sincronizar con Android (Capacitor)

Después de cada build web, sincroniza los cambios con la capa nativa Android:

```bash
npx cap sync android
```

Este comando:

- copia los assets web a Android
- actualiza la configuración nativa
- sincroniza plugins de Capacitor

## Abrir el proyecto Android

```bash
npx cap open android
```

Esto abrirá el proyecto nativo en Android Studio.

## Generar APK Android

### Desde Android Studio

1. Abre el proyecto Android con:

```bash
npx cap open android
```

1. Espera a que finalice la sincronización de Gradle.
2. Ve al menú:

## **Build → Generate App Bundles or APKs → Generate APKs**

1. Espera a que termine la compilación.
2. Si todo sale bien, Android Studio mostrará una notificación indicando que el APK fue generado.

### Ruta habitual del APK debug

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Flujo principal implementado

### Inicio

- `/splash`
- `/login`
- `/onboarding`

### Flujo principal de alarmas

- `/alarms`
- `/alarm/create`
- `/alarm/:id/edit`
- `/alarm/:id/ring`
- `/alarm/:id/postpone/limit`
- `/alarm/:id/postpone`
- `/alarm/:id/postpone/result`
- `/alarm/:id/reprogram`
- `/alarm/:id/status/:type`

### Configuración y perfil

- `/user`
- `/preferences`

## Navegación esperada

### Crear alarma

Desde la pantalla de alarmas, el botón flotante inferior derecho lleva a:

```text
/alarm/create
```

### Editar alarma

Desde una tarjeta del listado de alarmas:

```text
/alarm/:id/edit
```

### Alarma sonando

Una alarma pendiente abre:

```text
/alarm/:id/ring
```

### Posponer alarma

El flujo implementado es:

1. `ring` → `postpone/limit`
2. `postpone/limit`:
   - Volver a decidir → `ring`
   - Reprogramar → `reprogram`
   - Continuar → `postpone`
3. `postpone` → selección de 5, 10 o 15 minutos
4. `postpone/result` → confirmación
5. Volver → `alarms`

### Atender alarma

Cuando una alarma se atiende:

```text
/alarm/:id/status/attended
```

## Comandos útiles

### Instalar dependencias

```bash
npm install
```

### Ejecutar en navegador

```bash
ionic serve
```

### Compilar proyecto web

```bash
ionic build
```

### Sincronizar Android

```bash
npx cap sync android
```

### Abrir Android Studio

```bash
npx cap open android
```

### Listar plataformas Capacitor

```bash
npx cap ls
```

### Agregar Android si no existe

```bash
npx cap add android
```

## Validación recomendada antes de generar APK

Antes de compilar Android, validar manualmente los siguientes puntos:

- Splash carga correctamente
- Login funcional
- Onboarding visible y navegable
- Listado de alarmas sin errores
- Crear alarma guarda y regresa a la lista
- Editar alarma funciona
- Reprogramar alarma funciona
- Posponer alarma sigue el flujo esperado
- Estado de alarma atendida visible
- Pantalla de usuario correcta
- Pantalla de preferencias correcta
- Inputs no se rompen en responsive
- Textos no se desbordan
- Íconos conservan proporción

## Presupuestos de build en Angular

Durante el desarrollo se ajustaron los budgets de Angular para permitir componentes SCSS más completos visualmente. Si el build falla por estilos, revisar la sección `budgets` en `angular.json`.

Configuración productiva usada:

```json
{
  "type": "anyComponentStyle",
  "maximumWarning": "8kb",
  "maximumError": "12kb"
}
```

## Consideraciones de desarrollo

- El proyecto usa **componentes standalone**.
- El estilo visual está optimizado para mobile.
- Los formularios priorizan claridad, contraste y consistencia.
- Los flujos están orientados a una navegación directa y comprensible.
- Los estados de alarma se organizan para reflejar el uso real de la aplicación.

## Recomendaciones para continuación del proyecto

Como siguientes pasos del proyecto, se recomienda:

- persistir datos reales de alarmas
- integrar almacenamiento local o backend
- unificar completamente el design system visual
- crear APK release firmado
- preparar AAB para publicación si aplica
- probar en múltiples tamaños de pantalla
- validar accesibilidad y rendimiento

## Troubleshooting

### 1. `ionic build` falla por budgets de estilos

Revisar `angular.json` y ajustar `anyComponentStyle`.

### 2. `npx cap sync android` falla

Verificar que `ionic build` haya generado correctamente la carpeta `www`.

### 3. Android Studio muestra advertencia de JDK / JAVA_HOME

Si Gradle sincroniza correctamente, la advertencia no necesariamente bloquea la compilación. Si se desea, alinear el JDK de Android Studio con `JAVA_HOME`.

### 4. No aparece el APK al compilar

Buscar manualmente en:

```text
android/app/build/outputs/apk/debug/
```

## **Equipo de desarrollo**

Grupo A56 UX-UI
UniAndes
