"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[796],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iv:()=>css});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}},"./src/components/modal/__stories__/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/button/Button.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts"),colors=__webpack_require__("./src/constants/colors.ts");__webpack_require__("./src/components/fonts.css");const Modal=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1k5l2uy1"})("background-image:url(https://grainy-gradients.vercel.app/noise.svg);background-color:",(props=>props.$color),";border-radius:0.5rem;border:",(props=>props.$borderSize)," solid ",(props=>props.$color),";box-shadow:0 0 0.5rem 0.5rem ",(props=>props.$color),";padding:1rem;font-family:'FrauncesLatin',sans-serif;font-size:1.5rem;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);max-width:90%;width:auto;box-sizing:border-box;overflow:auto;@media only screen and (max-width: ",breakpoints.cC,"px){top:0;left:0;width:100%;height:100%;transform:none;border-radius:0;}",(props=>props.$open?"\n    opacity: 1;\n    visibility: visible;\n    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  ":"\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  ")," &::before{content:'';width:100%;height:100%;background-image:url(https://grainy-gradients.vercel.app/noise.svg);background-color:",(props=>props.$color),";border-radius:0.5rem;border:0.5rem solid ",(props=>props.$color),";box-shadow:0 0 0.5rem 0.5rem ",(props=>props.$color),";opacity:0.5;}"),CloseButton=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1k5l2uy0"})("position:absolute;top:10px;right:5px;width:2rem;height:2rem;background-color:transparent;border:none;cursor:pointer;transition:transform 0.3s ease-in-out;&:hover{transform:scale(1.1);}&::before,&::after{content:'';position:absolute;top:50%;left:50%;width:1.5rem;height:0.2rem;background-color:",colors._8,";transform:translate(-50%, -50%) rotate(45deg);}&::after{transform:translate(-50%, -50%) rotate(-45deg);}");try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$borderSize:{defaultValue:null,description:"",name:"$borderSize",required:!0,type:{name:"string"}},$open:{defaultValue:null,description:"",name:"$open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.styled.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.styled.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.styled.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/modal/Modal.styled.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Modal_Modal=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,open=!1,onClose,color="darkseagreen",borderSize="1rem",...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.BX)(Modal,{$color:color,$borderSize:borderSize,$open:open,ref,id,className:(0,classNames.A)("modal-root",className),...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(CloseButton,{onClick:onClose,"aria-label":"Close Modal"}),children]})}));Modal_Modal.displayName="Modal";try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{color:{defaultValue:{value:"darkseagreen"},description:"The background of the Modal.",name:"color",required:!1,type:{name:"string"}},borderSize:{defaultValue:{value:"1rem"},description:"The border size of the Modal.",name:"borderSize",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Whether the Modal is open or not.",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:{value:"undefined"},description:"Callback fired when the Modal is closed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onClose",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_stories={title:"Components/Modal",component:Modal_Modal},Template=args=>{const[open,setOpen]=react.useState(args.open);return react.useEffect((()=>{setOpen(args.open)}),[args.open]),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:[(0,jsx_runtime.jsx)(Button.z,{onClick:()=>setOpen(!0),children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal_Modal,{...args,open,onClose:()=>setOpen(!1)})]})};Template.displayName="Template";const Default=Template.bind({});Default.args={children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Text.x,{variant:"h6",color:"black",children:"Ahoy, matey!"}),(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",color:"black",children:"Welcome aboard our retro ship of wonders, where you'll find treasures from the golden age of the internet. Discover ancient artifacts such as pixel art, gradient backgrounds, and quirky fonts. Navigate through the vast ocean of nostalgia and experience the simpler times when animated GIFs ruled the world wide web!"})]}),color:"darkseagreen",sx:{maxHeight:"500px",maxWidth:"500px"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [open, setOpen] = React.useState(args.open);\n  React.useEffect(() => {\n    setOpen(args.open);\n  }, [args.open]);\n  return <div style={{\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '50vh'\n  }}>\n            <Button onClick={() => setOpen(true)}>Open Modal</Button>\n            <Modal {...args} open={open} onClose={() => setOpen(false)} />\n        </div>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),colors=__webpack_require__("./src/constants/colors.ts"),emotion_react_browser_esm=(__webpack_require__("./src/components/fonts.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),alterColor=__webpack_require__("./src/utils/alterColor.ts");const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode.replace("#","");3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`);return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`};function getTheme(color,variant){const colorScheme=function getColorScheme(color){switch(color){case"error":return colors.pn;case"success":return colors.MR;case"warn":return colors.u_;case"secondary":return colors.Vb;default:return colors._8}}(color);switch(variant){case"outline":return(0,emotion_react_browser_esm.iv)("color:",colorScheme,";background-color:transparent;border:1px solid ",colorScheme,";&:hover{background-color:",rgba(colorScheme,.05),";}","");case"text":return(0,emotion_react_browser_esm.iv)("color:",colorScheme,";background-color:transparent;border:1px solid transparent;&:hover{background-color:",rgba(colorScheme,.05),";}","");default:return(0,emotion_react_browser_esm.iv)("color:",colors.Cj,";background:url(https://grainy-gradients.vercel.app/noise.svg);filter:contrast(120%) brightness(100%);background-color:",colorScheme,";border:1.5px solid ",(0,alterColor.a)(colorScheme),";","")}}const Button=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1uf03490"})("display:inline-flex;align-items:center;justify-content:center;position:relative;height:auto;outline:0;border:0;padding:0.5rem 1.5rem;font-size:0.875rem;font-family:'FrauncesLatin',sans-serif;text-shadow:2px 2px #000000;cursor:pointer;",(props=>getTheme(props.$color,props.variant))," &:disabled{cursor:not-allowed;opacity:0.6;}&:hover:not([disabled]){opacity:0.8;box-shadow:inset 0 8px 6px -6px ",colors.GW,";filter:saturate(70%);}&:active:not([disabled]){filter:contrast(60%);}");try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"text"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.styled.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.styled.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,onClick,color="primary",variant="solid",children,...rest}=_ref;return(0,jsx_runtime.jsx)(Button,{ref,id,variant,$color:color,className:(0,classNames.A)("button-root",className),onClick,...rest,children})}));Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"The color of the Button.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},variant:{defaultValue:{value:"solid"},description:"The visual style of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"text"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");__webpack_require__("./src/components/fonts.css");const Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'FrauncesLatin',sans-serif;font-size:1rem;font-weight:400;color:",(props=>props.$color),";",(props=>{switch(props.$variant){case"h1":return"\n\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 6rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 7rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 8rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 9rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h2":return"\n\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 3.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 4.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h3":return"\n\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.375rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h4":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.125rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h5":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h6":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.625rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"body1":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}";case"body2":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}";case"paragraph":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t  @media (max-width: 480px) { \n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) { \n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.125rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.375rem; \n\t\t\t\t\t}\n\t\t\t\t\t";default:return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t"}}),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="darkseagreen",variant="body1",...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{$color:color,$variant:variant,ref,id,className:(0,classNames.A)("text-root",className),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body1"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"darkseagreen"},description:"The color of the Text.",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cj:()=>WHITE,GW:()=>SHADE_6,MR:()=>SUCCESS,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,pn:()=>ERROR,u_:()=>WARN});const WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_6="#616161"},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_},alterColor=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);r=(r+amount)%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/fonts.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/fonts/Fraunces--latin_ext.woff2"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,"@font-face {\n\tfont-family: 'FrauncesLatin';\n\tsrc: url("+___CSS_LOADER_URL_REPLACEMENT_0___+") format('woff2');\n}\n","",{version:3,sources:["webpack://./src/components/fonts.css"],names:[],mappings:"AAAA;CACC,4BAA4B;CAC5B,4DAAqE;AACtE",sourcesContent:["@font-face {\n\tfont-family: 'FrauncesLatin';\n\tsrc: url('../assets/fonts/Fraunces--latin_ext.woff2') format('woff2');\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/fonts.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_fonts_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/fonts.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_fonts_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_fonts_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_fonts_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_fonts_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./src/assets/fonts/Fraunces--latin_ext.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/Fraunces--latin_ext.2f41ae50.woff2"}}]);