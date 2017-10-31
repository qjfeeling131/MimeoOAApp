import { componentFactoryName } from '@angular/compiler';
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RoleSettingComponent } from "./role.setting.component";


 const routes:Routes=[
    {
        path:'',
        component:RoleSettingComponent
    }
]

export const routing: ModuleWithProviders=RouterModule.forChild(routes);

