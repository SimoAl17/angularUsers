import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleUserPageComponent } from './single-user-page/single-user-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/users", pathMatch: "full"},
  {path: "user/:id", component: SingleUserPageComponent},
  {path: "users", component: ListComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
