"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/invariant";
exports.ids = ["vendor-chunks/invariant"];
exports.modules = {

/***/ "(ssr)/./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */ var NODE_ENV = \"development\";\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n    if (NODE_ENV !== \"production\") {\n        if (format === undefined) {\n            throw new Error(\"invariant requires an error message argument\");\n        }\n    }\n    if (!condition) {\n        var error;\n        if (format === undefined) {\n            error = new Error(\"Minified exception occurred; use the non-minified dev environment \" + \"for the full error message and additional helpful warnings.\");\n        } else {\n            var args = [\n                a,\n                b,\n                c,\n                d,\n                e,\n                f\n            ];\n            var argIndex = 0;\n            error = new Error(format.replace(/%s/g, function() {\n                return args[argIndex++];\n            }));\n            error.name = \"Invariant Violation\";\n        }\n        error.framesToPop = 1; // we don't care about invariant's own frame\n        throw error;\n    }\n};\nmodule.exports = invariant;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVEO0FBRUE7Ozs7Ozs7OztDQVNDLEdBRUQsSUFBSUEsV0FwQko7QUFzQkEsSUFBSUMsWUFBWSxTQUFTQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUM7SUFDMUQsSUFBSVQsYUFBYSxjQUFjO1FBQzdCLElBQUlHLFdBQVdPLFdBQVc7WUFDeEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxJQUFJLENBQUNULFdBQVc7UUFDZCxJQUFJVTtRQUNKLElBQUlULFdBQVdPLFdBQVc7WUFDeEJFLFFBQVEsSUFBSUQsTUFDVix1RUFDQTtRQUVKLE9BQU87WUFDTCxJQUFJRSxPQUFPO2dCQUFDVDtnQkFBR0M7Z0JBQUdDO2dCQUFHQztnQkFBR0M7Z0JBQUdDO2FBQUU7WUFDN0IsSUFBSUssV0FBVztZQUNmRixRQUFRLElBQUlELE1BQ1ZSLE9BQU9ZLE9BQU8sQ0FBQyxPQUFPO2dCQUFhLE9BQU9GLElBQUksQ0FBQ0MsV0FBVztZQUFFO1lBRTlERixNQUFNSSxJQUFJLEdBQUc7UUFDZjtRQUVBSixNQUFNSyxXQUFXLEdBQUcsR0FBRyw0Q0FBNEM7UUFDbkUsTUFBTUw7SUFDUjtBQUNGO0FBRUFNLE9BQU9DLE9BQU8sR0FBR2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzPzFlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiJdLCJuYW1lcyI6WyJOT0RFX0VOViIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImZvcm1hdCIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsInVuZGVmaW5lZCIsIkVycm9yIiwiZXJyb3IiLCJhcmdzIiwiYXJnSW5kZXgiLCJyZXBsYWNlIiwibmFtZSIsImZyYW1lc1RvUG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/invariant/invariant.js\n");

/***/ })

};
;