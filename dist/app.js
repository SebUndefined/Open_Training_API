"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var dotenv_1 = tslib_1.__importDefault(require("dotenv"));
var typedi_1 = require("typedi");
var banner_1 = tslib_1.__importDefault(require("./lib/logger/banner"));
var App = /** @class */ (function () {
    function App() {
    }
    App.initialize = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                banner_1.default.printTitle("Open Training API");
                try {
                    dotenv_1.default.config();
                    routing_controllers_1.useContainer(typedi_1.Container);
                    routing_controllers_1.createExpressServer({
                        cors: true,
                        controllers: [__dirname + "/api/controllers/*{.js,.ts}"],
                    }).listen(process.env.APP_PORT);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    return App;
}());
App.initialize();
//# sourceMappingURL=app.js.map