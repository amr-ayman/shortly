import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent, HeaderComponent, FooterComponent} from './components';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CoreModule {
}
