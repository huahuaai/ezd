let a=(t,i)=>{i.includes("图片")&&chrome.runtime.sendMessage({getImportBtn:!0},async n=>{let s=n.import_btn_string;const e=document.createElement("div");e.innerHTML=s;let o=e.querySelector(".import_btn_container");e.querySelector(".import_btn").addEventListener("click",p);let l=document.querySelector(".weui-desktop-global-mod");l.style.position="relative",l.insertBefore(o,l.firstChild)}),t.includes("素材库")&&chrome.runtime.sendMessage({getOpenspBtn:!0},async n=>{const s=document.createElement("div");s.innerHTML=n.opensp_btn_string;let e=s.querySelector(".opensp_btn_container");e.style.position="fixed",e.style.right="0px",e.style.top="50%",e.style.transform="translateY(-50%)",e.style.padding="0px",e.style.zIndex="1000",s.querySelector(".opensp_btn").addEventListener("click",c),document.body.appendChild(e)})};chrome.runtime.sendMessage({docloaded:!0},async t=>{t.wxTabId;let i=document.querySelector(".weui-desktop-block__title")?document.querySelector(".weui-desktop-block__title").textContent:"",n=document.querySelector(".weui-desktop-panel__title")?document.querySelector(".weui-desktop-panel__title").textContent:"";a(i,n)});let p=()=>{const t=document.querySelectorAll(".weui-desktop-img-picker__item_selected");let i=new Map;t.forEach(e=>{let o=e.querySelector(".weui-desktop-img-picker__img-thumb").style.backgroundImage.match(/url\("?(.*?)"?\)/)[1],r=e.querySelector(".weui-desktop-img-picker__img-title").textContent,l=o.split("/")[4];i.set(l,{imgurl:o,imgtitle:r})});let n=[];i.forEach((e,o)=>{n.push({type:"img",key:o,imgurl:e.imgurl,imgtitle:e.imgtitle})}),c(),setTimeout(()=>{chrome.runtime.sendMessage({imginfoList:n},e=>{console.log("I send it success")})},200),document.querySelectorAll(".weui-desktop-global__info > a")[0].click()},c=()=>{chrome.runtime.sendMessage({opensidepanel:!0}),console.log("open")},m=()=>{let t=document.querySelector(".opensp_btn");t.style.transition="transform 0.5s ease-in-out",t.style.transform="translateX(0)",setTimeout(()=>{t.style.transform="translateX(100%)"},0)},u=()=>{let t=document.querySelector(".opensp_btn");t.style.transition="transform 0.5s ease-in-out",t.style.transform="translateX(100%)",setTimeout(()=>{t.style.transform="translateX(0)"},0)},d=chrome.runtime.connect({name:"getSidePanelStatus"});d.onMessage.addListener(t=>{t.spopen?m():t.spclose&&u()});
