"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 6843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages)
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
// EXTERNAL MODULE: ./components/herosection.js
var herosection = __webpack_require__(6218);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/FeatureBox.js



const FeatureBox = ({ title, description, items })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full md:w-1/2 p-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "bg-violet-800 shadow-md p-6 rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                    className: "text-xl font-semibold mt-4 text-white",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "mt-2 text-white",
                    children: description
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mt-4",
                    children: items && items.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "list-inside text-gray-400 space-y-2",
                        children: items.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "flex items-center space-x-2 bg-purple-900 rounded-lg hover:text-white hover:bg-purple-900 hover:rounded-lg cursor-pointer py-2 px-4 transition duration-300 ease-in-out",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "text-white",
                                    href: item.link,
                                    children: item.text
                                })
                            }, index))
                    }) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-400",
                        children: "Coming Soon..."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_FeatureBox = (FeatureBox);

;// CONCATENATED MODULE: ./components/herobox/ModelsPage.js



const ModelsPage = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(components_FeatureBox, {
        icon: /*#__PURE__*/ jsx_runtime.jsx("i", {
            className: "fas fa-code"
        }),
        title: "Advanced Models"
    });
};
/* harmony default export */ const herobox_ModelsPage = (ModelsPage);

;// CONCATENATED MODULE: ./components/herobox/DatasetPage.js



const DatasetsPage = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(components_FeatureBox, {
        icon: /*#__PURE__*/ jsx_runtime.jsx("i", {
            className: "fas fa-code"
        }),
        title: "Live Datasets:",
        items: [
            {
                text: "Stock Market Live Data (NSE)",
                link: "/stocks"
            }
        ]
    });
};
/* harmony default export */ const DatasetPage = (DatasetsPage);

;// CONCATENATED MODULE: ./components/dmsection.js


const HeroSection = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "py-10 md:py-5 px-4 relative overflow-hidden",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container mx-auto text-center",
            children: /*#__PURE__*/ _jsx("h1", {
                className: "text-2xl md:text-5xl lg:text-8xl font-bold bg-gradient-text relative z-10 mb-4 md:mb-8 px-4",
                children: /*#__PURE__*/ _jsx("span", {
                    className: "bg-clip-text text-transparent from-blue-500 to-purple-600",
                    children: "Where Data and Models combine for Your Ultimate Destination."
                })
            })
        })
    });
};
/* harmony default export */ const dmsection = ((/* unused pure expression or super */ null && (HeroSection)));

;// CONCATENATED MODULE: ./pages/index.js







const HomePage = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "overflow-auto",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(herosection/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4 md:px-8 py-12 md:py-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-left md:text-left md:pl-4 text-gray-200",
                            children: "Explore Models and Datasets:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(DatasetPage, {}),
                                /*#__PURE__*/ jsx_runtime.jsx(herobox_ModelsPage, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-12"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const pages = (HomePage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: pages_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [940,815,664,208,769], () => (__webpack_exec__(6843)));
module.exports = __webpack_exports__;

})();