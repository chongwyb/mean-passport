import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryRoutingModule } from './library-routing.module';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LibraryService } from './library.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        LibraryRoutingModule,
        SharedModule,
    ],
    declarations: [
        BooksComponent,
        BookDetailComponent,
    ],
    providers: [
        LibraryService,
    ]
})
export class LibraryModule {
    constructor(@Optional() @SkipSelf() parentModule: LibraryModule) {
        if (parentModule) {
            throw new Error(
                'LibraryModule is already loaded. Import it in the AppModule only');
        }
    }
}