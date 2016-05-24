import {Component, MagicService} from 'nativescript-ng2-magic';
import {User} from "../../../app/shared/user/user";
import {UserService} from "../../../app/shared/user/user.service";

@Component({
  selector: 'practice-buddy-app',
  templateUrl: './app/components/login/login.component.html',
  styleUrls: ['./app/components/login/login.css'],
  providers: [UserService]
})

export class LoginComponent {
  title = "Practice Buddy";
  public user = new User();
  isLoggingIn = true;
  
  constructor(private userService: UserService) { 
    this.user.email = "nativescriptrocks@telerik.com";
     this.user.password = "password";     
  }
  
  login() {
    this.userService.login(this.user)
      .subscribe(
        //() => this._router.navigate(["List"]),
        //(error) => alert("Unfortunately we could not find your account.")
        () => alert("ohai"),
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
  
}
