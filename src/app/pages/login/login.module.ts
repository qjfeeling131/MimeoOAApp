import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { PrimeNGSharedModule } from "../../shared/primeNGSharedModule";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { routing } from "./login.routing";

@NgModule({
    declarations:[
        LoginComponent,
            ],
    imports:[
        FormsModule,
        PrimeNGSharedModule,
        routing
    ],
    providers:[
        LoginService
    ]
})

export  class LoginModule { }