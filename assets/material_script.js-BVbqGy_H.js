import{s as C}from"./utils-C4Bj6WAK.js";let z='<div class="import_btn_container" style="font-weight:600;padding:2px 15px 2px 15px;border-radius:4px;position:absolute;right: 125px;background-color:#12A3FF;color:white;transition: all .2s;">导入ezDrop<div style="position: absolute;margin-top: -35px;text-align: right;width: 100px;"><span class="import_btn_circle_of_number" style="display: inline-block;line-height: 18px;color: white;background-color: #e97170;text-align: right;border-radius: 28px;height: 18px;padding: 0px 6px;box-sizing: border-box;font-size: 12px;white-space: nowrap;">0</span></div>',A=`<div class="opensp_btn_container" style="padding:0px;margin:0px">
<button type="button" class="opensp_btn" style="padding:0px;margin:0px">
  <svg style="dispaly:block;" width="66" height="258" viewBox="0 0 66 258" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path id="elastic-path" fill-rule="evenodd" clip-rule="evenodd" d="M66,48.6 C66,95.2,22,95.2,22,122 C22,148.8,66,148.8,66,195.4 V48.6z" class="cls-1"/>
    </g>
	<defs>
	  <style>
	    .cls-1 {
	      fill: url(#gradient_1);
	    }
	  </style>
	  <linearGradient id="gradient_1" x1="22" y1="0" x2="66" y2="0" gradientTransform="translate(0 -755.19) scale(1 1.31)" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#54e3ff"/>
	    <stop offset=".5" stop-color="#30c0ff"/>
	    <stop offset="1" stop-color="#12a3ff"/>
	  </linearGradient>
	</defs>
    <path id="arrow-path" d="M46.2,132.7c-0.7,0-1.3-0.3-1.8-0.8l-7.7-7.7c-1-1-1-2.6,0-3.6l7.6-7.6c1-1,2.6-1,3.6,0c1,1,1,2.6,0,3.6l-5.8,5.8l5.9,5.9c1,1,1,2.6,0,3.6C47.5,132.4,46.9,132.7,46.2,132.7z" fill="white" />
    </svg>
</button>
</div>`,v=()=>{chrome.runtime.sendMessage({opensidepanel:!0})};const _=document.createElement("div");_.innerHTML=A;let d=_.querySelector(".opensp_btn_container");d.style.position="fixed";d.style.right="0px";d.style.top="50%";d.style.transform="translateY(-50%)";d.style.padding="0px";d.style.zIndex="10000";let T=_.querySelector(".opensp_btn");T.addEventListener("click",v);document.body.appendChild(d);let w=document.querySelector(".weui-desktop-panel__title")?document.querySelector(".weui-desktop-panel__title").textContent:"";console.log(w);if(w.includes("图片")){let r=new Map,f=document.querySelector(".weui-desktop-global__info .weui-desktop-form__checkbox"),n=document.querySelectorAll(".weui-desktop-img-picker__item .weui-desktop-form__checkbox"),a=document.querySelectorAll(".weui-desktop-img-picker__item .weui-desktop-img-picker__img-thumb"),g=(t,o)=>t.querySelector(".weui-desktop-img-picker__img-thumb").style.backgroundImage.match(/url\("?(.*?)"?\)/)[1].split("/")[4]+o+t.querySelector(".weui-desktop-img-picker__img-title").textContent,x=(t,o)=>{let e=t.querySelector(".weui-desktop-img-picker__img-thumb").style.backgroundImage.match(/url\("?(.*?)"?\)/)[1],i=t.querySelector(".weui-desktop-img-picker__img-title").textContent,s=g(t,o);r.set(s,{imgurl:e,imgtitle:i})},h=(t,o)=>e=>{if(e.target.checked)x(t,o);else{let l=g(t,o);r.delete(l),setTimeout(()=>{r.size!=0&&(p.style.display="block")},500)}document.querySelector(".weui-desktop-global__info a").style.setProperty("display","none","important");let s=document.querySelectorAll(".weui-desktop-btn_mini");if(r.size!=0){r.size<=999?k.innerHTML=r.size:r.size>999&&(k.innerHTML="999+");for(let l=0;l<s.length;l++)s[l].addEventListener("click",function y(){setTimeout(()=>{r.size!==0&&(p.style.display="block",this.removeEventListener("click",y))},500)})}else{k.innerHTML=r.size,setTimeout(()=>{p.style.display="none"},500);for(let l=0;l<s.length;l++)s[l].addEventListener("click",function y(){setTimeout(()=>{p.style.display="none",this.removeEventListener("click",y)},500)})}},u=[],m=[];f.addEventListener("change",t=>{n.forEach((o,e)=>{let i=o.parentNode.parentNode;h(i,e)(t)})});for(let t=0;t<a.length;t++){let o=e=>{n[t].dispatchEvent(new Event("change")),n[t].dispatchEvent(new Event("change"))};a[t].addEventListener("click",o),m.push(o)}n.forEach((t,o)=>{let e=t.parentNode.parentNode,i=h(e,o);u.push(i),t.addEventListener("change",i)});const E=new MutationObserver(t=>{console.log("mutations",t);for(let e=0;e<n.length;++e)n[e].removeEventListener("change",u[e]),a[e].removeEventListener("click",m[e]);u=[],m=[],n=document.querySelectorAll(".weui-desktop-img-picker__item .weui-desktop-form__checkbox");let o=0;n.forEach((e,i)=>{let s=e.parentNode.parentNode,l=g(s,i);r.has(l)&&(o++,e.click())}),o===n.length&&f.click(),a=document.querySelectorAll(".weui-desktop-img-picker__item .weui-desktop-img-picker__img-thumb"),n=document.querySelectorAll(".weui-desktop-img-picker__item .weui-desktop-form__checkbox"),n.forEach((e,i)=>{let s=e.parentNode.parentNode,l=h(s,i);u.push(l),e.addEventListener("change",l)});for(let e=0;e<a.length;e++){let i=s=>{n[e].dispatchEvent(new Event("change")),n[e].dispatchEvent(new Event("change"))};a[e].addEventListener("click",i),m.push(i)}}),S=document.querySelectorAll(".weui-desktop-img-picker__img-thumb"),L={attributes:!0,subtree:!0};S.forEach(t=>{E.observe(t,L)});const b=document.createElement("div");b.innerHTML=z;let c=b.querySelector(".import_btn_container"),k=c.querySelector("span"),q=()=>{let t=[];r.forEach((e,i)=>{t.push({type:"img",key:i,imgurl:e.imgurl,imgtitle:e.imgtitle})}),t.sort((e,i)=>e.imgtitle.localeCompare(i.imgtitle)),v(),r.clear(),C("importedImgInfoList",t),document.querySelectorAll(".weui-desktop-global__info > a")[0].click()};c.addEventListener("click",q),c.addEventListener("mouseenter",t=>{c.style.cursor="pointer",c.style.backgroundColor="rgba(18, 163, 255, 0.533)"}),c.addEventListener("mouseleave",t=>{c.style.backgroundColor="#12A3FF"});let p=document.querySelector(".weui-desktop-global-mod");p.style.position="relative",p.insertBefore(c,p.firstChild)}