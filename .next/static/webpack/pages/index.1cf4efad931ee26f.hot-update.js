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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/searchResults.module.css */ \"./styles/searchResults.module.css\");\n/* harmony import */ var _styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchResults = (param)=>{\n    let { fullName, selectedCountry, birthDate, socialInput, webInput } = param;\n    _s();\n    const [thumbnails, setThumbnails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newsCount, setNewsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [firstDisplayedLink, setFirstDisplayedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstSnippet, setFirstSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiKey = \"bd5ff3f938e1f1581f1379fc2b6181dd601278663263bba997b6f73e711d9ef0\"; // Replace with your actual SERP API key\n        const fetchData = async ()=>{\n            try {\n                const corsAnywhereUrl = \"https://cors-anywhere.herokuapp.com/\";\n                const apiUrl = \"https://serpapi.com/search?q=\".concat(fullName, \"+\").concat(selectedCountry, \"+\").concat(socialInput, \"&api_key=\").concat(apiKey);\n                const response = await fetch(corsAnywhereUrl + apiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                const organicResults = data.organic_results;\n                if (organicResults.length > 0) {\n                    const firstResult = organicResults[0]; // Extracting the first result\n                    setFirstDisplayedLink(firstResult.displayed_link);\n                    setFirstSnippet(firstResult.snippet);\n                }\n                if (data.inline_images && data.inline_images.length > 0) {\n                    const firstThumbnail = data.inline_images[0].thumbnail;\n                    setThumbnails(firstThumbnail);\n                    console.log(firstThumbnail);\n                }\n                const thumbnails = data.inline_images.map((image)=>image.thumbnail);\n                setThumbnails(thumbnails);\n                const newsResults = organicResults.filter((result)=>result.news_article);\n                setNewsCount(newsResults.length);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        fullName,\n        selectedCountry,\n        socialInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputBox),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResults),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Search Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchResult),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Follower \",\n                                                firstDisplayedLink\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \" \",\n                                                firstSnippet\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_searchResults_module_css__WEBPACK_IMPORTED_MODULE_2___default().thumbnailContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: thumbnails,\n                            alt: \"Thumbnail\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mdwaliulislamnohan/Documents/Fame-checker/pages/components/SearchResults.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResults, \"TWjIQT7iR4/NcIMr0dqvGrwCKYU=\");\n_c = SearchResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);\nvar _c;\n$RefreshReg$(_c, \"SearchResults\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1NlYXJjaFJlc3VsdHMuanM/ZjkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zZWFyY2hSZXN1bHRzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBTZWFyY2hSZXN1bHRzID0gKHsgZnVsbE5hbWUsIHNlbGVjdGVkQ291bnRyeSwgYmlydGhEYXRlLFxuICBzb2NpYWxJbnB1dCwgd2ViSW5wdXR9KSA9PiB7XG5cbiAgY29uc3QgW3RodW1ibmFpbHMsIHNldFRodW1ibmFpbHNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbmV3c0NvdW50LCBzZXROZXdzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmaXJzdERpc3BsYXllZExpbmssIHNldEZpcnN0RGlzcGxheWVkTGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaXJzdFNuaXBwZXQsIHNldEZpcnN0U25pcHBldF0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgXG4gICAgY29uc3QgYXBpS2V5ID0gJ2JkNWZmM2Y5MzhlMWYxNTgxZjEzNzlmYzJiNjE4MWRkNjAxMjc4NjYzMjYzYmJhOTk3YjZmNzNlNzExZDllZjAnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgU0VSUCBBUEkga2V5XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29yc0FueXdoZXJlVXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3NlcnBhcGkuY29tL3NlYXJjaD9xPSR7ZnVsbE5hbWV9KyR7c2VsZWN0ZWRDb3VudHJ5fSske3NvY2lhbElucHV0fSZhcGlfa2V5PSR7YXBpS2V5fWA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29yc0FueXdoZXJlVXJsICsgYXBpVXJsKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zdCBvcmdhbmljUmVzdWx0cyA9IGRhdGEub3JnYW5pY19yZXN1bHRzO1xuICAgIFxuICAgICAgICBpZiAob3JnYW5pY1Jlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0UmVzdWx0ID0gb3JnYW5pY1Jlc3VsdHNbMF07IC8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IHJlc3VsdFxuICAgICAgICAgIHNldEZpcnN0RGlzcGxheWVkTGluayhmaXJzdFJlc3VsdC5kaXNwbGF5ZWRfbGluayk7XG4gICAgICAgICAgc2V0Rmlyc3RTbmlwcGV0KGZpcnN0UmVzdWx0LnNuaXBwZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuaW5saW5lX2ltYWdlcyAmJiBkYXRhLmlubGluZV9pbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0VGh1bWJuYWlsID0gZGF0YS5pbmxpbmVfaW1hZ2VzWzBdLnRodW1ibmFpbDtcbiAgICAgICAgICBzZXRUaHVtYm5haWxzKGZpcnN0VGh1bWJuYWlsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaXJzdFRodW1ibmFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGh1bWJuYWlscyA9IGRhdGEuaW5saW5lX2ltYWdlcy5tYXAoKGltYWdlKSA9PiBpbWFnZS50aHVtYm5haWwpO1xuICAgICAgICBzZXRUaHVtYm5haWxzKHRodW1ibmFpbHMpO1xuXG4gICAgICAgIGNvbnN0IG5ld3NSZXN1bHRzID0gb3JnYW5pY1Jlc3VsdHMuZmlsdGVyKChyZXN1bHQpID0+IHJlc3VsdC5uZXdzX2FydGljbGUpO1xuICAgICAgICBzZXROZXdzQ291bnQobmV3c1Jlc3VsdHMubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlYXJjaCByZXN1bHRzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtmdWxsTmFtZSwgc2VsZWN0ZWRDb3VudHJ5LHNvY2lhbElucHV0XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJveH0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdH0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG48cD5Gb2xsb3dlciB7Zmlyc3REaXNwbGF5ZWRMaW5rfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PHA+IHtmaXJzdFNuaXBwZXR9PC9wPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cbiAgICAgICAgICA8aDI+VGh1bWJuYWlsPC9oMj5cbiAgICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsc30gYWx0PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlNlYXJjaFJlc3VsdHMiLCJmdWxsTmFtZSIsInNlbGVjdGVkQ291bnRyeSIsImJpcnRoRGF0ZSIsInNvY2lhbElucHV0Iiwid2ViSW5wdXQiLCJ0aHVtYm5haWxzIiwic2V0VGh1bWJuYWlscyIsIm5ld3NDb3VudCIsInNldE5ld3NDb3VudCIsImZpcnN0RGlzcGxheWVkTGluayIsInNldEZpcnN0RGlzcGxheWVkTGluayIsImZpcnN0U25pcHBldCIsInNldEZpcnN0U25pcHBldCIsImFwaUtleSIsImZldGNoRGF0YSIsImNvcnNBbnl3aGVyZVVybCIsImFwaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJvcmdhbmljUmVzdWx0cyIsIm9yZ2FuaWNfcmVzdWx0cyIsImxlbmd0aCIsImZpcnN0UmVzdWx0IiwiZGlzcGxheWVkX2xpbmsiLCJzbmlwcGV0IiwiaW5saW5lX2ltYWdlcyIsImZpcnN0VGh1bWJuYWlsIiwidGh1bWJuYWlsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImltYWdlIiwibmV3c1Jlc3VsdHMiLCJmaWx0ZXIiLCJyZXN1bHQiLCJuZXdzX2FydGljbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Qm94Iiwic2VhcmNoUmVzdWx0cyIsImgyIiwic2VhcmNoUmVzdWx0IiwidWwiLCJsaSIsInAiLCJ0aHVtYm5haWxDb250YWluZXIiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SearchResults.js\n"));

/***/ })

});