import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';

const routes: Routes = [
    {
        path: 'books',
        component: BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
