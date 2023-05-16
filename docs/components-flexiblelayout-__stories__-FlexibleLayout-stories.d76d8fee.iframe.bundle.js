"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[3633],{"./src/components/flexiblelayout/__stories__/FlexibleLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FlexibleLayout_stories});var Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts"),colors=__webpack_require__("./src/constants/colors.ts");const flexibleLayoutCell=(0,emotion_react_browser_esm.iv)("background-color:",colors.Cj,";padding:1rem;",""),FlexibleLayout=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e4jilhx5"})("display:grid;height:100%;width:100%;grid-template-areas:'header' 'main-content' 'sidebar-left' 'sidebar-right' 'footer';grid-template-columns:1fr;grid-template-rows:auto auto 1fr auto auto;background-color:",colors.Cj,";@media only screen and (min-width: ",breakpoints.k4,"px){grid-template-areas:'header header header' 'sidebar-left main-content sidebar-right' 'footer footer footer';grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;}"),Header=(0,emotion_styled_base_browser_esm.Z)("header",{target:"e4jilhx4"})("grid-area:header;",flexibleLayoutCell,";"),Footer=(0,emotion_styled_base_browser_esm.Z)("footer",{target:"e4jilhx3"})("grid-area:footer;",flexibleLayoutCell,";"),SidebarLeft=(0,emotion_styled_base_browser_esm.Z)("aside",{target:"e4jilhx2"})("grid-area:sidebar-left;",flexibleLayoutCell,";"),SidebarRight=(0,emotion_styled_base_browser_esm.Z)("aside",{target:"e4jilhx1"})("grid-area:sidebar-right;",flexibleLayoutCell,";"),Content=(0,emotion_styled_base_browser_esm.Z)("main",{target:"e4jilhx0"})("grid-area:main-content;",flexibleLayoutCell,";");try{FlexibleLayout.displayName="FlexibleLayout",FlexibleLayout.__docgenInfo={description:"",displayName:"FlexibleLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#FlexibleLayout"]={docgenInfo:FlexibleLayout.__docgenInfo,name:"FlexibleLayout",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#FlexibleLayout"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}try{SidebarLeft.displayName="SidebarLeft",SidebarLeft.__docgenInfo={description:"",displayName:"SidebarLeft",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#SidebarLeft"]={docgenInfo:SidebarLeft.__docgenInfo,name:"SidebarLeft",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#SidebarLeft"})}catch(__react_docgen_typescript_loader_error){}try{SidebarRight.displayName="SidebarRight",SidebarRight.__docgenInfo={description:"",displayName:"SidebarRight",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#SidebarRight"]={docgenInfo:SidebarRight.__docgenInfo,name:"SidebarRight",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#SidebarRight"})}catch(__react_docgen_typescript_loader_error){}try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.styled.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"src/components/flexiblelayout/FlexibleLayout.styled.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const FlexibleLayout_FlexibleLayout=(0,react.forwardRef)(((_ref,ref)=>{let{children,className,id,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(FlexibleLayout,{ref,id,className:(0,classNames.A)(className,"flexible-layout-root",commonClassNames.Z),...rest,children})})),LayoutHeader=_ref2=>{let{children,className,id,...rest}=_ref2;return(0,theme_ui_jsx_runtime_esm.tZ)(Header,{id,className:(0,classNames.A)(className,"flexible-layout-header","flexible-layout-child-cell",commonClassNames.Z),...rest,children})};LayoutHeader.displayName="LayoutHeader";const LayoutFooter=_ref3=>{let{children,className,id,...rest}=_ref3;return(0,theme_ui_jsx_runtime_esm.tZ)(Footer,{id,className:(0,classNames.A)(className,"flexible-layout-footer","flexible-layout-child-cell",commonClassNames.Z),...rest,children})};LayoutFooter.displayName="LayoutFooter";const LayoutSidebarLeft=_ref4=>{let{children,className,id,...rest}=_ref4;return(0,theme_ui_jsx_runtime_esm.tZ)(SidebarLeft,{id,className:(0,classNames.A)(className,"flexible-layout-sidebar-left","flexible-layout-child-cell",commonClassNames.Z),...rest,children})};LayoutSidebarLeft.displayName="LayoutSidebarLeft";const LayoutSidebarRight=_ref5=>{let{children,className,id,...rest}=_ref5;return(0,theme_ui_jsx_runtime_esm.tZ)(SidebarRight,{id,className:(0,classNames.A)(className,"flexible-layout-sidebar-right","flexible-layout-child-cell",commonClassNames.Z),...rest,children})};LayoutSidebarRight.displayName="LayoutSidebarRight";const LayoutMain=_ref6=>{let{children,className,id,...rest}=_ref6;return(0,theme_ui_jsx_runtime_esm.tZ)(Content,{id,className:(0,classNames.A)(className,"flexible-layout-main-content","flexible-layout-child-cell",commonClassNames.Z),...rest,children})};LayoutMain.displayName="LayoutMain",FlexibleLayout_FlexibleLayout.displayName="FlexibleLayout";try{FlexibleLayout_FlexibleLayout.displayName="FlexibleLayout",FlexibleLayout_FlexibleLayout.__docgenInfo={description:"FlexibleLayout with header, footer, sidebar, and content. Used for the main layout of the app. Similar to old school HTML tables.\nUses CSS Grid and media queries to change the layout at different breakpoints. Use `sx` prop to modify the layout.\n\nIncludes `LayoutHeader`, `LayoutFooter`, `LayoutSidebarLeft`, `LayoutSidebarRight`, and `LayoutMain`.\nMust be wrapped in `FlexibleLayout`.\nEach of these components can be used individually. The order of the components does not matter.",displayName:"FlexibleLayout",props:{children:{defaultValue:{value:"undefined"},description:"The content of the section.",name:"children",required:!0,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/flexiblelayout/FlexibleLayout.tsx#FlexibleLayout"]={docgenInfo:FlexibleLayout_FlexibleLayout.__docgenInfo,name:"FlexibleLayout",path:"src/components/flexiblelayout/FlexibleLayout.tsx#FlexibleLayout"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlexibleLayout_stories={title:"Layout/FlexibleLayout",component:FlexibleLayout_FlexibleLayout,argTypes:{children:{control:!1}}},Basic={args:{sx:{"& .flexible-layout-child-cell":{border:"1px solid black",backgroundColor:"lightgray"}}},render:args=>(0,jsx_runtime.jsxs)(FlexibleLayout_FlexibleLayout,{...args,children:[(0,jsx_runtime.jsx)(LayoutHeader,{children:(0,jsx_runtime.jsx)(Text.x,{variant:"h4",children:"90s Nostalgia Zone"})}),(0,jsx_runtime.jsx)(LayoutFooter,{children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"© 1999 - 90s Nostalgia Zone"})}),(0,jsx_runtime.jsx)(LayoutSidebarLeft,{children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:"Home"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:"TV Shows"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:"Music"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:"Fashion"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:"Toys & Games"})})]})}),(0,jsx_runtime.jsxs)(LayoutSidebarRight,{children:[(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"What's your favorite 90s sitcom?"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"sitcom"})," Friends"]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"sitcom"})," Seinfeld"]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"sitcom"})," The Fresh Prince of Bel-Air"]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:"sitcom"})," Frasier"]})]}),(0,jsx_runtime.jsx)("button",{children:"Vote"})]}),(0,jsx_runtime.jsxs)(LayoutMain,{children:[(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"Welcome to the 90s Nostalgia Zone!"}),(0,jsx_runtime.jsx)("p",{children:"Take a trip down memory lane and relive the best decade ever! Our website is dedicated to everything that made the 90s unique - from our favorite TV shows and music, to the toys and games we loved to play. So, grab a Surge soda, put on your LA Lights sneakers, and let's dive into the world of 90s nostalgia!"})]})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    sx: {\n      \'& .flexible-layout-child-cell\': {\n        border: \'1px solid black\',\n        backgroundColor: \'lightgray\'\n      }\n    }\n  },\n  render: args => <FlexibleLayout {...args}>\n            <LayoutHeader>\n                <Text variant="h4">90s Nostalgia Zone</Text>\n            </LayoutHeader>\n            <LayoutFooter>\n                <Text variant="paragraph">© 1999 - 90s Nostalgia Zone</Text>\n            </LayoutFooter>\n            <LayoutSidebarLeft>\n                <ul>\n                    <li>\n                        <a href="#" onClick={e => e.preventDefault()}>\n                            Home\n                        </a>\n                    </li>\n                    <li>\n                        <a href="#" onClick={e => e.preventDefault()}>\n                            TV Shows\n                        </a>\n                    </li>\n                    <li>\n                        <a href="#" onClick={e => e.preventDefault()}>\n                            Music\n                        </a>\n                    </li>\n                    <li>\n                        <a href="#" onClick={e => e.preventDefault()}>\n                            Fashion\n                        </a>\n                    </li>\n                    <li>\n                        <a href="#" onClick={e => e.preventDefault()}>\n                            Toys & Games\n                        </a>\n                    </li>\n                </ul>\n            </LayoutSidebarLeft>\n            <LayoutSidebarRight>\n                <Text variant="paragraph">What\'s your favorite 90s sitcom?</Text>\n                <ul>\n                    <li>\n                        <input type="radio" name="sitcom" /> Friends\n                    </li>\n                    <li>\n                        <input type="radio" name="sitcom" /> Seinfeld\n                    </li>\n                    <li>\n                        <input type="radio" name="sitcom" /> The Fresh Prince of Bel-Air\n                    </li>\n                    <li>\n                        <input type="radio" name="sitcom" /> Frasier\n                    </li>\n                </ul>\n                <button>Vote</button>\n            </LayoutSidebarRight>\n            <LayoutMain>\n                <Text variant="paragraph">Welcome to the 90s Nostalgia Zone!</Text>\n                <p>\n                    Take a trip down memory lane and relive the best decade ever! Our\n                    website is dedicated to everything that made the 90s unique - from our\n                    favorite TV shows and music, to the toys and games we loved to play.\n                    So, grab a Surge soda, put on your LA Lights sneakers, and let\'s dive\n                    into the world of 90s nostalgia!\n                </p>\n            </LayoutMain>\n        </FlexibleLayout>\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]}}]);