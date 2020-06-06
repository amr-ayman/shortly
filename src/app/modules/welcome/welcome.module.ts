import {NgModule} from '@angular/core';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {RouterModule} from '@angular/router';
import {WelcomeRoutingModule} from './welcome-routing.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule {
}
