import {Component, MagicService} from 'nativescript-ng2-magic';
import {User, UserService} from "../../shared/index";

@Component({
  selector: 'login',
  templateUrl: './app/components/login/login.component.html',
  styleUrls: ['./app/components/login/login.component.css'],
  directives: [MagicService.DEP_ROUTER_DIRECTIVES]
})
export class LoginComponent {
  public title: string = "Practice Buddy";
  public user: User;
  public isLoggingIn: boolean = true;
  public test = 'blah';
  
  constructor(private userService: UserService) { 
    this.user = new User({
      email: "nativescriptrocks@telerik.com",
      password: "password"
    });
  }
  
  public login() {
    this.userService.login(this.user)
      .subscribe(
        //() => this._router.navigate(["List"]),
        //(error) => alert("Unfortunately we could not find your account.")
        () => alert("ohai"),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  
}
