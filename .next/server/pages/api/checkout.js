"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/lib/stripe.ts":
/*!***************************!*\
  !*** ./src/lib/stripe.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-08-01\",\n    appInfo: {\n        name: \"Ignite Shop\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3N0cmlwZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFcEIsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFNLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsRUFBQztJQUMzREMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE9BQU8sRUFBRTtRQUNMQyxJQUFJLEVBQUUsYUFBYTtLQUN0QjtDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNC1pZ25pdGUtc2hvcC8uL3NyYy9saWIvc3RyaXBlLnRzPzc5OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZLHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMi0wOC0wMScsXG4gICAgYXBwSW5mbzoge1xuICAgICAgICBuYW1lOiAnSWduaXRlIFNob3AnLFxuICAgIH1cbn0pIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/stripe.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/stripe */ \"(api)/./src/lib/stripe.ts\");\n\nasync function handler(req, res) {\n    const { priceId  } = req.body;\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed.\"\n        });\n    }\n    if (!priceId) {\n        return res.status(400).json({\n            error: \"Price not found.\"\n        });\n    }\n    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;\n    const cancelUrl = `${process.env.NEXT_URL}/`;\n    const checkoutSession = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n        success_url: successUrl,\n        cancel_url: cancelUrl,\n        mode: \"payment\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ]\n    });\n    return res.status(201).json({\n        checkoutUrl: checkoutSession.url\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBDO0FBRzNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM3RSxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFFNUIsSUFBR0gsR0FBRyxDQUFDSSxNQUFNLEtBQUssTUFBTSxFQUFDO1FBQ3JCLE9BQU9ILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLHFCQUFxQjtTQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUcsQ0FBQ0wsT0FBTyxFQUFFO1FBQ1QsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsa0JBQWtCO1NBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsTUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyx5Q0FBeUMsQ0FBQztJQUNyRixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU1QyxNQUFNRSxlQUFlLEdBQUcsTUFBTWYsd0VBQStCLENBQUM7UUFDMURtQixXQUFXLEVBQUVULFVBQVU7UUFDdkJVLFVBQVUsRUFBRU4sU0FBUztRQUNyQk8sSUFBSSxFQUFFLFNBQVM7UUFDZkMsVUFBVSxFQUFFO1lBQ1I7Z0JBQ0lDLEtBQUssRUFBRW5CLE9BQU87Z0JBQ2RvQixRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0o7S0FDSixDQUFDO0lBRUYsT0FBT3JCLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDeEJpQixXQUFXLEVBQUVWLGVBQWUsQ0FBQ1csR0FBRztLQUNuQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA0LWlnbml0ZS1zaG9wLy4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC50cz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9zdHJpcGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBwcmljZUlkIH0gPSByZXEuYm9keTtcblxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJyl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkLicgfSlcbiAgICB9XG4gICAgXG4gICAgaWYoIXByaWNlSWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdQcmljZSBub3QgZm91bmQuJyB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3NVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1VSTH0vc3VjY2Vzcz9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWA7XG4gICAgY29uc3QgY2FuY2VsVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9VUkx9L2A7XG5cbiAgICBjb25zdCBjaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgc3VjY2Vzc191cmw6IHN1Y2Nlc3NVcmwsXG4gICAgICAgIGNhbmNlbF91cmw6IGNhbmNlbFVybCxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlSWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICAgIGNoZWNrb3V0VXJsOiBjaGVja291dFNlc3Npb24udXJsLFxuICAgIH0pXG59Il0sIm5hbWVzIjpbInN0cmlwZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcmljZUlkIiwiYm9keSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInN1Y2Nlc3NVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9VUkwiLCJjYW5jZWxVcmwiLCJjaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwic3VjY2Vzc191cmwiLCJjYW5jZWxfdXJsIiwibW9kZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwiY2hlY2tvdXRVcmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();