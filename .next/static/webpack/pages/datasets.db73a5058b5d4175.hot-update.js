"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/datasets",{

/***/ "./components/pages/DatasetList.js":
/*!*****************************************!*\
  !*** ./components/pages/DatasetList.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst availableDatasets = [\n    {\n        id: \"1\",\n        name: \"Dataset 1\",\n        description: \"Description for Dataset 1\"\n    },\n    {\n        id: \"2\",\n        name: \"Dataset 2\",\n        description: \"Description for Dataset 2\"\n    }\n];\nfunction DatasetList(description) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold my-8\",\n                children: \"Available Datasets\"\n            }, void 0, false, {\n                fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: availableDatasets.map((dataset)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/datasets/\".concat(dataset.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: dataset.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: dataset.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, dataset.id, false, {\n                        fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jarvis/Desktop/face/components/pages/DatasetList.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = DatasetList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatasetList);\nvar _c;\n$RefreshReg$(_c, \"DatasetList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL0RhdGFzZXRMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsb0JBQW9CO0lBQ3hCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO0lBRWY7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtJQUVmO0NBRUQ7QUFFRCxTQUFTQyxZQUFhRCxXQUFXO0lBQy9CLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUM1Qyw4REFBQ0Y7MEJBQ0VMLGtCQUFrQlEsR0FBRyxDQUFDLENBQUNDLHdCQUN0Qiw4REFBQ1Ysa0RBQUlBO3dCQUFrQlcsTUFBTSxhQUF3QixPQUFYRCxRQUFRUixFQUFFO2tDQUNsRCw0RUFBQ0k7OzhDQUNDLDhEQUFDQTs7Ozs7OENBRUQsOERBQUNNOzhDQUFJRixRQUFRUCxJQUFJOzs7Ozs7OENBQ2pCLDhEQUFDVTs4Q0FBSUgsUUFBUU4sV0FBVzs7Ozs7Ozs7Ozs7O3VCQUxqQk0sUUFBUVIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVkvQjtLQWxCU0c7QUFvQlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9EYXRhc2V0TGlzdC5qcz80NmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBhdmFpbGFibGVEYXRhc2V0cyA9IFtcbiAge1xuICAgIGlkOiAnMScsXG4gICAgbmFtZTogJ0RhdGFzZXQgMScsXG4gICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBmb3IgRGF0YXNldCAxJyxcblxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBuYW1lOiAnRGF0YXNldCAyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIGZvciBEYXRhc2V0IDInLFxuXG4gIH0sXG4gIC8vIEFkZCBtb3JlIGRhdGFzZXRzXG5dO1xuXG5mdW5jdGlvbiBEYXRhc2V0TGlzdCggZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXktOCc+QXZhaWxhYmxlIERhdGFzZXRzPC9oMj5cbiAgICAgIDxkaXYgPlxuICAgICAgICB7YXZhaWxhYmxlRGF0YXNldHMubWFwKChkYXRhc2V0KSA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXtkYXRhc2V0LmlkfSBocmVmPXtgL2RhdGFzZXRzLyR7ZGF0YXNldC5pZH1gfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzPntkYXRhc2V0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHAgPntkYXRhc2V0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiYXZhaWxhYmxlRGF0YXNldHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkRhdGFzZXRMaXN0IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJtYXAiLCJkYXRhc2V0IiwiaHJlZiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pages/DatasetList.js\n"));

/***/ })

});