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

/***/ "./src/about-load.js":
/*!***************************!*\
  !*** ./src/about-load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-tool */ \"./src/element-tool.js\");\n\r\n\r\nconst createElement = _element_tool__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\r\n\r\nfunction loadAbout(){\r\n    const content = createElement(\"div\", document.body, \"tab\");\r\n    content.id = \"about\";\r\n    const aboutUs = createElement(\"h3\", content, \"about-us\");\r\n    aboutUs.textContent = \"About Us\";\r\n    const description = createElement(\"p\", content, \"description\");\r\n    description.innerText =  `Established with love in [year], Divine Palate Bistro is the result of a shared culinary dream. What started as a small kitchen experiment quickly flourished into a beloved dining destination.\r\n\r\nDriven by our founders' passion for flavors and a commitment to excellence, Divine Palate Bistro has become a haven for food enthusiasts seeking remarkable taste experiences.\r\n    \r\nContact Information:\r\n    \r\n        Address: [Restaurant Address]\r\n        Phone: [Restaurant Phone Number]\r\n        Email: [Restaurant Email Address]\r\n        Website: [Restaurant Website]\r\n    \r\nJoin us at Divine Palate Bistro and immerse yourself in the art of exquisite cuisine. We invite you to discover the culinary wonders that have captured the hearts of our guests for years.`\r\n\r\n    \r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about-load.js?");

/***/ }),

