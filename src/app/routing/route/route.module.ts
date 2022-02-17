import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { SearchComponent } from 'src/app/search/search.component';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutUsComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }