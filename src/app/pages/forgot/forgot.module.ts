import { NgModule } from "@angular/core";

import { PrimeNGSharedModule } from "../../shared/primeNGSharedModule";
import { ForgotComponent } from "./forgot.component";
import { ForgotService } from "./forgot.service";
import { routing } from "./forgot.routing";
@NgModule({
    declarations:[
        ForgotComponent
    ],
    imports:[
        PrimeNGSharedModule,
        routing
    ],
    providers:[
        ForgotService
    ]
})


export class ForgetModule{

}