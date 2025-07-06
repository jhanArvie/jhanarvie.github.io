"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_About_js"],{

/***/ "./src/app/blocks/about/About.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/`\r\n        <section class=\"about\">\r\n            <div class=\"about__illustrations\">\r\n                <img src=\"/images/about-me.png\" alt=\"\" class=\"about__image\">\r\n            </div>\r\n            <div class=\"about__text\">\r\n                ${t.description.map(text => /*html*/`\r\n                    <p class=\"about__description\">${text}</p>\r\n                `).join(\"\")}\r\n            </div>\r\n        </section>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/About.js?");

/***/ }),

/***/ "./src/app/blocks/about/Certifications.js":
/*!************************************************!*\
  !*** ./src/app/blocks/about/Certifications.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((certifications) => {\r\n    if (!certifications || !certifications.items || !Array.isArray(certifications.items)) {\r\n        console.warn('No certifications data provided or invalid format');\r\n        return '';\r\n    }\r\n    \r\n    return /*html*/`\r\n        <section class=\"certifications\">\r\n            <div class=\"container\">\r\n                <h2 class=\"h2\">${certifications.title || 'Certifications'}</h2>\r\n                <div class=\"certifications__content\">\r\n                    ${certifications.items.map(cert => `\r\n                        <div class=\"certification-card\">\r\n                            <div class=\"certification-card__header\">\r\n                                <h3 class=\"certification-card__title\">${cert.name}</h3>\r\n                                <div class=\"certification-card__issuer\">${cert.issuedBy}</div>\r\n                            </div>\r\n                            ${cert.date ? `<div class=\"certification-card__date\">${cert.date}</div>` : ''}\r\n                            ${cert.certificateUrl ? `\r\n                                <a href=\"${cert.certificateUrl}\" \r\n                                   target=\"_blank\" \r\n                                   rel=\"noopener noreferrer\"\r\n                                   class=\"certification-card__button\">\r\n                                    View Certificate =>\r\n                                </a>\r\n                            ` : ''}\r\n                        </div>\r\n                    `).join('')}\r\n                </div>\r\n            </div>\r\n        </section>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Certifications.js?");

/***/ }),

/***/ "./src/app/blocks/about/Facts.js":
/*!***************************************!*\
  !*** ./src/app/blocks/about/Facts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/`\r\n        <section class=\"facts\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"facts__content\">\r\n                <ul class=\"facts__list\">\r\n                    ${t.list.map(fact => /*html*/`\r\n                        <li class=\"fact\">${fact}</li>\r\n                    `).join(\"\")}\r\n                </ul>\r\n                <div class=\"facts__illustrations\">\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n        </section>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Facts.js?");

/***/ }),

/***/ "./src/app/blocks/about/Skills.js":
/*!****************************************!*\
  !*** ./src/app/blocks/about/Skills.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_SkillBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/SkillBlock */ \"./src/app/components/SkillBlock.js\");\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/`\r\n        <section class=\"skills\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"skills__content\">\r\n                ${Object.keys(_consts_skills__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n                            .map((id) => (0,_components_SkillBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t2))\r\n                            .join(\"\")}\r\n            </div>\r\n        </section>\r\n    `\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/about/Skills.js?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\r\n    return /*html*/`\r\n        <div class=\"path\">\r\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\r\n            <p class=\"path__description\">${description}</p>\r\n        </div>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/SkillBlock.js":
/*!******************************************!*\
  !*** ./src/app/components/SkillBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    return /*html*/ `\r\n        <div class=\"skill-block\">\r\n            <div class=\"skill-block__name\">${t[id]}</div>\r\n            <ul class=\"skill-block__list\">\r\n                ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][techIndex]))\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"skill-block__skill\">${tech}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul>\r\n        </div>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/SkillBlock.js?");

/***/ }),

/***/ "./src/app/consts/skills.js":
/*!**********************************!*\
  !*** ./src/app/consts/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    cybersecurity: [\"assets\", \"risks\", \"incident\", \"network\", \"nist\"],\r\n    programming: [\"python\", \"js\", \"html\", \"css\", \"tailwind\"],\r\n    databases: [\"sql\", \"linux\"],\r\n    tools: [\"wireshark\", \"splunk\", \"vscode\", \"windsurf\", \"figma\", \"git\"]\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/skills.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    // Cybersecurity & Governance\r\n    assets: \"Assets & Control Management\",\r\n    risks: \"Risks & Vulnerabilities Assessment\",\r\n    incident: \"Incident Reporting & Documentation\",\r\n    network: \"Network Fundamentals\",\r\n    nist: \"NIST CSF 2.0\",\r\n    tcpdump: \"tcpdump\",\r\n    virustotal: \"VirusTotal\",\r\n    suricata: \"Suricata\",\r\n    \r\n    // Programming & Development\r\n    python: \"Python\",\r\n    js: \"JavaScript\",\r\n    html: \"HTML\",\r\n    css: \"CSS\",\r\n    tailwind: \"Tailwind CSS\",\r\n    \r\n    // Databases & Systems\r\n    sql: \"SQL\",\r\n    linux: \"Linux (OS/Command Line)\",\r\n    \r\n    // Tools\r\n    vscode: \"VS Code (IDE)\",\r\n    windsurf: \"Windsurf\",\r\n    figma: \"Figma\",\r\n    git: \"Git/GitHub\",\r\n    wireshark: \"Wireshark\",\r\n    splunk: \"Splunk\"\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/About.js":
/*!********************************!*\
  !*** ./src/app/views/About.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _blocks_about_About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/about/About.js */ \"./src/app/blocks/about/About.js\");\n/* harmony import */ var _blocks_about_Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/about/Skills.js */ \"./src/app/blocks/about/Skills.js\");\n/* harmony import */ var _blocks_about_Certifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/about/Certifications.js */ \"./src/app/blocks/about/Certifications.js\");\n/* harmony import */ var _blocks_about_Facts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/blocks/about/Facts.js */ \"./src/app/blocks/about/Facts.js\");\n/* harmony import */ var styles_pages_about_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/pages/about.sass */ \"./src/assets/styles/pages/about.sass\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\r\n    return /*html*/ `\r\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\r\n        ${(0,_blocks_about_About_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t.about)}\r\n        ${(0,_blocks_about_Skills_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t.skills, locale?.skills)}\r\n        ${(0,_blocks_about_Certifications_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.certifications)}\r\n        ${(0,_blocks_about_Facts_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t.facts)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/About.js?");

/***/ }),

/***/ "./src/assets/styles/pages/about.sass":
/*!********************************************!*\
  !*** ./src/assets/styles/pages/about.sass ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/about.sass?");

/***/ })

}]);