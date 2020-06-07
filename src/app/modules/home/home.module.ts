import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import {CallToActionComponent} from './components/call-to-action/call-to-action.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {HeroBannerComponent} from './components/hero-banner/hero-banner.component';
import {ShortenUrlComponent} from './components/shorten-url/shorten-url.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  declarations: [HomeComponent, CallToActionComponent, StatisticsComponent, HeroBannerComponent, ShortenUrlComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ClipboardModule
  ]
})
export class HomeModule {
}
