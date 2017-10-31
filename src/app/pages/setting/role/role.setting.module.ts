import { NgModule } from "@angular/core";

import { PrimeNGSharedModule } from "../../../shared/primeNGSharedModule";
import { RoleSettingComponent } from "./role.setting.component";
import { routing } from "./role.setting.routing";
import { DialogModule,DataTableModule,SharedModule } from "primeng/primeng";
import {OrganizationChartModule} from 'primeng/primeng';

import { RoleSettingService } from "./role.setting.service";
@NgModule({
    declarations:[
        RoleSettingComponent,
    ],
    imports:[
      PrimeNGSharedModule,
      DialogModule,
      OrganizationChartModule,
      routing
    ],
    providers:[
        RoleSettingService
    ]
    
})
export class RoleSettingModule{
}