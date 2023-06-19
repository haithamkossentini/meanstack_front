import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

const routes: Routes = [{
  path: '',
    component: MainProviderComponent,
    children:[
      {
        path: 'list',
       component: ListProviderComponent,
      },
      {
        path: 'add',
       component: AddProviderComponent,
      }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
