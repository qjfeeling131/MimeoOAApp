import { Routes, RouterModule }  from '@angular/router';

import { ForgotComponent } from './forgot.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ForgotComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
