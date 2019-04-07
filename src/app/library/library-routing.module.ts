import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
    {
        path: "books",
        component: BooksComponent,
    },
    {
        path: "book/new",
        component: BookDetailComponent,
    },
    {
        path: "book/:id/edit",
        component: BookDetailComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibraryRoutingModule {

}