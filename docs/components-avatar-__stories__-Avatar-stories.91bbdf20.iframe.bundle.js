"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[1023,3736,6398],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes,iv:()=>css,xB:()=>Global});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js")),_emotion_utils__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js")),_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),Global=(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.w)((function(props,cache){var styles=props.styles,serialized=(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)([styles],void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.T)),sheetRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_4__.j)((function(){var key=cache.key+"-global",sheet=new cache.sheet.constructor({key,nonce:cache.sheet.nonce,container:cache.sheet.container,speedy:cache.sheet.isSpeedy}),rehydrating=!1,node=document.querySelector('style[data-emotion="'+key+" "+serialized.name+'"]');return cache.sheet.tags.length&&(sheet.before=cache.sheet.tags[0]),null!==node&&(rehydrating=!0,node.setAttribute("data-emotion",key),sheet.hydrate([node])),sheetRef.current=[sheet,rehydrating],function(){sheet.flush()}}),[cache]),(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_4__.j)((function(){var sheetRefCurrent=sheetRef.current,sheet=sheetRefCurrent[0];if(sheetRefCurrent[1])sheetRefCurrent[1]=!1;else{if(void 0!==serialized.next&&(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.My)(cache,serialized.next,!0),sheet.tags.length){var element=sheet.tags[sheet.tags.length-1].nextElementSibling;sheet.before=element,sheet.flush()}cache.insert("",serialized,sheet,!1)}}),[cache,serialized.name]),null}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/components/avatar/__stories__/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Primary:()=>Primary,Secondary:()=>Secondary,Success:()=>Success,Warn:()=>Warn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const avatarColorStyles={primary:colors._8,secondary:colors.Vb,success:colors.MR,error:colors.pn,warn:colors.u_},sizeStyles={small:"2rem",medium:"3rem",large:"4rem"};var _ref={name:"1cgt0cu",styles:"border-radius:0.5rem"},_ref2={name:"18wgrk7",styles:"border-radius:50%"};const Avatar=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ekivgda0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-weight:bold;font-size:",(props=>"small"===props.$size?"0.8rem":"medium"===props.$size?"1rem":"1.6rem"),";color:",colors.Cj,";text-align:center;line-height:",(props=>sizeStyles[props.$size]),";background-color:",(props=>avatarColorStyles[props.$color]),";background-image:",(props=>props.$src?`url(${props.$src})`:`url(${(0,getPatternScheme.q)("noise")})`),";width:",(props=>sizeStyles[props.$size]),";height:",(props=>sizeStyles[props.$size]),";border:0.1rem solid ",colors.Cj,";overflow:hidden;",(props=>"circle"===props.$variant&&_ref2)," ",(props=>"square"===props.$variant&&_ref)," ",(props=>props.$src&&(0,emotion_react_browser_esm.iv)("background-size:cover;background-position:center;border:0.1rem solid ",avatarColorStyles[props.$color],";&>*{display:none;}","")),";");try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"circle"'}]}},$src:{defaultValue:null,description:"",name:"$src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/avatar/Avatar.styled.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/avatar/Avatar.styled.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Avatar_Avatar=(0,react.forwardRef)((_ref=>{let{id,className,src,color="primary",size="medium",variant="circle",children,sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Avatar,{id,sx,$src:src,$color:color,$size:size,$variant:variant,className:(0,classNames.A)("avatar-root",className,commonClassNames.Z),"aria-label":children,...rest,children:(0,theme_ui_jsx_runtime_esm.tZ)("span",{children})})}));Avatar_Avatar.displayName="Avatar";try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"Avatars are used to represent a user or entity.\nThey can be used to display a user's profile picture, initials or icon.",displayName:"Avatar",props:{size:{defaultValue:{value:"medium"},description:"The size of the Avatar.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"circle"},description:"The variant of the Avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circle"'}]}},color:{defaultValue:{value:"primary"},description:"The color of the Avatar.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},children:{defaultValue:{value:"undefined"},description:"The content of the Avatar.",name:"children",required:!1,type:{name:"string"}},src:{defaultValue:{value:"undefined"},description:"The image source of the Avatar. If not provided, a pattern with text will be used.",name:"src",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/components/avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar_stories={title:"Components/Avatar",component:Avatar_Avatar},Template=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,jsx_runtime.jsx)(Avatar_Avatar,{...args,src:""}),(0,jsx_runtime.jsx)(Avatar_Avatar,{...args})]});Template.displayName="Template";const Primary=Template.bind({});Primary.args={color:"primary",children:"AB",size:"medium",variant:"circle",src:"https://i.pravatar.cc/300"};const Secondary=Template.bind({});Secondary.args={color:"secondary",children:"AB",size:"medium",variant:"circle",src:"https://i.pravatar.cc/300"};const Success=Template.bind({});Success.args={color:"success",children:"AB",size:"medium",variant:"circle",src:"https://i.pravatar.cc/300"};const Error=Template.bind({});Error.args={color:"error",children:"AB",size:"medium",variant:"circle",src:"https://i.pravatar.cc/300"};const Warn=Template.bind({});Warn.args={color:"warn",children:"AB",size:"medium",variant:"circle",src:"https://i.pravatar.cc/300"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    gap: '1rem'\n  }}>\n            <Avatar {...args} src=\"\" />\n            <Avatar {...args} />\n        </div>;\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    gap: '1rem'\n  }}>\n            <Avatar {...args} src=\"\" />\n            <Avatar {...args} />\n        </div>;\n}",...Secondary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    gap: '1rem'\n  }}>\n            <Avatar {...args} src=\"\" />\n            <Avatar {...args} />\n        </div>;\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    gap: '1rem'\n  }}>\n            <Avatar {...args} src=\"\" />\n            <Avatar {...args} />\n        </div>;\n}",...Error.parameters?.docs?.source}}},Warn.parameters={...Warn.parameters,docs:{...Warn.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'flex',\n    gap: '1rem'\n  }}>\n            <Avatar {...args} src=\"\" />\n            <Avatar {...args} />\n        </div>;\n}",...Warn.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Success","Error","Warn"]},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,MR:()=>SUCCESS,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161"},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;default:return pattern}}},"./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HY:()=>react.Fragment,tZ:()=>jsx,BX:()=>jsxs});var react=__webpack_require__("./node_modules/react/index.js"),emotion_element_6a883da9_browser_esm=(__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js")),jsx_runtime=(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));jsx_runtime.Fragment;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var THEME_UI_DEFAULT_KEY="__default",hasDefault=function hasDefault(x){return"object"==typeof x&&null!==x&&THEME_UI_DEFAULT_KEY in x};function get(obj,path,fallback,p,undef){var pathArray=path&&"string"==typeof path?path.split("."):[path];for(p=0;p<pathArray.length;p++)obj=obj?obj[pathArray[p]]:undef;return obj===undef?fallback:hasDefault(obj)?obj[THEME_UI_DEFAULT_KEY]:obj}var getObjectWithVariants=function getObjectWithVariants(obj,theme){if(obj&&obj.variant){var result={};for(var key in obj){var x=obj[key];if("variant"===key)result=_extends({},result,getObjectWithVariants(get(theme,"function"==typeof x?x(theme):x),theme));else result[key]=x}return result}return obj},defaultBreakpoints=[40,52,64].map((function(n){return n+"em"})),defaultTheme={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},aliases={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},multiples={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollMarginX:["scrollMarginLeft","scrollMarginRight"],scrollMarginY:["scrollMarginTop","scrollMarginBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},scales={color:"colors",background:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",outlineColor:"colors",textDecorationColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollMargin:"space",scrollMarginTop:"space",scrollMarginRight:"space",scrollMarginBottom:"space",scrollMarginLeft:"space",scrollMarginX:"space",scrollMarginY:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockColor:"colors",borderBlockEnd:"borders",borderBlockEndColor:"colors",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartColor:"colors",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineColor:"colors",borderInlineEnd:"borders",borderInlineEndColor:"colors",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartColor:"colors",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",columnRuleWidth:"borderWidths",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",columnWidth:"sizes",fill:"colors",stroke:"colors"},positiveOrNegative=function positiveOrNegative(scale,value){if("number"!=typeof value||value>=0){if("string"==typeof value&&value.startsWith("-")){var valueWithoutMinus=value.substring(1),_n=get(scale,valueWithoutMinus,valueWithoutMinus);return"number"==typeof _n?-1*_n:"-"+_n}return get(scale,value,value)}var absolute=Math.abs(value),n=get(scale,absolute,absolute);return"string"==typeof n?"-"+n:-1*Number(n)},transforms=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(acc,curr){var _extends2;return _extends({},acc,((_extends2={})[curr]=positiveOrNegative,_extends2))}),{}),css=function css(args){return void 0===args&&(args={}),function(props){void 0===props&&(props={});var theme=_extends({},defaultTheme,"theme"in props?props.theme:props),styles=function responsive(styles){return function(theme){var next={},breakpoints=theme&&theme.breakpoints||defaultBreakpoints,mediaQueries=[null].concat(breakpoints.map((function(n){return n.includes("@media")?n:"@media screen and (min-width: "+n+")"})));for(var k in styles){var key=k,value=styles[key];if("function"==typeof value&&(value=value(theme||{})),!1!==value&&null!=value)if(Array.isArray(value))for(var i=0;i<value.slice(0,mediaQueries.length).length;i++){var media=mediaQueries[i];media?(next[media]=next[media]||{},null!=value[i]&&(next[media][key]=value[i])):next[key]=value[i]}else next[key]=value}return next}}(getObjectWithVariants("function"==typeof args?args(theme):args,theme))(theme),result={};for(var key in styles){var x=styles[key],val="function"==typeof x?x(theme):x;if(val&&"object"==typeof val){if(hasDefault(val)){result[key]=val[THEME_UI_DEFAULT_KEY];continue}result[key]=css(val)(theme)}else{var prop=key in aliases?aliases[key]:key,scaleName=prop in scales?scales[prop]:void 0,scale=scaleName?null==theme?void 0:theme[scaleName]:get(theme,prop,{}),value=get(transforms,prop,get)(scale,val,val);if(prop in multiples)for(var dirs=multiples[prop],i=0;i<dirs.length;i++)result[dirs[i]]=value;else result[prop]=value}}return result}};function parseProps(props){if(!props||!props.sx&&!props.css)return props;var next={};for(var key in props)"sx"!==key&&(next[key]=props[key]);return next.css=function getCSS(props){return function(theme){return[css(props.sx)(theme),"function"==typeof props.css?props.css(theme):props.css]}}(props),next}var jsx=function jsx(type,props,key){return function emotion_react_jsx_runtime_browser_esm_jsx(type,props,key){return emotion_element_6a883da9_browser_esm.h.call(props,"css")?(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.E,(0,emotion_element_6a883da9_browser_esm.c)(type,props),key):(0,jsx_runtime.jsx)(type,props,key)}(type,parseProps(props),key)},jsxs=function jsxs(type,props,key){return function emotion_react_jsx_runtime_browser_esm_jsxs(type,props,key){return emotion_element_6a883da9_browser_esm.h.call(props,"css")?(0,jsx_runtime.jsxs)(emotion_element_6a883da9_browser_esm.E,(0,emotion_element_6a883da9_browser_esm.c)(type,props),key):(0,jsx_runtime.jsxs)(type,props,key)}(type,parseProps(props),key)}}}]);