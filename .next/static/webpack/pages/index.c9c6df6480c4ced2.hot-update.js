/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/speedmeterStyle.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/speedmeterStyle.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".speedmeterStyle_container__64PzL {\\n    text-align: center;\\n    margin-top: 50px;\\n\\n  }\\n\\n  .speedmeterStyle_speedometer__2VAD1 {\\n    \\n    width: 150px;\\n    height: 150px;\\n    border-radius: 50%;\\n    background: conic-gradient(\\n      from 0deg,\\n      #FFFFFF 0%,\\n      #FFFFFf  5%,\\n      #FC7336 50%,\\n      #FC601E  75%,\\n      #FC5006 100%\\n    );\\n    position: relative;\\n    margin: 20px auto;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    font-size: 24px;\\n    color: black;\\n    font-weight: bold;\\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\\n  }\\n  .speedmeterStyle_speedometer1__phPmr{\\n     width: 120px;\\n    height: 120px;\\n    border-radius: 50%;\\n    background: white;\\n  }\\n  .speedmeterStyle_needle__NPXdt {\\n    width: 2px;\\n    height: 80px;\\n    background-color: black;\\n    position: absolute;\\n    top: calc(50% - 80px);\\n    left: calc(50% - 1px);\\n    transform-origin: bottom center;\\n    transform: translateX(-50%) rotate(0deg);\\n    transition: transform 1s ease-in-out;\\n    z-index: 1;\\n  }\\n\\n  .speedmeterStyle_score__yAH2s {\\n    z-index: 2;\\n    font-size: 30px;\\n  }\\n\\n  /* Loading animation */\\n  @keyframes speedmeterStyle_rotate__OEquS {\\n    0% {\\n      transform: translateX(-50%) rotate(0deg);\\n    }\\n    100% {\\n      transform: translateX(-50%) rotate(360deg);\\n    }\\n  }\\n\\n  .speedmeterStyle_loading__WoWX1 .speedmeterStyle_needle__NPXdt {\\n    animation: speedmeterStyle_rotate__OEquS 2s infinite linear;\\n  }\\n  \\n  .speedmeterStyle_button__4PZkX {\\n        width: 100px;\\n  padding: 8px;\\n  padding-bottom: 8px;\\n  padding-top: 8px;\\n  font-size: medium;\\n  font-weight: bold;\\n  color: white;\\n  border-radius: 2rem;\\n  background: #FC5006;\\n  border: none;\\n  margin-top: 15px;\\n  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n  transition: background 0.3s, color 0.3s, box-shadow 0.3s;\\n     margin-bottom: 30px;\\n  }\\n  .speedmeterStyle_button__4PZkX:hover{\\n  background: #EFF6FF;\\n  color: #FC5006;\\n  box-shadow: inset 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n   \\n}\\n  .speedmeterStyle_searchInput__Tb_ub{\\n  background: #EFF6FF;\\n  width: 250px;\\n    padding: 10px;\\n  border: 1px solid #EFF6FF;\\n  border-radius: 2rem;\\n  border: 1px solid #dadada;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n\\n  gap: 5px;\\n  font-weight: bold;\\n  color: #adadad;\\n  box-shadow: inset 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n  }    \\n  .speedmeterStyle_header__Fo57W{\\n    color: #FC5006;\\n  }\\n\\n  /* Media Queries */\\n  @media (max-width: 768px) {\\n    .speedmeterStyle_speedometer__2VAD1 {\\n      width: 120px;\\n      height: 120px;\\n      font-size: 20px;\\n    }\\n\\n    .speedmeterStyle_speedometer1__phPmr {\\n      width: 90px;\\n      height: 90px;\\n    }\\n\\n    .speedmeterStyle_score__yAH2s {\\n      font-size: 20px;\\n    }\\n\\n    .speedmeterStyle_button__4PZkX {\\n      width: 80px;\\n      font-size: small;\\n      padding: 6px;\\n    }\\n\\n    #speedmeterStyle_searchInput__Tb_ub {\\n      width: 200px;\\n      font-size: 14px;\\n    }\\n  }\\n\\n  @media (max-width: 480px) {\\n    .speedmeterStyle_speedometer__2VAD1 {\\n      width: 100px;\\n      height: 100px;\\n      font-size: 16px;\\n    }\\n\\n    .speedmeterStyle_speedometer1__phPmr {\\n      width: 70px;\\n      height: 70px;\\n    }\\n\\n    .speedmeterStyle_score__yAH2s {\\n      font-size: 18px;\\n    }\\n\\n    .speedmeterStyle_button__4PZkX {\\n      width: 70px;\\n      font-size: x-small;\\n      padding: 5px;\\n    }\\n\\n    #speedmeterStyle_searchInput__Tb_ub {\\n      width: 180px;\\n      font-size: 12px;\\n    }\\n  }\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/speedmeterStyle.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,gBAAgB;;EAElB;;EAEA;;IAEE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB;;;;;;;KAOC;IACD,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,2CAA2C;EAC7C;EACA;KACG,YAAY;IACb,aAAa;IACb,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,+BAA+B;IAC/B,wCAAwC;IACxC,oCAAoC;IACpC,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,eAAe;EACjB;;EAEA,sBAAsB;EACtB;IACE;MACE,wCAAwC;IAC1C;IACA;MACE,0CAA0C;IAC5C;EACF;;EAEA;IACE,2DAAoC;EACtC;;EAEA;QACM,YAAY;EAClB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,8CAA8C;EAC9C,wDAAwD;KACrD,mBAAmB;EACtB;EACA;EACA,mBAAmB;EACnB,cAAc;EACd,oDAAoD;;AAEtD;EACE;EACA,mBAAmB;EACnB,YAAY;IACV,aAAa;EACf,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;;EAErB,QAAQ;EACR,iBAAiB;EACjB,cAAc;EACd,oDAAoD;EACpD;EACA;IACE,cAAc;EAChB;;EAEA,kBAAkB;EAClB;IACE;MACE,YAAY;MACZ,aAAa;MACb,eAAe;IACjB;;IAEA;MACE,WAAW;MACX,YAAY;IACd;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,WAAW;MACX,gBAAgB;MAChB,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,eAAe;IACjB;EACF;;EAEA;IACE;MACE,YAAY;MACZ,aAAa;MACb,eAAe;IACjB;;IAEA;MACE,WAAW;MACX,YAAY;IACd;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,WAAW;MACX,kBAAkB;MAClB,YAAY;IACd;;IAEA;MACE,YAAY;MACZ,eAAe;IACjB;EACF\",\"sourcesContent\":[\".container {\\n    text-align: center;\\n    margin-top: 50px;\\n\\n  }\\n\\n  .speedometer {\\n    \\n    width: 150px;\\n    height: 150px;\\n    border-radius: 50%;\\n    background: conic-gradient(\\n      from 0deg,\\n      #FFFFFF 0%,\\n      #FFFFFf  5%,\\n      #FC7336 50%,\\n      #FC601E  75%,\\n      #FC5006 100%\\n    );\\n    position: relative;\\n    margin: 20px auto;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    font-size: 24px;\\n    color: black;\\n    font-weight: bold;\\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\\n  }\\n  .speedometer1{\\n     width: 120px;\\n    height: 120px;\\n    border-radius: 50%;\\n    background: white;\\n  }\\n  .needle {\\n    width: 2px;\\n    height: 80px;\\n    background-color: black;\\n    position: absolute;\\n    top: calc(50% - 80px);\\n    left: calc(50% - 1px);\\n    transform-origin: bottom center;\\n    transform: translateX(-50%) rotate(0deg);\\n    transition: transform 1s ease-in-out;\\n    z-index: 1;\\n  }\\n\\n  .score {\\n    z-index: 2;\\n    font-size: 30px;\\n  }\\n\\n  /* Loading animation */\\n  @keyframes rotate {\\n    0% {\\n      transform: translateX(-50%) rotate(0deg);\\n    }\\n    100% {\\n      transform: translateX(-50%) rotate(360deg);\\n    }\\n  }\\n\\n  .loading .needle {\\n    animation: rotate 2s infinite linear;\\n  }\\n  \\n  .button {\\n        width: 100px;\\n  padding: 8px;\\n  padding-bottom: 8px;\\n  padding-top: 8px;\\n  font-size: medium;\\n  font-weight: bold;\\n  color: white;\\n  border-radius: 2rem;\\n  background: #FC5006;\\n  border: none;\\n  margin-top: 15px;\\n  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n  transition: background 0.3s, color 0.3s, box-shadow 0.3s;\\n     margin-bottom: 30px;\\n  }\\n  .button:hover{\\n  background: #EFF6FF;\\n  color: #FC5006;\\n  box-shadow: inset 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n   \\n}\\n  .searchInput{\\n  background: #EFF6FF;\\n  width: 250px;\\n    padding: 10px;\\n  border: 1px solid #EFF6FF;\\n  border-radius: 2rem;\\n  border: 1px solid #dadada;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n\\n  gap: 5px;\\n  font-weight: bold;\\n  color: #adadad;\\n  box-shadow: inset 1px 4px 6px 0px rgba(0, 0, 0, 0.3);\\n  }    \\n  .header{\\n    color: #FC5006;\\n  }\\n\\n  /* Media Queries */\\n  @media (max-width: 768px) {\\n    .speedometer {\\n      width: 120px;\\n      height: 120px;\\n      font-size: 20px;\\n    }\\n\\n    .speedometer1 {\\n      width: 90px;\\n      height: 90px;\\n    }\\n\\n    .score {\\n      font-size: 20px;\\n    }\\n\\n    .button {\\n      width: 80px;\\n      font-size: small;\\n      padding: 6px;\\n    }\\n\\n    #searchInput {\\n      width: 200px;\\n      font-size: 14px;\\n    }\\n  }\\n\\n  @media (max-width: 480px) {\\n    .speedometer {\\n      width: 100px;\\n      height: 100px;\\n      font-size: 16px;\\n    }\\n\\n    .speedometer1 {\\n      width: 70px;\\n      height: 70px;\\n    }\\n\\n    .score {\\n      font-size: 18px;\\n    }\\n\\n    .button {\\n      width: 70px;\\n      font-size: x-small;\\n      padding: 5px;\\n    }\\n\\n    #searchInput {\\n      width: 180px;\\n      font-size: 12px;\\n    }\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"speedmeterStyle_container__64PzL\",\n\t\"speedometer\": \"speedmeterStyle_speedometer__2VAD1\",\n\t\"speedometer1\": \"speedmeterStyle_speedometer1__phPmr\",\n\t\"needle\": \"speedmeterStyle_needle__NPXdt\",\n\t\"score\": \"speedmeterStyle_score__yAH2s\",\n\t\"loading\": \"speedmeterStyle_loading__WoWX1\",\n\t\"rotate\": \"speedmeterStyle_rotate__OEquS\",\n\t\"button\": \"speedmeterStyle_button__4PZkX\",\n\t\"searchInput\": \"speedmeterStyle_searchInput__Tb_ub\",\n\t\"header\": \"speedmeterStyle_header__Fo57W\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3NwZWVkbWV0ZXJTdHlsZS5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2RUFBNkUseUJBQXlCLHVCQUF1QixPQUFPLDJDQUEyQyx5QkFBeUIsb0JBQW9CLHlCQUF5QiwrSkFBK0oseUJBQXlCLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQiw2QkFBNkIsc0JBQXNCLG1CQUFtQix3QkFBd0Isa0RBQWtELEtBQUsseUNBQXlDLG9CQUFvQixvQkFBb0IseUJBQXlCLHdCQUF3QixLQUFLLG9DQUFvQyxpQkFBaUIsbUJBQW1CLDhCQUE4Qix5QkFBeUIsNEJBQTRCLDRCQUE0QixzQ0FBc0MsK0NBQStDLDJDQUEyQyxpQkFBaUIsS0FBSyxxQ0FBcUMsaUJBQWlCLHNCQUFzQixLQUFLLDJFQUEyRSxVQUFVLGlEQUFpRCxPQUFPLFlBQVksbURBQW1ELE9BQU8sS0FBSyxzRUFBc0Usa0VBQWtFLEtBQUssd0NBQXdDLHVCQUF1QixpQkFBaUIsd0JBQXdCLHFCQUFxQixzQkFBc0Isc0JBQXNCLGlCQUFpQix3QkFBd0Isd0JBQXdCLGlCQUFpQixxQkFBcUIsbURBQW1ELDZEQUE2RCwyQkFBMkIsS0FBSyx5Q0FBeUMsd0JBQXdCLG1CQUFtQix5REFBeUQsUUFBUSx3Q0FBd0Msd0JBQXdCLGlCQUFpQixvQkFBb0IsOEJBQThCLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLDRCQUE0Qix3QkFB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LHNCQUFzQixxQkFBcUIsd0JBQXdCLE9BQU8sS0FBSyxpQ0FBaUMsb0JBQW9CLHFCQUFxQixzQkFBc0Isd0JBQXdCLE9BQU8sdUJBQXVCLG9CQUFvQixxQkFBcUIsT0FBTyxnQkFBZ0Isd0JBQXdCLE9BQU8saUJBQWlCLG9CQUFvQiwyQkFBMkIscUJBQXFCLE9BQU8sc0JBQXNCLHFCQUFxQix3QkFBd0IsT0FBTyxLQUFLLG1CQUFtQjtBQUNwblE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3BlZWRtZXRlclN0eWxlLm1vZHVsZS5jc3M/NmEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwZWVkbWV0ZXJTdHlsZV9jb250YWluZXJfXzY0UHpMIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcblxcbiAgfVxcblxcbiAgLnNwZWVkbWV0ZXJTdHlsZV9zcGVlZG9tZXRlcl9fMlZBRDEge1xcbiAgICBcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgIGZyb20gMGRlZyxcXG4gICAgICAjRkZGRkZGIDAlLFxcbiAgICAgICNGRkZGRmYgIDUlLFxcbiAgICAgICNGQzczMzYgNTAlLFxcbiAgICAgICNGQzYwMUUgIDc1JSxcXG4gICAgICAjRkM1MDA2IDEwMCVcXG4gICAgKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIC5zcGVlZG1ldGVyU3R5bGVfc3BlZWRvbWV0ZXIxX19waFBtcntcXG4gICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG4gIC5zcGVlZG1ldGVyU3R5bGVfbmVlZGxlX19OUFhkdCB7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDgwcHgpO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5zcGVlZG1ldGVyU3R5bGVfc2NvcmVfX3lBSDJzIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcbiAgLyogTG9hZGluZyBhbmltYXRpb24gKi9cXG4gIEBrZXlmcmFtZXMgc3BlZWRtZXRlclN0eWxlX3JvdGF0ZV9fT0VxdVMge1xcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zcGVlZG1ldGVyU3R5bGVfbG9hZGluZ19fV29XWDEgLnNwZWVkbWV0ZXJTdHlsZV9uZWVkbGVfX05QWGR0IHtcXG4gICAgYW5pbWF0aW9uOiBzcGVlZG1ldGVyU3R5bGVfcm90YXRlX19PRXF1UyAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICB9XFxuICBcXG4gIC5zcGVlZG1ldGVyU3R5bGVfYnV0dG9uX180UFprWCB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZDogI0ZDNTAwNjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCBjb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XFxuICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcbiAgLnNwZWVkbWV0ZXJTdHlsZV9idXR0b25fXzRQWmtYOmhvdmVye1xcbiAgYmFja2dyb3VuZDogI0VGRjZGRjtcXG4gIGNvbG9yOiAjRkM1MDA2O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDRweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICBcXG59XFxuICAuc3BlZWRtZXRlclN0eWxlX3NlYXJjaElucHV0X19UYl91YntcXG4gIGJhY2tncm91bmQ6ICNFRkY2RkY7XFxuICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRUZGNkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBnYXA6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNhZGFkYWQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggNHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfSAgICBcXG4gIC5zcGVlZG1ldGVyU3R5bGVfaGVhZGVyX19GbzU3V3tcXG4gICAgY29sb3I6ICNGQzUwMDY7XFxuICB9XFxuXFxuICAvKiBNZWRpYSBRdWVyaWVzICovXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNwZWVkbWV0ZXJTdHlsZV9zcGVlZG9tZXRlcl9fMlZBRDEge1xcbiAgICAgIHdpZHRoOiAxMjBweDtcXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3BlZWRtZXRlclN0eWxlX3NwZWVkb21ldGVyMV9fcGhQbXIge1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDtcXG4gICAgfVxcblxcbiAgICAuc3BlZWRtZXRlclN0eWxlX3Njb3JlX195QUgycyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVlZG1ldGVyU3R5bGVfYnV0dG9uX180UFprWCB7XFxuICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgICBwYWRkaW5nOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgI3NwZWVkbWV0ZXJTdHlsZV9zZWFyY2hJbnB1dF9fVGJfdWIge1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAuc3BlZWRtZXRlclN0eWxlX3NwZWVkb21ldGVyX18yVkFEMSB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVlZG1ldGVyU3R5bGVfc3BlZWRvbWV0ZXIxX19waFBtciB7XFxuICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVlZG1ldGVyU3R5bGVfc2NvcmVfX3lBSDJzIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWVkbWV0ZXJTdHlsZV9idXR0b25fXzRQWmtYIHtcXG4gICAgICB3aWR0aDogNzBweDtcXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgICNzcGVlZG1ldGVyU3R5bGVfc2VhcmNoSW5wdXRfX1RiX3ViIHtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zcGVlZG1ldGVyU3R5bGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCOztFQUVBOztJQUVFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCOzs7Ozs7O0tBT0M7SUFDRCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwyQ0FBMkM7RUFDN0M7RUFDQTtLQUNHLFlBQVk7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0U7TUFDRSx3Q0FBd0M7SUFDMUM7SUFDQTtNQUNFLDBDQUEwQztJQUM1QztFQUNGOztFQUVBO0lBQ0UsMkRBQW9DO0VBQ3RDOztFQUVBO1FBQ00sWUFBWTtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLHdEQUF3RDtLQUNyRCxtQkFBbUI7RUFDdEI7RUFDQTtFQUNBLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0RBQW9EOztBQUV0RDtFQUNFO0VBQ0EsbUJBQW1CO0VBQ25CLFlBQVk7SUFDVixhQUFhO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCOztFQUVyQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvREFBb0Q7RUFDcEQ7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUEsa0JBQWtCO0VBQ2xCO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtNQUNaLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO0lBQ2pCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG5cXG4gIH1cXG5cXG4gIC5zcGVlZG9tZXRlciB7XFxuICAgIFxcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgICAgZnJvbSAwZGVnLFxcbiAgICAgICNGRkZGRkYgMCUsXFxuICAgICAgI0ZGRkZGZiAgNSUsXFxuICAgICAgI0ZDNzMzNiA1MCUsXFxuICAgICAgI0ZDNjAxRSAgNzUlLFxcbiAgICAgICNGQzUwMDYgMTAwJVxcbiAgICApO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcbiAgLnNwZWVkb21ldGVyMXtcXG4gICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG4gIC5uZWVkbGUge1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyg1MCUgLSA4MHB4KTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAuc2NvcmUge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuXFxuICAvKiBMb2FkaW5nIGFuaW1hdGlvbiAqL1xcbiAgQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb2FkaW5nIC5uZWVkbGUge1xcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICB9XFxuICBcXG4gIC5idXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQ6ICNGQzUwMDY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDRweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgY29sb3IgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xcbiAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIH1cXG4gIC5idXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kOiAjRUZGNkZGO1xcbiAgY29sb3I6ICNGQzUwMDY7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggNHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgIFxcbn1cXG4gIC5zZWFyY2hJbnB1dHtcXG4gIGJhY2tncm91bmQ6ICNFRkY2RkY7XFxuICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRUZGNkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBnYXA6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNhZGFkYWQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggNHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfSAgICBcXG4gIC5oZWFkZXJ7XFxuICAgIGNvbG9yOiAjRkM1MDA2O1xcbiAgfVxcblxcbiAgLyogTWVkaWEgUXVlcmllcyAqL1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5zcGVlZG9tZXRlciB7XFxuICAgICAgd2lkdGg6IDEyMHB4O1xcbiAgICAgIGhlaWdodDogMTIwcHg7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVlZG9tZXRlcjEge1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDtcXG4gICAgfVxcblxcbiAgICAuc2NvcmUge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uIHtcXG4gICAgICB3aWR0aDogODBweDtcXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgfVxcblxcbiAgICAjc2VhcmNoSW5wdXQge1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAuc3BlZWRvbWV0ZXIge1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAuc3BlZWRvbWV0ZXIxIHtcXG4gICAgICB3aWR0aDogNzBweDtcXG4gICAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNjb3JlIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAjc2VhcmNoSW5wdXQge1xcbiAgICAgIHdpZHRoOiAxODBweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzcGVlZG1ldGVyU3R5bGVfY29udGFpbmVyX182NFB6TFwiLFxuXHRcInNwZWVkb21ldGVyXCI6IFwic3BlZWRtZXRlclN0eWxlX3NwZWVkb21ldGVyX18yVkFEMVwiLFxuXHRcInNwZWVkb21ldGVyMVwiOiBcInNwZWVkbWV0ZXJTdHlsZV9zcGVlZG9tZXRlcjFfX3BoUG1yXCIsXG5cdFwibmVlZGxlXCI6IFwic3BlZWRtZXRlclN0eWxlX25lZWRsZV9fTlBYZHRcIixcblx0XCJzY29yZVwiOiBcInNwZWVkbWV0ZXJTdHlsZV9zY29yZV9feUFIMnNcIixcblx0XCJsb2FkaW5nXCI6IFwic3BlZWRtZXRlclN0eWxlX2xvYWRpbmdfX1dvV1gxXCIsXG5cdFwicm90YXRlXCI6IFwic3BlZWRtZXRlclN0eWxlX3JvdGF0ZV9fT0VxdVNcIixcblx0XCJidXR0b25cIjogXCJzcGVlZG1ldGVyU3R5bGVfYnV0dG9uX180UFprWFwiLFxuXHRcInNlYXJjaElucHV0XCI6IFwic3BlZWRtZXRlclN0eWxlX3NlYXJjaElucHV0X19UYl91YlwiLFxuXHRcImhlYWRlclwiOiBcInNwZWVkbWV0ZXJTdHlsZV9oZWFkZXJfX0ZvNTdXXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/speedmeterStyle.module.css\n"));

/***/ })

});