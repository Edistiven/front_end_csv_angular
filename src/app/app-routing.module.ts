import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListRecordsComponent } from './components/list-records/list-records.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'', component:FormComponent},
  {path:'form', component:FormComponent},
  {path:'list/:id', component:ListComponent},
  {path:'**', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
