import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { LibraryModule } from './library/library.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './error/error.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    LibraryModule,
    SharedModule,
    ErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
