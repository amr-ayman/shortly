import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [HomeComponent, CallToActionComponent, StatisticsComponent],
  imports: [
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
