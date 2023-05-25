/*! For license information please see components-carousel-__stories__-Carousel-stories-mdx.c220d6c2.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[33],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/carousel/__stories__/Carousel.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Carousel_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS/Carousel",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Carousel"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"css",children:"CSS"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This document outlines the CSS classes applied to the Carousel component and its subcomponents. You can use these class names to apply custom styles or override the default styles through the ",(0,jsx_runtime.jsx)(_components.code,{children:"sx"})," prop."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"root-element",children:"Root element"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The root element of the Carousel component has the following class names:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-root"}),": A common class for the root element of the Carousel component."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carousel-item",children:"Carousel item"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Carousel item has the following class name:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-item"}),": Applied to each Carousel item."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carousel-buttons",children:"Carousel buttons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Carousel buttons have the following class names:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button"}),": Applied to both the previous and next buttons in the Carousel."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button-prev"}),": Applied specifically to the previous button in the Carousel."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button-next"}),": Applied specifically to the next button in the Carousel."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carousel-button-icons",children:"Carousel button icons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Carousel button icons have the following class names:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button-icon"}),": Applied to both the previous and next button icons in the Carousel."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button-icon-prev"}),": Applied specifically to the previous button icon in the Carousel."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"carousel-button-icon-next"}),": Applied specifically to the next button icon in the Carousel."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{dark:!0,language:"tsx",code:"\n<Carousel\n  sx={{\n    '& .carousel-root': {\n      backgroundColor: 'red',\n    },\n    '& .carousel-item': {\n      color: 'blue',\n    },\n  }}\n>\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</Carousel>\n"})]})}}};const Carousel_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);