import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ViewEncapsulation } from '@angular/core';


platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.None,
    ngZoneEventCoalescing: true,
    ngZoneRunCoalescing: true,
    preserveWhitespaces: false,
  })
  .catch((err) => console.error(err));
