import { NgModule } from "@angular/core";

// import { PrimeNGSharedModule } from "../../shared/primeNGSharedModule";
import { SettingComponent } from "./setting.component";
import { routing } from "./setting.routing";
import { TreeNode } from "primeng/primeng";
// import {OrganizationChartModule} from 'primeng/primeng';
@NgModule({
    declarations:[
        SettingComponent,
    ],
    imports:[
    //   PrimeNGSharedModule,
    //   OrganizationChartModule,
      routing
    ]
})
export class SettingModule{
}