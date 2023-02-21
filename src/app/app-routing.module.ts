import { ModelsComponent } from './components/models/models.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BrandsComponent },
  { path: 'models/:id', component: ModelsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
