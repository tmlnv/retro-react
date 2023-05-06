"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[7794],{"./src/components/accordion/__stories__/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const accordionColorStyles={primary:colors._8,secondary:colors.Vb,success:colors.MR,error:colors.pn,warn:colors.u_},AccordionWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1oi85dl2"})({name:"pi42mq",styles:"font-family:'Trebuchet MS',Helvetica,sans-serif;margin-bottom:1rem"}),AccordionHeader=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1oi85dl1"})("display:flex;justify-content:space-between;align-items:center;background-color:",(props=>accordionColorStyles[props.$color]),";text-shadow:1px 1px 2px rgba(255, 255, 255, 0.5);padding:0.5rem;font-size:1rem;font-weight:bold;width:100%;border:none;outline:none;cursor:pointer;",(props=>{const gradient=`\n      linear-gradient(\n        ${(0,rgba.m)(accordionColorStyles[props.$color],.4)},\n        ${(0,rgba.m)(accordionColorStyles[props.$color],.4)}\n      ),\n\t\t\turl(${(0,getPatternScheme.q)(props.$pattern)})\n    `;return"noise"===props.$pattern?`\n          background-image: ${gradient};\n        `:`\n          background-image: ${gradient};\n\t\t\t\t\tcolor: ${colors.Cj};\n\t\t\t\t\ttext-shadow: 1px 1px 2px ${(0,rgba.m)(colors.E5,.5)};\n        `})," &:hover{background-color:",colors.IW,";}"),AccordionContent=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1oi85dl0"})("background:linear-gradient(\n\t\t\t",(props=>(0,rgba.m)(accordionColorStyles[props.$color],.1)),",\n\t\t\t",(props=>(0,rgba.m)(accordionColorStyles[props.$color],.1)),"\n\t\t),",colors.Cj,";border:1px solid ",(props=>(0,rgba.m)(accordionColorStyles[props.$color],.4)),";overflow:hidden;max-height:",(props=>props.isOpen?props.maxHeight:"0"),";transition:max-height 0.2s linear;&>div{padding:0.5rem;}");try{AccordionWrapper.displayName="AccordionWrapper",AccordionWrapper.__docgenInfo={description:"",displayName:"AccordionWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionWrapper"]={docgenInfo:AccordionWrapper.__docgenInfo,name:"AccordionWrapper",path:"src/components/accordion/Accordion.styled.tsx#AccordionWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AccordionHeader.displayName="AccordionHeader",AccordionHeader.__docgenInfo={description:"",displayName:"AccordionHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$pattern:{defaultValue:null,description:"",name:"$pattern",required:!0,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'}]}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionHeader"]={docgenInfo:AccordionHeader.__docgenInfo,name:"AccordionHeader",path:"src/components/accordion/Accordion.styled.tsx#AccordionHeader"})}catch(__react_docgen_typescript_loader_error){}try{AccordionContent.displayName="AccordionContent",AccordionContent.__docgenInfo={description:"",displayName:"AccordionContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionContent"]={docgenInfo:AccordionContent.__docgenInfo,name:"AccordionContent",path:"src/components/accordion/Accordion.styled.tsx#AccordionContent"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Accordion=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,title="",pattern="noise",color="primary",children,sxHeader,sx,...rest}=_ref;const[isOpen,setIsOpen]=react.useState(!1),[maxHeight,setMaxHeight]=react.useState("0px"),contentRef=react.useRef(null),updateMaxHeight=react.useCallback((()=>{contentRef.current&&setMaxHeight(`${contentRef.current.scrollHeight}px`)}),[]);react.useEffect((()=>(updateMaxHeight(),window.addEventListener("resize",updateMaxHeight),()=>{window.removeEventListener("resize",updateMaxHeight)})),[updateMaxHeight]);return(0,theme_ui_jsx_runtime_esm.BX)(AccordionWrapper,{ref,id,sx,className:(0,classNames.A)("accordion-root",className,commonClassNames.Z),...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(AccordionHeader,{onClick:()=>{setIsOpen(!isOpen)},$pattern:pattern,$color:color,sx:sxHeader,"aria-expanded":isOpen,"aria-controls":`${id}-content`,className:"accordion-header",children:title}),(0,theme_ui_jsx_runtime_esm.tZ)(AccordionContent,{ref:contentRef,isOpen,$color:color,maxHeight,role:"region","aria-labelledby":title,className:"accordion-content",children:(0,theme_ui_jsx_runtime_esm.tZ)("div",{children})})]})}));Accordion.displayName="Accordion";try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"The Accordion component is used to display content in a collapsible panel.\nIt can be used to group content or to show/hide additional information.\n\nUse `sxHeader` prop to style the header and `sx` to style the content.",displayName:"Accordion",props:{title:{defaultValue:{value:""},description:"The title of the accordion.",name:"title",required:!1,type:{name:"string"}},pattern:{defaultValue:{value:"noise"},description:"The pattern of the accordion.",name:"pattern",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'}]}},color:{defaultValue:{value:"primary"},description:"The color of the accordion.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},children:{defaultValue:{value:"undefined"},description:"The content of the accordion.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sxHeader:{defaultValue:{value:"undefined"},description:"The sx prop for header.",name:"sxHeader",required:!1,type:{name:"any"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Accordion_stories={title:"Components/Accordion",component:Accordion},Basic={args:{title:"Dial-up Internet Connection",pattern:"stripes",color:"success",children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"Remember the screeching sound of a dial-up modem connecting to the internet? In the 90s, dial-up connections were the most common way to access the World Wide Web. With slow speeds and busy phone lines, browsing the internet was a completely different experience from what we have today"})},render:args=>(0,jsx_runtime.jsxs)(Container.W,{sx:{width:"100%",maxWidth:"400px",margin:"0 auto"},children:[(0,jsx_runtime.jsx)(Accordion,{...args}),(0,jsx_runtime.jsx)(Accordion,{title:"The Golden Age of Arcade Games",children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"The 80s and 90s were the golden age of arcade gaming. Classic titles like Pac-Man, Space Invaders, and Donkey Kong captured the imagination of players around the world. Neon-lit arcades were social hubs where gamers gathered to compete for high scores, show off their skills, and immerse themselves in the digital worlds of their favorite games"})})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Dial-up Internet Connection',\n    pattern: 'stripes',\n    color: 'success',\n    children: <Text variant=\"paragraph\">\n                Remember the screeching sound of a dial-up modem connecting to the\n                internet? In the 90s, dial-up connections were the most common way to\n                access the World Wide Web. With slow speeds and busy phone lines,\n                browsing the internet was a completely different experience from what we\n                have today\n            </Text>\n  },\n  render: args => {\n    return <Container sx={{\n      width: '100%',\n      maxWidth: '400px',\n      margin: '0 auto'\n    }}>\n                <Accordion {...args} />\n                <Accordion title=\"The Golden Age of Arcade Games\">\n                    <Text variant=\"paragraph\">\n                        The 80s and 90s were the golden age of arcade gaming. Classic titles\n                        like Pac-Man, Space Invaders, and Donkey Kong captured the\n                        imagination of players around the world. Neon-lit arcades were\n                        social hubs where gamers gathered to compete for high scores, show\n                        off their skills, and immerse themselves in the digital worlds of\n                        their favorite games\n                    </Text>\n                </Accordion>\n            </Container>;\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw0"})("width:100%;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.cC,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.k4,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=_ref=>{let{fluid=!1,className,children,...rest}=_ref;const classes=(0,classNames.A)("container-root",fluid?"container-fluid":"",className,commonClassNames.Z);return fluid?(0,theme_ui_jsx_runtime_esm.tZ)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.tZ)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts");const Text=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;color:",(props=>props.$color),";",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>{switch(props.$variant){case"h1":return"\n\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 6rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 7rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 8rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 9rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h2":return"\n\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 3.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 4.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h3":return"\n\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.375rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h4":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.125rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h5":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h6":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.625rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"body1":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}";case"body2":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}";case"paragraph":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t  @media (max-width: 480px) { \n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) { \n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.125rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.375rem; \n\t\t\t\t\t}\n\t\t\t\t\t";default:return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t"}}),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="darkseagreen",variant="body1",bevel=!1,sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{$bevel:bevel,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags.",displayName:"Text",props:{variant:{defaultValue:{value:"body1"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"darkseagreen"},description:"The color of the Text.",name:"color",required:!1,type:{name:"string"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,MR:()=>SUCCESS,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161"},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;default:return pattern}}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>rgba});const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}},"./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HY:()=>react.Fragment,tZ:()=>jsx,BX:()=>jsxs});var react=__webpack_require__("./node_modules/react/index.js"),emotion_element_6a883da9_browser_esm=(__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js")),jsx_runtime=(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));jsx_runtime.Fragment;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var THEME_UI_DEFAULT_KEY="__default",hasDefault=function hasDefault(x){return"object"==typeof x&&null!==x&&THEME_UI_DEFAULT_KEY in x};function get(obj,path,fallback,p,undef){var pathArray=path&&"string"==typeof path?path.split("."):[path];for(p=0;p<pathArray.length;p++)obj=obj?obj[pathArray[p]]:undef;return obj===undef?fallback:hasDefault(obj)?obj[THEME_UI_DEFAULT_KEY]:obj}var getObjectWithVariants=function getObjectWithVariants(obj,theme){if(obj&&obj.variant){var result={};for(var key in obj){var x=obj[key];if("variant"===key)result=_extends({},result,getObjectWithVariants(get(theme,"function"==typeof x?x(theme):x),theme));else result[key]=x}return result}return obj},defaultBreakpoints=[40,52,64].map((function(n){return n+"em"})),defaultTheme={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},aliases={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},multiples={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollMarginX:["scrollMarginLeft","scrollMarginRight"],scrollMarginY:["scrollMarginTop","scrollMarginBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},scales={color:"colors",background:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",outlineColor:"colors",textDecorationColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollMargin:"space",scrollMarginTop:"space",scrollMarginRight:"space",scrollMarginBottom:"space",scrollMarginLeft:"space",scrollMarginX:"space",scrollMarginY:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockColor:"colors",borderBlockEnd:"borders",borderBlockEndColor:"colors",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartColor:"colors",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineColor:"colors",borderInlineEnd:"borders",borderInlineEndColor:"colors",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartColor:"colors",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",columnRuleWidth:"borderWidths",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",columnWidth:"sizes",fill:"colors",stroke:"colors"},positiveOrNegative=function positiveOrNegative(scale,value){if("number"!=typeof value||value>=0){if("string"==typeof value&&value.startsWith("-")){var valueWithoutMinus=value.substring(1),_n=get(scale,valueWithoutMinus,valueWithoutMinus);return"number"==typeof _n?-1*_n:"-"+_n}return get(scale,value,value)}var absolute=Math.abs(value),n=get(scale,absolute,absolute);return"string"==typeof n?"-"+n:-1*Number(n)},transforms=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(acc,curr){var _extends2;return _extends({},acc,((_extends2={})[curr]=positiveOrNegative,_extends2))}),{}),css=function css(args){return void 0===args&&(args={}),function(props){void 0===props&&(props={});var theme=_extends({},defaultTheme,"theme"in props?props.theme:props),styles=function responsive(styles){return function(theme){var next={},breakpoints=theme&&theme.breakpoints||defaultBreakpoints,mediaQueries=[null].concat(breakpoints.map((function(n){return n.includes("@media")?n:"@media screen and (min-width: "+n+")"})));for(var k in styles){var key=k,value=styles[key];if("function"==typeof value&&(value=value(theme||{})),!1!==value&&null!=value)if(Array.isArray(value))for(var i=0;i<value.slice(0,mediaQueries.length).length;i++){var media=mediaQueries[i];media?(next[media]=next[media]||{},null!=value[i]&&(next[media][key]=value[i])):next[key]=value[i]}else next[key]=value}return next}}(getObjectWithVariants("function"==typeof args?args(theme):args,theme))(theme),result={};for(var key in styles){var x=styles[key],val="function"==typeof x?x(theme):x;if(val&&"object"==typeof val){if(hasDefault(val)){result[key]=val[THEME_UI_DEFAULT_KEY];continue}result[key]=css(val)(theme)}else{var prop=key in aliases?aliases[key]:key,scaleName=prop in scales?scales[prop]:void 0,scale=scaleName?null==theme?void 0:theme[scaleName]:get(theme,prop,{}),value=get(transforms,prop,get)(scale,val,val);if(prop in multiples)for(var dirs=multiples[prop],i=0;i<dirs.length;i++)result[dirs[i]]=value;else result[prop]=value}}return result}};function parseProps(props){if(!props||!props.sx&&!props.css)return props;var next={};for(var key in props)"sx"!==key&&(next[key]=props[key]);return next.css=function getCSS(props){return function(theme){return[css(props.sx)(theme),"function"==typeof props.css?props.css(theme):props.css]}}(props),next}var jsx=function jsx(type,props,key){return function emotion_react_jsx_runtime_browser_esm_jsx(type,props,key){return emotion_element_6a883da9_browser_esm.h.call(props,"css")?(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.E,(0,emotion_element_6a883da9_browser_esm.c)(type,props),key):(0,jsx_runtime.jsx)(type,props,key)}(type,parseProps(props),key)},jsxs=function jsxs(type,props,key){return function emotion_react_jsx_runtime_browser_esm_jsxs(type,props,key){return emotion_element_6a883da9_browser_esm.h.call(props,"css")?(0,jsx_runtime.jsxs)(emotion_element_6a883da9_browser_esm.E,(0,emotion_element_6a883da9_browser_esm.c)(type,props),key):(0,jsx_runtime.jsxs)(type,props,key)}(type,parseProps(props),key)}}}]);