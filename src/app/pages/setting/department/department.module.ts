import { NgModule } from "@angular/core";

import { PrimeNGSharedModule } from "../../../shared/primeNGSharedModule";
import { DepartmentComponent } from "./department.component";
import { routing } from "./department.routing";
import { DialogModule,DataTableModule,SharedModule } from "primeng/primeng";
import {OrganizationChartModule} from 'primeng/primeng';

import { DepartmentSettingService } from "./department.service";
@NgModule({
    declarations:[
        DepartmentComponent,
    ],
    imports:[
      PrimeNGSharedModule,
      DialogModule,
      OrganizationChartModule,
      routing
    ],
    providers:[
        DepartmentSettingService
    ]
    
})

export class DepartmentSettingModule{

}