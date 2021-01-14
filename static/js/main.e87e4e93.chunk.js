(this["webpackJsonpprojeto-bitcoin"]=this["webpackJsonpprojeto-bitcoin"]||[]).push([[0],{233:function(e,t,n){},267:function(e,t){},276:function(e,t){},294:function(e,t){},296:function(e,t){},313:function(e,t){},314:function(e,t){},378:function(e,t){},380:function(e,t){},389:function(e,t){},391:function(e,t){},416:function(e,t){},418:function(e,t){},419:function(e,t){},425:function(e,t){},438:function(e,t){},450:function(e,t){},453:function(e,t){},458:function(e,t){},469:function(e,t){},472:function(e,t){},526:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(59),s=n.n(c),o=(n(233),n(532)),i=n(60),l=Object(r.createContext)(),u=n(33),d=(n(86),n(14)),p={border:"1px solid #f79007",borderRadius:"5px",marginRight:"auto",marginLeft:"auto",width:"70%",paddingTop:"20px"};var j=function(e){var t=e.children,n=e.style;return Object(a.jsx)(d.a,{style:Object(u.a)(Object(u.a)({},p),n),children:t})},b=n(32),h=n(19),x=n(31);var m=function(){var e=Object(r.useContext)(l).setKey;return Object(a.jsxs)(j,{children:[Object(a.jsx)("h1",{className:"text-center mt-4 mb-4",children:"Welcome to Token Creator Wizard"}),Object(a.jsx)(x.a,{className:"justify-content-md-center",children:Object(a.jsxs)(d.a.Group,{as:x.a,className:"text-center mt-2 mb-2",style:{paddingTop:"20px",width:"100vw"},children:[Object(a.jsx)(h.a,{md:"6",children:Object(a.jsx)(d.a.Check,{defaultChecked:!0,column:"true",id:"token-type",label:"Fixed Supply ERC-20",name:"token",required:!0,style:{paddingBottom:"20px",paddingTop:"15px"},type:"radio",value:"token"})}),Object(a.jsx)(d.a.Text,{style:{paddingBottom:"20px",paddingTop:"15px"},children:"Total supply is created on contract deployment, making the supply fixed."})]})}),Object(a.jsx)(d.a.Group,{as:x.a,inline:"true",className:"justify-content-center",children:Object(a.jsx)(h.a,{xs:"auto",sm:{span:10,offset:4},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",type:"button",onClick:function(){e("attributes")},children:"Next"})})})]})},f=n(15),O=n.n(f),y=n(23),v=n(82),g=n(24),w={paddingBottom:"20px",paddingTop:"15px"},k={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},T={paddingBottom:"30px",textAlign:"left"};var C=function(){var e=Object(r.useContext)(l),t=e.setKey,n=e.setTokenData,c=Object(r.useState)({}),s=Object(g.a)(c,2),o=s[0],i=s[1],p=function(e){var t=e.target;i(Object(u.a)(Object(u.a)({},o),{},Object(v.a)({},t.name,t.value)))},m=function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(o),t("payment");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(j,{children:Object(a.jsxs)(d.a.Group,{as:x.a,className:"text-center md-4",style:{paddingTop:"20px"},children:[Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"name",style:w,children:"Token Name"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:k,plaintext:!0,type:"text",placeholder:"Token name*",id:"name",name:"name",label:"Token name",onChange:p}),Object(a.jsx)(d.a.Text,{id:"nameHelpBlock",style:T,children:"The name of the token, 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"symbol",style:w,children:"Token Symbol"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:k,plaintext:!0,type:"text",placeholder:"Token symbol*",id:"symbol",name:"symbol",onChange:p}),Object(a.jsx)(d.a.Text,{style:T,children:"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"supply",style:w,children:"Total Supply"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:k,plaintext:!0,type:"number",placeholder:"Total supply*",id:"supply",name:"supply",min:1,max:1e15,step:1,onChange:p}),Object(a.jsx)(d.a.Text,{style:T,children:"Total amount of tokens to be generated. Minimum value is 1, and maximum maximum 1000000000000000000."})]}),Object(a.jsx)(h.a,{md:{span:0,offset:2},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"danger",column:"true",type:"button",onClick:function(){t("token")},children:"Back"})}),Object(a.jsx)(h.a,{md:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",column:"true",type:"button",onClick:m,children:"Next"})})]})})},N=n(84),S=n.n(N),A="https://rei-btc.herokuapp.com/",B=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.owner,a=t.name,r=t.symbol,c=t.supply,/^0x[a-fA-F0-9]{40}$/.test(n)){e.next=4;break}throw new Error("Invalid address format");case 4:if(!(a.length<3||a.length>25)){e.next=6;break}throw new Error("Invalid name length");case 6:if(!(r.length<3||r.length>4)){e.next=8;break}throw new Error("Invalid symbol length");case 8:if(!(c<1||c>1e15)){e.next=10;break}throw new Error("Invalid supply");case 10:return e.next=12,S.a.post(A,t);case 12:return e.abrupt("return",e.sent);case 15:e.prev=15,e.t0=e.catch(0),s=e.t0.message,alert(s);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(O.a.mark((function e(t,n){var a,r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.hash,r={"Content-Type":"application/json",Authorization:n},e.prev=2,e.next=5,S.a.post("".concat(A,"payment"),{hash:a},{headers:r});case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"Content-Type":"application/json",Authorization:t},e.prev=1,e.next=4,S.a.post("".concat(A,"confirm"),{},{headers:n});case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(O.a.mark((function e(t,n,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){t.request({method:n,params:a}).then((function(t){e(t)})).catch((function(e){console.error(e),r()}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(y.a)(O.a.mark((function e(a,r){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=setInterval(Object(y.a)(O.a.mark((function e(){var s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(t,"eth_getTransactionByHash",[n]);case 3:s=e.sent,null!==(o=s.blockHash)&&(clearInterval(c),a(o)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),clearInterval(c),r();case 12:case 13:case"end":return e.stop()}}),e,null,[[0,8]])}))),3e3);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=n(85),K={paddingBottom:"20px",paddingTop:"15px"},D={display:"flex",alignItems:"flex-end",justifyContent:"center"};var F=function(){var e=Object(r.useContext)(l),t=e.setKey,n=e.ethereum,c=e.accounts,s=e.tokenData,o=e.setTokenData,i=e.setJwt,p=e.jwt,m=Object(r.useState)(null),f=Object(g.a)(m,2),v=f[0],w=f[1],k=Object(r.useState)(!1),T=Object(g.a)(k,2),C=T[0],N=T[1];Object(r.useEffect)((function(){try{var e=function(e){if(""!==e)try{return JSON.parse(atob(e.split(".")[1])).payload}catch(n){var t=n.message;alert(t)}}(p).payment;w(e)}catch(t){w(null)}}),[p]);var S=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(s);case 3:t=e.sent,n=t.data.token,i(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(O.a.mark((function e(){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L.utils.toWei(v.amount),r=[{from:s.owner,to:v.address,value:L.utils.toHex(a)}],e.next=4,H(n,"eth_sendTransaction",r);case 4:return c=e.sent,N(!0),e.next=8,I(n,L.utils.toHex(c));case 8:o(Object(u.a)(Object(u.a)({},s),{},{hash:c})),t("confirmation");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return C?Object(a.jsx)(j,{children:Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"DO NOT REFRESH OR LEAVE THIS PAGE!"}),Object(a.jsx)("p",{children:"Refreshing or leaving the page will invalid contract deployment"})]})}):Object(a.jsxs)(j,{children:[Object(a.jsx)(d.a.Group,{as:x.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsx)(h.a,{className:"text-center",md:12,children:Object(a.jsxs)(d.a.Group,{as:h.a,style:D,children:[Object(a.jsxs)("div",{style:{width:"60%"},children:[Object(a.jsx)(d.a.Label,{column:"true",htmlFor:"wallet_select",style:K,children:"Wallet to deploy"}),Object(a.jsxs)(d.a.Control,{as:"select",id:"wallet_select",defaultValue:"",onChange:function(e){var t=e.target;o(Object(u.a)(Object(u.a)({},s),{},{owner:t.value}))},children:[Object(a.jsx)("option",{value:"",children:"Choose Wallet..."}),c.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]})]}),Object(a.jsx)("div",{style:{width:"20%"},children:Object(a.jsx)(b.a,{variant:"info",column:"true",type:"button",onClick:S,children:"Generate Payment"})})]})})}),v?Object(a.jsx)(d.a.Group,{as:x.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsxs)(h.a,{className:"text-center",md:12,children:[Object(a.jsxs)("p",{children:["O valor total para a cria\xe7\xe3o do seu token \xe9: ",Object(a.jsx)("span",{children:"".concat(v.amount," eth")}),". Clique no bot\xe3o abaixo para confirmar a transa\xe7\xe3o"]}),Object(a.jsx)(b.a,{variant:"success",column:"true",type:"button",onClick:A,children:"Confirm Payment"})]})}):"",Object(a.jsx)(d.a.Group,{as:x.a,controlId:"formHorizontal",className:"text-center mt-4 mb-4",children:Object(a.jsx)(h.a,{sm:{span:0,offset:2},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"danger",column:"true",type:"button",onClick:function(){t("attributes")},children:"Back"})})})]})},G={paddingBottom:"20px",paddingTop:"15px"},P={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},J={paddingBottom:"30px",textAlign:"left"};var _=function(){var e=Object(r.useContext)(l),t=e.setKey,n=e.tokenData,c=e.jwt,s=e.setJwt,o=function(){var e=Object(y.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n,c);case 2:a=e.sent,s(a.token),t("loading");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(j,{children:[Object(a.jsx)("h2",{className:"text-center mt-4 mb-4",children:"Please confirm token creator parameters:"}),Object(a.jsxs)(d.a.Group,{as:x.a,className:"text-center mt-4 mb-4",children:[Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"name",style:G,children:"Token Name"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:P,plaintext:!0,type:"text",value:n.name,id:"name",name:"tname",label:"Token name"}),Object(a.jsx)(d.a.Text,{id:"passwordHelpBlock",style:J,children:"The name of the token, 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"symbol",style:G,children:"Token Symbol"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:P,plaintext:!0,type:"text",id:"symbol",value:n.symbol}),Object(a.jsx)(d.a.Text,{style:J,children:"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"supply",style:G,children:"Total Supply"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:P,plaintext:!0,type:"text",id:"supply",value:n.supply}),Object(a.jsx)(d.a.Text,{style:J,children:"Total amount of tokens to be generated. Minimum value is 1, and maximum maximum 1000000000000000000."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"owner",style:G,children:"Owner"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:P,plaintext:!0,type:"text",id:"owner",value:n.owner}),Object(a.jsx)(d.a.Text,{style:J,children:"Owner Address"})]}),Object(a.jsx)(h.a,{sm:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"success",type:"button",name:"finish",onClick:o,children:"Confirm"})})]})]})},z={display:"flex",minHeight:"50vh",flexDirection:"column",justifyContent:"space-around",alignItems:"center"};var W=function(){var e=Object(r.useContext)(l),t=e.jwt,n=e.setKey,c=Object(r.useState)(null),s=Object(g.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)(null),d=Object(g.a)(u,2),p=d[0],b=d[1],h=function(){var e=Object(y.a)(O.a.mark((function e(){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:a=e.sent,r=a.address,c=a.hash,i(r),b(c),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Invalid request"),n("token");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t&&h()}),[t]),Object(a.jsxs)(j,{style:z,children:[Object(a.jsx)("div",{children:o&&p?Object(a.jsx)("h2",{children:" Success! Your contract has been deployed "}):Object(a.jsx)("h2",{children:" Your contract is being deployed..."})}),o&&p?Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"Contract information"}),Object(a.jsx)("p",{children:"Use these informations to interact with your contract"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/address/".concat(o),className:"btn btn-info",rel:"noreferrer",target:"_blank",style:{marginRight:"8px"},children:"Contract Address"}),Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/tx/".concat(p),rel:"noreferrer",target:"_blank",className:"btn btn-info",style:{marginRight:"8px"},children:"Hash"}),Object(a.jsx)("button",{type:"button",className:"btn btn-success",style:{marginRight:"8px"},children:"Download Contract"})]})]}):Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"DO NOT REFRESH OR LEAVE THIS PAGE!"}),Object(a.jsx)("p",{children:"Refreshing or leaving the page will invalid contract deployment"})]})]})},q=n.p+"static/media/reibitCripto.6c6de18b.png";var M=function(){return Object(a.jsx)("div",{style:{width:"100%",height:"100px",backgroundColor:"#101010"},children:Object(a.jsxs)("div",{style:{width:"1000px",height:"100%",display:"block",margin:"0 auto"},children:[Object(a.jsx)("div",{style:{height:"100%",display:"table",float:"left",margin:"0 350px"},children:Object(a.jsx)("h1",{style:{color:"#f79007",height:"100%",display:"table-cell",verticalAlign:"middle",fontSize:"32px"},children:"Rei do BitCoin"})}),Object(a.jsx)("div",{style:{float:"right",height:"100%"},children:Object(a.jsx)("div",{style:{height:"100%",display:"table",float:"left",padding:"0px 20px",margin:"0 -400px"},children:Object(a.jsx)("img",{src:q,alt:"Reibit-Cripto",width:"100px",style:{display:"table-cell",verticalAlign:"middle",height:"100%"}})})})]})})},V={marginLeft:"auto",marginRight:"auto",width:"100vw",paddingTop:"20px",paddingBottom:"20px"};var Y=function(){var e=Object(r.useContext)(l),t=e.key,n=e.setKey;return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{}),Object(a.jsxs)(o.a,{id:"controlled-tab-example",activeKey:t,onSelect:function(e){return n(e)},className:"justify-content-center",variant:"pills",style:V,children:[Object(a.jsx)(i.Tab,{eventKey:"token",title:"Token Type",children:"token"===t?Object(a.jsx)(m,{onSelect:function(e){return n(e)},style:{backgroundColor:"#f79007"}}):Object(a.jsx)("div",{})}),Object(a.jsx)(i.Tab,{eventKey:"attributes",title:"Token Attributes",disabled:!0,children:"attributes"===t?Object(a.jsx)(C,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(i.Tab,{eventKey:"payment",title:"Payment Details",disabled:!0,children:"payment"===t?Object(a.jsx)(F,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(i.Tab,{eventKey:"confirmation",title:"Confirmation",disabled:!0,children:"confirmation"===t?Object(a.jsx)(_,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})}),Object(a.jsx)(i.Tab,{eventKey:"loading",title:"Deploying",disabled:!0,children:"loading"===t?Object(a.jsx)(W,{onSelect:function(e){return n(e)}}):Object(a.jsx)("div",{})})]})]})};var U=function(e){var t=e.children,n=Object(r.useState)("token"),c=Object(g.a)(n,2),s=c[0],o=c[1],i=Object(r.useState)({}),u=Object(g.a)(i,2),d=u[0],p=u[1],j=Object(r.useState)(""),b=Object(g.a)(j,2),h=b[0],x=b[1],m=Object(r.useState)({}),f=Object(g.a)(m,2),O=f[0],y=f[1],v=Object(r.useState)([]),w=Object(g.a)(v,2),k=w[0],T=w[1];Object(r.useEffect)((function(){window.ethereum&&(y(window.ethereum),window.web3.version.getNetwork((function(e,t){if(!e)try{if(3!==Number(t))return alert("Mude a rede para Ropten antes de continuar!");window.ethereum.enable(),T(window.web3.eth.accounts)}catch(n){console.error(n)}})))}),[O]);var C={accounts:k,ethereum:O,jwt:h,key:s,setJwt:x,setKey:o,setTokenData:p,tokenData:d};return Object(a.jsx)(l.Provider,{value:C,children:t})};n(525);s.a.render(Object(a.jsx)(U,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.e87e4e93.chunk.js.map