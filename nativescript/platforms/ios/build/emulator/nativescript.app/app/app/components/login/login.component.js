"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nativescript_ng2_magic_1 = require('nativescript-ng2-magic');
var user_1 = require("../../../app/shared/user/user");
var user_service_1 = require("../../../app/shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.title = "Practice Buddy";
        this.user = new user_1.User();
        this.isLoggingIn = true;
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "password";
    }
    LoginComponent.prototype.login = function () {
        this.userService.login(this.user)
            .subscribe(
        //() => this._router.navigate(["List"]),
        //(error) => alert("Unfortunately we could not find your account.")
        function () { return alert("ohai"); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent = __decorate([
        nativescript_ng2_magic_1.Component({
            selector: 'practice-buddy-app',
            templateUrl: './app/components/login/login.component.html',
            styleUrls: ['./app/components/login/login.css'],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map