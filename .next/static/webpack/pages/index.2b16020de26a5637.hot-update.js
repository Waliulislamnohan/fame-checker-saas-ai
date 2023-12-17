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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry, birthDate, socialInput, webInput } = param;\n    _s();\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiKey = \"d25d81e75ba8e31ea867dffdadbcae549fb2a6dc2b94cd8aacd7ae3476a0f49f\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"+\").concat(socialInput, \"&api_key=\").concat(apiKey);\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (organicResults.length > 0) {\n                    const firstResult = organicResults[0]; // Extracting the first result\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                }\n                if (data.organic_results && data.organic_results.length > 0) {\n                    const firstThumbnail = data.organic_results[0].thumbnail;\n                    setThumbnail(firstThumbnail);\n                }\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        fullName,\n        selectedCountry,\n        socialInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnailContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: thumbnail,\n                                alt: \"Thumbnail\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().followerDiv),\n                                children: firstDisplayedLink\n                            }, void 0, false, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().snippetDiv),\n                        children: firstSnippet\n                    }, void 0, false, {\n                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                        lineNumber: 64,\n                        columnNumber: 12\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"6A0Bb+sKEvzBxckO1rINib7p8Dw=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRWU7QUFFM0QsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFDM0RDLFdBQVcsRUFBRUMsUUFBUSxFQUFDOztJQUVwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxDQUFDVyxvQkFBb0JDLHNCQUFzQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqREMsZ0RBQVNBLENBQUM7UUFHUixNQUFNYyxTQUFTLG9FQUFvRSx3Q0FBd0M7UUFDM0gsTUFBTUMsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLGtCQUFrQjtnQkFDeEIsTUFBTUMsU0FBUyxnQ0FBNENiLE9BQVpELFVBQVMsS0FBc0JHLE9BQW5CRixpQkFBZ0IsS0FBMEJVLE9BQXZCUixhQUFZLGFBQWtCLE9BQVBRO2dCQUNyRyxNQUFNSSxXQUFXLE1BQU1DLE1BQU1ILGtCQUFrQkM7Z0JBRS9DLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFFaEMsTUFBTUMsaUJBQWlCRixLQUFLRyxlQUFlO2dCQUUzQyxJQUFJRCxlQUFlRSxNQUFNLEdBQUcsR0FBRztvQkFDN0IsTUFBTUMsY0FBY0gsY0FBYyxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7b0JBQ3JFYixzQkFBc0JnQixZQUFZQyxjQUFjO29CQUNoRGYsZ0JBQWdCYyxZQUFZRSxPQUFPO2dCQUNyQztnQkFFQSxJQUFJUCxLQUFLRyxlQUFlLElBQUlILEtBQUtHLGVBQWUsQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7b0JBQzNELE1BQU1JLGlCQUFpQlIsS0FBS0csZUFBZSxDQUFDLEVBQUUsQ0FBQ2pCLFNBQVM7b0JBQ3hEQyxhQUFhcUI7Z0JBQ2Y7Z0JBR0EsTUFBTUMsY0FBY1AsZUFBZVEsTUFBTSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFlBQVk7Z0JBQ3pFQyxhQUFhSixZQUFZTCxNQUFNO1lBQ2pDLEVBQUUsT0FBT1UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7WUFDbEQ7UUFDRjtRQUVBckI7SUFDRixHQUFHO1FBQUNaO1FBQVVDO1FBQWdCRTtLQUFZO0lBRzFDLHFCQUNFLDhEQUFDZ0M7a0JBQ0QsNEVBQUNBO1lBQUlDLFdBQVd0QyxrRkFBZTtzQkFFM0IsNEVBQUNxQztnQkFBSUMsV0FBV3RDLHVGQUFvQjs7a0NBQ2xDLDhEQUFDcUM7d0JBQUlDLFdBQVd0Qyw0RkFBeUI7OzBDQUN6Qyw4REFBQzBDO2dDQUFJQyxLQUFLcEM7Z0NBQVdxQyxLQUFJOzs7Ozs7MENBQ3pCLDhEQUFDUDtnQ0FBSUMsV0FBV3RDLHFGQUFrQjswQ0FBR1M7Ozs7Ozs7Ozs7OztrQ0FJcEMsOERBQUM0Qjt3QkFBSUMsV0FBV3RDLG9GQUFpQjtrQ0FBR1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQi9DO0dBM0VNVjtLQUFBQTtBQTZFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanM/ZjkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zZWFyY2hSZXN1bHRzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgZnVsbE5hbWUsIHNlbGVjdGVkQ291bnRyeSwgYmlydGhEYXRlLFxuICBzb2NpYWxJbnB1dCwgd2ViSW5wdXR9KSA9PiB7XG5cbiAgICBjb25zdCBbdGh1bWJuYWlsLCBzZXRUaHVtYm5haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtmaXJzdERpc3BsYXllZExpbmssIHNldEZpcnN0RGlzcGxheWVkTGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaXJzdFNuaXBwZXQsIHNldEZpcnN0U25pcHBldF0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgXG4gICAgY29uc3QgYXBpS2V5ID0gJ2QyNWQ4MWU3NWJhOGUzMWVhODY3ZGZmZGFkYmNhZTU0OWZiMmE2ZGMyYjk0Y2Q4YWFjZDdhZTM0NzZhMGY0OWYnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgU0VSUCBBUEkga2V5XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29yc0FueXdoZXJlVXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3NlcnBhcGkuY29tL3NlYXJjaD9xPSR7ZnVsbE5hbWV9KyR7c2VsZWN0ZWRDb3VudHJ5fSske3NvY2lhbElucHV0fSZhcGlfa2V5PSR7YXBpS2V5fWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0FueXdoZXJlVXJsICsgYXBpVXJsKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zdCBvcmdhbmljUmVzdWx0cyA9IGRhdGEub3JnYW5pY19yZXN1bHRzO1xuICAgIFxuICAgICAgICBpZiAob3JnYW5pY1Jlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0UmVzdWx0ID0gb3JnYW5pY1Jlc3VsdHNbMF07IC8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IHJlc3VsdFxuICAgICAgICAgIHNldEZpcnN0RGlzcGxheWVkTGluayhmaXJzdFJlc3VsdC5kaXNwbGF5ZWRfbGluayk7XG4gICAgICAgICAgc2V0Rmlyc3RTbmlwcGV0KGZpcnN0UmVzdWx0LnNuaXBwZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEub3JnYW5pY19yZXN1bHRzICYmIGRhdGEub3JnYW5pY19yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFRodW1ibmFpbCA9IGRhdGEub3JnYW5pY19yZXN1bHRzWzBdLnRodW1ibmFpbDtcbiAgICAgICAgICBzZXRUaHVtYm5haWwoZmlyc3RUaHVtYm5haWwpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBuZXdzUmVzdWx0cyA9IG9yZ2FuaWNSZXN1bHRzLmZpbHRlcigocmVzdWx0KSA9PiByZXN1bHQubmV3c19hcnRpY2xlKTtcbiAgICAgICAgc2V0TmV3c0NvdW50KG5ld3NSZXN1bHRzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZWFyY2ggcmVzdWx0czonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbZnVsbE5hbWUsIHNlbGVjdGVkQ291bnRyeSxzb2NpYWxJbnB1dF0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCb3h9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoUmVzdWx0c30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aHVtYm5haWxDb250YWluZXJ9PlxuICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IGFsdD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dlckRpdn0+e2ZpcnN0RGlzcGxheWVkTGlua308L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbmlwcGV0RGl2fT57Zmlyc3RTbmlwcGV0fTwvZGl2PiBcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlNlYXJjaFJlc3VsdHMiLCJmdWxsTmFtZSIsInNlbGVjdGVkQ291bnRyeSIsImJpcnRoRGF0ZSIsInNvY2lhbElucHV0Iiwid2ViSW5wdXQiLCJ0aHVtYm5haWwiLCJzZXRUaHVtYm5haWwiLCJmaXJzdERpc3BsYXllZExpbmsiLCJzZXRGaXJzdERpc3BsYXllZExpbmsiLCJmaXJzdFNuaXBwZXQiLCJzZXRGaXJzdFNuaXBwZXQiLCJhcGlLZXkiLCJmZXRjaERhdGEiLCJjb3JzQW55d2hlcmVVcmwiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwib3JnYW5pY1Jlc3VsdHMiLCJvcmdhbmljX3Jlc3VsdHMiLCJsZW5ndGgiLCJmaXJzdFJlc3VsdCIsImRpc3BsYXllZF9saW5rIiwic25pcHBldCIsImZpcnN0VGh1bWJuYWlsIiwibmV3c1Jlc3VsdHMiLCJmaWx0ZXIiLCJyZXN1bHQiLCJuZXdzX2FydGljbGUiLCJzZXROZXdzQ291bnQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dEJveCIsInNlYXJjaFJlc3VsdHMiLCJ0aHVtYm5haWxDb250YWluZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJmb2xsb3dlckRpdiIsInNuaXBwZXREaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});