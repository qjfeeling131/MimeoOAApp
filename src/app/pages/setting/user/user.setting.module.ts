import { NgModule } from "@angular/core";

import { PrimeNGSharedModule } from "../../../shared/primeNGSharedModule";
import { UserSettingComponent } from "./user.setting.component";
import { routing } from "./user.setting.routing";
import { ToggleButtonModule,DropdownModule,InputSwitchModule,PickListModule,StepsModule,MenuItem,InputTextModule } from 'primeng/primeng';

import { UserSettingService } from './user.setting.service';

@NgModule({
    declarations:[
        UserSettingComponent,
    ],
    imports:[
      PrimeNGSharedModule,
      ToggleButtonModule,
      routing,
      DropdownModule,
      InputSwitchModule,
      PickListModule,
      StepsModule,
      InputTextModule
    ],
    providers: [
        UserSettingService
    ]
})
export class UserSettingModule{
}