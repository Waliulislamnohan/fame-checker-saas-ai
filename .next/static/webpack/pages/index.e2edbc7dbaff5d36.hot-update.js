/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar _global_process, _global_process1;\nmodule.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! ../../compiled/process */ \"./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSxxQ0FBcUMscUJBQU0saUZBQWlGLHFCQUFNLGtFQUFrRSxxQkFBTSxXQUFXLG1CQUFPLENBQUMsb0ZBQXdCOztBQUVyUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzP2NhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2dsb2JhbF9wcm9jZXNzLCBfZ2xvYmFsX3Byb2Nlc3MxO1xubW9kdWxlLmV4cG9ydHMgPSAoKF9nbG9iYWxfcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogX2dsb2JhbF9wcm9jZXNzLmVudikgJiYgdHlwZW9mICgoX2dsb2JhbF9wcm9jZXNzMSA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogX2dsb2JhbF9wcm9jZXNzMS5lbnYpID09PSBcIm9iamVjdFwiID8gZ2xvYmFsLnByb2Nlc3MgOiByZXF1aXJlKFwiLi4vLi4vY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "./pages/components/SearchResults.js":
/*!*******************************************!*\
  !*** ./pages/components/SearchResults.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry, socialInput } = param;\n    _s();\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let isMounted = true; // Flag to check if the component is mounted\n        const apiKey = process.env.API_KEY;\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"+\").concat(socialInput, \"&api_key=\").concat(apiKey);\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (isMounted && organicResults.length > 0) {\n                    const firstResult = organicResults[0];\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                    const firstThumbnail = firstResult.thumbnail;\n                    setThumbnail(firstThumbnail);\n                }\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n        return ()=>{\n            isMounted = false; // Mark the component as unmounted on cleanup\n        };\n    }, [\n        fullName,\n        selectedCountry,\n        socialInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnailContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: thumbnail,\n                            alt: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().followerDiv),\n                            children: firstDisplayedLink\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().snippetDiv),\n                    children: firstSnippet\n                }, void 0, false, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"6A0Bb+sKEvzBxckO1rINib7p8Dw=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNlO0FBRTNELE1BQU1HLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUU7O0lBQy9ELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLG9CQUFvQkMsc0JBQXNCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSLElBQUlZLFlBQVksTUFBTSw0Q0FBNEM7UUFFbEUsTUFBTUMsU0FBU0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO1FBQ2xDLE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxrQkFBa0I7Z0JBQ3hCLE1BQU1DLFNBQVMsZ0NBQTRDZixPQUFaRCxVQUFTLEtBQXNCRSxPQUFuQkQsaUJBQWdCLEtBQTBCUyxPQUF2QlIsYUFBWSxhQUFrQixPQUFQUTtnQkFDckcsTUFBTU8sV0FBVyxNQUFNQyxNQUFNSCxrQkFBa0JDO2dCQUUvQyxJQUFJLENBQUNDLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBRWhDLE1BQU1DLGlCQUFpQkYsS0FBS0csZUFBZTtnQkFFM0MsSUFBSWYsYUFBYWMsZUFBZUUsTUFBTSxHQUFHLEdBQUc7b0JBQzFDLE1BQU1DLGNBQWNILGNBQWMsQ0FBQyxFQUFFO29CQUNyQ2pCLHNCQUFzQm9CLFlBQVlDLGNBQWM7b0JBQ2hEbkIsZ0JBQWdCa0IsWUFBWUUsT0FBTztvQkFFbkMsTUFBTUMsaUJBQWlCSCxZQUFZdkIsU0FBUztvQkFDNUNDLGFBQWF5QjtnQkFDZjtZQUNGLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7WUFDbEQ7UUFDRjtRQUVBaEI7UUFFQSxPQUFPO1lBQ0xMLFlBQVksT0FBTyw2Q0FBNkM7UUFDbEU7SUFDRixHQUFHO1FBQUNUO1FBQVVDO1FBQWlCQztLQUFZO0lBRTNDLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBV25DLGtGQUFlO2tCQUM3Qiw0RUFBQ2tDO1lBQUlDLFdBQVduQyx1RkFBb0I7OzhCQUNsQyw4REFBQ2tDO29CQUFJQyxXQUFXbkMsNEZBQXlCOztzQ0FDdkMsOERBQUN1Qzs0QkFBSUMsS0FBS25DOzRCQUFXb0MsS0FBSTs7Ozs7O3NDQUN6Qiw4REFBQ1A7NEJBQUlDLFdBQVduQyxxRkFBa0I7c0NBQUdPOzs7Ozs7Ozs7Ozs7OEJBRXZDLDhEQUFDMkI7b0JBQUlDLFdBQVduQyxvRkFBaUI7OEJBQUdTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QztHQXRETVI7S0FBQUE7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzP2Y5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NlYXJjaFJlc3VsdHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoeyBmdWxsTmFtZSwgc2VsZWN0ZWRDb3VudHJ5LCBzb2NpYWxJbnB1dCB9KSA9PiB7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaXJzdERpc3BsYXllZExpbmssIHNldEZpcnN0RGlzcGxheWVkTGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaXJzdFNuaXBwZXQsIHNldEZpcnN0U25pcHBldF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTsgLy8gRmxhZyB0byBjaGVjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblxuICAgIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29yc0FueXdoZXJlVXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3NlcnBhcGkuY29tL3NlYXJjaD9xPSR7ZnVsbE5hbWV9KyR7c2VsZWN0ZWRDb3VudHJ5fSske3NvY2lhbElucHV0fSZhcGlfa2V5PSR7YXBpS2V5fWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0FueXdoZXJlVXJsICsgYXBpVXJsKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pY1Jlc3VsdHMgPSBkYXRhLm9yZ2FuaWNfcmVzdWx0cztcblxuICAgICAgICBpZiAoaXNNb3VudGVkICYmIG9yZ2FuaWNSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFJlc3VsdCA9IG9yZ2FuaWNSZXN1bHRzWzBdO1xuICAgICAgICAgIHNldEZpcnN0RGlzcGxheWVkTGluayhmaXJzdFJlc3VsdC5kaXNwbGF5ZWRfbGluayk7XG4gICAgICAgICAgc2V0Rmlyc3RTbmlwcGV0KGZpcnN0UmVzdWx0LnNuaXBwZXQpO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUaHVtYm5haWwgPSBmaXJzdFJlc3VsdC50aHVtYm5haWw7XG4gICAgICAgICAgc2V0VGh1bWJuYWlsKGZpcnN0VGh1bWJuYWlsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VhcmNoIHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTsgLy8gTWFyayB0aGUgY29tcG9uZW50IGFzIHVubW91bnRlZCBvbiBjbGVhbnVwXG4gICAgfTtcbiAgfSwgW2Z1bGxOYW1lLCBzZWxlY3RlZENvdW50cnksIHNvY2lhbElucHV0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Qm94fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoUmVzdWx0c30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cbiAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJEaXZ9PntmaXJzdERpc3BsYXllZExpbmt9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNuaXBwZXREaXZ9PntmaXJzdFNuaXBwZXR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJTZWFyY2hSZXN1bHRzIiwiZnVsbE5hbWUiLCJzZWxlY3RlZENvdW50cnkiLCJzb2NpYWxJbnB1dCIsInRodW1ibmFpbCIsInNldFRodW1ibmFpbCIsImZpcnN0RGlzcGxheWVkTGluayIsInNldEZpcnN0RGlzcGxheWVkTGluayIsImZpcnN0U25pcHBldCIsInNldEZpcnN0U25pcHBldCIsImlzTW91bnRlZCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwiZmV0Y2hEYXRhIiwiY29yc0FueXdoZXJlVXJsIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm9yZ2FuaWNSZXN1bHRzIiwib3JnYW5pY19yZXN1bHRzIiwibGVuZ3RoIiwiZmlyc3RSZXN1bHQiLCJkaXNwbGF5ZWRfbGluayIsInNuaXBwZXQiLCJmaXJzdFRodW1ibmFpbCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Qm94Iiwic2VhcmNoUmVzdWx0cyIsInRodW1ibmFpbENvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCIsImZvbGxvd2VyRGl2Iiwic25pcHBldERpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(229);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxPQUFPLGdCQUFnQixtQkFBbUIsTUFBTSxNQUFNLDRCQUE0QixtREFBbUQsK0JBQStCLHFEQUFxRCxZQUFZLElBQUksbUNBQW1DLGFBQWEsS0FBSyxvQkFBb0IsU0FBUyxtQkFBbUIsSUFBSSxxQ0FBcUMsZUFBZSxLQUFLLHVCQUF1QixTQUFTLHVCQUF1QixJQUFJLHVCQUF1QixtQkFBbUIsdUJBQXVCLDJDQUEyQyxhQUFhLHVCQUF1QixJQUFJLGNBQWMsU0FBUyxJQUFJLHdCQUF3QixTQUFTLDBCQUEwQiw0QkFBNEIscUJBQXFCLHVCQUF1QixnREFBZ0QsZUFBZSx1QkFBdUIsSUFBSSxZQUFZLFNBQVMsSUFBSSxzQkFBc0IsU0FBUyx3QkFBd0IsU0FBUyxZQUFZLE1BQU0sU0FBUywyQkFBMkIsV0FBVyxPQUFPLFFBQVEsYUFBYSxjQUFjLEtBQUssS0FBSyxhQUFhLGNBQWMsc0JBQXNCLE1BQU0sT0FBTyxrQ0FBa0MsT0FBTyxlQUFlLFNBQVMsSUFBSSxLQUFLLGFBQWEsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLFFBQVEsbUJBQW1CLHVCQUF1QixvQ0FBb0MsdUJBQXVCLFlBQVksbUJBQW1CLEtBQUsscUJBQXFCLHNCQUFzQixxQkFBcUIseUJBQXlCLG1CQUFtQixXQUFXLGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsZUFBZSxTQUFTLFVBQVUsYUFBYSxjQUFjLGlCQUFpQixVQUFVLG1CQUFtQixZQUFZLFdBQVcsc0JBQXNCLDBCQUEwQixZQUFZLHVCQUF1QiwyQkFBMkIsd0JBQXdCLFVBQVUsc0JBQXNCLHFEQUFxRCxpQkFBaUIsV0FBVyxvQkFBb0IsbURBQW1ELG1CQUFtQixZQUFZLFNBQVMsZ0NBQWdDLFdBQVcsa0JBQWtCLGlCQUFpQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixtRUFBbUUsU0FBUyxLQUFLLCtCQUErQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wcm9jZXNzL2Jyb3dzZXIuanM/MWIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXt2YXIgZT17MjI5OmZ1bmN0aW9uKGUpe3ZhciB0PWUuZXhwb3J0cz17fTt2YXIgcjt2YXIgbjtmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfShmdW5jdGlvbigpe3RyeXtpZih0eXBlb2Ygc2V0VGltZW91dD09PVwiZnVuY3Rpb25cIil7cj1zZXRUaW1lb3V0fWVsc2V7cj1kZWZhdWx0U2V0VGltb3V0fX1jYXRjaChlKXtyPWRlZmF1bHRTZXRUaW1vdXR9dHJ5e2lmKHR5cGVvZiBjbGVhclRpbWVvdXQ9PT1cImZ1bmN0aW9uXCIpe249Y2xlYXJUaW1lb3V0fWVsc2V7bj1kZWZhdWx0Q2xlYXJUaW1lb3V0fX1jYXRjaChlKXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fSkoKTtmdW5jdGlvbiBydW5UaW1lb3V0KGUpe2lmKHI9PT1zZXRUaW1lb3V0KXtyZXR1cm4gc2V0VGltZW91dChlLDApfWlmKChyPT09ZGVmYXVsdFNldFRpbW91dHx8IXIpJiZzZXRUaW1lb3V0KXtyPXNldFRpbWVvdXQ7cmV0dXJuIHNldFRpbWVvdXQoZSwwKX10cnl7cmV0dXJuIHIoZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIHIuY2FsbCh0aGlzLGUsMCl9fX1mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQoZSl7aWYobj09PWNsZWFyVGltZW91dCl7cmV0dXJuIGNsZWFyVGltZW91dChlKX1pZigobj09PWRlZmF1bHRDbGVhclRpbWVvdXR8fCFuKSYmY2xlYXJUaW1lb3V0KXtuPWNsZWFyVGltZW91dDtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfXRyeXtyZXR1cm4gbihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlKX19fXZhciBpPVtdO3ZhciBvPWZhbHNlO3ZhciB1O3ZhciBhPS0xO2Z1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpe2lmKCFvfHwhdSl7cmV0dXJufW89ZmFsc2U7aWYodS5sZW5ndGgpe2k9dS5jb25jYXQoaSl9ZWxzZXthPS0xfWlmKGkubGVuZ3RoKXtkcmFpblF1ZXVlKCl9fWZ1bmN0aW9uIGRyYWluUXVldWUoKXtpZihvKXtyZXR1cm59dmFyIGU9cnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO289dHJ1ZTt2YXIgdD1pLmxlbmd0aDt3aGlsZSh0KXt1PWk7aT1bXTt3aGlsZSgrK2E8dCl7aWYodSl7dVthXS5ydW4oKX19YT0tMTt0PWkubGVuZ3RofXU9bnVsbDtvPWZhbHNlO3J1bkNsZWFyVGltZW91dChlKX10Lm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7Zm9yKHZhciByPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dFtyLTFdPWFyZ3VtZW50c1tyXX19aS5wdXNoKG5ldyBJdGVtKGUsdCkpO2lmKGkubGVuZ3RoPT09MSYmIW8pe3J1blRpbWVvdXQoZHJhaW5RdWV1ZSl9fTtmdW5jdGlvbiBJdGVtKGUsdCl7dGhpcy5mdW49ZTt0aGlzLmFycmF5PXR9SXRlbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX07dC50aXRsZT1cImJyb3dzZXJcIjt0LmJyb3dzZXI9dHJ1ZTt0LmVudj17fTt0LmFyZ3Y9W107dC52ZXJzaW9uPVwiXCI7dC52ZXJzaW9ucz17fTtmdW5jdGlvbiBub29wKCl7fXQub249bm9vcDt0LmFkZExpc3RlbmVyPW5vb3A7dC5vbmNlPW5vb3A7dC5vZmY9bm9vcDt0LnJlbW92ZUxpc3RlbmVyPW5vb3A7dC5yZW1vdmVBbGxMaXN0ZW5lcnM9bm9vcDt0LmVtaXQ9bm9vcDt0LnByZXBlbmRMaXN0ZW5lcj1ub29wO3QucHJlcGVuZE9uY2VMaXN0ZW5lcj1ub29wO3QubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfTt0LmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9O3QuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfTt0LnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXt2YXIgbj10W3JdO2lmKG4hPT11bmRlZmluZWQpe3JldHVybiBuLmV4cG9ydHN9dmFyIGk9dFtyXT17ZXhwb3J0czp7fX07dmFyIG89dHJ1ZTt0cnl7ZVtyXShpLGkuZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtvPWZhbHNlfWZpbmFsbHl7aWYobylkZWxldGUgdFtyXX1yZXR1cm4gaS5leHBvcnRzfWlmKHR5cGVvZiBfX25jY3dwY2tfcmVxdWlyZV9fIT09XCJ1bmRlZmluZWRcIilfX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjt2YXIgcj1fX25jY3dwY2tfcmVxdWlyZV9fKDIyOSk7bW9kdWxlLmV4cG9ydHM9cn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ })

});