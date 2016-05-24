import {Component, MagicService} from 'nativescript-ng2-magic';
import {RouteConfig} from "@angular/router-deprecated";
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {UserService} from '../../shared/index';
import {Config} from "../../config";

@Component({
  selector: 'practice-buddy-app',
  templateUrl: './app/components/app/app.component.html',
  directives: [MagicService.DEP_ROUTER_DIRECTIVES],
  providers: [UserService]
})
@RouteConfig([
  { path: "/login", component: LoginComponent, name: "Login", useAsDefault: true },
  { path: "/register", component: RegisterComponent, name: "Register" }
])
export class AppComponent {
  title: "PB"
}