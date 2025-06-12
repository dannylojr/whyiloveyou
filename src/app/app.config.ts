import { ApplicationConfig, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Add this
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from './app.routes';

// Custom global error handler
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error caught:', error);
    // Add custom error handling logic here
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(), // Enable animations
    provideHttpClient(),
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};