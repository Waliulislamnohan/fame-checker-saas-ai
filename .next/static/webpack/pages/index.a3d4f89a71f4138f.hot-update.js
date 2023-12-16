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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [thumbnails, setThumbnails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newsCount, setNewsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n        _s1();\n        const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        const apiKey = \"bd5ff3f938e1f1581f1379fc2b6181dd601278663263bba997b6f73e711d9ef0\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"&api_key=\").concat(apiKey);\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (organicResults.length > 0) {\n                    const firstResult = organicResults[0]; // Extracting the first result\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                }\n                const thumbnails = data.inline_images.map((image)=>image.thumbnail);\n                setThumbnails(thumbnails);\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, \"WVz1MCy1XXn3qsG4L/B1aA3UDGg=\"), [\n        fullName,\n        selectedCountry\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n            children: [\n                searchResults.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Search Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResult),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Followers: \",\n                                        SearchResults.displayed_link\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Infromation: \",\n                                        SearchResults.snippet\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                thumbnails.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnails),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Thumbnails\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        thumbnails.map((thumbnail, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: thumbnail,\n                                alt: \"Thumbnail \".concat(index)\n                            }, index, false, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().additionalInfo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Additional Information\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"News Count: \",\n                                newsCount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"Ue88MOyYGzyTjiNs02bGU32/qMY=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRWU7QUFFM0QsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUM7OztJQUNqRCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLEtBQUM7O1FBQ1IsTUFBTSxDQUFDVyxvQkFBb0JDLHNCQUFzQixHQUFHYiwrQ0FBUUEsQ0FBQztRQUM3RCxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQztRQUVqRCxNQUFNZ0IsU0FBUyxvRUFBb0Usd0NBQXdDO1FBQzNILE1BQU1DLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxrQkFBa0I7Z0JBQ3hCLE1BQU1DLFNBQVMsZ0NBQTRDZCxPQUFaRCxVQUFTLEtBQThCWSxPQUEzQlgsaUJBQWdCLGFBQWtCLE9BQVBXO2dCQUN0RixNQUFNSSxXQUFXLE1BQU1DLE1BQU1ILGtCQUFrQkM7Z0JBRS9DLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFFaEMsTUFBTUMsaUJBQWlCRixLQUFLRyxlQUFlO2dCQUMzQyxJQUFJRCxlQUFlRSxNQUFNLEdBQUcsR0FBRztvQkFDN0IsTUFBTUMsY0FBY0gsY0FBYyxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7b0JBQ3JFYixzQkFBc0JnQixZQUFZQyxjQUFjO29CQUNoRGYsZ0JBQWdCYyxZQUFZRSxPQUFPO2dCQUNyQztnQkFFQSxNQUFNdkIsYUFBYWdCLEtBQUtRLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLFNBQVM7Z0JBQ3BFMUIsY0FBY0Q7Z0JBRWQsTUFBTTRCLGNBQWNWLGVBQWVXLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxZQUFZO2dCQUN6RTVCLGFBQWF5QixZQUFZUixNQUFNO1lBQ2pDLEVBQUUsT0FBT1ksT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7WUFDbEQ7UUFDRjtRQUVBdkI7SUFDRixvQ0FBRztRQUFDYjtRQUFVQztLQUFnQjtJQUc5QixxQkFDRSw4REFBQ3FDO2tCQUNELDRFQUFDQTtZQUFJQyxXQUFXekMsa0ZBQWU7O2dCQUM5QkksY0FBY3NCLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNjO29CQUFJQyxXQUFXekMsdUZBQW9COztzQ0FDbEMsOERBQUMyQztzQ0FBRzs7Ozs7O3NDQUVGLDhEQUFDSDs0QkFBSUMsV0FBV3pDLHNGQUFtQjs7OENBQ2pDLDhEQUFDNkM7O3dDQUFFO3dDQUFZNUMsY0FBYzJCLGNBQWM7Ozs7Ozs7OENBQzNDLDhEQUFDaUI7O3dDQUFFO3dDQUFjNUMsY0FBYzRCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTTdDdkIsV0FBV29CLE1BQU0sR0FBRyxtQkFDbkIsOERBQUNjO29CQUFJQyxXQUFXekMsb0ZBQWlCOztzQ0FDL0IsOERBQUMyQztzQ0FBRzs7Ozs7O3dCQUNIckMsV0FBV3lCLEdBQUcsQ0FBQyxDQUFDRSxXQUFXYSxzQkFDMUIsOERBQUNDO2dDQUFnQkMsS0FBS2Y7Z0NBQVdnQixLQUFLLGFBQW1CLE9BQU5IOytCQUF6Q0E7Ozs7Ozs7Ozs7OzhCQUtoQiw4REFBQ047b0JBQUlDLFdBQVd6Qyx3RkFBcUI7O3NDQUNuQyw4REFBQzJDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNFOztnQ0FBRTtnQ0FBYXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0E1RU1QO0tBQUFBO0FBOEVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy5qcz9mOTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NlYXJjaFJlc3VsdHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoeyBmdWxsTmFtZSwgc2VsZWN0ZWRDb3VudHJ5fSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aHVtYm5haWxzLCBzZXRUaHVtYm5haWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld3NDb3VudCwgc2V0TmV3c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgW2ZpcnN0RGlzcGxheWVkTGluaywgc2V0Rmlyc3REaXNwbGF5ZWRMaW5rXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZmlyc3RTbmlwcGV0LCBzZXRGaXJzdFNuaXBwZXRdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgICBjb25zdCBhcGlLZXkgPSAnYmQ1ZmYzZjkzOGUxZjE1ODFmMTM3OWZjMmI2MTgxZGQ2MDEyNzg2NjMyNjNiYmE5OTdiNmY3M2U3MTFkOWVmMCc7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBTRVJQIEFQSSBrZXlcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb3JzQW55d2hlcmVVcmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJztcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vc2VycGFwaS5jb20vc2VhcmNoP3E9JHtmdWxsTmFtZX0rJHtzZWxlY3RlZENvdW50cnl9JmFwaV9rZXk9JHthcGlLZXl9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb3JzQW55d2hlcmVVcmwgKyBhcGlVcmwpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnN0IG9yZ2FuaWNSZXN1bHRzID0gZGF0YS5vcmdhbmljX3Jlc3VsdHM7XG4gICAgICAgIGlmIChvcmdhbmljUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RSZXN1bHQgPSBvcmdhbmljUmVzdWx0c1swXTsgLy8gRXh0cmFjdGluZyB0aGUgZmlyc3QgcmVzdWx0XG4gICAgICAgICAgc2V0Rmlyc3REaXNwbGF5ZWRMaW5rKGZpcnN0UmVzdWx0LmRpc3BsYXllZF9saW5rKTtcbiAgICAgICAgICBzZXRGaXJzdFNuaXBwZXQoZmlyc3RSZXN1bHQuc25pcHBldCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aHVtYm5haWxzID0gZGF0YS5pbmxpbmVfaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IGltYWdlLnRodW1ibmFpbCk7XG4gICAgICAgIHNldFRodW1ibmFpbHModGh1bWJuYWlscyk7XG5cbiAgICAgICAgY29uc3QgbmV3c1Jlc3VsdHMgPSBvcmdhbmljUmVzdWx0cy5maWx0ZXIoKHJlc3VsdCkgPT4gcmVzdWx0Lm5ld3NfYXJ0aWNsZSk7XG4gICAgICAgIHNldE5ld3NDb3VudChuZXdzUmVzdWx0cy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VhcmNoIHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2Z1bGxOYW1lLCBzZWxlY3RlZENvdW50cnldKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Qm94fT5cbiAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdH0+XG4gICAgICAgICAgICAgIDxwPkZvbGxvd2Vyczoge1NlYXJjaFJlc3VsdHMuZGlzcGxheWVkX2xpbmt9PC9wPlxuICAgICAgICAgICAgICA8cD5JbmZyb21hdGlvbjoge1NlYXJjaFJlc3VsdHMuc25pcHBldH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0aHVtYm5haWxzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbHN9PlxuICAgICAgICAgIDxoMj5UaHVtYm5haWxzPC9oMj5cbiAgICAgICAgICB7dGh1bWJuYWlscy5tYXAoKHRodW1ibmFpbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXt0aHVtYm5haWx9IGFsdD17YFRodW1ibmFpbCAke2luZGV4fWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRpdGlvbmFsSW5mb30+XG4gICAgICAgIDxoMj5BZGRpdGlvbmFsIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+TmV3cyBDb3VudDoge25ld3NDb3VudH08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiU2VhcmNoUmVzdWx0cyIsImZ1bGxOYW1lIiwic2VsZWN0ZWRDb3VudHJ5Iiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsIm5ld3NDb3VudCIsInNldE5ld3NDb3VudCIsImZpcnN0RGlzcGxheWVkTGluayIsInNldEZpcnN0RGlzcGxheWVkTGluayIsImZpcnN0U25pcHBldCIsInNldEZpcnN0U25pcHBldCIsImFwaUtleSIsImZldGNoRGF0YSIsImNvcnNBbnl3aGVyZVVybCIsImFwaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJvcmdhbmljUmVzdWx0cyIsIm9yZ2FuaWNfcmVzdWx0cyIsImxlbmd0aCIsImZpcnN0UmVzdWx0IiwiZGlzcGxheWVkX2xpbmsiLCJzbmlwcGV0IiwiaW5saW5lX2ltYWdlcyIsIm1hcCIsImltYWdlIiwidGh1bWJuYWlsIiwibmV3c1Jlc3VsdHMiLCJmaWx0ZXIiLCJyZXN1bHQiLCJuZXdzX2FydGljbGUiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dEJveCIsImgyIiwic2VhcmNoUmVzdWx0IiwicCIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwiYWRkaXRpb25hbEluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});