"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FeatureBox.js":
/*!**********************************!*\
  !*** ./components/FeatureBox.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FeatureBox = (param)=>{\n    let { icon, title, description, items } = param;\n    // Check if items array is provided and has items\n    const areItemsValid = Array.isArray(items) && items.length > 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-1/2 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-violet-900 shadow-md p-6 rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center h-16 w-16 mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full\",\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-semibold mt-4\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-2\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: areItemsValid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-inside text-gray-400 space-y-2\",\n                        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"flex items-center space-x-2 hover:text-white hover:bg-blue-600 hover:rounded-lg cursor-pointer py-2 px-4 transition duration-300 ease-in-out\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-database\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: item.link,\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400\",\n                        children: \"No items available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jarvis/Desktop/face/components/FeatureBox.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeatureBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureBox);\nvar _c;\n$RefreshReg$(_c, \"FeatureBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVCb3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDRztBQUU3QixNQUFNRSxhQUFhO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFO0lBQ3JELGlEQUFpRDtJQUNqRCxNQUFNQyxnQkFBZ0JDLE1BQU1DLE9BQU8sQ0FBQ0gsVUFBVUEsTUFBTUksTUFBTSxHQUFHO0lBRTdELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pUOzs7Ozs7OEJBRUgsOERBQUNVO29CQUFHRCxXQUFVOzhCQUE4QlI7Ozs7Ozs4QkFDNUMsOERBQUNVO29CQUFFRixXQUFVOzhCQUFRUDs7Ozs7OzhCQUNyQiw4REFBQ007b0JBQUlDLFdBQVU7OEJBQ1pMLDhCQUNDLDhEQUFDUTt3QkFBR0gsV0FBVTtrQ0FDWE4sTUFBTVUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7Z0NBRUNQLFdBQVU7O2tEQUVWLDhEQUFDUTt3Q0FBS1IsV0FBVTtrREFDZCw0RUFBQ1M7NENBQUVULFdBQVU7Ozs7Ozs7Ozs7O2tEQUdmLDhEQUFDWCxrREFBSUE7d0NBQUNxQixNQUFNTCxLQUFLTSxJQUFJO2tEQUNwQ04sS0FBS08sSUFBSTs7Ozs7OzsrQkFSV047Ozs7Ozs7OztrREFlWCw4REFBQ0o7d0JBQUVGLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0tBdENNVjtBQXdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlYXR1cmVCb3guanM/MTZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRmVhdHVyZUJveCA9ICh7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiwgaXRlbXMgfSkgPT4ge1xuICAvLyBDaGVjayBpZiBpdGVtcyBhcnJheSBpcyBwcm92aWRlZCBhbmQgaGFzIGl0ZW1zXG4gIGNvbnN0IGFyZUl0ZW1zVmFsaWQgPSBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXZpb2xldC05MDAgc2hhZG93LW1kIHAtNiByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xNiB3LTE2IG14LWF1dG8gYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS02MDAgdmlhLXBpbmstNjAwIHRvLXJlZC02MDAgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAge2ljb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG10LTRcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHthcmVJdGVtc1ZhbGlkID8gKFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlIHRleHQtZ3JheS00MDAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6cm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRhdGFiYXNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgey8qIFVzZSB0aGUgTGluayBjb21wb25lbnQgcHJvcGVybHkgKi99XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PlxuICB7aXRlbS50ZXh0fVxuPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+Tm8gaXRlbXMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlQm94O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkZlYXR1cmVCb3giLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiYXJlSXRlbXNWYWxpZCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJzcGFuIiwiaSIsImhyZWYiLCJsaW5rIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FeatureBox.js\n"));

/***/ })

});