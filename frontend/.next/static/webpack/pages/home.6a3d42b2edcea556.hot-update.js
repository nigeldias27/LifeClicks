"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userInfo = JSON.parse(localStorage.getItem(\"userInfo\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-purple-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center pt-4 px-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-head text-7xl\",\n                            children: \"LifeClicks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                    sx: {\n                                        width: 90,\n                                        height: 90\n                                    },\n                                    src: userInfo.profileURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white\",\n                                    type: \"submit\",\n                                    onClick: ()=>{\n                                        localStorage.setItem(\"userInfo\", \"\");\n                                        router.push(\"/\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-xl\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"pt-4 px-20 font-small text-6xl font-bold align-middle\",\n                        style: {\n                            height: \"60vh\",\n                            paddingTop: \"20vh\"\n                        },\n                        children: [\n                            \"Welcome back, \",\n                            userInfo.Name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen flex flex-row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/6 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white\",\n                            children: \"Generate QR Code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0M7QUFDekIsU0FBU0UsT0FBTzs7SUFDN0IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO0lBQ2pELHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXFCOzs7Ozs7c0NBQ25DLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNWLGlEQUFNQTtvQ0FDTFksSUFBSTt3Q0FBRUMsT0FBTzt3Q0FBSUMsUUFBUTtvQ0FBRztvQ0FDNUJDLEtBQUtYLFNBQVNZLFVBQVU7Ozs7Ozs4Q0FFMUIsOERBQUNDO29DQUNDQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxTQUFTLElBQU07d0NBQ2JiLGFBQWFjLE9BQU8sQ0FBQyxZQUFZO3dDQUNqQ2xCLE9BQU9tQixJQUFJLENBQUM7b0NBQ2Q7OENBRUEsNEVBQUNiO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDYTs0Q0FBS2IsV0FBVTtzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLbEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDYzt3QkFDQ2QsV0FBVTt3QkFDVmUsT0FBTzs0QkFBRVgsUUFBUTs0QkFBUVksWUFBWTt3QkFBTzs7NEJBQzdDOzRCQUNnQnRCLFNBQVN1QixJQUFJOzRCQUFDOzs7Ozs7Ozs7Ozs7OEJBR2pDLDhEQUFDbEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYTs0QkFBS2IsV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDLENBQUM7R0EzQ3VCUjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwdC00IHB4LTEyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtaGVhZCB0ZXh0LTd4bFwiPkxpZmVDbGlja3M8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDkwLCBoZWlnaHQ6IDkwIH19XG4gICAgICAgICAgICAgIHNyYz17dXNlckluZm8ucHJvZmlsZVVSTH1cbiAgICAgICAgICAgID48L0F2YXRhcj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ4LTYgbS0xMiBkcm9wLXNoYWRvdy14bCBmb250LXNtYWxsIHJvdW5kZWQtbWQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS00MDAgdG8tcHVycGxlLTUwMCBweS0zIHB4LTggdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySW5mb1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIFwiPlxuICAgICAgICAgIDxoM1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC0yMCBmb250LXNtYWxsIHRleHQtNnhsIGZvbnQtYm9sZCBhbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjYwdmhcIiwgcGFkZGluZ1RvcDogXCIyMHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBXZWxjb21lIGJhY2ssIHt1c2VySW5mby5OYW1lfSFcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNiBkcm9wLXNoYWRvdy14bCBmb250LXNtYWxsIHJvdW5kZWQtbWQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS00MDAgdG8tcHVycGxlLTUwMCBweS0zIHB4LThcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5HZW5lcmF0ZSBRUiBDb2RlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF2YXRhciIsInVzZVJvdXRlciIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VySW5mbyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJwcm9maWxlVVJMIiwiYnV0dG9uIiwiY2xhc3MiLCJ0eXBlIiwib25DbGljayIsInNldEl0ZW0iLCJwdXNoIiwic3BhbiIsImgzIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwiTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});