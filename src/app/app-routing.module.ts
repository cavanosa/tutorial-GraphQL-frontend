import { CreateComponent } from './components/create/create.component';
import { ModelsComponent } from './components/models/models.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BrandsComponent },
  { path: 'models/:id', component: ModelsComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
