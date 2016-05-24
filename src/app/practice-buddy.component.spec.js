"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('../app/app.component');
testing_1.beforeEachProviders(function () { return [app_component_1.AppComponent]; });
testing_1.describe('App: PracticeBuddy', function () {
    testing_1.it('should create the app', testing_1.inject([app_component_1.AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'practice-buddy works!\'', testing_1.inject([app_component_1.AppComponent], function (app) {
        testing_1.expect(app.title).toEqual('practice-buddy works!');
    }));
});
//# sourceMappingURL=practice-buddy.component.spec.js.map