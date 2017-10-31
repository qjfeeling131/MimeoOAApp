import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from '@angular/router';


import {appRoutes} from './app.routes';


import { AppComponent } from "./app.component";
import { WorkspaceService } from './workspace/workspace.service';
import { AuthService } from './common/services/auth.service';
import { AuthGuard } from "./common/services/auth-guard.service";
import { BaseService } from './common/baseService';
import { BaseSharedModule } from "./shared/baseSharedModule";
import { LoaddingService } from "./common/services/loadding.service";

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        BaseSharedModule,
        RouterModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)        
    ],
    providers: [
      BaseService,
      WorkspaceService,
      AuthGuard,
      AuthService,
      LoaddingService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
