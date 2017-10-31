import { componentFactoryName } from '@angular/compiler';
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { UserSettingComponent } from "./user.setting.component";


 const routes:Routes=[
    {
        path:'',
        component:UserSettingComponent
    }
]

export const routing: ModuleWithProviders=RouterModule.forChild(routes);

