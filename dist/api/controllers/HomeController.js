"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.find = function () {
        return { name: 'Pouet' };
    };
    tslib_1.__decorate([
        routing_controllers_1.Get(),
        routing_controllers_openapi_1.OpenAPI({}),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Object)
    ], HomeController.prototype, "find", null);
    HomeController = tslib_1.__decorate([
        routing_controllers_1.JsonController()
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map