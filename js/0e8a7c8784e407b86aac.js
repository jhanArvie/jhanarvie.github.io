"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\r\n    return /*html*/`\r\n        <div class=\"path\">\r\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\r\n            <p class=\"path__description\">${description}</p>\r\n        </div>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\n\r\n\r\n\r\nfunction mapLinks(links) {\r\n    function map(link) {\r\n        let href = \"\";\r\n        \r\n        // Handle directory links (Google Drive)\r\n        if (link === \"directory\") {\r\n            return /*html*/ `<a href=\"${links[link]}\" class=\"button\" target=\"_blank\" rel=\"noopener noreferrer\">Directory =></a>`;\r\n        }\r\n        \r\n        if (link === \"figma\") {\r\n            // If it's already a full URL, use it as-is\r\n            if (links[link].startsWith(\"http\")) {\r\n                href = links[link];\r\n            } else {\r\n                // Otherwise, construct the community file URL\r\n                href = `https://figma.com/community/file/${links[link]}`;\r\n            }\r\n        } else if (link === \"github\" && links[link].startsWith(\"/\")) {\r\n            href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link];\r\n        } else {\r\n            // Default case for other links\r\n            href = \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link] || '') + links[link];\r\n        }\r\n\r\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\r\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\r\n\r\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\" target=\"_blank\" rel=\"noopener noreferrer\">${name} =></a>`;\r\n    }\r\n\r\n    return Object.keys(links).map(map).join(\"\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\r\n        (project) => project.id === id\r\n    );\r\n\r\n    return /*html*/ `\r\n        <div class=\"project\">\r\n            ${\r\n                hasImage\r\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\r\n                    : \"\"\r\n            }\r\n            \r\n            <ul class=\"project__techs\">\r\n                ${projectTech\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul> \r\n\r\n            <div class=\"project__content\">\r\n                <div class=\"project__name\">${t[id].name}</div>\r\n                <div class=\"project__description\">${t[id].description}</div>\r\n                <div class=\"project__links\">${mapLinks(links)}</div>\r\n            </div>\r\n        </div> \r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\r\n    return /*html*/ `\r\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\r\n            <div class=\"project-list\">\r\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n                    .filter(filter)\r\n                    .slice(0, limit)\r\n                    .sort((a, b) => a.hasImage - b.hasImage)\r\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\r\n                    .join(\"\")}\r\n            </div>\r\n        ${title ? \"</div>\" : \"\"}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @type {import(\"../../types/Project\").Project[]}\r\n */\r\nconst projects = [\r\n    // Cybersecurity Projects\r\n    {\r\n        id: \"incident-response\",\r\n        techs: [\"splunk\", \"wireshark\", \"incident\", \"tcpdump\", \"suricata\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/1-IU_hEAxM1mA560dcE8ks6igdJ-XhTUt\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"risk-vulnerabilities\",\r\n        techs: [\"risks\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/1WBrA6Dmp2sGbkdsHj47HBIOWvOE9-FQ2\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"python-thumbnail\",\r\n        techs: [\"python\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/1otEbfNNVn7kvyW_AMUVylckg4Jqe4Fku\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"computer-networking\",\r\n        techs: [\"network\", \"tcpdump\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/1YmBOnKgoq1qRPqwhU-xFxKv5mBT7qgO2\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"linux-sql\",\r\n        techs: [\"linux\", \"sql\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/1K2T9DEJ33suJVNnvKm-OMh6MLeISCC8s\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"assets-control\",\r\n        techs: [\"assets\", \"nist\"],\r\n        links: {\r\n            directory: \"https://drive.google.com/drive/folders/18WBZJwQ0lJnBwRwjvNJCD7XlSbzqvPJK\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"poemtales\",\r\n        isSmall: true,  \r\n        techs: [\"html\", \"css\", \"js\", \"figma\"],\r\n        links: {\r\n            github: \"jhanArvie/FED1-PE1-jhanArvie-1\",\r\n            live: \"poemtales.netlify.app\",\r\n            figma: \"https://www.figma.com/design/udV9skXSCpGCU8uE6dmsHO/Project-Exam-Blog-Post\"\r\n        },\r\n        hasImage: true  \r\n    },\r\n    {\r\n        id: \"rainydays\",\r\n        isSmall: true,  \r\n        techs: [\"html\", \"css\", \"js\", \"figma\"],\r\n        links: {\r\n            github: \"jhanArvie/rainy-days-v2\",\r\n            live: \"jhanarvie.github.io/rainy-days-v2\",\r\n            figma: \"https://www.figma.com/design/UEbpcl1lDvc9wjveayDM32/Rainy-Days\"\r\n        },\r\n        hasImage: true  \r\n    },\r\n    {\r\n        id: \"science-museum\",\r\n        isSmall: true,  \r\n        techs: [\"html\", \"css\", \"js\", \"figma\"],\r\n        links: {\r\n            github: \"jhanArvie/community_science_museum\",\r\n            live: \"jhanarvie.github.io/community_science_museum\",\r\n            figma: \"https://www.figma.com/design/0N9TUpWUpJjDHx4zqRzFDH/Museum\"\r\n        },\r\n        hasImage: true  \r\n    },\r\n    {\r\n        id: \"nature-passion\",\r\n        isSmall: true,\r\n        techs: [\"figma\"],\r\n        links: {\r\n            figma: \"https://www.figma.com/design/qefogBMXpcnETDlhkx6TBb/Nature-Passion?node-id=25-7&t=DXIgjn0aKhybZYz4-1\"\r\n        },\r\n        hasImage: true\r\n    },\r\n    {\r\n        id: \"webservices\",\r\n        isSmall: true,\r\n        techs: [\"html\", \"css\", \"js\", \"tailwind\"],\r\n        links: {\r\n            live: \"webplusservices.netlify.app/#home\"\r\n        },\r\n        hasImage: true\r\n    },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    // Cybersecurity & Governance\r\n    assets: \"Assets & Control Management\",\r\n    risks: \"Risks & Vulnerabilities Assessment\",\r\n    incident: \"Incident Reporting & Documentation\",\r\n    network: \"Network Fundamentals\",\r\n    nist: \"NIST CSF 2.0\",\r\n    tcpdump: \"tcpdump\",\r\n    virustotal: \"VirusTotal\",\r\n    suricata: \"Suricata\",\r\n    \r\n    // Programming & Development\r\n    python: \"Python\",\r\n    js: \"JavaScript\",\r\n    html: \"HTML\",\r\n    css: \"CSS\",\r\n    tailwind: \"Tailwind CSS\",\r\n    \r\n    // Databases & Systems\r\n    sql: \"SQL\",\r\n    linux: \"Linux (OS/Command Line)\",\r\n    \r\n    // Tools\r\n    vscode: \"VS Code (IDE)\",\r\n    windsurf: \"Windsurf\",\r\n    figma: \"Figma\",\r\n    git: \"Git/GitHub\",\r\n    wireshark: \"Wireshark\",\r\n    splunk: \"Splunk\"\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/ `\r\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\r\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\r\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ }),

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ })

}]);