import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
            provideZoneChangeDetection({ eventCoalescing: true }), 
            provideRouter(routes),
            provideHttpClient()
          ]
};

// GET POST PUT DELETE     - C-create R-read U-update D-delete   
// 200   400   500   data
// API / End Point / Service / third Party service