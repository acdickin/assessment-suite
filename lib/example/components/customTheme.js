"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("material-ui/styles/colors");
var colorManipulator_1 = require("material-ui/utils/colorManipulator");
var spacing_1 = require("material-ui/styles/spacing");
/**
https://www.materialpalette.com/blue-grey/green

.dark-primary-color    { background: #303F9F; }
.default-primary-color { background: #3F51B5; }
.light-primary-color   { background: #C5CAE9; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #FF5252; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }


 */
exports.default = {
    spacing: spacing_1.default,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#3a7bad',
        primary2Color: '#3F51B5',
        primary3Color: '#C5CAE9',
        accent1Color: '#33991d',
        accent2Color: '#3F51B5',
        accent3Color: '#757575',
        textColor: '#212121',
        alternateTextColor: '#FFFFFF',
        canvasColor: colors_1.fullWhite,
        borderColor: colorManipulator_1.fade('#BDBDBD', 0.3),
        disabledColor: colorManipulator_1.fade('#BDBDBD', 0.3),
        pickerHeaderColor: colorManipulator_1.fade('#BDBDBD', 0.12),
        clockCircleColor: colorManipulator_1.fade('#BDBDBD', 0.12)
    }
};
