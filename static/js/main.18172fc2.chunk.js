(this["webpackJsonppixelcade-companion"]=this["webpackJsonppixelcade-companion"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(18),r=a.n(n),l=(a(74),a(75),a(20)),o=a(4),c=a(125),d=a(56),m=a.n(d),j=a(6),u=a.n(j),g=a.p+"static/media/pixelcade.698d1ae2.png",p=a(1);var b=()=>{const e=Object(o.m)(),t=Object(o.o)();return Object(p.jsxs)("div",{style:{backgroundColor:""},children:[Object(p.jsx)(j.Toaster,{}),Object(p.jsx)("div",{className:"layout-grid",style:{backgroundColor:"#000"},children:Object(p.jsx)("img",{style:{objectFit:"scale-down",width:"100%",maxHeight:75},src:g,alt:"Pixelcade Companion Logo"})}),"/"!==e.pathname&&Object(p.jsxs)("div",{className:"layout-grid fade-in",style:{gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))",backgroundColor:"#000"},children:[Object(p.jsxs)("div",{className:"grid-item nav-element",onClick:()=>{t("/")},children:[Object(p.jsx)(c.a,{style:{marginRight:8}}),"HOME"]}),Object(p.jsxs)("div",{className:"grid-item nav-element",onClick:()=>{t(-1)},children:[Object(p.jsx)(m.a,{style:{marginRight:8}}),"GO BACK"]})]})]})};a(80);var h=e=>{const{isLoading:t}=e;return Object(p.jsx)(i.a.Fragment,{children:t&&Object(p.jsx)("div",{className:"loading fade-in",children:Object(p.jsx)("img",{className:"pulse",src:g,alt:"Pixelcade Companion Logo"})})})},x=a(8),y=a.n(x);const O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/v2";return`http://${window.location.host}${e}`},f=e=>{const t=`${O()}/marquees/${e}`;return y.a.get(t).then((e=>e.data))},v=(e,t,a)=>{const s=`${O("")}/arcade/stream/${e}/${t}`;return y.a.post(s)},C=e=>{const t=`${O()}/utility/marquee/set/${e}`;return y.a.get(t)};var S=()=>{const[e,t]=Object(s.useState)(!1),[a,n]=Object(s.useState)([]),r=Object(o.o)();Object(s.useEffect)((()=>{(async()=>{t(!0),await(()=>{const e=`${O()}/info/consoles`;return y.a.get(e).then((e=>e.data))})().then((e=>{n(e.consoles)})).catch().finally((()=>{t(!1)}))})()}),[]);return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(h,{isLoading:e}),Object(p.jsx)("div",{className:"layout-grid",children:a.map(((e,t)=>Object(p.jsxs)("div",{className:"fade-in",style:{backgroundColor:"#456",borderRadius:"4px",padding:".5rem",border:"1px solid #ABABAB",color:"#FFF",cursor:"pointer"},onClick:()=>{r(`/marquees/${e.name}`)},children:[Object(p.jsx)("p",{children:e.descriptiveName}),Object(p.jsxs)("p",{children:[e.numMarquees," Marquees"]})]},t)))})]})};var w=a(57),D=a.n(w),k=a(34);const M=e=>{const[t,a]=Object(s.useState)(!1),{marquee:n}=e,{streamImages:r}=_(),l=()=>{const e="user"===n.apiSystem?n.systemName:n.apiSystem;u.a.promise(v(e,n.filename),{loading:"Updating Marquee",success:"Successfully Updated Marquee",error:"Couldn't set the marquee"})},{onClick:o=l}=e;return Object(p.jsx)(i.a.Fragment,{children:"bad"===n.id?Object(p.jsx)("div",{}):Object(p.jsx)(i.a.Fragment,{children:t?Object(p.jsxs)("div",{className:"grid-item fade-in",style:{backgroundColor:"#4c3ba2",flexDirection:"column",justifyContent:"center",cursor:"pointer",userSelect:"none",fontWeight:600,minHeight:60},onClick:()=>o(),children:[Object(p.jsx)("p",{children:Object(k.startCase)(n.name)}),"user"===n.id&&Object(p.jsx)("span",{style:{position:"absolute",bottom:"0px",right:"0px",backgroundColor:"rgba(0,0,0,.65)",padding:"2px 4px",borderRadius:"4px 0 0 0"},children:Object(k.startCase)(n.systemName)})]}):Object(p.jsxs)(D.a,{height:60,style:{position:"relative"},children:[Object(p.jsx)("img",{className:"grid-item fade-in",src:`${O()}/thumbnails/${n.apiSystem}/${n.filename}`,alt:n.filename,onError:()=>a(!0),style:{backgroundColor:"rgba(255, 255, 255, .05)",cursor:"pointer",position:"relative",minHeight:40},onClick:()=>l()}),"user"===n.id&&Object(p.jsx)("span",{style:{fontWeight:600,position:"absolute",bottom:"0px",right:"0px",backgroundColor:"rgba(0,0,0,.65)",padding:"1px px",borderRadius:"4px 0 0 0"},children:Object(k.startCase)(n.systemName)})]})})})};var N=i.a.memo(M);var T=()=>{const[e,t]=Object(s.useState)(!1),[a,n]=Object(s.useState)([]),{system:r}=Object(o.q)(),[l,c]=Object(s.useState)(""),d=function(e,t){const[a,i]=Object(s.useState)(e);return Object(s.useEffect)((()=>{const a=setTimeout((()=>{i(e)}),t);return()=>clearTimeout(a)}),[e,t]),a}(l,350),{streamImages:m,setStreamImages:j}=_();Object(s.useEffect)((()=>{r&&(t(!0),f(r).then((e=>{const{marquees:t}=e;n(t)})).finally((()=>{t(!1)})))}),[r]);return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(h,{isLoading:e}),!e&&Object(p.jsx)("div",{className:"layout-grid fade-in",children:Object(p.jsx)("input",{value:l,onChange:e=>{c(e.target.value)},placeholder:"Search...",type:"text",id:"fname",name:"fname",style:{minHeight:54,border:"none",borderRadius:4,backgroundColor:"antiquewhite",padding:"0 1rem",fontSize:"1.2rem",width:"100%",boxSizing:"border-box"}})}),Object(p.jsx)("div",{className:"layout-grid fade-in",children:(()=>{let e=null===a||void 0===a?void 0:a.filter((e=>RegExp(`${d}`,"i").test(e.name.toLowerCase().trim())));for(e||(e=[]);e.length<10;)e.push({id:"bad",name:"",filename:"",apiSystem:"",systemName:"",hasVideo:!1,numGIFs:0,systemManufacturer:"",year:0});return e})().map(((e,t)=>Object(p.jsx)(N,{system:r,marquee:e},t)))})]})},P=a(58),q=a(60),$=a.n(q),L=a(61),E=a.n(L),F=a(126);var U=()=>{const e=Object(o.o)();return Object(p.jsxs)("div",{className:"fade-in",children:[Object(p.jsxs)("div",{className:"layout-grid",style:{marginTop:"0.5rem"},children:[Object(p.jsx)("div",{className:"grid-item nav-element",onClick:()=>{e("/consoles")},children:"Browse Marquees"}),Object(p.jsx)("div",{className:"grid-item nav-element",onClick:()=>{e("/text")},children:"Scrolling Text"}),Object(p.jsx)("div",{className:"grid-item nav-element",onClick:()=>{e("/default-marquee")},children:"Set Default Marquee"})]}),Object(p.jsxs)("div",{className:"layout-grid",children:[Object(p.jsxs)("div",{className:"grid-item nav-element",onClick:()=>{e("/settings")},children:[Object(p.jsx)(F.a,{style:{marginRight:8}}),"Device Settings & Log"]}),Object(p.jsxs)("div",{className:"grid-item nav-element",onClick:()=>{u.a.promise((()=>{const e=`${O("")}/shutdown`;return y.a.get(e).then((e=>e.data))})(),{loading:"Attempting Shutdown",success:"Shutdown Succeeded",error:"Shutdown Failed"})},children:[Object(p.jsx)($.a,{style:{marginRight:8}}),"Shutdown"]}),Object(p.jsxs)("div",{className:"grid-item nav-element",onClick:()=>{u.a.promise((()=>{const e=`${O("")}/reboot`;return y.a.get(e).then((e=>e.data))})(),{loading:"Attempting to Reboot",success:"Reboot Succeeded",error:"Reboot Failed"})},children:[Object(p.jsx)(E.a,{style:{marginRight:8}}),"Reboot"]})]})]})},R=a.p+"static/media/default-01.b07219d2.png",G=a.p+"static/media/default-02.f12529b3.png",I=a.p+"static/media/default-03.64d2bd2a.png";const B=e=>{let{x:t,y:a,onDelete:i,onClose:n}=e;return Object(s.useEffect)((()=>{const e=()=>n();return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[n]),Object(p.jsx)("div",{className:"fixed bg-white shadow-lg rounded-lg py-1 w-24 z-50",style:{left:t+10,top:a,backgroundColor:"rgb(255, 0, 0)",border:"1px solid rgb(55, 65, 81)",position:"fixed"},onClick:e=>e.stopPropagation(),children:Object(p.jsx)("div",{className:"px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 cursor-pointer",onClick:i,children:"Delete"})})};var A=()=>{const[e,t]=Object(s.useState)(!1),[a,n]=Object(s.useState)([]),[r,l]=Object(s.useState)({width:1920,height:360}),{streamImages:o}=_(),c=Object(s.useRef)(null),[d,m]=Object(s.useState)(null),j=async()=>{t(!0);try{const e=await f("user"),{marquees:t}=e,a=t.filter((e=>e.filename&&e.systemName&&!e.systemName.startsWith("._")));n(a)}catch(e){console.error("Error loading marquees:",e),u.a.error("Failed to load marquees")}t(!1)};const g=async e=>{if("number"===typeof e&&await u.a.promise(C(e),{loading:"Setting default marquee",success:"Successfully set default marquee",error:"Couldn't set the default marquee"}),"string"===typeof e){const t=e.split("/").pop();t&&await u.a.promise(C(t.replace(".jpg","")),{loading:"Setting default marquee",success:"Successfully set default marquee",error:"Couldn't set the default marquee"})}const t=`default${e}`;await u.a.promise(v("user",t),{loading:"Updating Marquee",success:"Successfully Updated Marquee",error:"Couldn't set the marquee"})};return Object(s.useEffect)((()=>{(async()=>{try{const e=window.location.hostname,t=await fetch(`http://${e}:8080/v2/info`);if(!t.ok)throw new Error("Failed to fetch device info");const a=await t.json();if(a.resolution){const e=1280===a.resolution.width?390:360;l({width:a.resolution.width,height:e})}}catch(e){console.error("Error fetching device info:",e),l({width:1920,height:360})}})(),j()}),[]),Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)("div",{style:{marginLeft:"30px",marginBottom:"10px"},children:[Object(p.jsx)("button",{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.click()},style:{padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Upload Marquee"}),Object(p.jsx)("input",{ref:c,type:"file",accept:".jpg,.jpeg",onChange:async e=>{var t;const a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!a)return;if(!a.type.includes("jpeg")&&!a.type.includes("jpg"))return void u.a.error("Please upload a JPG file");if(s=a.name,!/^[a-zA-Z0-9]+-[a-zA-Z0-9]+\.jpg$/i.test(s))return void u.a.error("Filename must be in format x-y.jpg (e.g., default-sega.jpg)");var s;const i=await(e=>new Promise((t=>{const a=new Image;a.onload=()=>t(a.width===r.width&&a.height===r.height),a.onerror=()=>t(!1),a.src=URL.createObjectURL(e)})))(a);if(!i)return void u.a.error(`Image must be exactly ${r.width}x${r.height} pixels`);const n=new FormData;n.append("file",a);try{if(!(await fetch("/v2/marquees/user",{method:"POST",body:n})).ok)throw new Error("Upload failed");await v("user",a.name.replace(".jpg","")),await j(),u.a.success("Marquee uploaded successfully"),e.target.value=""}catch(l){console.error("Upload error:",l),u.a.error("Failed to upload marquee")}},style:{display:"none"}})]}),Object(p.jsx)("div",{style:{marginLeft:"30px",marginBottom:"20px"},children:Object(p.jsxs)("p",{style:{color:"#d1d5db",fontSize:"14px"},children:["Note: Custom marquee files must follow the naming convention: ",Object(p.jsx)("span",{style:{background:"rgba(0,0,0,0.3)",padding:"4px 8px",borderRadius:"4px",fontFamily:"monospace"},children:"default-yourfilename.jpg"})]})}),Object(p.jsx)("div",{style:{marginLeft:"30px",marginBottom:"20px"},children:Object(p.jsx)("p",{style:{color:"#d1d5db",fontSize:"14px"},children:"Select desired marquee and it will appear by default on startup"})}),Object(p.jsx)(h,{isLoading:e}),Object(p.jsxs)("div",{className:"layout-grid fade-in",children:[Object(p.jsx)("img",{onClick:()=>g(1),style:{backgroundColor:"rgba(255, 255, 255, .05)",cursor:"pointer",position:"relative",minHeight:40},src:R,alt:"marquee 1",className:"grid-item fade-in"}),Object(p.jsx)("img",{onClick:()=>g(2),style:{backgroundColor:"rgba(255, 255, 255, .05)",cursor:"pointer",position:"relative",minHeight:40},src:G,alt:"marquee 2",className:"grid-item fade-in"}),Object(p.jsx)("img",{onClick:()=>g(3),style:{backgroundColor:"rgba(255, 255, 255, .05)",cursor:"pointer",position:"relative",minHeight:40},src:I,alt:"marquee 3",className:"grid-item fade-in"}),a.map((e=>Object(p.jsx)("div",{onContextMenu:t=>{const a=`${e.systemName}-${e.filename}.jpg`;console.log("Full MarqueeInfo item:",e),console.log("Constructed filename for delete:",a),((e,t)=>{e.preventDefault();const a=e.currentTarget.getBoundingClientRect(),s=window.innerWidth;let i=a.right+10;a.right+100>s&&(i=a.left-110),m({x:i,y:a.top,filename:t})})(t,a)},children:Object(p.jsx)(N,{system:"user",marquee:e,onClick:()=>g(e.filename)})},e.filename)))]}),d&&Object(p.jsx)(B,{x:d.x,y:d.y,onDelete:()=>async function(e){const t=window.location.hostname;try{console.log("Attempting to delete:",e);const a=await fetch(`http://${t}:8080/v2/delete?${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json","Access-Control-Allow-Methods":"DELETE"}});console.log("Delete response status:",a.status);const s=await a.text();if(console.log("Delete response:",s),!a.ok)throw new Error(`Delete failed: ${s}`);u.a.success("Marquee deleted successfully"),await j()}catch(a){console.error("Delete error:",a),u.a.error("Failed to delete marquee")}m(null)}(d.filename),onClose:()=>m(null)})]})},W=a(127),H=a(129),z=a(128);const V=["Orbitron-SemiBold","Arial Narrow 7","Benegraphic","Candy Stripe (BRK)","Casio FX-702P","Daddy Longlegs NF","Decoder","DIG DUG","dotty","DPComic","Early GameBoy","Fiddums Family","Ghastly Panic","GilbertC","Gnuolane","Grapevine","Grinched","Handwriting","Harry P","Haunting Attraction","Minimal4","Morris Roman","MostlyMono","Neon 80s","Nintendo DS BIOS","Not So Stout Deco","Paulistana Deco","Pixelated","Pixeled","RetroBoundmini","RM Typerighter medium","Samba Is Dead","Shlop","Space Patrol NF","Star Jedi Hollow","Star Jedi","Still Time","Tall Films Fine","taller","techno overload (BRK)","TR2N","TRON","Vectroid","Videophreak"];var J=a(62),K=a(15);a(106);var Z=()=>{const[e,t]=Object(s.useState)(""),[a,i]=Object(s.useState)(),[n,r]=Object(s.useState)(),[l,o]=Object(s.useState)("");Object(s.useEffect)((()=>{(()=>{const e=`${O()}/info`;return y.a.get(e).then((e=>e.data))})().then((e=>{t(e.name),r(e)})),(()=>{const e=`${O("")}/settings?key=getSettings`;return y.a.get(e).then((e=>e.data))})().then((e=>{i(e)})).catch()}),[]),Object(s.useEffect)((()=>{const e=async()=>{try{const e=window.location.hostname,t=await fetch(`http://${e}:8080/v2/log`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const a=await t.text();o(a)}catch(e){o("Error loading log file: "+(e instanceof Error?e.message:String(e)))}};e();const t=setInterval(e,5e3);return()=>clearInterval(t)}),[]);const c=e=>Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:e})}),d=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=ImageMarqueesOnly&value=${e?"yes":"no"}`;return y.a.get(t).then((e=>e.data))})(!a.ImageMarqueesOnly),{loading:"Updating video marquees settings",success:()=>(i({...a,ImageMarqueesOnly:!a.ImageMarqueesOnly}),c("Video marquees settings updated")),error:"Setting failed"},{duration:4e3})},m=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=PixelcadeOLEDGlitch&value=${e?"yes":"no"}`;return y.a.get(t).then((e=>e.data))})(!a.PixelcadeOLEDGlitch),{loading:"Updating Mini OLED Glitch Mode",success:()=>(i({...a,PixelcadeOLEDGlitch:!a.PixelcadeOLEDGlitch}),c("Mini OLED Glitch Mode Updated")),error:"Mini OLED Glitch Mode Update Failed"},{duration:4e3})},j=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=SubDisplayScrollingOnly&value=${e?"yes":"no"}`;return y.a.get(t).then((e=>e.data))})(!a.SubDisplayScrollingOnly),{loading:"Updating Text scrolling settings",success:()=>(i({...a,SubDisplayScrollingOnly:!a.SubDisplayScrollingOnly}),c("Text scrolling settings updated")),error:"Setting failed"},{duration:4e3})},g=()=>{u.a.promise((e=>{const t=`${O("")}/settings?key=DisplayName&value=${e}`;return y.a.get(t).then((e=>e.data))})(e),{loading:"Updating Device Name",success:()=>c("Device Name updated"),error:"Setting failed"},{duration:4e3})},b=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=font&value=${e}`;return y.a.get(t).then((e=>e.data))})(a.font),{loading:"Updating Device Font",success:"Font updated",error:"Setting failed"},{duration:4e3})},h=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=PixelcadeDotType&value=${e}`;return y.a.get(t).then((e=>e.data))})(a.PixelcadeDotType),{loading:"Updating Pixelcade Sub-Display Type",success:"Sub-Display Type updated",error:"Sub-Display Type Updated Failed"},{duration:4e3})},x=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=PixelcadeMiniDisplayType&value=${e}`;return y.a.get(t).then((e=>e.data))})(a.PixelcadeMiniDisplayType),{loading:"Updating Pixelcade Mini Display Type",success:"Pixelcade Mini Display Type Updated",error:"Pixelcade Mini Display Updated Failed"},{duration:4e3})},f=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=PixelcadeOLEDMode&value=${e}`;return y.a.get(t).then((e=>e.data))})(a.PixelcadeOLEDMode),{loading:"Updating Pixelcade Mini OLED Mode",success:"Pixelcade Mini OLED Mode Updated",error:"Pixelcade Mini OLED Mode Update Failed"},{duration:4e3})},v=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=textColor&value=${e}`;return y.a.get(t).then((e=>e.data))})(a.FontColor),{loading:"Updating Font Color",success:"Font color updated",error:"Setting failed"},{duration:4e3})},C=()=>{a&&u.a.promise((e=>{const t=`${O("")}/settings?key=marqueeOverlays&value=${e?"yes":"no"}`;return y.a.get(t).then((e=>e.data))})(!a.marqueeOverlays),{loading:"Updating Marquee Overlay settings",success:()=>(i({...a,marqueeOverlays:!a.marqueeOverlays}),c("Marquee Overlay settings updated")),error:"Setting failed"},{duration:4e3})},S=()=>{u.a.promise((()=>{const e=`${O("")}/update`;return y.a.get(e).then((e=>e.data))})(),{loading:"Pixelcade LCD Update Started",success:()=>"Please wait until your see the Update Complete message on your Pixelcade before doing anything else.",error:"failed"},{duration:4e3})};return Object(p.jsxs)("div",{className:"fade-in",children:[a&&Object(p.jsxs)("div",{className:"layout-grid",style:{marginTop:"0.5rem",gap:"2rem"},children:[Object(p.jsxs)("div",{className:"settings",children:[Object(p.jsx)("label",{style:{margin:"1rem 0 .5rem 0"},children:"Device Name"}),Object(p.jsx)("input",{style:{height:36,fontSize:"1.2rem",padding:"0 0.4rem"},type:"text",id:"fname",name:"fname",value:e,onChange:e=>{t(e.target.value)}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>g(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",children:[Object(p.jsx)("label",{style:{margin:"1rem 0 .5rem 0",fontWeight:"bold"},children:"Device Info"}),n&&Object(p.jsxs)("div",{style:{fontSize:"1rem",lineHeight:"1.6"},children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Name:"})," ",Object(p.jsx)("span",{style:{color:"#666",fontWeight:"normal"},children:n.name})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Hostname:"})," ",Object(p.jsx)("span",{style:{color:"#666",fontWeight:"normal"},children:n.hostname})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Firmware:"})," ",Object(p.jsxs)("span",{style:{color:"#666",fontWeight:"normal"},children:["v",n.firmwareVersion]})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Artwork Version:"})," ",Object(p.jsx)("span",{style:{color:"#666",fontWeight:"normal"},children:n.artworkVersion})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Resolution:"})," ",Object(p.jsxs)("span",{style:{color:"#666",fontWeight:"normal"},children:[n.resolution.width,"x",n.resolution.height]})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Generation:"})," ",Object(p.jsx)("span",{style:{color:"#666",fontWeight:"normal"},children:n.pixelcadeGen})]}),Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:"Connected Sub-Displays:"})}),Object(p.jsxs)("ul",{style:{marginLeft:"1.5rem",marginTop:"0.5rem",color:"#666",fontWeight:"normal"},children:[n.oled&&Object(p.jsx)("li",{children:"OLED Display"}),n.miniLCD&&Object(p.jsx)("li",{children:"Mini LCD"}),n.dotMatrix&&Object(p.jsx)("li",{children:"Dot Matrix"}),n.sevenSegment&&Object(p.jsx)("li",{children:"Seven Segment"})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Network Status:"})," ",Object(p.jsx)("span",{style:{color:n.hasJoinedNetwork?"green":"red",fontWeight:"normal"},children:n.hasJoinedNetwork?"Connected":"Not Connected"})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Pairing Status:"})," ",Object(p.jsx)("span",{style:{color:n.isPaired?"green":"red",fontWeight:"normal"},children:n.isPaired?"Paired":"Not Paired"})]})]})]}),Object(p.jsxs)("div",{className:"settings",children:[Object(p.jsx)("p",{children:"When disabled, Pixelcade will not show video marquees and will show static marquees only."}),Object(p.jsx)(H.a,{style:{marginTop:"1.2rem"},control:Object(p.jsx)(z.a,{checked:!a.ImageMarqueesOnly,onChange:()=>d(),color:"primary"}),label:"Show Video Marquees"})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsxs)("p",{children:["Disabling splash screens means Pixelcade will not display now playing splash screens, high scores, or marquee overlays. ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Only a Pixelcade LED marquee (if connected) or a Pixelcade Dot sub-display (if connected) will display scrolling text for now playing game launches and high scores."]}),Object(p.jsx)(H.a,{style:{marginTop:"1.2rem"},control:Object(p.jsx)(z.a,{checked:a.SubDisplayScrollingOnly,onChange:()=>j(),color:"primary"}),label:"Disable Splash Screens"})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0"},children:"Font"}),Object(p.jsx)(K.c,{selectedValue:a.font,name:"font",options:V.map((e=>({value:e,text:e}))),caretIcon:Object(p.jsx)(K.a,{}),modalCloseButton:Object(p.jsx)(K.b,{}),onChange:e=>{const t=e.value;i({...a,font:t})}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>b(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("p",{children:"Font colors are NOT in use at this time. The font color will always be white."}),Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0"},children:"Font Color"}),Object(p.jsx)(J.a,{color:a.FontColor,onChange:e=>i({...a,FontColor:e.replace("#","")})}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>v(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("p",{children:"When disabled, Pixelcade will not show overlays such as high scores in a small bar on the bottom of game marquees."}),Object(p.jsx)(H.a,{style:{marginTop:"1.2rem"},control:Object(p.jsx)(z.a,{checked:a.marqueeOverlays,onChange:()=>C(),color:"primary"}),label:"Show Marquee Overlays"})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0"},children:"Pixelcade Dot Sub-Display Type"}),Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0",display:"block",color:"#666"},children:"Please Select Manually"}),Object(p.jsx)(K.c,{selectedValue:a.PixelcadeDotType,name:"PixelcadeDotType",options:[{text:"Matrix",value:"matrix"},{text:"7 Segment",value:"7segment"},{text:"None",value:"none"}],caretIcon:Object(p.jsx)(K.a,{}),modalCloseButton:Object(p.jsx)(K.b,{}),onChange:e=>{const t=e.value;i({...a,PixelcadeDotType:t})}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>h(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0"},children:"Pixelcade Mini Dot Sub-Display Type"}),Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0",display:"block",color:"#666"},children:"Auto Detected"}),Object(p.jsx)(K.c,{selectedValue:a.PixelcadeMiniDisplayType,name:"PixelcadeMiniDisplayType",options:[{text:"Mini OLED",value:"oled"},{text:"Mini LCD 4 Lines",value:"lcd4line"},{text:"Mini LCD 2 Lines",value:"lcd2line"},{text:"None",value:"none"}],caretIcon:Object(p.jsx)(K.a,{}),modalCloseButton:Object(p.jsx)(K.b,{}),onChange:e=>{const t=e.value;i({...a,PixelcadeMiniDisplayType:t})}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>x(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("label",{style:{margin:".5rem 0 .5rem 0"},children:"Pixelcade Mini OLED Mode"}),Object(p.jsx)(K.c,{selectedValue:a.PixelcadeOLEDMode,name:"PixelcadeOLEDMode",options:[{text:"Marquee Mode",value:"marquee"},{text:"Metadata Mode",value:"metadata"}],caretIcon:Object(p.jsx)(K.a,{}),modalCloseButton:Object(p.jsx)(K.b,{}),onChange:e=>{const t=e.value;i({...a,PixelcadeOLEDMode:t})}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>f(),children:"Update"})]})]}),Object(p.jsxs)("div",{className:"settings",style:{marginTop:"2rem"},children:[Object(p.jsx)("p",{children:"Pixelcade Mini OLED Glitch Mode"}),Object(p.jsx)(H.a,{style:{marginTop:"1.2rem"},control:Object(p.jsx)(z.a,{checked:a.PixelcadeOLEDGlitch,onChange:()=>m(),color:"primary"}),label:"Enable Pixelcade Mini OLED Glitch Mode"})]}),Object(p.jsxs)("div",{className:"settings",style:{display:"flex",flexDirection:"column",marginTop:"2rem"},children:[Object(p.jsx)("label",{style:{margin:"1rem 0 .5rem 0"},children:"System and Artwork Updates"}),Object(p.jsx)("p",{children:"Network Connectivity Required - USB will not work for this update Check for new system and artwork updates. Pixelcade will display status messages including a message if your Pixelcade is already up to date. Please note that updates can take up to 15 minutes or more depending on your Internet connection speed."}),Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>S(),children:"Check for Updates"})]})]}),Object(p.jsxs)("div",{className:"log-container",style:{marginTop:"2rem",padding:"1rem",backgroundColor:"#f4f4f4",borderRadius:"5px",maxHeight:"400px",overflowY:"auto",width:"100%",display:"flex",flexDirection:"column"},children:[Object(p.jsx)("h3",{style:{marginBottom:"1rem",color:"#333"},children:"Pixelcade LCD Log (updates every 5 seconds)"}),Object(p.jsx)("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word",color:"black",fontSize:"1rem",padding:"1rem",backgroundColor:"#fff",borderRadius:"5px",flex:1},children:l})]})]})};var X=()=>{const[e,t]=Object(s.useState)("");return Object(p.jsx)("div",{className:"layout-grid fade-in",style:{marginTop:"0.5rem"},children:Object(p.jsxs)("div",{className:"settings",style:{display:"flex",flexDirection:"column"},children:[Object(p.jsx)("label",{style:{margin:"1rem 0 .5rem 0"},children:"Scrolling Text"}),Object(p.jsx)("input",{style:{height:36,fontSize:"1.2rem",padding:"0 0.4rem"},type:"text",id:"fname",name:"fname",value:e,onChange:e=>{t(e.target.value)}}),Object(p.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gridGap:"1rem"},children:[Object(p.jsx)("div",{}),Object(p.jsx)(W.a,{style:{marginTop:"1.2rem"},variant:"contained",color:"primary",onClick:()=>{u.a.promise((e=>{const t=`${O("")}/text?t=${e}`;return y.a.get(t)})(e),{loading:"Sending message to marquee",success:"Message sent",error:"Failed"},{duration:4e3})},children:"Send Text"})]})]})})};const Y=i.a.createContext({}),_=()=>i.a.useContext(Y);var Q=()=>{const[e,t]=Object(s.useState)(!1),a={streamImages:e,setStreamImages:t};return Object(p.jsx)(Y.Provider,{value:a,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(P.a,{style:{zIndex:100},children:Object(p.jsx)(b,{})}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",element:Object(p.jsx)(U,{})}),",",Object(p.jsx)(o.a,{path:"/consoles",element:Object(p.jsx)(S,{})}),",",Object(p.jsx)(o.a,{path:"/marquees/:system",element:Object(p.jsx)(T,{})}),",",Object(p.jsx)(o.a,{path:"/default-marquee",element:Object(p.jsx)(A,{})}),",",Object(p.jsx)(o.a,{path:"/settings",element:Object(p.jsx)(Z,{})}),",",Object(p.jsx)(o.a,{path:"/text",element:Object(p.jsx)(X,{})})]})]})})};var ee=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((t=>{let{getCLS:a,getFID:s,getFCP:i,getLCP:n,getTTFB:r}=t;a(e),s(e),i(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),ee()},74:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.18172fc2.chunk.js.map