/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//works\r\nfetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=olX4mfNrZLcj25iUhR6MLzbXLVgWb3pmclsLzmnR`)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log(\"American government\");\r\n        console.log(data);\r\n    })\r\n\r\n//works\r\nfetch(`https://api.edamam.com/api/nutrition-data?app_id=051cc148&app_key=defd1ae7cc31d2fb6c0b27cd1049f071&nutrition-type=logging&ingr=apple`)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log(\"Edamam\");\r\n        console.log(data);\r\n    })\r\n\r\n//works\r\nfetch(`https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=c7c3a49a&appKey=332d453b5215349d758b52b534489921`)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log(\"Nutritionix\");\r\n        console.log(data);\r\n    })\r\n\r\n    function component() {\r\n        const element = document.createElement('div');\r\n      \r\n        // Lodash, now imported by this script\r\n        element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n      \r\n        return element;\r\n      }\r\n      \r\n      document.body.appendChild(component());\n\n//# sourceURL=webpack://web2-frontend-sabrilassouli/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;