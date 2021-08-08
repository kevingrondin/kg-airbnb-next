(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Banner.js




function Banner() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "https://links.papareact.com/0fm",
      layout: "fill",
      objectFit: "cover"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-1/2 w-full text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm sm:text-lg",
        children: "Not sure where to go ? Perfect"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150",
        children: "I'm flexible"
      })]
    })]
  });
}

/* harmony default export */ var components_Banner = (Banner);
;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4 text-xs text-gray-800",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "font-bold",
        children: "ABOUT"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "How airbnb works"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Newsroom"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Investors"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Airbnb Plus"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Airbnb Luxe"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4 text-xs text-gray-800",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "font-bold",
        children: "COMMUNITY"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Accessibility"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "This is not a real site"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "It's a pretty awesome clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Referal Accepted"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Kevin GR"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4 text-xs text-gray-800",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "font-bold",
        children: "HOST"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Accessibility"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "This is not a real site"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "It's a pretty awesome clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Referal Accepted"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Kevin GR"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4 text-xs text-gray-800",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "font-bold",
        children: "Support"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Accessibility"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "This is not a real site"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "It's a pretty awesome clone"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Referal Accepted"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Kevin GR"
      })]
    })]
  });
}

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(802);
;// CONCATENATED MODULE: ./components/Header.js





function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative flex items-center h-10 cursor-pointer my-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "https://links.papareact.com/qd3",
        layout: "fill",
        objectFit: "contain",
        objectPosition: "left"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center md:border-2 rounded-full py-2 md:shadow-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400",
        type: "text",
        placeholder: "Start your search"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
        className: "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-end space-x-4 text-gray-500",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "hidden md:inline cursor-pointer",
        children: "Become host"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* GlobeAltIcon */.I_0, {
        className: "h-6 cursor-pointer"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-2 border-2 p-2 rounded-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
          className: "h-6"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* UserCircleIcon */.lMe, {
          className: "h-6"
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/LargeCard.js




function LargeCard({
  img,
  title,
  description,
  buttonText
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "relative py-16 cursor-pointer",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-96 min-w-[300px]",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        objectFit: "cover"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-32 left-12",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-4xl mb-3 w-64",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5",
        children: buttonText
      })]
    })]
  });
}

/* harmony default export */ var components_LargeCard = (LargeCard);
;// CONCATENATED MODULE: ./components/MediumCard.js




function MediumCard({
  img,
  title
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "cursor-pointer hover:scale-105 transform transition duration-300 ease-out",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-80 w-80",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        className: "rounded-xl"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-2xl mt-3",
      children: title
    })]
  });
}

/* harmony default export */ var components_MediumCard = (MediumCard);
;// CONCATENATED MODULE: ./components/SmallCard.js




function SmallCard({
  img,
  location,
  distance
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center mt-2 mt-5 space-x-4 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-16 w-16",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        className: "rounded-lg"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: location
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-gray-500",
        children: distance
      })]
    })]
  });
}

/* harmony default export */ var components_SmallCard = (SmallCard);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js









function Home({
  exploreData,
  cardsData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "KG Airbnb"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(components_SmallCard, {
            img: item.img,
            distance: item.distance,
            location: item.location
          }, index))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(components_MediumCard, {
            img: item.img,
            title: item.title
          }, index))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_LargeCard, {
        img: "https://links.papareact.com/4cj",
        title: "The greatest outdoors",
        description: "wishlist curated by Airbnb",
        buttonText: "Get inspired"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}
async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  };
}

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,951], function() { return __webpack_exec__(631); });
module.exports = __webpack_exports__;

})();