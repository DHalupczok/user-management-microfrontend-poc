import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ExampleComponentComponent} from "./components/example-component/example-component.component";

const routes: Routes = [{
  path: 'user-management',
  loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
},
  {path: '', component: ExampleComponentComponent, pathMatch: "full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
