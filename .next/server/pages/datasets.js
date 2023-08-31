"use strict";
(() => {
var exports = {};
exports.id = 671;
exports.ids = [671,660];
exports.modules = {

/***/ 9310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fdatasets_preferredRegion_absolutePagePath_private_next_pages_2Fdatasets_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/datasets/index.js
var datasets_namespaceObject = {};
__webpack_require__.r(datasets_namespaceObject);
__webpack_require__.d(datasets_namespaceObject, {
  "default": () => (datasets)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(8769);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/page/FeatureBox.js



const FeatureBox = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: "/stocks",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "w-full md:w-1/2 p-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-violet-700 hover:bg-purple-800 hover:rounded-lg shadow-md p-6 rounded-lg mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "fas fa-database"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "ml-2 text-white hover:text-gray-200 font-medium",
                        children: "Stock Market Live Data (NSE)"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const page_FeatureBox = (FeatureBox);

;// CONCATENATED MODULE: ./components/pages/DatasetList.js



const DatasetsPage = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(page_FeatureBox, {});
};
/* harmony default export */ const DatasetList = (DatasetsPage);

;// CONCATENATED MODULE: ./components/pages/coming.js



const ComingList = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-gradient-to-r py-10 md:py-5 px-0  relative overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto text-center",
            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl md:text-3xl md:mt-10 font-bold bg-gradient-text relative z-10 mb-4 px-4 md:mb-8",
                children: "More Live Data Coming Soon.."
            })
        })
    });
};
/* harmony default export */ const coming = (ComingList);

;// CONCATENATED MODULE: ./pages/datasets/index.js





function datasets_DatasetsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "pt-10",
                children: /*#__PURE__*/ jsx_runtime.jsx(DatasetList, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx(coming, {})
        ]
    });
}
/* harmony default export */ const datasets = (datasets_DatasetsPage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fdatasets&preferredRegion=&absolutePagePath=private-next-pages%2Fdatasets%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fdatasets_preferredRegion_absolutePagePath_private_next_pages_2Fdatasets_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(datasets_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(datasets_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(datasets_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(datasets_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(datasets_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(datasets_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(datasets_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(datasets_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(datasets_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(datasets_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(datasets_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/datasets",
        pathname: "/datasets",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: datasets_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,664,208,769], () => (__webpack_exec__(9310)));
module.exports = __webpack_exports__;

})();