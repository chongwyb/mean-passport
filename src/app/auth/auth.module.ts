import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule,
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    providers: [
        AuthService,
    ]
})
export class AuthModule {
    constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
        if (parentModule) {
            throw new Error(
                'AuthModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                // For params in forRoot() to use in setting up providers with useValue
            ]
        };
    }
}