chrome.runtime.onMessage.addListener((e,n,o)=>(e.getDropBtn&&fetch(chrome.runtime.getURL("src/components/dropbtn.html")).then(t=>t.text()).then(t=>{o({drop_btn_string:t})}).catch(t=>console.error(t)),!0));chrome.runtime.onMessage.addListener((e,n,o)=>(e.opensidepanel&&chrome.tabs.query({active:!0,currentWindow:!0},function(t){let r=t[0];chrome.sidePanel.open({tabId:r.id})}),!0));const u=/^https:\/\/mp\.weixin\.qq\.com\/cgi-bin\/.*$/;chrome.tabs.onUpdated.addListener(async(e,n,o)=>{if(!o.url)return;const t=new URL(o.url);u.test(t)?await chrome.sidePanel.setOptions({tabId:e,path:"src/sidepanel/index.html",enabled:!0}):await chrome.sidePanel.setOptions({tabId:e,enabled:!1})});chrome.windows.onRemoved.addListener(function(){chrome.windows.getAll({populate:!1},function(e){e.length===0&&(chrome.storage.local.clear(function(){console.log("本地存储已清空")}),chrome.storage.local.get("cachedElementData",function(n){console.log(n)}),f())})});chrome.tabs.onActivated.addListener(()=>{chrome.runtime.sendMessage({loadData:!0})});let i="";chrome.runtime.onMessage.addListener((e,n,o)=>(e.savedCode&&(i=e.savedCode),!0));let a=null,h=null;chrome.runtime.onConnect.addListener(e=>{e.name==="svgcode"&&chrome.runtime.onMessage.addListener((n,o,t)=>(n.savedCode&&e.postMessage({svgcode:n.savedCode}),!0)),e.name==="mmask"&&(a=e),e.name==="emask"&&(h=e)});chrome.runtime.onMessage.addListener((e,n,o)=>{let t;return e.openhotzone&&(t={showhotzone:!0,key:e.key,imgurl:e.imgurl,cnt:e.hotzonecnt,hotx:e.hotx,hoty:e.hoty,hotw:e.hotw,hoth:e.hoth}),e.freshhotzone&&(t={freshhotzone:!0,key:e.key,imgurl:e.imgurl,cnt:e.hotzonecnt,hotx:e.hotx,hoty:e.hoty,hotw:e.hotw,hoth:e.hoth}),e.closehotzone&&(t={closehotzone:!0}),e.opensvgcanvas&&(t={showsvgcanvas:!0,key:e.key,backgroundinfo:e.backgroundinfo,eldict:e.eldict,keylist:e.keylist}),e.freshsvgcanvas&&(t={freshsvgcanvas:!0,key:e.key,backgroundinfo:e.backgroundinfo,eldict:e.eldict,keylist:e.keylist}),e.closesvgcanvas&&(t={closesvgcanvas:!0}),e.openaudiohotzone&&(t={showaudiohotzone:!0,key:e.key,backgroundinfo:e.backgroundinfo,hotx:e.hotx,hoty:e.hoty,hotw:e.hotw,hoth:e.hoth}),["openhotzone","freshhotzone","closehotzone","opensvgcanvas","freshsvgcanvas","closesvgcanvas","openaudiohotzone","closeaudiohotzone"].some(r=>r in e)&&chrome.tabs.query({active:!0,currentWindow:!0},function(r){let s=r[0];/https:\/\/mp.weixin.qq.com\/cgi-bin\/appmsg\?t=media\/appmsg_edit.*/.test(s.url)?h.postMessage(t):a.postMessage(t)}),!0});chrome.runtime.onMessage.addListener((e,n,o)=>e.hascode?o({svgcode:i}):!0);chrome.runtime.onMessage.addListener((e,n,o)=>(e.clearcode&&(i=""),!0));let d;async function c(){await chrome.storage.local.set({"last-heartbeat":new Date().getTime()})}async function l(){c().then(()=>{d=setInterval(c,20*1e3)})}l();async function f(){clearInterval(d)}
