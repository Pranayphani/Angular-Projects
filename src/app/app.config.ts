import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([
    { path: 'counter', component: CounterComponent },
    { path: 'hooks', component: LifecycleHooksComponent }
  ])],
};
