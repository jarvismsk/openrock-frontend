"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data",{

/***/ "./components/DataList.js":
/*!********************************!*\
  !*** ./components/DataList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst availableDatasets = [\n    {\n        id: \"1\",\n        name: \"Dataset 1\",\n        description: \"Description for Dataset 1\"\n    },\n    {\n        id: \"2\",\n        name: \"Dataset 2\",\n        description: \"Description for Dataset 2\"\n    }\n];\nfunction DatasetList() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Available Datasets\"\n            }, void 0, false, {\n                fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                children: availableDatasets.map((dataset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/datasets/\".concat(dataset.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"block p-4 border rounded-md hover:bg-gray-100 transition duration-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: dataset.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: dataset.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, dataset.id, false, {\n                        fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jarvis/Desktop/face/components/DataList.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = DatasetList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatasetList);\nvar _c;\n$RefreshReg$(_c, \"DatasetList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGFMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsb0JBQW9CO0lBQ3hCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0NBRUQ7QUFFRCxTQUFTQztJQUNQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQThCOzs7Ozs7MEJBQzVDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWk4sa0JBQWtCUSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ3RCLDhEQUFDVixrREFBSUE7d0JBQWtCVyxNQUFNLGFBQXdCLE9BQVhELFFBQVFSLEVBQUU7a0NBQ2xELDRFQUFDVTs0QkFBRUwsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFHTixXQUFVOzhDQUE4QkcsUUFBUVAsSUFBSTs7Ozs7OzhDQUN4RCw4REFBQ1c7b0NBQUVQLFdBQVU7OENBQWlCRyxRQUFRTixXQUFXOzs7Ozs7Ozs7Ozs7dUJBSDFDTSxRQUFRUixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CO0tBaEJTRztBQWtCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RhdGFMaXN0LmpzP2VkZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGF2YWlsYWJsZURhdGFzZXRzID0gW1xuICB7XG4gICAgaWQ6ICcxJyxcbiAgICBuYW1lOiAnRGF0YXNldCAxJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIGZvciBEYXRhc2V0IDEnLFxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBuYW1lOiAnRGF0YXNldCAyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIGZvciBEYXRhc2V0IDInLFxuICB9LFxuICAvLyBBZGQgbW9yZSBkYXRhc2V0c1xuXTtcblxuZnVuY3Rpb24gRGF0YXNldExpc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkF2YWlsYWJsZSBEYXRhc2V0czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAge2F2YWlsYWJsZURhdGFzZXRzLm1hcCgoZGF0YXNldCkgPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17ZGF0YXNldC5pZH0gaHJlZj17YC9kYXRhc2V0cy8ke2RhdGFzZXQuaWR9YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayBwLTQgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+e2RhdGFzZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2RhdGFzZXQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiYXZhaWxhYmxlRGF0YXNldHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkRhdGFzZXRMaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJkYXRhc2V0IiwiaHJlZiIsImEiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DataList.js\n"));

/***/ })

});