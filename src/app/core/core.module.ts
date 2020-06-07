import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent, HeaderComponent, FooterComponent} from './components';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class CoreModule {
}
