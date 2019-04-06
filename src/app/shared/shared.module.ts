import { NgModule } from "@angular/core";
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
    ],
    exports: [
        FormsModule,
        MaterialModule,
    ]
})
export class SharedModule {

}