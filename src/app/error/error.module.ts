import { NgModule } from "@angular/core";
import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
    imports: [
        ErrorRoutingModule,
        SharedModule,
    ],
    declarations: [
        Page404Component,
    ]
})
export class ErrorModule {}