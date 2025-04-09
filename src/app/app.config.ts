import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HttpClientModule, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { HttpInterceptorService } from './Services/http-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
            provideZoneChangeDetection({ eventCoalescing: true }), 
            provideRouter(routes),
            // provideHttpClient(),
            // importProvidersFrom(HttpClientModule),

            provideHttpClient(
              withInterceptorsFromDi()  // ეს არის ახალი ვერსია
            ),
            {
              provide: HTTP_INTERCEPTORS,
              useClass : HttpInterceptorService,
              multi : true
            }

          ]
};

// GET POST PUT DELETE     - C-create R-read U-update D-delete   
// 200   400   500   data
// API / End Point / Service / third Party service