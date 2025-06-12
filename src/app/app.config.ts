import { ApplicationConfig, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';
import { routes } from './app.routes';
// Create a custom global error handler if needed
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error caught:', error);
    // Add your custom error handling logic here
    // For example: send to logging service, show user notification, etc.
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Provide custom error handler if you need global error handling
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideAnimations()
    // Add other providers here
  ]
};
