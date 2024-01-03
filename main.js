/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addContact)\n/* harmony export */ });\n\nfunction addContact () {\n\n\n    content.innerHTML = '';\n\n    const h1Content = document.createElement(\"h1\");\n    h1Content.textContent = \"Contact\"\n\n    content.appendChild(h1Content);\n\n\n    const h4Content = document.createElement(\"h4\")\nh4Content.textContent = \"Email: idontknow@gmail.com\";\n\ncontent.appendChild(h4Content);\n\n\nconst h4ContentN = document.createElement(\"h4\")\nh4ContentN.textContent = \"09554429391\";\n\ncontent.appendChild(h4ContentN);\n\nconst adressa = document.createElement(\"p\");\nadressa.textContent = \"Ulica Antuna Mihanovica 50b\";\ncontent.appendChild(adressa);\n\ncontainer.appendChild(content)\n\n} \n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addAll)\n/* harmony export */ });\n\nfunction addAll () {\n\n    content.innerHTML = '';\n  \n\n//content \n\nconst h1Content = document.createElement(\"h1\");\nh1Content.textContent = \"Come on down for some delicious cuisine!\"\n\ncontent.appendChild(h1Content);\n\nconst h4Content = document.createElement(\"h2\")\nh4Content.textContent = \"Tasty and affordable!\";\n\ncontent.appendChild(h4Content);\n\nconst homePgBtn = document.createElement(\"button\");\nhomePgBtn.classList.add('myButton')\nhomePgBtn.textContent = \"Order Now\";\n\ncontent.appendChild(homePgBtn);\n\n\nconst WorkTime = document.createElement(\"h4\");\nWorkTime.textContent = \"Mon-Sat: 8am-8pm\";\n\ncontent.appendChild(WorkTime);\n\ncontainer.appendChild(content)\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log('God Is Great, He Will Make 2024 The Greatest Year Of My Life');\n\n\n\n\n\n\nconst container = document.querySelector(\"#container\");\n\nconst content = document.createElement(\"div\");\ncontainer.appendChild(content)\n\n//this is the header\nconst header = document.createElement(\"div\");\nheader.setAttribute(\"id\", \"header\");\nconst h1Header = document.createElement(\"h1\")\nh1Header.textContent = \"Expensive Lounge\";\n\nheader.appendChild(h1Header);\n\nconst ul = document.createElement(\"ul\");\nul.classList.add(\"tabs\")\n\nconst li1 =  document.createElement(\"li\")\nli1.classList.add(\"tab\");\nli1.textContent = \"Home\"\n\nli1.addEventListener(\"click\", () => {\n    content.setAttribute(\"id\", \"content\")\n\n    li2.style.color = '';\n    li2.style.fontSize = '100%';\n    li1.style.color = 'red';\n    li1.style.fontSize = '140%';\n    li3.style.color = '';\n    li3.style.fontSize = '100%';\n\n\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\n\nconst li2 =  document.createElement(\"li\")\nli2.classList.add(\"tab\");\nli2.textContent = \"Menu\"\nli2.addEventListener('click', () => {\ncontent.setAttribute(\"id\", \"content\")\n    li1.style.color = '';\n    li1.style.fontSize = '100%';\n    li2.style.color = 'red';\n    li2.style.fontSize = '140%';\n    li3.style.color = '';\n    li3.style.fontSize = '100%';\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\nconst li3 =  document.createElement(\"li\")\nli3.classList.add(\"tab\");\nli3.textContent = \"Contact\"\nli3.addEventListener('click', () => {\n    content.setAttribute(\"id\", \"content\")\n        li1.style.color = '';\n        li1.style.fontSize = '100%';\n        li3.style.color = 'red';\n        li3.style.fontSize = '140%';\n        li2.style.color = '';\n        li2.style.fontSize = '100%';\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    })\n    \n\nul.appendChild(li1)\nul.appendChild(li2) \nul.appendChild(li3)\nheader.appendChild(ul)\n\ncontainer.appendChild(header)\n\n//img background\n\nconst backgroundImg = document.createElement(\"div\");\nbackgroundImg.setAttribute(\"id\", \"back\")\n\ncontainer.appendChild(backgroundImg);\n\n  \n\n\n\n    \n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addAllMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_menuPic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menuPic.jpg */ \"./src/assets/menuPic.jpg\");\n/* harmony import */ var _assets_champagne_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/champagne.jpg */ \"./src/assets/champagne.jpg\");\n\n\n\n\n\n\nfunction addAllMenu () {\n\n    content.innerHTML = '';\n    //content \n\n    const menuPic = new Image()\n    menuPic.src = _assets_menuPic_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuPic.classList.add(\"menuImg\")\n    const h1Content = document.createElement(\"h1\");\n    h1Content.textContent = \"MENU\"\n    \n    content.appendChild(h1Content);\n\nconst namePizza = document.createElement(\"h2\")\n     namePizza.textContent = \" Pizza\"\n     content.appendChild(namePizza) \n\n    const PizzaDiv = document.createElement(\"div\");\n    PizzaDiv.classList.add(\"pizzaDiv\")\n     PizzaDiv.appendChild(menuPic)  \n     \n         const pricePizza = document.createElement(\"p\")\n     pricePizza.textContent = \"1 milion$\" \n     PizzaDiv.appendChild(pricePizza) \n\n     content.appendChild(PizzaDiv)\n\n    \n    const champPic = new Image();\n    champPic.src = _assets_champagne_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    champPic.classList.add(\"menuImg\")\n    \n   \n    const nameDrink = document.createElement(\"h2\")\n    nameDrink.textContent = \"Champagne\"\n     content.appendChild(nameDrink) \n    const drinkDiv = document.createElement(\"div\");\n    drinkDiv.classList.add(\"pizzaDiv\")\n    drinkDiv.appendChild(champPic)  \n     \n         const drinkPrice = document.createElement(\"p\")\n         drinkPrice.textContent = \"1 milion$\" \n     drinkDiv.appendChild(drinkPrice) \n\n     content.appendChild(drinkDiv)\n\n    \n  \n\n    container.appendChild(content);\n\n    \n    }\n    \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/champagne.jpg":
/*!**********************************!*\
  !*** ./src/assets/champagne.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e17a8441196b65d9d3b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/champagne.jpg?");

/***/ }),

/***/ "./src/assets/menuPic.jpg":
/*!********************************!*\
  !*** ./src/assets/menuPic.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81ffde0a8f9f2b08717a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menuPic.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;