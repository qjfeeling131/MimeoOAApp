import { componentFactoryName } from '@angular/compiler';
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SettingComponent } from "./setting.component";


 const routes:Routes=[
    {
        path:'',
        loadChildren: './user/user.setting.module#UserSettingModule'
    },
    {
        path:'role',
        component:SettingComponent
    }
]

export const routing: ModuleWithProviders=RouterModule.forChild(routes);
