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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry } = param;\n    _s();\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [thumbnails, setThumbnails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newsCount, setNewsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiKey = \"bd5ff3f938e1f1581f1379fc2b6181dd601278663263bba997b6f73e711d9ef0\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"&api_key=\").concat(apiKey);\n                const response = await fetch(apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                const results = organicResults.map((result)=>({\n                        displayed_link: result.displayed_link,\n                        snippet: result.snippet\n                    }));\n                setSearchResults(results);\n                const thumbnails = data.inline_images.map((image)=>image.thumbnail);\n                setThumbnails(thumbnails);\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        fullName,\n        selectedCountry\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            searchResults.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Search Results\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    searchResults.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResult),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: result.displayed_link\n                                }, void 0, false, {\n                                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: result.snippet\n                                }, void 0, false, {\n                                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            thumbnails.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnails),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Thumbnails\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    thumbnails.map((thumbnail, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: thumbnail,\n                            alt: \"Thumbnail \".concat(index)\n                        }, index, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().additionalInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Additional Information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"News Count: \",\n                            newsCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"Ue88MOyYGzyTjiNs02bGU32/qMY=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2lDO0FBRTNELE1BQU1JLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFDOztJQUNqRCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxTQUFTLG9FQUFvRSx3Q0FBd0M7UUFDM0gsTUFBTUMsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsZ0NBQTRDVCxPQUFaRCxVQUFTLEtBQThCUSxPQUEzQlAsaUJBQWdCLGFBQWtCLE9BQVBPO2dCQUN0RixNQUFNRyxXQUFXLE1BQU1DLE1BQU1GO2dCQUM3QixJQUFJLENBQUNDLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBRWhDLE1BQU1DLGlCQUFpQkYsS0FBS0csZUFBZTtnQkFDM0MsTUFBTUMsVUFBVUYsZUFBZUcsR0FBRyxDQUFDLENBQUNDLFNBQVk7d0JBQzlDQyxnQkFBZ0JELE9BQU9DLGNBQWM7d0JBQ3JDQyxTQUFTRixPQUFPRSxPQUFPO29CQUN6QjtnQkFDQXBCLGlCQUFpQmdCO2dCQUVqQixNQUFNZixhQUFhVyxLQUFLUyxhQUFhLENBQUNKLEdBQUcsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxTQUFTO2dCQUNwRXJCLGNBQWNEO2dCQUVkLE1BQU11QixjQUFjVixlQUFlVyxNQUFNLENBQUMsQ0FBQ1AsU0FBV0EsT0FBT1EsWUFBWTtnQkFDekV0QixhQUFhb0IsWUFBWUcsTUFBTTtZQUNqQyxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO1lBQ2xEO1FBQ0Y7UUFFQXRCO0lBQ0YsR0FBRztRQUFDVDtRQUFVQztLQUFnQjtJQUc5QixxQkFDRSw4REFBQ2dDOztZQUNFL0IsY0FBYzRCLE1BQU0sR0FBRyxtQkFDdEIsOERBQUNHO2dCQUFJQyxXQUFXcEMsdUZBQW9COztrQ0FDbEMsOERBQUNxQztrQ0FBRzs7Ozs7O29CQUNIakMsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRZSxzQkFDMUIsOERBQUNIOzRCQUFnQkMsV0FBV3BDLHNGQUFtQjs7OENBQzdDLDhEQUFDd0M7OENBQUdqQixPQUFPQyxjQUFjOzs7Ozs7OENBQ3pCLDhEQUFDZ0I7OENBQUdqQixPQUFPRSxPQUFPOzs7Ozs7OzJCQUZWYTs7Ozs7Ozs7Ozs7WUFRZmhDLFdBQVcwQixNQUFNLEdBQUcsbUJBQ25CLDhEQUFDRztnQkFBSUMsV0FBV3BDLG9GQUFpQjs7a0NBQy9CLDhEQUFDcUM7a0NBQUc7Ozs7OztvQkFDSC9CLFdBQVdnQixHQUFHLENBQUMsQ0FBQ00sV0FBV1Usc0JBQzFCLDhEQUFDRzs0QkFBZ0JDLEtBQUtkOzRCQUFXZSxLQUFLLGFBQW1CLE9BQU5MOzJCQUF6Q0E7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ0g7Z0JBQUlDLFdBQVdwQyx3RkFBcUI7O2tDQUNuQyw4REFBQ3FDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNHOzs0QkFBRTs0QkFBYWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBbEVNUDtLQUFBQTtBQW9FTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanM/ZjkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NlYXJjaFJlc3VsdHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoeyBmdWxsTmFtZSwgc2VsZWN0ZWRDb3VudHJ5fSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0aHVtYm5haWxzLCBzZXRUaHVtYm5haWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld3NDb3VudCwgc2V0TmV3c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gJ2JkNWZmM2Y5MzhlMWYxNTgxZjEzNzlmYzJiNjE4MWRkNjAxMjc4NjYzMjYzYmJhOTk3YjZmNzNlNzExZDllZjAnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgU0VSUCBBUEkga2V5XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vc2VycGFwaS5jb20vc2VhcmNoP3E9JHtmdWxsTmFtZX0rJHtzZWxlY3RlZENvdW50cnl9JmFwaV9rZXk9JHthcGlLZXl9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnN0IG9yZ2FuaWNSZXN1bHRzID0gZGF0YS5vcmdhbmljX3Jlc3VsdHM7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBvcmdhbmljUmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICBkaXNwbGF5ZWRfbGluazogcmVzdWx0LmRpc3BsYXllZF9saW5rLFxuICAgICAgICAgIHNuaXBwZXQ6IHJlc3VsdC5zbmlwcGV0LFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJuYWlscyA9IGRhdGEuaW5saW5lX2ltYWdlcy5tYXAoKGltYWdlKSA9PiBpbWFnZS50aHVtYm5haWwpO1xuICAgICAgICBzZXRUaHVtYm5haWxzKHRodW1ibmFpbHMpO1xuXG4gICAgICAgIGNvbnN0IG5ld3NSZXN1bHRzID0gb3JnYW5pY1Jlc3VsdHMuZmlsdGVyKChyZXN1bHQpID0+IHJlc3VsdC5uZXdzX2FydGljbGUpO1xuICAgICAgICBzZXROZXdzQ291bnQobmV3c1Jlc3VsdHMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlYXJjaCByZXN1bHRzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtmdWxsTmFtZSwgc2VsZWN0ZWRDb3VudHJ5XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHR9PlxuICAgICAgICAgICAgICA8cD57cmVzdWx0LmRpc3BsYXllZF9saW5rfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3Jlc3VsdC5zbmlwcGV0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0aHVtYm5haWxzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbHN9PlxuICAgICAgICAgIDxoMj5UaHVtYm5haWxzPC9oMj5cbiAgICAgICAgICB7dGh1bWJuYWlscy5tYXAoKHRodW1ibmFpbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXt0aHVtYm5haWx9IGFsdD17YFRodW1ibmFpbCAke2luZGV4fWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRpdGlvbmFsSW5mb30+XG4gICAgICAgIDxoMj5BZGRpdGlvbmFsIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+TmV3cyBDb3VudDoge25ld3NDb3VudH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInN0eWxlcyIsIlNlYXJjaFJlc3VsdHMiLCJmdWxsTmFtZSIsInNlbGVjdGVkQ291bnRyeSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwidGh1bWJuYWlscyIsInNldFRodW1ibmFpbHMiLCJuZXdzQ291bnQiLCJzZXROZXdzQ291bnQiLCJhcGlLZXkiLCJmZXRjaERhdGEiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwib3JnYW5pY1Jlc3VsdHMiLCJvcmdhbmljX3Jlc3VsdHMiLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwiZGlzcGxheWVkX2xpbmsiLCJzbmlwcGV0IiwiaW5saW5lX2ltYWdlcyIsImltYWdlIiwidGh1bWJuYWlsIiwibmV3c1Jlc3VsdHMiLCJmaWx0ZXIiLCJuZXdzX2FydGljbGUiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImluZGV4Iiwic2VhcmNoUmVzdWx0IiwicCIsImltZyIsInNyYyIsImFsdCIsImFkZGl0aW9uYWxJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});