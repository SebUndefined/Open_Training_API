"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var figlet_1 = tslib_1.__importDefault(require("figlet"));
var FigletColor;
(function (FigletColor) {
    FigletColor[FigletColor["Blue"] = 0] = "Blue";
    FigletColor[FigletColor["Green"] = 1] = "Green";
    FigletColor[FigletColor["Red"] = 2] = "Red";
    FigletColor[FigletColor["Orange"] = 3] = "Orange";
})(FigletColor || (FigletColor = {}));
/**
 *
 */
var Banner = /** @class */ (function () {
    function Banner() {
    }
    /**
     *
     * @param text
     * @param color
     */
    Banner.printTitle = function (text, color) {
        if (color === void 0) { color = FigletColor.Blue; }
        figlet_1.default(text, 'Standard', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            switch (color) {
                default:
                case FigletColor.Blue:
                    console.log(chalk_1.default.blue(data));
                    break;
                case FigletColor.Green:
                    console.log(chalk_1.default.green(data));
                    break;
                case FigletColor.Orange:
                    console.log(chalk_1.default.yellow(data));
                    break;
                case FigletColor.Red:
                    console.log(chalk_1.default.red(data));
                    break;
            }
        });
    };
    return Banner;
}());
exports.default = Banner;
//# sourceMappingURL=banner.js.map