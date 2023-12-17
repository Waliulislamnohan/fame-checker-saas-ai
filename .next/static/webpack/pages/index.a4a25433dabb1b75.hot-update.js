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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry, birthDate, socialInput, webInput } = param;\n    _s();\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiKey = \"a611087fac693d272ede013cf76812a3a904f2ad0d8ec465d4dc552846712439\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"+\").concat(socialInput, \"&api_key=\").concat(apiKey, \"&tbm=isch\");\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (organicResults.length > 0) {\n                    const firstResult = organicResults[0]; // Extracting the first result\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                }\n                if (data.inline_images && data.inline_images.length > 0) {\n                    const firstThumbnail = data.inline_images[0].thumbnail;\n                    setThumbnail(firstThumbnail);\n                }\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        fullName,\n        selectedCountry,\n        socialInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnailContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: thumbnail,\n                            alt: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResult),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().follower),\n                                children: [\n                                    \"Follower \",\n                                    firstDisplayedLink\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 66,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    firstSnippet\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"6A0Bb+sKEvzBxckO1rINib7p8Dw=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRWU7QUFFM0QsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFDM0RDLFdBQVcsRUFBRUMsUUFBUSxFQUFDOztJQUVwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxDQUFDVyxvQkFBb0JDLHNCQUFzQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqREMsZ0RBQVNBLENBQUM7UUFHUixNQUFNYyxTQUFTLG9FQUFvRSx3Q0FBd0M7UUFDM0gsTUFBTUMsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLGtCQUFrQjtnQkFDeEIsTUFBTUMsU0FBUyxnQ0FBNENiLE9BQVpELFVBQVMsS0FBc0JHLE9BQW5CRixpQkFBZ0IsS0FBMEJVLE9BQXZCUixhQUFZLGFBQWtCLE9BQVBRLFFBQU87Z0JBQzVHLE1BQU1JLFdBQVcsTUFBTUMsTUFBTUgsa0JBQWtCQztnQkFFL0MsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUVoQyxNQUFNQyxpQkFBaUJGLEtBQUtHLGVBQWU7Z0JBRTNDLElBQUlELGVBQWVFLE1BQU0sR0FBRyxHQUFHO29CQUM3QixNQUFNQyxjQUFjSCxjQUFjLENBQUMsRUFBRSxFQUFFLDhCQUE4QjtvQkFDckViLHNCQUFzQmdCLFlBQVlDLGNBQWM7b0JBQ2hEZixnQkFBZ0JjLFlBQVlFLE9BQU87Z0JBQ3JDO2dCQUVBLElBQUlQLEtBQUtRLGFBQWEsSUFBSVIsS0FBS1EsYUFBYSxDQUFDSixNQUFNLEdBQUcsR0FBRztvQkFDdkQsTUFBTUssaUJBQWlCVCxLQUFLUSxhQUFhLENBQUMsRUFBRSxDQUFDdEIsU0FBUztvQkFDdERDLGFBQWFzQjtnQkFDZjtnQkFHQSxNQUFNQyxjQUFjUixlQUFlUyxNQUFNLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsWUFBWTtnQkFDekVDLGFBQWFKLFlBQVlOLE1BQU07WUFDakMsRUFBRSxPQUFPVyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtZQUNsRDtRQUNGO1FBRUF0QjtJQUNGLEdBQUc7UUFBQ1o7UUFBVUM7UUFBZ0JFO0tBQVk7SUFHMUMscUJBQ0UsOERBQUNpQztrQkFDRCw0RUFBQ0E7WUFBSUMsV0FBV3ZDLGtGQUFlO3NCQUUzQiw0RUFBQ3NDO2dCQUFJQyxXQUFXdkMsdUZBQW9COztrQ0FHbEMsOERBQUNzQzt3QkFBSUMsV0FBV3ZDLDRGQUF5QjtrQ0FFekMsNEVBQUMyQzs0QkFBSUMsS0FBS3JDOzRCQUFXc0MsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDUDt3QkFBSUMsV0FBV3ZDLHNGQUFtQjs7MENBRXhDLDhEQUFDc0M7Z0NBQUlDLFdBQVd2QyxrRkFBZTs7b0NBQUU7b0NBQVVTOzs7Ozs7OzBDQUUxQyw4REFBQ3VDOztvQ0FBRTtvQ0FBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCYjtHQS9FTVY7S0FBQUE7QUFpRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzP2Y5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2VhcmNoUmVzdWx0cy5tb2R1bGUuY3NzJztcblxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IGZ1bGxOYW1lLCBzZWxlY3RlZENvdW50cnksIGJpcnRoRGF0ZSxcbiAgc29jaWFsSW5wdXQsIHdlYklucHV0fSkgPT4ge1xuXG4gICAgY29uc3QgW3RodW1ibmFpbCwgc2V0VGh1bWJuYWlsXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbZmlyc3REaXNwbGF5ZWRMaW5rLCBzZXRGaXJzdERpc3BsYXllZExpbmtdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlyc3RTbmlwcGV0LCBzZXRGaXJzdFNuaXBwZXRdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gIFxuICAgIGNvbnN0IGFwaUtleSA9ICdhNjExMDg3ZmFjNjkzZDI3MmVkZTAxM2NmNzY4MTJhM2E5MDRmMmFkMGQ4ZWM0NjVkNGRjNTUyODQ2NzEyNDM5JzsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIFNFUlAgQVBJIGtleVxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvcnNBbnl3aGVyZVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9zZXJwYXBpLmNvbS9zZWFyY2g/cT0ke2Z1bGxOYW1lfSske3NlbGVjdGVkQ291bnRyeX0rJHtzb2NpYWxJbnB1dH0mYXBpX2tleT0ke2FwaUtleX0mdGJtPWlzY2hgO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvcnNBbnl3aGVyZVVybCArIGFwaVVybCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pY1Jlc3VsdHMgPSBkYXRhLm9yZ2FuaWNfcmVzdWx0cztcbiAgICBcbiAgICAgICAgaWYgKG9yZ2FuaWNSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFJlc3VsdCA9IG9yZ2FuaWNSZXN1bHRzWzBdOyAvLyBFeHRyYWN0aW5nIHRoZSBmaXJzdCByZXN1bHRcbiAgICAgICAgICBzZXRGaXJzdERpc3BsYXllZExpbmsoZmlyc3RSZXN1bHQuZGlzcGxheWVkX2xpbmspO1xuICAgICAgICAgIHNldEZpcnN0U25pcHBldChmaXJzdFJlc3VsdC5zbmlwcGV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmlubGluZV9pbWFnZXMgJiYgZGF0YS5pbmxpbmVfaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFRodW1ibmFpbCA9IGRhdGEuaW5saW5lX2ltYWdlc1swXS50aHVtYm5haWw7XG4gICAgICAgICAgc2V0VGh1bWJuYWlsKGZpcnN0VGh1bWJuYWlsKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgbmV3c1Jlc3VsdHMgPSBvcmdhbmljUmVzdWx0cy5maWx0ZXIoKHJlc3VsdCkgPT4gcmVzdWx0Lm5ld3NfYXJ0aWNsZSk7XG4gICAgICAgIHNldE5ld3NDb3VudChuZXdzUmVzdWx0cy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VhcmNoIHJlc3VsdHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2Z1bGxOYW1lLCBzZWxlY3RlZENvdW50cnksc29jaWFsSW5wdXRdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Qm94fT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdHN9PlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbENvbnRhaW5lcn0+XG5cbiAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBhbHQ9XCJUaHVtYm5haWxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoUmVzdWx0fT5cblxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93ZXJ9PkZvbGxvd2VyIHtmaXJzdERpc3BsYXllZExpbmt9PC9kaXY+IFxuXG4gICAgICAgIDxwPiB7Zmlyc3RTbmlwcGV0fTwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlNlYXJjaFJlc3VsdHMiLCJmdWxsTmFtZSIsInNlbGVjdGVkQ291bnRyeSIsImJpcnRoRGF0ZSIsInNvY2lhbElucHV0Iiwid2ViSW5wdXQiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJmaXJzdERpc3BsYXllZExpbmsiLCJzZXRGaXJzdERpc3BsYXllZExpbmsiLCJmaXJzdFNuaXBwZXQiLCJzZXRGaXJzdFNuaXBwZXQiLCJhcGlLZXkiLCJmZXRjaERhdGEiLCJjb3JzQW55d2hlcmVVcmwiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwib3JnYW5pY1Jlc3VsdHMiLCJvcmdhbmljX3Jlc3VsdHMiLCJsZW5ndGgiLCJmaXJzdFJlc3VsdCIsImRpc3BsYXllZF9saW5rIiwic25pcHBldCIsImlubGluZV9pbWFnZXMiLCJmaXJzdFRodW1ibmFpbCIsIm5ld3NSZXN1bHRzIiwiZmlsdGVyIiwicmVzdWx0IiwibmV3c19hcnRpY2xlIiwic2V0TmV3c0NvdW50IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXRCb3giLCJzZWFyY2hSZXN1bHRzIiwidGh1bWJuYWlsQ29udGFpbmVyIiwiaW1nIiwic3JjIiwiYWx0Iiwic2VhcmNoUmVzdWx0IiwiZm9sbG93ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});