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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userInfo = JSON.parse(localStorage.getItem(\"userInfo\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-purple-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between items-center pt-4 px-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-head text-7xl\",\n                                children: \"LifeClicks\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                        sx: {\n                                            width: 90,\n                                            height: 90\n                                        },\n                                        src: userInfo.profileURL\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        class: \"x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white\",\n                                        type: \"submit\",\n                                        onClick: ()=>{\n                                            localStorage.setItem(\"userInfo\", \"\");\n                                            router.push(\"/\");\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-row items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xl\",\n                                                children: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                                lineNumber: 26,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"pt-4 px-20 font-small text-6xl font-bold align-middle\",\n                            style: {\n                                height: \"60vh\",\n                                paddingTop: \"20vh\"\n                            },\n                            children: [\n                                \"Welcome back, \",\n                                userInfo.Name,\n                                \"!\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen px-20 flex flex-row relative bottom-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/6 py-8 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white\",\n                            children: \"Generate QR Code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-8 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full px-4 py-4 text-base border placeholder:font-small placeholder:text-lg border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1\",\n                            placeholder: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" drop-shadow-xl font-small rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSearch, {\n                                size: 32,\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ0U7QUFDM0IsU0FBU0csT0FBTzs7SUFDN0IsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO0lBQ2pELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBcUI7Ozs7OzswQ0FDbkMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1gsaURBQU1BO3dDQUNMYSxJQUFJOzRDQUFFQyxPQUFPOzRDQUFJQyxRQUFRO3dDQUFHO3dDQUM1QkMsS0FBS1gsU0FBU1ksVUFBVTs7Ozs7O2tEQUUxQiw4REFBQ0M7d0NBQ0NDLE9BQU07d0NBQ05DLE1BQUs7d0NBQ0xDLFNBQVMsSUFBTTs0Q0FDYmIsYUFBYWMsT0FBTyxDQUFDLFlBQVk7NENBQ2pDbEIsT0FBT21CLElBQUksQ0FBQzt3Q0FDZDtrREFFQSw0RUFBQ2I7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNhO2dEQUFLYixXQUFVOzBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtsQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNjOzRCQUNDZCxXQUFVOzRCQUNWZSxPQUFPO2dDQUFFWCxRQUFRO2dDQUFRWSxZQUFZOzRCQUFPOztnQ0FDN0M7Z0NBQ2dCdEIsU0FBU3VCLElBQUk7Z0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNsQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYTs0QkFBS2IsV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2tCOzRCQUNDbEIsV0FBVTs0QkFDVm1CLGFBQVk7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ3BCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1Qsb0RBQVFBO2dDQUFDNkIsTUFBTTtnQ0FBSUMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QyxDQUFDO0dBdER1QjdCOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzPzE2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTWRTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwdC00IHB4LTEyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtaGVhZCB0ZXh0LTd4bFwiPkxpZmVDbGlja3M8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDkwLCBoZWlnaHQ6IDkwIH19XG4gICAgICAgICAgICAgIHNyYz17dXNlckluZm8ucHJvZmlsZVVSTH1cbiAgICAgICAgICAgID48L0F2YXRhcj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ4LTYgbS0xMiBkcm9wLXNoYWRvdy14bCBmb250LXNtYWxsIHJvdW5kZWQtbWQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS00MDAgdG8tcHVycGxlLTUwMCBweS0zIHB4LTggdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySW5mb1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIFwiPlxuICAgICAgICAgIDxoM1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNCBweC0yMCBmb250LXNtYWxsIHRleHQtNnhsIGZvbnQtYm9sZCBhbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjYwdmhcIiwgcGFkZGluZ1RvcDogXCIyMHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBXZWxjb21lIGJhY2ssIHt1c2VySW5mby5OYW1lfSFcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBweC0yMCBmbGV4IGZsZXgtcm93IHJlbGF0aXZlIGJvdHRvbS0xNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS82IHB5LTggZHJvcC1zaGFkb3cteGwgZm9udC1zbWFsbCByb3VuZGVkLW1kIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNDAwIHRvLXB1cnBsZS01MDAgcHgtOFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5HZW5lcmF0ZSBRUiBDb2RlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdy1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IHRleHQtYmFzZSBib3JkZXIgcGxhY2Vob2xkZXI6Zm9udC1zbWFsbCBwbGFjZWhvbGRlcjp0ZXh0LWxnIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXB1cnBsZS01MDAgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgZm9jdXM6cmluZy0xXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkcm9wLXNoYWRvdy14bCBmb250LXNtYWxsIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTQwMCB0by1wdXJwbGUtNTAwICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPE1kU2VhcmNoIHNpemU9ezMyfSBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJ1c2VSb3V0ZXIiLCJNZFNlYXJjaCIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VySW5mbyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJwcm9maWxlVVJMIiwiYnV0dG9uIiwiY2xhc3MiLCJ0eXBlIiwib25DbGljayIsInNldEl0ZW0iLCJwdXNoIiwic3BhbiIsImgzIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwiTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJzaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});