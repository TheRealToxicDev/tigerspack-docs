(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(174)),c={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},i={id:"getting-started",title:"Getting Started",description:"## Installation",source:"@site/docs/getting-started.mdx",permalink:"/docs/getting-started",editUrl:"https://github.com/tigerspack/tigerspack-docs/edit/master/docs/getting-started.mdx",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Colors",permalink:"/docs/colors"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install Tigerspack using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/en/package/jest"}),Object(o.b)("inlineCode",{parentName:"a"},"yarn")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add tigerspack\n")),Object(o.b)("p",null,"Or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),Object(o.b)("inlineCode",{parentName:"a"},"npm")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install tigerspack\n")),Object(o.b)("p",null,"Note: You can compare ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," and ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," commands in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison"}),"yarn docs, here"),"."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Import the required components. For example for a button this is look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"harmony",harmony:!0}),"import { Alert, Button } from 'tigerspack';\n")),Object(o.b)("p",null,"Then use it in the body of your application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"harmony",harmony:!0}),"const App = () => (\n  <div>\n    <Alert>Press button please</Alert>\n    <Button>Button name</Button>\n  </div>\n)\n")),Object(o.b)("p",null,"See the full list of components and their parameters in the  ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tigerspack.awb.pw/docs/components/alert"}),"documentation"),"."))}s.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);