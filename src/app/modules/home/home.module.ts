import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
