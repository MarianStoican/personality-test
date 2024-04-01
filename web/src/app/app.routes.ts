import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PersonalityTestComponent } from './personality-test/personality-test.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'personality-test',
    component: PersonalityTestComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }