import { componentFactoryName } from '@angular/compiler';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { DepartmentComponent } from "./department.component";


 const routes:Routes=[
    {
        path:'',
        component:DepartmentComponent
    }
]

export const routing: ModuleWithProviders=RouterModule.forChild(routes);