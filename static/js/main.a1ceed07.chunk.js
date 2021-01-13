(this["webpackJsonpprojeto-bitcoin"]=this["webpackJsonpprojeto-bitcoin"]||[]).push([[0],{233:function(e,t,n){},267:function(e,t){},276:function(e,t){},294:function(e,t){},296:function(e,t){},313:function(e,t){},314:function(e,t){},378:function(e,t){},380:function(e,t){},389:function(e,t){},391:function(e,t){},416:function(e,t){},418:function(e,t){},419:function(e,t){},425:function(e,t){},438:function(e,t){},450:function(e,t){},453:function(e,t){},458:function(e,t){},469:function(e,t){},472:function(e,t){},526:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(59),s=n.n(r),o=(n(233),n(532)),i=n(60),l=Object(c.createContext)(),u=n(33),d=(n(85),n(14)),p={border:"1px solid #f79007",borderRadius:"5px",marginRight:"auto",marginLeft:"auto",width:"70%",paddingTop:"20px"};var j=function(e){var t=e.children,n=e.style;return Object(a.jsx)(d.a,{style:Object(u.a)(Object(u.a)({},p),n),children:t})},b=n(26),h=n(19),m=n(32);var x=function(){var e=Object(c.useContext)(l).setKey;return Object(a.jsxs)(j,{children:[Object(a.jsx)("h1",{className:"text-center mt-4 mb-4",children:"Welcome to Token Creator Wizard"}),Object(a.jsx)(m.a,{className:"justify-content-md-center",children:Object(a.jsxs)(d.a.Group,{as:m.a,className:"text-center mt-2 mb-2",style:{paddingTop:"20px",width:"100vw"},children:[Object(a.jsx)(h.a,{md:"6",children:Object(a.jsx)(d.a.Check,{defaultChecked:!0,column:"true",id:"token-type",label:"Fixed Supply ERC-20",name:"token",required:!0,style:{paddingBottom:"20px",paddingTop:"15px"},type:"radio",value:"token"})}),Object(a.jsx)(d.a.Text,{style:{paddingBottom:"20px",paddingTop:"15px"},children:"Total supply is created on contract deployment, making the supply fixed."})]})}),Object(a.jsx)(d.a.Group,{as:m.a,inline:"true",className:"justify-content-center",children:Object(a.jsx)(h.a,{xs:"auto",sm:{span:10,offset:4},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",type:"button",onClick:function(){e("attributes")},children:"Next"})})})]})},f=n(17),O=n.n(f),y=n(25),v=n(82),g=n(29),k={paddingBottom:"20px",paddingTop:"15px"},w={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},T={paddingBottom:"30px",textAlign:"left"};var C=function(){var e=Object(c.useContext)(l),t=e.setKey,n=e.setTokenData,r=Object(c.useState)({}),s=Object(g.a)(r,2),o=s[0],i=s[1],p=function(e){var t=e.target;i(Object(u.a)(Object(u.a)({},o),{},Object(v.a)({},t.name,t.value)))},x=function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(o),t("payment");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(j,{children:Object(a.jsxs)(d.a.Group,{as:m.a,className:"text-center md-4",style:{paddingTop:"20px"},children:[Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"name",style:k,children:"Token Name"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:w,plaintext:!0,type:"text",placeholder:"Token name*",id:"name",name:"name",label:"Token name",onChange:p}),Object(a.jsx)(d.a.Text,{id:"nameHelpBlock",style:T,children:"The name of the token, 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"symbol",style:k,children:"Token Symbol"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:w,plaintext:!0,type:"text",placeholder:"Token symbol*",id:"symbol",name:"symbol",onChange:p}),Object(a.jsx)(d.a.Text,{style:T,children:"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"supply",style:k,children:"Total Supply"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{style:w,plaintext:!0,type:"number",placeholder:"Total supply*",id:"supply",name:"supply",min:1,max:1e15,step:1,onChange:p}),Object(a.jsx)(d.a.Text,{style:T,children:"Total amount of tokens to be generated. Minimum value is 1, and maximum maximum 1000000000000000000."})]}),Object(a.jsx)(h.a,{md:{span:0,offset:2},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"danger",column:"true",type:"button",onClick:function(){t("token")},children:"Back"})}),Object(a.jsx)(h.a,{md:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",column:"true",type:"button",onClick:x,children:"Next"})})]})})},N=n(84),S=n.n(N),B="https://rei-btc.herokuapp.com/",A=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,c,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.owner,a=t.name,c=t.symbol,r=t.supply,/^0x[a-fA-F0-9]{40}$/.test(n)){e.next=4;break}throw new Error("Invalid address format");case 4:if(!(a.length<3||a.length>25)){e.next=6;break}throw new Error("Invalid name length");case 6:if(!(c.length<3||c.length>4)){e.next=8;break}throw new Error("Invalid symbol length");case 8:if(!(r<1||r>1e15)){e.next=10;break}throw new Error("Invalid supply");case 10:return e.next=12,S.a.post(B,t);case 12:return e.abrupt("return",e.sent);case 15:e.prev=15,e.t0=e.catch(0),s=e.t0.message,alert(s);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(O.a.mark((function e(t,n){var a,c,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.hash,c={"Content-Type":"application/json",Authorization:n},e.prev=2,e.next=5,S.a.post("".concat(B,"payment"),{hash:a},{headers:c});case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"Content-Type":"application/json",Authorization:t},e.prev=1,e.next=4,S.a.post("".concat(B,"confirm"),{},{headers:n});case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),K=n(123),L={paddingBottom:"20px",paddingTop:"15px"},D={display:"flex",alignItems:"flex-end",justifyContent:"center"};var F=function(){var e=Object(c.useContext)(l),t=e.setKey,n=e.ethereum,r=e.accounts,s=e.tokenData,o=e.setTokenData,i=e.setJwt,p=e.jwt,x=Object(c.useState)(null),f=Object(g.a)(x,2),v=f[0],k=f[1];Object(c.useEffect)((function(){try{var e=function(e){if(""!==e)try{return JSON.parse(atob(e.split(".")[1])).payload}catch(n){var t=n.message;alert(t)}}(p).payment;k(e)}catch(t){k(null)}}),[p]);var w=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(s);case 3:t=e.sent,n=t.data.token,i(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(y.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=K.utils.toWei(v.amount),n.request({method:"eth_sendTransaction",params:[{from:s.owner,to:v.address,value:K.utils.toHex(a)}]}).then((function(e){o(Object(u.a)(Object(u.a)({},s),{},{hash:e})),t("confirmation")})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(j,{children:[Object(a.jsx)(d.a.Group,{as:m.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsx)(h.a,{className:"text-center",md:12,children:Object(a.jsxs)(d.a.Group,{as:h.a,style:D,children:[Object(a.jsxs)("div",{style:{width:"60%"},children:[Object(a.jsx)(d.a.Label,{column:"true",htmlFor:"wallet_select",style:L,children:"Wallet to deploy"}),Object(a.jsxs)(d.a.Control,{as:"select",id:"wallet_select",defaultValue:"Choose Wallet",onChange:function(e){var t=e.target;o(Object(u.a)(Object(u.a)({},s),{},{owner:t.value}))},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select wallet..."}),r.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]})]}),Object(a.jsx)("div",{style:{width:"20%"},children:Object(a.jsx)(b.a,{variant:"info",column:"true",type:"button",onClick:w,children:"Generate Payment"})})]})})}),v?Object(a.jsx)(d.a.Group,{as:m.a,className:"text-center",style:{paddingTop:"20px"},children:Object(a.jsxs)(h.a,{className:"text-center",md:12,children:[Object(a.jsxs)("p",{children:["O valor total para a cria\xe7\xe3o do seu token \xe9: ",Object(a.jsx)("span",{children:"".concat(v.amount," eth")}),". Clique no bot\xe3o abaixo para confirmar a transa\xe7\xe3o"]}),Object(a.jsx)(b.a,{variant:"success",column:"true",type:"button",onClick:T,children:"Confirm Payment"})]})}):"",Object(a.jsxs)(d.a.Group,{as:m.a,controlId:"formHorizontal",className:"text-center mt-4 mb-4",children:[Object(a.jsx)(h.a,{sm:{span:0,offset:2},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"danger",column:"true",type:"button",onClick:function(){t("attributes")},children:"Back"})}),Object(a.jsx)(h.a,{sm:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",column:"true",type:"button",onClick:w,children:"Next"})})]})]})},G={paddingBottom:"20px",paddingTop:"15px"},H={borderBottom:"1px solid #f79007",borderTop:"none",paddingTop:"10px",paddingLeft:"20px"},I={paddingBottom:"30px",textAlign:"left"};var J=function(){var e=Object(c.useContext)(l),t=e.setKey,n=e.tokenData,r=e.jwt,s=e.setJwt,o=function(){var e=Object(y.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n,r);case 2:a=e.sent,s(a.token),t("loading");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(j,{children:[Object(a.jsx)("h2",{className:"text-center mt-4 mb-4",children:"Please confirm token creator parameters:"}),Object(a.jsxs)(d.a.Group,{as:m.a,className:"text-center mt-4 mb-4",children:[Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"name",style:G,children:"Token Name"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:H,plaintext:!0,type:"text",value:n.name,id:"name",name:"tname",label:"Token name"}),Object(a.jsx)(d.a.Text,{id:"passwordHelpBlock",style:I,children:"The name of the token, 3-25 symbols. Alphanumerical characters, space, and hyphen are accepted."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"symbol",style:G,children:"Token Symbol"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:H,plaintext:!0,type:"text",id:"symbol",value:n.symbol}),Object(a.jsx)(d.a.Text,{style:I,children:"3-4 characters (example ETH, BTC, BAT, etc.). No spaces. Only alphanumerical characters."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"supply",style:G,children:"Total Supply"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:H,plaintext:!0,type:"text",id:"supply",value:n.supply}),Object(a.jsx)(d.a.Text,{style:I,children:"Total amount of tokens to be generated. Minimum value is 1, and maximum maximum 1000000000000000000."})]}),Object(a.jsx)(d.a.Label,{column:"true",md:5,htmlFor:"owner",style:G,children:"Owner"}),Object(a.jsxs)(h.a,{md:6,children:[Object(a.jsx)(d.a.Control,{readOnly:!0,style:H,plaintext:!0,type:"text",id:"owner",value:n.owner}),Object(a.jsx)(d.a.Text,{style:I,children:"Owner Address"})]}),Object(a.jsx)(h.a,{sm:{span:0,offset:2},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"danger",column:"true",type:"button",onClick:function(){t("payment")},children:"Back"})}),Object(a.jsx)(h.a,{sm:{span:6,offset:3},className:"text-center mt-4 mb-4",children:Object(a.jsx)(b.a,{variant:"info",type:"button",name:"finish",onClick:o,children:"Confirm"})})]})]})},P={display:"flex",minHeight:"50vh",flexDirection:"column",justifyContent:"space-around",alignItems:"center"};var z=function(){var e=Object(c.useContext)(l),t=e.jwt,n=e.setKey,r=Object(c.useState)(null),s=Object(g.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(null),d=Object(g.a)(u,2),p=d[0],b=d[1],h=function(){var e=Object(y.a)(O.a.mark((function e(){var a,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:a=e.sent,c=a.address,r=a.hash,i(c),b(r),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Invalid request"),n("token");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(a.jsxs)(j,{style:P,children:[Object(a.jsx)("div",{children:o&&p?Object(a.jsx)("h2",{children:" Your contract is being deployed..."}):Object(a.jsx)("h2",{children:" Success! Your contract has been deployed "})}),o&&p?Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"DO NOT REFRESH OR LEAVE THIS PAGE!"}),Object(a.jsx)("p",{children:"Refreshing or leaving the page will invalid contract deployment"})]}):Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("h3",{children:"Contract information"}),Object(a.jsx)("p",{children:"Use these informations to interact with your contract"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/address/".concat(o),className:"btn btn-info",style:{marginRight:"8px"},children:"Contract Address"}),Object(a.jsx)("a",{href:"https://ropsten.etherscan.io/tx/".concat(p),className:"btn btn-info",style:{marginRight:"8px"},children:"Hash"}),Object(a.jsx)("button",{type:"button",className:"btn btn-success",style:{marginRight:"8px"},children:"Download Contract"})]})]})]})},W=n.p+"static/media/reibitCripto.6c6de18b.png";var q=function(){return Object(a.jsx)("div",{style:{width:"100%",height:"100px",backgroundColor:"#101010"},children:Object(a.jsxs)("div",{style:{width:"1000px",height:"100%",display:"block",margin:"0 auto"},children:[Object(a.jsx)("div",{style:{height:"100%",display:"table",float:"left",margin:"0 350px"},children:Object(a.jsx)("h1",{style:{color:"#f79007",height:"100%",display:"table-cell",verticalAlign:"middle",fontSize:"32px"},children:"Rei do BitCoin"})}),Object(a.jsx)("div",{style:{float:"right",height:"100%"},children:Object(a.jsx)("div",{style:{height:"100%",display:"table",float:"left",padding:"0px 20px",margin:"0 -400px"},children:Object(a.jsx)("img",{src:W,alt:"Reibit-Cripto",width:"100px",style:{display:"table-cell",verticalAlign:"middle",height:"100%"}})})})]})})},M={marginLeft:"auto",marginRight:"auto",width:"100vw",paddingTop:"20px",paddingBottom:"20px"};var _=function(){var e=Object(c.useContext)(l),t=e.key,n=e.setKey;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q,{}),Object(a.jsxs)(o.a,{id:"controlled-tab-example",activeKey:t,onSelect:function(e){return n(e)},className:"justify-content-center",variant:"pills",style:M,children:[Object(a.jsx)(i.Tab,{eventKey:"token",title:"Token Type",children:Object(a.jsx)(x,{onSelect:function(e){return n(e)},style:{backgroundColor:"#f79007"}})}),Object(a.jsx)(i.Tab,{eventKey:"attributes",title:"Token Attributes",disabled:!0,children:Object(a.jsx)(C,{onSelect:function(e){return n(e)}})}),Object(a.jsx)(i.Tab,{eventKey:"payment",title:"Payment Details",disabled:!0,children:Object(a.jsx)(F,{onSelect:function(e){return n(e)}})}),Object(a.jsx)(i.Tab,{eventKey:"confirmation",title:"Confirmation",disabled:!0,children:Object(a.jsx)(J,{onSelect:function(e){return n(e)}})}),Object(a.jsx)(i.Tab,{eventKey:"loading",title:"Deploying",disabled:!0,children:Object(a.jsx)(z,{onSelect:function(e){return n(e)}})})]})]})};var V=function(e){var t=e.children,n=Object(c.useState)("token"),r=Object(g.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)({}),u=Object(g.a)(i,2),d=u[0],p=u[1],j=Object(c.useState)(""),b=Object(g.a)(j,2),h=b[0],m=b[1],x=Object(c.useState)({}),f=Object(g.a)(x,2),O=f[0],y=f[1],v=Object(c.useState)([]),k=Object(g.a)(v,2),w=k[0],T=k[1];Object(c.useEffect)((function(){window.ethereum&&(y(window.ethereum),window.web3.version.getNetwork((function(e,t){if(!e)try{if(3!==Number(t))return alert("Mude a rede para Ropten antes de continuar!");window.ethereum.enable(),T(window.web3.eth.accounts)}catch(n){console.error(n)}})))}),[O]);var C={accounts:w,ethereum:O,jwt:h,key:s,setJwt:m,setKey:o,setTokenData:p,tokenData:d};return Object(a.jsx)(l.Provider,{value:C,children:t})};n(525);s.a.render(Object(a.jsx)(V,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.a1ceed07.chunk.js.map