/***/ "./src/element-tool.js":
/*!*****************************!*\
  !*** ./src/element-tool.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tool = (function(){\r\n    const createElement = function(tag, parent, cls = \"\"){\r\n        const element = document.createElement(tag);\r\n        cls == \"\" || element.classList.add(cls);\r\n        parent.appendChild(element);\r\n        return element;\r\n    }\r\n    \r\n    return {createElement};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tool);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/element-tool.js?");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-tool */ \"./src/element-tool.js\");\n\r\n\r\nconst createElement = _element_tool__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\r\n\r\nconst loadContent = function(content){\r\n    // Content\r\n    const showCase = createElement(\"div\", content, \"showcase\");\r\n    const showCaseIMG = createElement(\"img\", showCase);\r\n    showCaseIMG.src = \"./img/plates.jpg\";\r\n\r\n    //Main\r\n    const main = createElement(\"div\", content, \"main\");\r\n    const headline = createElement(\"h2\", main, \"headline\");\r\n    headline.textContent = 'A Gastronomic Adventure Awaits';\r\n    const subline = createElement(\"h4\", main, \"subline\");\r\n    subline.textContent = 'Delicious Delights: Indulge in Exquisite Flavors at Divine Palate Bistro!';\r\n    const description = createElement(\"p\", main, \"description\");\r\n    description.textContent = `Welcome to Divine Palate Bistro, where culinary excellence meets a harmonious dining experience. Nestled in the heart of a vibrant city, our restaurant offers a haven for food enthusiasts seeking unforgettable flavors and a touch of elegance. Immerse yourself in an inviting ambiance that strikes the perfect balance between sophistication and warmth.`;\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load */ \"./src/home-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n/* harmony import */ var _about_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-load */ \"./src/about-load.js\");\n/* harmony import */ var _element_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-tool */ \"./src/element-tool.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\nconst createElement = _element_tool__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createElement;\r\n\r\nconsole.log('This Webpack stuff is working :v');\r\n\r\n\r\nconst content = document.querySelector(\"#home\");\r\n\r\n\r\nfunction loadHeader(){\r\n    // Loading header elements\r\n    const header = createElement(\"div\", document.body, \"header\");\r\n    document.body.insertBefore(header, content);\r\n    const nav = createElement(\"ul\", header);\r\n    // Nav Items and Logo\r\n    const navHome = createElement(\"li\", nav);\r\n    navHome.id = \"home-nav\";\r\n    navHome.classList.add(\"active\");\r\n    navHome.textContent = \"Home\";\r\n    const navMenu = createElement(\"li\", nav);\r\n    navMenu.id = \"menu-nav\";\r\n    navMenu.textContent = \"Menu\";\r\n    const navContact = createElement(\"li\", nav);\r\n    navContact.id = \"about-nav\";\r\n    navContact.textContent = \"About\";\r\n    const logo = createElement(\"h3\", header, \"logo\");\r\n    logo.textContent = \"LOGO\";\r\n    return header;\r\n}\r\n\r\n\r\n\r\nfunction loadFooter(){\r\n    const footer = createElement(\"div\", document.body, \"footer\");\r\n    footer.textContent = \"No Copyright\";\r\n}\r\n\r\nconst header = loadHeader();\r\nconst home = (0,_home_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\nconst menu = (0,_menu_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst about = (0,_about_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nlet currTab = home;\r\nlet currNav = header.querySelector(\"#home-nav\");\r\n\r\n\r\n\r\nfunction switchTab(...tabs){\r\n    console.log(\"This function exists\");\r\n    tabs.forEach((clickedTab) => {\r\n        const clickedNav = header.querySelector(`#${clickedTab.id}-nav`);\r\n        console.log(`#${clickedTab.id}-nav`);\r\n        clickedNav.addEventListener(\"click\", (e) => {\r\n            console.log(\"Click!\");\r\n            if(clickedTab !== currTab){\r\n                console.log(\"click tab!\");\r\n                currNav.classList.remove(\"active\");\r\n                clickedNav.classList.add(\"active\");\r\n                currNav = clickedNav;\r\n\r\n                currTab.classList.remove(\"active\");\r\n                clickedTab.classList.add(\"active\");\r\n                currTab = clickedTab;\r\n            }\r\n        })\r\n    }\r\n    );\r\n}\r\nswitchTab(home, menu, about);\r\nloadFooter();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Attribution : \r\n// <a href=\"https://www.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_7535867.htm#query=restaurant%20header%20image&position=15&from_view=search&track=ais\">Image by timolina</a> on Freepik\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-tool */ \"./src/element-tool.js\");\n\r\n\r\nconst createElement = _element_tool__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\r\n\r\nfunction loadMenu() {\r\n  const content = createElement(\"div\", document.body, \"tab\");\r\n  content.id = \"menu\";\r\n  \r\n  // Define the menu data\r\n  const menuData = {\r\n    Appetizers: [\r\n      {\r\n        name: \"Caprese Salad\",\r\n        description:\r\n          \"Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze.\",\r\n        price: \"$9.99\",\r\n      },\r\n      {\r\n        name: \"Crispy Calamari\",\r\n        description:\r\n          \"Lightly battered calamari rings served with tangy marinara sauce.\",\r\n        price: \"$12.99\",\r\n      },\r\n      {\r\n        name: \"Bruschetta\",\r\n        description:\r\n          \"Grilled bread topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil.\",\r\n        price: \"$8.99\",\r\n      },\r\n    ],\r\n    \"Main Courses\": [\r\n      {\r\n        name: \"Grilled Filet Mignon\",\r\n        description:\r\n          \"Tender filet mignon cooked to perfection, served with roasted vegetables and garlic mashed potatoes.\",\r\n        price: \"$29.99\",\r\n      },\r\n      {\r\n        name: \"Lobster Linguine\",\r\n        description:\r\n          \"Succulent lobster meat tossed with linguine in a creamy garlic sauce.\",\r\n        price: \"$26.99\",\r\n      },\r\n      {\r\n        name: \"Vegetarian Risotto\",\r\n        description:\r\n          \"Arborio rice cooked with seasonal vegetables, parmesan cheese, and a hint of truffle oil.\",\r\n        price: \"$18.99\",\r\n      },\r\n    ],\r\n    Desserts: [\r\n      {\r\n        name: \"Chocolate Lava Cake\",\r\n        description:\r\n          \"Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.\",\r\n        price: \"$8.99\",\r\n      },\r\n      {\r\n        name: \"Tiramisu\",\r\n        description:\r\n          \"Classic Italian dessert made with layers of espresso-soaked ladyfingers and creamy mascarpone cheese.\",\r\n        price: \"$7.99\",\r\n      },\r\n      {\r\n        name: \"Crème Brûlée\",\r\n        description: \"Smooth vanilla custard with a caramelized sugar crust.\",\r\n        price: \"$6.99\",\r\n      },\r\n    ],\r\n  };\r\n\r\n\r\n  // Create the menu elements\r\n  for (const category in menuData) {\r\n    // Create the category heading element\r\n    const categoryHeading = document.createElement(\"h3\");\r\n    categoryHeading.textContent = category;\r\n\r\n    // Create the item list element\r\n    const itemList = document.createElement(\"ul\");\r\n\r\n    // Create the item elements\r\n    for (const item of menuData[category]) {\r\n      const listItem = document.createElement(\"li\");\r\n      listItem.innerHTML = `\r\n        <strong>${item.name}</strong><br>\r\n        <em>${item.description}</em><br>\r\n        <span>${item.price}</span>\r\n      `;\r\n\r\n      itemList.appendChild(listItem);\r\n    }\r\n\r\n    // Append the category heading and item list to the menu container\r\n    content.appendChild(categoryHeading);\r\n    content.appendChild(itemList);\r\n  }\r\n\r\n  return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu-load.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;