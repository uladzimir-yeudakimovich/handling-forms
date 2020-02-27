import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/reative-form', pathMatch: 'full' },
  { path: 'reative-form', component: ReactiveFormComponent},
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }