import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectorComponent } from '@features/components/redirector/redirector.component';

const routes: Routes = [
  {
    path: '',
    component: RedirectorComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('@features/landing/landing.module').then(mod => mod.LandingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
