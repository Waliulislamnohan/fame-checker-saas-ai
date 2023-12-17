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

/***/ "./pages/components/SearchResults.js":
/*!*******************************************!*\
  !*** ./pages/components/SearchResults.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry, birthDate, socialInput, webInput } = param;\n    _s();\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newsCount, setNewsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiKey = \"a611087fac693d272ede013cf76812a3a904f2ad0d8ec465d4dc552846712439\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"+\").concat(socialInput, \"&api_key=\").concat(apiKey);\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (organicResults.length > 0) {\n                    const firstResult = organicResults[0]; // Extracting the first result\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                }\n                if (data.inline_images && data.inline_images.length > 0) {\n                    const firstThumbnail = data.inline_images[0].thumbnail;\n                    setThumbnail(firstThumbnail);\n                }\n                const thumbnails = data.inline_images.map((image)=>image.thumbnail);\n                setThumbnail(thumbnails);\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        fullName,\n        selectedCountry,\n        socialInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Search Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResult),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Follower \",\n                                                firstDisplayedLink\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \" \",\n                                                firstSnippet\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnailContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: thumbnail,\n                            alt: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 56,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"FJO2hEq50WGcayLFd5N+z8f68YY=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRWU7QUFFM0QsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFDM0RDLFdBQVcsRUFBRUMsUUFBUSxFQUFDOztJQUVwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2Esb0JBQW9CQyxzQkFBc0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pEQyxnREFBU0EsQ0FBQztRQUdSLE1BQU1nQixTQUFTLG9FQUFvRSx3Q0FBd0M7UUFDM0gsTUFBTUMsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLGtCQUFrQjtnQkFDeEIsTUFBTUMsU0FBUyxnQ0FBNENmLE9BQVpELFVBQVMsS0FBc0JHLE9BQW5CRixpQkFBZ0IsS0FBMEJZLE9BQXZCVixhQUFZLGFBQWtCLE9BQVBVO2dCQUNyRyxNQUFNSSxXQUFXLE1BQU1DLE1BQU1ILGtCQUFrQkM7Z0JBRS9DLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFFaEMsTUFBTUMsaUJBQWlCRixLQUFLRyxlQUFlO2dCQUUzQyxJQUFJRCxlQUFlRSxNQUFNLEdBQUcsR0FBRztvQkFDN0IsTUFBTUMsY0FBY0gsY0FBYyxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7b0JBQ3JFYixzQkFBc0JnQixZQUFZQyxjQUFjO29CQUNoRGYsZ0JBQWdCYyxZQUFZRSxPQUFPO2dCQUNyQztnQkFFQSxJQUFJUCxLQUFLUSxhQUFhLElBQUlSLEtBQUtRLGFBQWEsQ0FBQ0osTUFBTSxHQUFHLEdBQUc7b0JBQ3ZELE1BQU1LLGlCQUFpQlQsS0FBS1EsYUFBYSxDQUFDLEVBQUUsQ0FBQ3hCLFNBQVM7b0JBQ3REQyxhQUFhd0I7Z0JBQ2Y7Z0JBQ0EsTUFBTUMsYUFBYVYsS0FBS1EsYUFBYSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTTVCLFNBQVM7Z0JBQ3BFQyxhQUFheUI7Z0JBRWIsTUFBTUcsY0FBY1gsZUFBZVksTUFBTSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFlBQVk7Z0JBQ3pFN0IsYUFBYTBCLFlBQVlULE1BQU07WUFDakMsRUFBRSxPQUFPYSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtZQUNsRDtRQUNGO1FBRUF4QjtJQUNGLEdBQUc7UUFBQ2Q7UUFBVUM7UUFBZ0JFO0tBQVk7SUFHMUMscUJBQ0UsOERBQUNxQztrQkFDRCw0RUFBQ0E7WUFBSUMsV0FBVzNDLGtGQUFlOzs4QkFFM0IsOERBQUMwQztvQkFBSUMsV0FBVzNDLHVGQUFvQjs7c0NBQ2xDLDhEQUFDOEM7c0NBQUc7Ozs7OztzQ0FFRiw4REFBQ0o7NEJBQUlDLFdBQVczQyxzRkFBbUI7c0NBQ25DLDRFQUFDZ0Q7O2tEQUNELDhEQUFDQztrREFDYiw0RUFBQ0M7O2dEQUFFO2dEQUFVdkM7Ozs7Ozs7Ozs7OztrREFFRCw4REFBQ3NDO2tEQUFHLDRFQUFDQzs7Z0RBQUU7Z0RBQUVyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWIsOERBQUM2QjtvQkFBSUMsV0FBVzNDLDRGQUF5Qjs7c0NBQ3ZDLDhEQUFDOEM7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ007NEJBQUlDLEtBQUs5Qzs0QkFBVytDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5DO0dBakZNckQ7S0FBQUE7QUFtRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzP2Y5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2VhcmNoUmVzdWx0cy5tb2R1bGUuY3NzJztcblxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IGZ1bGxOYW1lLCBzZWxlY3RlZENvdW50cnksIGJpcnRoRGF0ZSxcbiAgc29jaWFsSW5wdXQsIHdlYklucHV0fSkgPT4ge1xuXG4gICAgY29uc3QgW3RodW1ibmFpbCwgc2V0VGh1bWJuYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25ld3NDb3VudCwgc2V0TmV3c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmlyc3REaXNwbGF5ZWRMaW5rLCBzZXRGaXJzdERpc3BsYXllZExpbmtdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlyc3RTbmlwcGV0LCBzZXRGaXJzdFNuaXBwZXRdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gIFxuICAgIGNvbnN0IGFwaUtleSA9ICdhNjExMDg3ZmFjNjkzZDI3MmVkZTAxM2NmNzY4MTJhM2E5MDRmMmFkMGQ4ZWM0NjVkNGRjNTUyODQ2NzEyNDM5JzsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIFNFUlAgQVBJIGtleVxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvcnNBbnl3aGVyZVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9zZXJwYXBpLmNvbS9zZWFyY2g/cT0ke2Z1bGxOYW1lfSske3NlbGVjdGVkQ291bnRyeX0rJHtzb2NpYWxJbnB1dH0mYXBpX2tleT0ke2FwaUtleX1gO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvcnNBbnl3aGVyZVVybCArIGFwaVVybCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pY1Jlc3VsdHMgPSBkYXRhLm9yZ2FuaWNfcmVzdWx0cztcbiAgICBcbiAgICAgICAgaWYgKG9yZ2FuaWNSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFJlc3VsdCA9IG9yZ2FuaWNSZXN1bHRzWzBdOyAvLyBFeHRyYWN0aW5nIHRoZSBmaXJzdCByZXN1bHRcbiAgICAgICAgICBzZXRGaXJzdERpc3BsYXllZExpbmsoZmlyc3RSZXN1bHQuZGlzcGxheWVkX2xpbmspO1xuICAgICAgICAgIHNldEZpcnN0U25pcHBldChmaXJzdFJlc3VsdC5zbmlwcGV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmlubGluZV9pbWFnZXMgJiYgZGF0YS5pbmxpbmVfaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFRodW1ibmFpbCA9IGRhdGEuaW5saW5lX2ltYWdlc1swXS50aHVtYm5haWw7XG4gICAgICAgICAgc2V0VGh1bWJuYWlsKGZpcnN0VGh1bWJuYWlsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aHVtYm5haWxzID0gZGF0YS5pbmxpbmVfaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IGltYWdlLnRodW1ibmFpbCk7XG4gICAgICAgIHNldFRodW1ibmFpbCh0aHVtYm5haWxzKTtcblxuICAgICAgICBjb25zdCBuZXdzUmVzdWx0cyA9IG9yZ2FuaWNSZXN1bHRzLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQubmV3c19hcnRpY2xlKTtcbiAgICAgICAgc2V0TmV3c0NvdW50KG5ld3NSZXN1bHRzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZWFyY2ggcmVzdWx0czonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbZnVsbE5hbWUsIHNlbGVjdGVkQ291bnRyeSxzb2NpYWxJbnB1dF0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCb3h9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHR9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuPHA+Rm9sbG93ZXIge2ZpcnN0RGlzcGxheWVkTGlua308L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxwPiB7Zmlyc3RTbmlwcGV0fTwvcD48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XG4gICAgICAgICAgPGgyPlRodW1ibmFpbDwvaDI+XG4gICAgICAgICAgPGltZyBzcmM9e3RodW1ibmFpbH0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlNlYXJjaFJlc3VsdHMiLCJmdWxsTmFtZSIsInNlbGVjdGVkQ291bnRyeSIsImJpcnRoRGF0ZSIsInNvY2lhbElucHV0Iiwid2ViSW5wdXQiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJuZXdzQ291bnQiLCJzZXROZXdzQ291bnQiLCJmaXJzdERpc3BsYXllZExpbmsiLCJzZXRGaXJzdERpc3BsYXllZExpbmsiLCJmaXJzdFNuaXBwZXQiLCJzZXRGaXJzdFNuaXBwZXQiLCJhcGlLZXkiLCJmZXRjaERhdGEiLCJjb3JzQW55d2hlcmVVcmwiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwib3JnYW5pY1Jlc3VsdHMiLCJvcmdhbmljX3Jlc3VsdHMiLCJsZW5ndGgiLCJmaXJzdFJlc3VsdCIsImRpc3BsYXllZF9saW5rIiwic25pcHBldCIsImlubGluZV9pbWFnZXMiLCJmaXJzdFRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXAiLCJpbWFnZSIsIm5ld3NSZXN1bHRzIiwiZmlsdGVyIiwicmVzdWx0IiwibmV3c19hcnRpY2xlIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXRCb3giLCJzZWFyY2hSZXN1bHRzIiwiaDIiLCJzZWFyY2hSZXN1bHQiLCJ1bCIsImxpIiwicCIsInRodW1ibmFpbENvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});