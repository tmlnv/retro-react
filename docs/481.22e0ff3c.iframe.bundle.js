"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[481],{"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");function getColorScheme(color){switch(color){case"error":return colors.pn;case"success":return colors.MR;case"warn":return colors.u_;case"secondary":return colors.Vb;default:return colors._8}}try{getColorScheme.displayName="getColorScheme",getColorScheme.__docgenInfo={description:"",displayName:"getColorScheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/themes.tsx#getColorScheme"]={docgenInfo:getColorScheme.__docgenInfo,name:"getColorScheme",path:"src/components/button/themes.tsx#getColorScheme"})}catch(__react_docgen_typescript_loader_error){}const Button=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1uf03490"})("display:inline-flex;align-items:center;justify-content:center;position:relative;height:auto;outline:0;border:2px outset ",(props=>getColorScheme(props.$color)),";padding:0.5rem 1.5rem;font-size:0.875rem;font-family:'Trebuchet MS',Helvetica,sans-serif;cursor:pointer;",(props=>function getTheme(color,variant){const colorScheme=getColorScheme(color);switch(variant){case"outline":return(0,emotion_react_browser_esm.iv)("color:",colorScheme,";background-color:transparent;border:1px solid ",colorScheme,";&:hover:not([disabled]){background-color:",(0,rgba.m)(colorScheme,.15),";border-color:",(0,alterColor.d)(colorScheme),";}&:active:not([disabled]){background-color:",(0,rgba.m)(colorScheme,.25),";border-color:",(0,alterColor.d)(colorScheme),";}","");case"text":return(0,emotion_react_browser_esm.iv)("color:",colorScheme,";background-color:transparent;border:1px solid transparent;&:hover:not([disabled]){background-color:",(0,rgba.m)(colorScheme,.05),";border-color:",(0,rgba.m)(colorScheme,.05),";}&:active:not([disabled]){background-color:",(0,rgba.m)(colorScheme,.1),";border-color:",(0,rgba.m)(colorScheme,.1),";}","");default:return(0,emotion_react_browser_esm.iv)("color:",colors.Cj,";background:url(https://grainy-gradients.vercel.app/noise.svg);filter:contrast(120%) brightness(100%);background-color:",colorScheme,";border:1.5px solid ",(0,alterColor.a)(colorScheme),";transition:all 0.1s ease-in-out;&:hover:not([disabled]){box-shadow:inset -2px -2px 0px 0px rgba(255, 255, 255, 0.4),inset 2px 2px 1px 0px rgba(0, 0, 0, 0.8);filter:contrast(120%) saturate(130%);}&:active:not([disabled]){box-shadow:inset -2px -2px 0px 0px rgba(255, 255, 255, 0.2),inset 2px 2px 0px 0px rgba(0, 0, 0, 0.5);filter:contrast(100%);}","")}}(props.$color,props.variant))," &:disabled{cursor:not-allowed;opacity:0.6;}");try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"text"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.styled.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.styled.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,onClick,color="primary",variant="solid",children,...rest}=_ref;return(0,jsx_runtime.jsx)(Button,{ref,id,variant,$color:color,className:(0,classNames.A)("button-root",className,commonClassNames.Z),onClick,...rest,children})}));Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"The color of the Button.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},variant:{defaultValue:{value:"solid"},description:"The visual style of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"text"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,MR:()=>SUCCESS,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161"},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>alterColorEnhanced,d:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_},alterColor=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=(r+amount)%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},alterColorEnhanced=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16),g=parseInt(hex.substring(3,5),16),b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=Math.min(Math.max(r+amount,0),255),g=Math.min(Math.max(g+amount,0),255),b=Math.min(Math.max(b+amount,0),255);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>rgba});const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}}}]);