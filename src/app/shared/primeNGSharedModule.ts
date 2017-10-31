import { BuildTaskOptions } from '@angular/cli/commands/build';
import { NgModule } from "@angular/core";
import { BaseSharedModule } from "./baseSharedModule";
import { InputTextModule, ButtonModule, DataTableModule, DialogModule } from "primeng/primeng";
//Make the loading module as a share module
import { MyLoadingModule } from "../components/my-loading/my-loading";
@NgModule({
    imports:[
        BaseSharedModule
    ],
    exports:[
        BaseSharedModule,
        InputTextModule,
        ButtonModule,
        DataTableModule,
        DialogModule,
        MyLoadingModule
    ]
})


export class PrimeNGSharedModule{

}