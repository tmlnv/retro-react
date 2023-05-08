"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[7714],{"./src/components/background/__stories__/Background.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Background_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts");const Background=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e1b562l90"})("background-color:",(_ref=>{let{$color}=_ref;return $color}),";background-image:",(_ref2=>{let{$backgroundImage}=_ref2;return $backgroundImage&&`url(${$backgroundImage})`}),";background-repeat:",(_ref3=>{let{$backgroundRepeat}=_ref3;return $backgroundRepeat}),";background-size:",(_ref4=>{let{$backgroundSize}=_ref4;return $backgroundSize}),";background-position:",(_ref5=>{let{$backgroundPosition}=_ref5;return $backgroundPosition}),";background-attachment:fixed;width:100%;min-height:100%;position:relative;top:0;left:0;");try{Background.displayName="Background",Background.__docgenInfo={description:"",displayName:"Background",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$backgroundImage:{defaultValue:null,description:"",name:"$backgroundImage",required:!1,type:{name:"string"}},$backgroundRepeat:{defaultValue:null,description:"",name:"$backgroundRepeat",required:!1,type:{name:"string"}},$backgroundSize:{defaultValue:null,description:"",name:"$backgroundSize",required:!1,type:{name:"string"}},$backgroundPosition:{defaultValue:null,description:"",name:"$backgroundPosition",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/background/Background.styled.tsx#Background"]={docgenInfo:Background.__docgenInfo,name:"Background",path:"src/components/background/Background.styled.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Background_Background=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="darkseagreen",backgroundImage,backgroundRepeat,backgroundSize,backgroundPosition,sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Background,{$color:color,$backgroundImage:backgroundImage,$backgroundRepeat:backgroundRepeat,$backgroundSize:backgroundSize,$backgroundPosition:backgroundPosition,ref,id,sx,className:(0,classNames.A)("background-root",className,commonClassNames.Z),...rest,children:(0,theme_ui_jsx_runtime_esm.tZ)("div",{style:{position:"relative"},children})})}));Background_Background.displayName="Background";try{Background_Background.displayName="Background",Background_Background.__docgenInfo={description:"The Background component is used to display a background.\nIt can be used to display a background image or a background color.\nIt accepts `children` prop that will be displayed on top of the background.\nBackground will take the full width and height of its parent.",displayName:"Background",props:{color:{defaultValue:{value:"darkseagreen"},description:"The background color of the Background.",name:"color",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"The background image of the Background.",name:"backgroundImage",required:!1,type:{name:"string"}},backgroundRepeat:{defaultValue:null,description:"The background repeat property of the Background.",name:"backgroundRepeat",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"repeat"'},{value:'"no-repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'},{value:'"initial"'},{value:'"unset"'}]}},backgroundSize:{defaultValue:null,description:"The background size property of the Background.",name:"backgroundSize",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'},{value:'"initial"'},{value:'"unset"'},{value:'"cover"'},{value:'"contain"'}]}},backgroundPosition:{defaultValue:null,description:"The background position property of the Background.",name:"backgroundPosition",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"unset"'},{value:'"left top"'},{value:'"left center"'},{value:'"left bottom"'},{value:'"right top"'},{value:'"right center"'},{value:'"right bottom"'},{value:'"center top"'},{value:'"center center"'},{value:'"center bottom"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/background/Background.tsx#Background"]={docgenInfo:Background_Background.__docgenInfo,name:"Background",path:"src/components/background/Background.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Background_stories={title:"Components/Background",component:Background_Background},Basic={args:{color:"#000",backgroundImage:"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_acos520_potw2317a.jpg",backgroundRepeat:"repeat",backgroundSize:"cover",backgroundPosition:"center center"},render:args=>{const textSx={color:"white",p:5},content=['"I want it that way" - Backstreet Boys','"I\'ll be there for you" - Friends','"Life is like a box of chocolates..." - Forrest Gump','"You\'ve got mail!" - AOL','"Show me the money!" - Jerry Maguire','"I\'m the king of the world!" - Titanic',"\"I'll make him an offer he can't refuse.\" - The Godfather",'"...Baby One More Time" - Britney Spears','"Smells Like Teen Spirit" - Nirvana','"You can\'t touch this." - MC Hammer'];return(0,jsx_runtime.jsx)(Container.W,{sx:{width:"100%",height:"500px",overflow:"auto"},children:(0,jsx_runtime.jsx)(Background_Background,{...args,children:content.map(((text,index)=>(0,jsx_runtime.jsx)(Text.x,{sx:textSx,children:text},index)))})})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: '#000',\n    backgroundImage: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_acos520_potw2317a.jpg',\n    backgroundRepeat: 'repeat',\n    backgroundSize: 'cover',\n    backgroundPosition: 'center center'\n  },\n  render: args => {\n    const textSx = {\n      color: 'white',\n      p: 5\n    };\n    const content = [`\"I want it that way\" - Backstreet Boys`, `\"I'll be there for you\" - Friends`, `\"Life is like a box of chocolates...\" - Forrest Gump`, `\"You've got mail!\" - AOL`, `\"Show me the money!\" - Jerry Maguire`, `\"I'm the king of the world!\" - Titanic`, `\"I'll make him an offer he can't refuse.\" - The Godfather`, `\"...Baby One More Time\" - Britney Spears`, `\"Smells Like Teen Spirit\" - Nirvana`, `\"You can't touch this.\" - MC Hammer`];\n    return <Container sx={{\n      width: '100%',\n      height: '500px',\n      overflow: 'auto'\n    }}>\n                <Background {...args}>\n                    {content.map((text, index) => <Text key={index} sx={textSx}>\n                            {text}\n                        </Text>)}\n                </Background>\n            </Container>;\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw0"})("width:100%;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.cC,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.k4,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=_ref=>{let{fluid=!1,className,children,...rest}=_ref;const classes=(0,classNames.A)("container-root",fluid?"container-fluid":"",className,commonClassNames.Z);return fluid?(0,theme_ui_jsx_runtime_esm.tZ)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.tZ)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts");const Text=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;color:",(props=>props.$color),";",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>{switch(props.$variant){case"h1":return"\n\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 6rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 7rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 8rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 9rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h2":return"\n\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 3.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 4rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 4.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h3":return"\n\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.375rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 3rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h4":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 1.125rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.75rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h5":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"h6":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 700;\n\t\t\n\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\tfont-size: 0.625rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) {\n\t\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\t\t\t\t\t";case"body1":return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.5rem;\n\t\t\t\t\t}";case"body2":return"\n\t\t\t\t\tfont-size: 0.75rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1536px) {\n\t\t\t\t\t\tfont-size: 1.75rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 1792px) {\n\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t}\n\n\t\t\t\t\t@media (min-width: 2048px) {\n\t\t\t\t\t\tfont-size: 2.25rem;\n\t\t\t\t\t}";case"paragraph":return"\n\t\t\t\t\tfont-size: 0.5rem;\n\t\t\t\t\tfont-weight: 400;\n\n\t\t\t\t  @media (max-width: 480px) { \n\t\t\t\t\t\tfont-size: 0.875rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 481px) and (max-width: 767px) { \n\t\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 768px) {\n\t\t\t\t\t\tfont-size: 1.125rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1024px) {\n\t\t\t\t\t\tfont-size: 1.25rem; \n\t\t\t\t\t}\n\t\t\t\n\t\t\t\t\t@media (min-width: 1280px) {\n\t\t\t\t\t\tfont-size: 1.375rem; \n\t\t\t\t\t}\n\t\t\t\t\t";default:return"\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t"}}),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="darkseagreen",variant="body1",bevel=!1,sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{$bevel:bevel,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags.",displayName:"Text",props:{variant:{defaultValue:{value:"body1"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"darkseagreen"},description:"The color of the Text.",name:"color",required:!1,type:{name:"string"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}}}]);