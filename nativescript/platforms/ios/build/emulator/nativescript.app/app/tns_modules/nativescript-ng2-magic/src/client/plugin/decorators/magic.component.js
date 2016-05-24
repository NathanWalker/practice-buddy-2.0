"use strict";
var utils_1 = require('./utils');
function Component(metadata) {
    if (metadata === void 0) { metadata = {}; }
    return function (cls) {
        return utils_1.MagicDecoratorUtils.annotateComponent(cls, metadata);
    };
}
exports.Component = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFnaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQkFBa0MsU0FBUyxDQUFDLENBQUE7QUFFNUMsbUJBQTBCLFFBQWtCO0lBQWxCLHdCQUFrQixHQUFsQixhQUFrQjtJQUMxQyxNQUFNLENBQUMsVUFBUyxHQUFRO1FBQ3RCLE1BQU0sQ0FBQywyQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUplLGlCQUFTLFlBSXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01hZ2ljRGVjb3JhdG9yVXRpbHN9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhOiBhbnkgPSB7fSkge1xuICByZXR1cm4gZnVuY3Rpb24oY2xzOiBhbnkpIHtcbiAgICByZXR1cm4gTWFnaWNEZWNvcmF0b3JVdGlscy5hbm5vdGF0ZUNvbXBvbmVudChjbHMsIG1ldGFkYXRhKTtcbiAgfTtcbn1cbiJdfQ==