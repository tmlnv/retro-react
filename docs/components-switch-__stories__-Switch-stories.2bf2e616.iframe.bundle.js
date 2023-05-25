"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[5454],{"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>emotion_styled_base_browser_esm});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const emotion_is_prop_valid_esm=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91}));var emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=emotion_is_prop_valid_esm,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag);(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)}));return null};const emotion_styled_base_browser_esm=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_6a883da9_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=(0,react.useContext)(emotion_element_6a883da9_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,(0,react.createElement)(react.Fragment,null,(0,react.createElement)(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),(0,react.createElement)(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/chunk-R4NKYYJA.mjs"),__webpack_require__("./node_modules/@storybook/global/dist/index.mjs")),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/components/switch/__stories__/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const Switch=(0,emotion_styled_base_browser_esm.Z)("label",{target:"e1qsxbbj2"})("position:relative;display:inline-block;",(_ref=>{let{$size}=_ref;switch($size){case"small":return"\n\t\t\t\t\twidth: 60px;\n\t\t\t\t\theight: 34px;\n\t\t\t\t\t";case"medium":return"\n\t\t\t\t\twidth: 80px;\n\t\t\t\t\theight: 44px;\n\t\t\t\t\t";case"large":return"\n\t\t\t\t\twidth: 100px;\n\t\t\t\t\theight: 54px;\n\t\t\t\t\t"}})," ",(_ref2=>{let{$disabled}=_ref2;return $disabled&&"\n\t\tcursor: not-allowed;\n\t"}),";"),SwitchInput=(0,emotion_styled_base_browser_esm.Z)("input",{target:"e1qsxbbj1"})({name:"1izbzfv",styles:"opacity:0;width:0;height:0"}),SwitchSlider=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1qsxbbj0"})("transition:background-color 0.1s ease-in-out;position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;border-radius:",(_ref3=>{let{$variant}=_ref3;return"rounded"===$variant?"34px":"4px"}),";",(_ref4=>{let{$color,theme}=_ref4;return`\n\t\tbackground: linear-gradient(\n\t\t\tto right,\n\t\t\t${(0,rgba.m)((0,alterColor.a)((0,getColorScheme.Z)("greyscale"===$color?"greyscale-dark":$color,theme)),.9)} 0%,\n\t\t\t${(0,rgba.m)((0,getColorScheme.Z)("greyscale"===$color?"greyscale-dark":$color,theme),.95)} 100%\n\t\t), url(${(0,getPatternScheme.q)("dots")}\n\t\t);`})," &:before{position:absolute;content:'';left:4px;bottom:4px;background:url(",(0,getPatternScheme.q)("noise"),");background-size:100%;background-repeat:repeat;background-color:",(_ref5=>{let{theme,$color}=_ref5;return(0,polished_esm.$n)(.3,(0,getColorScheme.Z)($color,theme))}),";-webkit-transition:0.1s;transition:transform 0.1s ease-in-out,background 0.2s ease-in-out;border-radius:",(_ref6=>{let{$variant}=_ref6;return"rounded"===$variant?"50%":"4px"}),";box-shadow:",(_ref7=>{let{theme,$color}=_ref7;return`1px 1px 2px ${(0,rgba.m)(colors.E5,.3)}, \n\t\t\t-1px -1px 2px ${(0,polished_esm.$n)(.1,(0,getColorScheme.Z)($color,theme))}`}),";",(_ref8=>{let{$size}=_ref8;switch($size){case"small":return"\n\t\t\t\t\t\twidth: 26px;\n\t\t\t\t\t\theight: 26px;\n\t\t\t\t\t\t";case"medium":return"\n\t\t\t\t\t\twidth: 36px;\n\t\t\t\t\t\theight: 36px;\n\t\t\t\t\t\t";case"large":return"\n\t\t\t\t\t\twidth: 46px;\n\t\t\t\t\t\theight: 46px;\n\t\t\t\t\t\t"}}),";}input:checked+&{background-color:",(_ref9=>{let{theme}=_ref9;return(0,getColorScheme.Z)("success",theme)}),";}input:focus+&{box-shadow:",(_ref10=>{let{theme}=_ref10;return`0 0 1px ${(0,getColorScheme.Z)("primary",theme)}`}),";}input:checked+&:before{",(_ref11=>{let{$color,theme}=_ref11;return`\n\t\tbackground: linear-gradient(\n\t\t\t45deg,\n\t\t\t${(0,polished_esm.$n)(.1,(0,getColorScheme.Z)("greyscale"===$color?"greyscale-dark":$color,theme))} 0%,\n\t\t\t${(0,getColorScheme.Z)("greyscale"===$color?"greyscale-dark":$color,theme)} 100%\n\t\t);\n\t\t\tfilter: saturate(2.5);\n\t\t`})," ",(_ref12=>{let{$size}=_ref12;switch($size){case"small":return"\n\t\t\t\t\t\ttransform: translateX(26px);\n\t\t\t\t\t\t";case"medium":return"\n\t\t\t\t\t\ttransform: translateX(36px);\n\t\t\t\t\t\t";case"large":return"\n\t\t\t\t\t\ttransform: translateX(46px);\n\t\t\t\t\t\t"}})," box-shadow:",(_ref13=>{let{theme,$color}=_ref13;return`inset 1px 1px 2px ${colors.E5}, inset -1px -1px 2px ${(0,polished_esm._j)(.1,(0,getColorScheme.Z)($color,theme))}`}),";}",(_ref14=>{let{$disabled}=_ref14;return $disabled&&"\n\t\tcursor: not-allowed;\n\t\topacity: 0.8;\n\t\tpointer-events: none;\n\t\tfilter: grayscale(0.5);\n\t"})," input:focus+&{outline:",(_ref15=>{let{theme,$color}=_ref15;return`1px solid ${(0,polished_esm._j)(.2,(0,getColorScheme.Z)($color,theme))}`}),";}");try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/Switch.styled.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/switch/Switch.styled.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}try{SwitchInput.displayName="SwitchInput",SwitchInput.__docgenInfo={description:"",displayName:"SwitchInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/Switch.styled.tsx#SwitchInput"]={docgenInfo:SwitchInput.__docgenInfo,name:"SwitchInput",path:"src/components/switch/Switch.styled.tsx#SwitchInput"})}catch(__react_docgen_typescript_loader_error){}try{SwitchSlider.displayName="SwitchSlider",SwitchSlider.__docgenInfo={description:"",displayName:"SwitchSlider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/Switch.styled.tsx#SwitchSlider"]={docgenInfo:SwitchSlider.__docgenInfo,name:"SwitchSlider",path:"src/components/switch/Switch.styled.tsx#SwitchSlider"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Switch_Switch=(0,react.forwardRef)(((_ref,ref)=>{let{id,sx,className,size="medium",variant="rounded",color="primary",disabled=!1,toggled,onChange,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.BX)(Switch,{ref,id,sx,className:(0,classNames.A)("switch-root",className,commonClassNames.Z),$disabled:disabled,$size:size,role:"switch","aria-checked":toggled,...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(SwitchInput,{type:"checkbox",checked:toggled,onChange,disabled,className:"switch-input"}),(0,theme_ui_jsx_runtime_esm.tZ)(SwitchSlider,{className:`switch-${variant}-slider`,$variant:variant,$color:color,$size:size,$disabled:disabled})]})}));Switch_Switch.displayName="Switch";try{Switch_Switch.displayName="Switch",Switch_Switch.__docgenInfo={description:"Switches are used to toggle between two states.",displayName:"Switch",props:{variant:{defaultValue:{value:"rounded"},description:"The variant of the Switch.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},size:{defaultValue:{value:"medium"},description:"The size of the Switch.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"primary"},description:"The color of the Switch.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},toggled:{defaultValue:{value:"false"},description:"The controlled state of the Switch.",name:"toggled",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Is the Switch disabled?",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"undefined"},description:"The onChange event handler of the Switch.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/Switch.tsx#Switch"]={docgenInfo:Switch_Switch.__docgenInfo,name:"Switch",path:"src/components/switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch_stories={title:"Forms/Switch",component:Switch_Switch},Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return(0,jsx_runtime.jsx)(Switch_Switch,{...args,toggled:args.toggled,onChange:e=>{updateArgs({toggled:e.target.checked}),args.onChange&&args.onChange(e)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={variant:"square",size:"medium",color:"primary",toggled:!1,disabled:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [, updateArgs] = useArgs();\n  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {\n    updateArgs({\n      toggled: e.target.checked\n    });\n    if (args.onChange) {\n      args.onChange(e);\n    }\n  };\n  return <Switch {...args} toggled={args.toggled} onChange={handleToggle} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>alterColorEnhanced,d:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_},alterColor=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=(r+amount)%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},alterColorEnhanced=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16),g=parseInt(hex.substring(3,5),16),b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=Math.min(Math.max(r+amount,0),255),g=Math.min(Math.max(g+amount,0),255),b=Math.min(Math.max(b+amount,0),255);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.330a3478.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.5a011b21.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.b264acc4.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;default:return pattern}}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>rgba});const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}}}]);