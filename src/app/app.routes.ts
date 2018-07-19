import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpanderComponent } from './expander/expander.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsComponent } from './forms/forms.component';
import { OverlaysComponent } from './overlays/overlays.component';

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expander', component: ExpanderComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'overlays', component: OverlaysComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];
