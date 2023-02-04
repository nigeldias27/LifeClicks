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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userInfo = JSON.parse(localStorage.getItem(\"userInfo\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-purple-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center pt-4 px-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-head text-7xl\",\n                            children: \"LifeClicks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                    sx: {\n                                        width: 90,\n                                        height: 90\n                                    },\n                                    src: userInfo.profileURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    class: \"x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white\",\n                                    type: \"submit\",\n                                    onClick: ()=>{\n                                        localStorage.setItem(\"userInfo\", \"\");\n                                        router.push(\"/\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-xl\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"pt-4 px-20 font-small text-6xl font-bold align-middle\",\n                        style: {\n                            height: \"60vh\",\n                            paddingTop: \"20vh\"\n                        },\n                        children: [\n                            \"Welcome back, \",\n                            userInfo.Name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen flex flex-row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Generate QR Code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nigeldias27/ReactProjects/LifeClicks/frontend/pages/home.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0M7QUFDekIsU0FBU0UsT0FBTzs7SUFDN0IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO0lBQ2pELHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXFCOzs7Ozs7c0NBQ25DLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNWLGlEQUFNQTtvQ0FDTFksSUFBSTt3Q0FBRUMsT0FBTzt3Q0FBSUMsUUFBUTtvQ0FBRztvQ0FDNUJDLEtBQUtYLFNBQVNZLFVBQVU7Ozs7Ozs4Q0FFMUIsOERBQUNDO29DQUNDQyxPQUFNO29DQUNOQyxNQUFLO29DQUNMQyxTQUFTLElBQU07d0NBQ2JiLGFBQWFjLE9BQU8sQ0FBQyxZQUFZO3dDQUNqQ2xCLE9BQU9tQixJQUFJLENBQUM7b0NBQ2Q7OENBRUEsNEVBQUNiO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDYTs0Q0FBS2IsV0FBVTtzREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLbEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDYzt3QkFDQ2QsV0FBVTt3QkFDVmUsT0FBTzs0QkFBRVgsUUFBUTs0QkFBUVksWUFBWTt3QkFBTzs7NEJBQzdDOzRCQUNnQnRCLFNBQVN1QixJQUFJOzRCQUFDOzs7Ozs7Ozs7Ozs7OEJBR2pDLDhEQUFDbEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYTtzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCLENBQUM7R0EzQ3VCckI7O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIikpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHQtNCBweC0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWhlYWQgdGV4dC03eGxcIj5MaWZlQ2xpY2tzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiA5MCwgaGVpZ2h0OiA5MCB9fVxuICAgICAgICAgICAgICBzcmM9e3VzZXJJbmZvLnByb2ZpbGVVUkx9XG4gICAgICAgICAgICA+PC9BdmF0YXI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwieC02IG0tMTIgZHJvcC1zaGFkb3cteGwgZm9udC1zbWFsbCByb3VuZGVkLW1kIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNDAwIHRvLXB1cnBsZS01MDAgcHktMyBweC04IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlckluZm9cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bFwiPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBcIj5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTQgcHgtMjAgZm9udC1zbWFsbCB0ZXh0LTZ4bCBmb250LWJvbGQgYWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI2MHZoXCIsIHBhZGRpbmdUb3A6IFwiMjB2aFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2VsY29tZSBiYWNrLCB7dXNlckluZm8uTmFtZX0hXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzZcIj5cbiAgICAgICAgICAgIDxzcGFuPkdlbmVyYXRlIFFSIENvZGU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsInVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3giLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInByb2ZpbGVVUkwiLCJidXR0b24iLCJjbGFzcyIsInR5cGUiLCJvbkNsaWNrIiwic2V0SXRlbSIsInB1c2giLCJzcGFuIiwiaDMiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});