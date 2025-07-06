"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}
    `;
});


/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Cybersecurity & Governance
    assets: "Assets & Control Management",
    risks: "Risks & Vulnerabilities Assessment",
    incident: "Incident Reporting & Documentation",
    network: "Network Fundamentals",
    nist: "NIST CSF 2.0",
    tcpdump: "tcpdump",
    virustotal: "VirusTotal",
    suricata: "Suricata",
    
    // Programming & Development
    python: "Python",
    js: "JavaScript",
    html: "HTML",
    css: "CSS",
    tailwind: "Tailwind CSS",
    
    // Databases & Systems
    sql: "SQL",
    linux: "Linux (OS/Command Line)",
    
    // Tools
    vscode: "VS Code (IDE)",
    windsurf: "Windsurf",
    figma: "Figma",
    git: "Git/GitHub",
    wireshark: "Wireshark",
    splunk: "Splunk"
});

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

;// ./src/app/consts/projects.js
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    // Cybersecurity Projects
    {
        id: "incident-response",
        techs: ["splunk", "wireshark", "incident", "tcpdump", "suricata"],
        links: {
            directory: "https://drive.google.com/drive/folders/1-IU_hEAxM1mA560dcE8ks6igdJ-XhTUt"
        },
        hasImage: true
    },
    {
        id: "risk-vulnerabilities",
        techs: ["risks"],
        links: {
            directory: "https://drive.google.com/drive/folders/1WBrA6Dmp2sGbkdsHj47HBIOWvOE9-FQ2"
        },
        hasImage: true
    },
    {
        id: "python-thumbnail",
        techs: ["python"],
        links: {
            directory: "https://drive.google.com/drive/folders/1otEbfNNVn7kvyW_AMUVylckg4Jqe4Fku"
        },
        hasImage: true
    },
    {
        id: "computer-networking",
        techs: ["network", "tcpdump"],
        links: {
            directory: "https://drive.google.com/drive/folders/1YmBOnKgoq1qRPqwhU-xFxKv5mBT7qgO2"
        },
        hasImage: true
    },
    {
        id: "linux-sql",
        techs: ["linux", "sql"],
        links: {
            directory: "https://drive.google.com/drive/folders/1K2T9DEJ33suJVNnvKm-OMh6MLeISCC8s"
        },
        hasImage: true
    },
    {
        id: "assets-control",
        techs: ["assets", "nist"],
        links: {
            directory: "https://drive.google.com/drive/folders/18WBZJwQ0lJnBwRwjvNJCD7XlSbzqvPJK"
        },
        hasImage: true
    },
    {
        id: "poemtales",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/FED1-PE1-jhanArvie-1",
            live: "poemtales.netlify.app",
            figma: "https://www.figma.com/design/udV9skXSCpGCU8uE6dmsHO/Project-Exam-Blog-Post"
        },
        hasImage: true  
    },
    {
        id: "rainydays",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/rainy-days-v2",
            live: "jhanarvie.github.io/rainy-days-v2",
            figma: "https://www.figma.com/design/UEbpcl1lDvc9wjveayDM32/Rainy-Days"
        },
        hasImage: true  
    },
    {
        id: "science-museum",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/community_science_museum",
            live: "jhanarvie.github.io/community_science_museum",
            figma: "https://www.figma.com/design/0N9TUpWUpJjDHx4zqRzFDH/Museum"
        },
        hasImage: true  
    },
    {
        id: "nature-passion",
        isSmall: true,
        techs: ["figma"],
        links: {
            figma: "https://www.figma.com/design/qefogBMXpcnETDlhkx6TBb/Nature-Passion?node-id=25-7&t=DXIgjn0aKhybZYz4-1"
        },
        hasImage: true
    },
    {
        id: "webservices",
        isSmall: true,
        techs: ["html", "css", "js", "tailwind"],
        links: {
            live: "webplusservices.netlify.app/#home"
        },
        hasImage: true
    },
];

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href = "";
        
        // Handle directory links (Google Drive)
        if (link === "directory") {
            return /*html*/ `<a href="${links[link]}" class="button" target="_blank" rel="noopener noreferrer">Directory =></a>`;
        }
        
        if (link === "figma") {
            // If it's already a full URL, use it as-is
            if (links[link].startsWith("http")) {
                href = links[link];
            } else {
                // Otherwise, construct the community file URL
                href = `https://figma.com/community/file/${links[link]}`;
            }
        } else if (link === "github" && links[link].startsWith("/")) {
            href = media/* default */.A.github + links[link];
        } else {
            // Default case for other links
            href = "https://" + (link === "live" ? "" : websites/* default */.A[link] || '') + links[link];
        }

        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}" target="_blank" rel="noopener noreferrer">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const Project = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = consts_projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs/* default */.A[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${consts_projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});


/***/ })

}]);