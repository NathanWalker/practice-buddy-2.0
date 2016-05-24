import {Component, MagicService} from 'nativescript-ng2-magic';
//import {RouteConfig} from "@angular/router-deprecated";
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {Config} from "./config";

@Component({
  selector: 'practice-buddy-app',
  templateUrl: './app/components/login/login.component.html',
  directives: [MagicService.ROUTER_DIRECTIVES]
})
/*@RouteConfig([
  { path: "/Login", component: LoginComponent, name: "Login", useAsDefault: true },
  { path: "/Register", component: RegisterComponent, name: "Register", useAsDefault: false },
])*/
export class AppComponent {
  title: "PB"
}