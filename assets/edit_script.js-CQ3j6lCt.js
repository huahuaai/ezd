import{s as z}from"./utils-C4Bj6WAK.js";let Z=`<div class="opensp_btn_container" style="padding:0px;margin:0px">
<button type="button" class="opensp_btn" style="padding:0px;margin:0px">
  <svg style="dispaly:block;" width="66" height="258" viewBox="0 0 66 258" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path id="elastic-path" fill-rule="evenodd" clip-rule="evenodd" d="M66,48.6 C66,95.2,22,95.2,22,122 C22,148.8,66,148.8,66,195.4 V48.6z" class="cls-1 e-animation"/>
    </g>
	<defs>
	  <style>
	    .cls-1 {
	      fill: url(#gradient_1);
	    }
	    .cls-3 {
	      fill: #12a3ff;
	    }
	    .cls-6 {
	      fill: url(#gradient_2);
	    }
	  </style>
	  <linearGradient id="gradient_1" x1="22" y1="0" x2="66" y2="0" gradientTransform="translate(0 -755.19) scale(1 1.31)" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#54e3ff"/>
	    <stop offset=".5" stop-color="#30c0ff"/>
	    <stop offset="1" stop-color="#12a3ff"/>
	  </linearGradient>
	  <radialGradient id="gradient_2" cx="24" cy="24" r="24" gradientUnits="userSpaceOnUse">
	    <stop offset="0" stop-color="#54e3ff"/>
	    <stop offset=".5" stop-color="#30c0ff"/>
	    <stop offset="1" stop-color="#12a3ff"/>
	  </radialGradient>
	</defs>
    <path id="arrow-path" d="M46.2,132.7c-0.7,0-1.3-0.3-1.8-0.8l-7.7-7.7c-1-1-1-2.6,0-3.6l7.6-7.6c1-1,2.6-1,3.6,0c1,1,1,2.6,0,3.6l-5.8,5.8l5.9,5.9c1,1,1,2.6,0,3.6C47.5,132.4,46.9,132.7,46.2,132.7z" fill="white" />
    </svg>
</button>
</div>`;const I=()=>{document.body.querySelector(".drop_btn_container")||(f.style.transform="translate(100%,-50%)",f.style.transition="transform 0.5s ease-in-out",v.setAttribute("class","cls-1"),M.setAttribute("d","M46.2,132.7c-0.7,0-1.3-0.3-1.8-0.8l-7.7-7.7c-1-1-1-2.6,0-3.6l7.6-7.6c1-1,2.6-1,3.6,0c1,1,1,2.6,0,3.6l-5.8,5.8l5.9,5.9c1,1,1,2.6,0,3.6C47.5,132.4,46.9,132.7,46.2,132.7z"))},$=()=>{f.style.transform="translate(0,-50%)",f.style.transition="transform 0.5s ease-in-out"};let w=chrome.runtime.connect({name:"edit_contentjs"});w.onMessage.addListener(function(t,n,i){t.open?(console.log("sidepanel open"),I()):t.close?(console.log("sidepanel close"),$()):t.init?(console.log("edit_contentjs init"),w.postMessage({isOpen:!0})):t.isopen&&I()});let q=()=>{chrome.runtime.sendMessage({opensidepanel:!0})};const C=document.createElement("div");C.innerHTML=Z;C.className="btngroup";let f=C.querySelector(".opensp_btn_container");f.style.position="fixed";f.style.right="0px";f.style.top="50%";f.style.transform="translateY(-50%)";f.style.padding="0px";f.style.zIndex="10001";let O=C.querySelector(".opensp_btn").querySelector("svg");O.addEventListener("click",q);document.body.appendChild(C);let P=`<div class="drop_btn_container" style="pointer-events: all;width: 51.5px;height: 58px; margin: 0;border-radius: 30px; display: flex;align-items: center;justify-content: center;"><div style="pointer-events: none; font-size: 0; line-height: 0;">
<svg width="48" height="48" style="pointer-events: none;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle id="circle-path" cx="24" cy="24" r="24" class="cls-6"></circle>
    <path d="M32.5,27.3c0,4.8-3.8,8.8-8.5,8.8s-8.5-3.9-8.5-8.8c0-7.1,6.6-11,8.5-18.4C25.9,16.3,32.5,20.2,32.5,27.3z" fill="white"/>
</svg>
</div>
</div>`,v=document.body.querySelector("#elastic-path"),M=document.body.querySelector("#arrow-path"),G=(t,n)=>{const i=document.createElement("span");i.classList.add("ripple");let e=document.querySelector(".edui-editor-iframeholder"),l=document.querySelector(".drop_btn_container"),o=document.querySelector("#ueditor_0"),s=(o.contentDocument||o.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection");e.style.position="relative",e.style.overflow="hidden",e.append(i);const r=e.getBoundingClientRect(),c=Math.max(r.width,r.height);i.style.width=i.style.height=`${c}px`,i.style.left=`${t.clientX-r.left-c/2}px`,i.style.top=`${t.clientY-r.top-c/2}px`,i.addEventListener("animationend",()=>{l.remove(),w.postMessage({isOpen:!0}),s.innerHTML="",s.innerHTML=n,chrome.runtime.sendMessage({clearcode:!0}),i.remove()})},U=t=>{let n=document.body.querySelector(".drop_btn_container");const i=n.getBoundingClientRect(),e={top:i.top,left:i.left,right:i.right-i.left};let l=document.querySelector(".edui-editor-iframeholder"),o=document.querySelector("#ueditor_0"),s=(o.contentDocument||o.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection"),r=!1,c=1,g=1,x,T,_,H;const S=()=>{c!==g&&(c+=(g-c)*.1,Math.abs(g-c)<.01&&(c=g),n.style.transform=`scale(${c})`,requestAnimationFrame(S))},E=()=>{const d=parseFloat(n.style.left),y=parseFloat(n.style.top),h=(e.left-d)*.1,m=(e.top-y)*.1;n.style.left=`${d+h}px`,n.style.top=`${y+m}px`,Math.abs(h)<1&&Math.abs(m)<1?(n.style.left="auto",n.style.right=`${e.right}px`,n.style.top=`${e.top}px`):requestAnimationFrame(E)},B=d=>{d.target===n&&(r=!0,A.style.pointerEvents="none",n.style.cursor="grabbing",g=.8,requestAnimationFrame(S),x=d.clientX-n.offsetLeft,T=d.clientY-n.offsetTop,H=d.clientX,_=d.clientY,n.classList.remove("jello"),v.classList.remove("e-animation"),d.preventDefault())},k=d=>{if(r){d.preventDefault();const y=d.clientX-x,h=d.clientY-T;n.style.left=`${y}px`,n.style.top=`${h}px`;let m=22+.01*(y-H),Y=122+.01*(h-_),N=95.2+.02*(h-_),W=148.8+.02*(h-_);v.setAttribute("d",`M66,48.6 C66,95.2,${m},${N},${m},${Y} C${m},${W},66,148.8,66,195.4 V48.6z`)}},D=()=>{if(r){r=!1,A.style.pointerEvents="all",g=1,v.classList.add("e-animation"),v.setAttribute("d","M66,48.6 C66,95.2,22,95.2,22,122 C22,148.8,66,148.8,66,195.4 V48.6z"),requestAnimationFrame(S);const d=n.getBoundingClientRect(),y=l.getBoundingClientRect();if(d.right>y.left&&d.left<y.right&&d.bottom>y.top&&d.top<y.bottom)n.classList.add("jello"),n.addEventListener("click",m=>{s.innerHTML="",G(m,t)});else{setTimeout(()=>{n.classList.add("jello")},200);let m=f.getBoundingClientRect();e.top=m.top+m.height/2.83,e.left=n.parentElement.offsetWidth-(e.right+n.offsetWidth),requestAnimationFrame(E)}}};document.addEventListener("mousedown",B,!1),document.addEventListener("mouseup",D,!1),document.addEventListener("mousemove",k,!1),document.addEventListener("touchstart",B,!1),document.addEventListener("touchend",D,!1),document.addEventListener("touchmove",k,!1)},R=t=>{v.setAttribute("class","cls-3"),M.setAttribute("d","");const n=document.createElement("div");n.innerHTML=P;let i=n.querySelector(".drop_btn_container");i.style.position="fixed";const e=document.body.querySelector(".opensp_btn_container").getBoundingClientRect();i.style.top=`${e.top+e.height/2.83}px`,i.style.right="0px",i.style.transform="translateX(100%) scale(0.5)",i.style.zIndex="10000",document.body.appendChild(i),$(),setTimeout(()=>{i.style.transition="transform .8s",i.style.transform="translateX(-100%) scale(1)",setTimeout(()=>{i.classList.add("jello")},820)},500),i.addEventListener("transitionend",()=>{let l=i.getBoundingClientRect();i.style.top=`${e.top+e.height/2.83}px`,i.style.transform="",i.style.transition="",i.style.zIndex="10002",i.style.right=l.right-l.left+"px",U(t)})},F=()=>{v.setAttribute("class","cls-1"),M.setAttribute("d","M46.2,132.7c-0.7,0-1.3-0.3-1.8-0.8l-7.7-7.7c-1-1-1-2.6,0-3.6l7.6-7.6c1-1,2.6-1,3.6,0c1,1,1,2.6,0,3.6l-5.8,5.8l5.9,5.9c1,1,1,2.6,0,3.6C47.5,132.4,46.9,132.7,46.2,132.7z");let t=document.querySelector(".drop_btn_container");t&&(setTimeout(()=>{t.style.zIndex="10000",t.style.transition="transform 0.8s",t.style.transform="translateX(180%) scale(0.5)"},50),t.addEventListener("transitionend",()=>{t.remove()}))};chrome.runtime.sendMessage({hascode:!0},async t=>{(t.svgcode!==""||document.body.querySelector(".drop_btn_container"))&&(F(),R(t.svgcode))});let V=()=>{b&&b.disconnect(),b=chrome.runtime.connect({name:"svgcode"}),b.onMessage.addListener(t=>{(t.svgcode!==""||document.body.querySelector(".drop_btn_container"))&&(F(),R(t.svgcode))}),b.onDisconnect.addListener(()=>{console.log("连接断开"),b=null}),console.log("重新连接")},b=null;V();setInterval(V,3*60*1e3);const J=new ResizeObserver(()=>{let t=document.body.querySelector(".drop_btn_container");const n=document.body.querySelector(".opensp_btn_container").getBoundingClientRect();t&&(t.style.top=`${n.top+n.height/2.83}px`)});J.observe(document.body);let K=`<div class="showezbox"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.80273 10.9473L11.0273 15.2656C11.3203 15.5625 11.6445 15.7109 12 15.7109C12.1836 15.707 12.3516 15.6699 12.5039 15.5996C12.6602 15.5293 12.8145 15.418 12.9668 15.2656L17.1855 10.9473C17.4043 10.7324 17.5137 10.4688 17.5137 10.1562C17.5137 9.94141 17.4609 9.74609 17.3555 9.57031C17.2539 9.39844 17.1152 9.25977 16.9395 9.1543C16.7676 9.04883 16.5762 8.99609 16.3652 8.99609C16.041 8.99609 15.7598 9.12305 15.5215 9.37695L11.8066 13.2266H12.2051L8.47852 9.37695C8.23242 9.12305 7.94727 8.99609 7.62305 8.99609C7.41602 8.99609 7.22461 9.04883 7.04883 9.1543C6.87695 9.25977 6.73828 9.39844 6.63281 9.57031C6.53125 9.74609 6.48047 9.94141 6.48047 10.1562C6.48047 10.3125 6.50586 10.4551 6.55664 10.584C6.61133 10.7129 6.69336 10.834 6.80273 10.9473Z" fill="#12a3ff"/>
</svg>
</div>`,Q=`
<div class="ezbox"  style="display:none">
	<div class="boxtitle">
		<svg width="110" height="30" viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M39.6951 20.084C38.9017 20.084 38.2017 19.9207 37.5951 19.594C36.9977 19.2673 36.5311 18.8193 36.1951 18.25C35.8684 17.6807 35.7051 17.0273 35.7051 16.29C35.7051 15.5527 35.8637 14.8993 36.1811 14.33C36.5077 13.7607 36.9511 13.3173 37.5111 13C38.0804 12.6733 38.7197 12.51 39.4291 12.51C40.1477 12.51 40.7824 12.6687 41.3331 12.986C41.8837 13.3033 42.3131 13.7513 42.6211 14.33C42.9384 14.8993 43.0971 15.5667 43.0971 16.332C43.0971 16.388 43.0924 16.4533 43.0831 16.528C43.0831 16.6027 43.0784 16.6727 43.0691 16.738H36.7551V15.772H42.3691L41.8231 16.108C41.8324 15.632 41.7344 15.2073 41.5291 14.834C41.3237 14.4607 41.0391 14.1713 40.6751 13.966C40.3204 13.7513 39.9051 13.644 39.4291 13.644C38.9624 13.644 38.5471 13.7513 38.1831 13.966C37.8191 14.1713 37.5344 14.4653 37.3291 14.848C37.1237 15.2213 37.0211 15.6507 37.0211 16.136V16.36C37.0211 16.8547 37.1331 17.298 37.3571 17.69C37.5904 18.0727 37.9124 18.3713 38.3231 18.586C38.7337 18.8007 39.2051 18.908 39.7371 18.908C40.1757 18.908 40.5724 18.8333 40.9271 18.684C41.2911 18.5347 41.6084 18.3107 41.8791 18.012L42.6211 18.88C42.2851 19.272 41.8651 19.5707 41.3611 19.776C40.8664 19.9813 40.3111 20.084 39.6951 20.084Z" fill="#A5A5A8"/>
			<path d="M44.181 20V19.132L48.941 13.224L49.207 13.686H44.265V12.58H50.285V13.462L45.525 19.356L45.217 18.894H50.397V20H44.181Z" fill="#A5A5A8"/>
			<path d="M52.3918 20V10.2H56.7878C57.9171 10.2 58.7851 10.4287 59.3918 10.886C59.9984 11.334 60.3018 11.95 60.3018 12.734C60.3018 13.266 60.1804 13.714 59.9378 14.078C59.7044 14.442 59.3871 14.722 58.9858 14.918C58.5844 15.114 58.1504 15.212 57.6838 15.212L57.9358 14.792C58.4958 14.792 58.9904 14.89 59.4198 15.086C59.8491 15.282 60.1898 15.5713 60.4418 15.954C60.6938 16.3273 60.8198 16.794 60.8198 17.354C60.8198 18.194 60.5024 18.8473 59.8678 19.314C59.2424 19.7713 58.3091 20 57.0678 20H52.3918ZM53.7918 18.866H57.0118C57.7864 18.866 58.3791 18.7353 58.7898 18.474C59.2004 18.2127 59.4058 17.802 59.4058 17.242C59.4058 16.6727 59.2004 16.2573 58.7898 15.996C58.3791 15.7347 57.7864 15.604 57.0118 15.604H53.6658V14.47H56.6618C57.3711 14.47 57.9218 14.3393 58.3138 14.078C58.7058 13.8167 58.9018 13.4247 58.9018 12.902C58.9018 12.3793 58.7058 11.9873 58.3138 11.726C57.9218 11.4647 57.3711 11.334 56.6618 11.334H53.7918V18.866Z" fill="#A5A5A8"/>
			<path d="M65.9695 20.084C65.2228 20.084 64.5601 19.9207 63.9815 19.594C63.4028 19.2673 62.9455 18.8193 62.6095 18.25C62.2735 17.6713 62.1055 17.018 62.1055 16.29C62.1055 15.5527 62.2735 14.8993 62.6095 14.33C62.9455 13.7607 63.4028 13.3173 63.9815 13C64.5601 12.6733 65.2228 12.51 65.9695 12.51C66.7068 12.51 67.3648 12.6733 67.9435 13C68.5315 13.3173 68.9888 13.7607 69.3155 14.33C69.6515 14.89 69.8195 15.5433 69.8195 16.29C69.8195 17.0273 69.6515 17.6807 69.3155 18.25C68.9888 18.8193 68.5315 19.2673 67.9435 19.594C67.3648 19.9207 66.7068 20.084 65.9695 20.084ZM65.9695 18.908C66.4455 18.908 66.8701 18.8007 67.2435 18.586C67.6261 18.3713 67.9248 18.068 68.1395 17.676C68.3541 17.2747 68.4615 16.8127 68.4615 16.29C68.4615 15.758 68.3541 15.3007 68.1395 14.918C67.9248 14.526 67.6261 14.2227 67.2435 14.008C66.8701 13.7933 66.4455 13.686 65.9695 13.686C65.4935 13.686 65.0688 13.7933 64.6955 14.008C64.3221 14.2227 64.0235 14.526 63.7995 14.918C63.5755 15.3007 63.4635 15.758 63.4635 16.29C63.4635 16.8127 63.5755 17.2747 63.7995 17.676C64.0235 18.068 64.3221 18.3713 64.6955 18.586C65.0688 18.8007 65.4935 18.908 65.9695 18.908Z" fill="#A5A5A8"/>
			<path d="M70.3541 20L73.5461 15.856L73.5321 16.542L70.4941 12.58H71.9921L74.3161 15.632H73.7421L76.0661 12.58H77.5361L74.4561 16.57L74.4701 15.856L77.6901 20H76.1641L73.7141 16.752L74.2601 16.836L71.8521 20H70.3541Z" fill="#A5A5A8"/>
		</svg>
	</div>
	<div class="import-btn-container">
		<div class="import-btn import-component tooltip-button1" data-tooltip="将编辑区域内的“视频”“音频”“视频号”“红包封面”等组件提取至侧边栏">
		提取组件
		</div>
		<div class="import-btn import-context tooltip-button2" data-tooltip="将编辑区域内的所有内容提取至侧边栏">
		提取全文
		</div>
		<div class="import-btn import-code tooltip-button3" data-tooltip="将剪切板中的代码导入编辑区域">
		导入代码
		</div>
	</div>
</div>
`;const A=document.querySelector("#editor_pannel"),ee=document.querySelector("#js_toolbar_0"),te=document.querySelector("#edui103"),j=document.createElement("div"),X=document.createElement("div");j.innerHTML=Q;X.innerHTML=K;let u=j.querySelector(".ezbox"),p=X.querySelector(".showezbox"),L=!1;p.addEventListener("mouseenter",t=>{L=!1;const n=p.getBoundingClientRect();u.style.display="",u.style.position="fixed",p.style.backgroundColor="#12a3ff",p.querySelector("path").setAttribute("fill","white"),p.style.border="1px solid #FAFAFA",u.style.top="98px",u.style.zIndex="10000",u.style.left=`${n.left-86}px`});p.addEventListener("mouseleave",t=>{setTimeout(()=>{L||(u.style.display="none",p.style.backgroundColor="white",p.querySelector("path").setAttribute("fill","#12a3ff"),p.style.border="1px solid #DDDFE6")},100)});u.addEventListener("mouseenter",t=>{L=!0});u.addEventListener("mouseleave",t=>{u.style.display="none",p.style.backgroundColor="white",p.querySelector("path").setAttribute("fill","#12a3ff"),p.style.border="1px solid #DDDFE6"});let oe=u.querySelector(".import-component"),ie=u.querySelector(".import-context"),ne=u.querySelector(".import-code");oe.addEventListener("click",()=>{let t=document.querySelector("#ueditor_0"),i=(t.contentDocument||t.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection"),e=[];i.childNodes.forEach(l=>{if(l.hasAttribute("data-mpa-powered-by")&&l.removeAttribute("data-mpa-powered-by"),l.classList.contains("wx-edui-media-wrp")){if(l.querySelector(".audio_iframe")){let o=l.querySelector(".audio_iframe"),a=o.getAttribute("voice_encode_fileid"),s=o.getAttribute("name");console.log(l.outerHTML);let r={type:"audio",subtype:"audio",key:a,title:s,code:l.outerHTML};e.push(r)}else if(l.querySelector(".clmusic_iframe")){let o=l.querySelector(".clmusic_iframe"),a=o.getAttribute("listenid"),s=`${o.getAttribute("music_name")}-${o.getAttribute("singer")}`,r={type:"audio",subtype:"music",key:a,title:s,code:l.outerHTML};e.push(r)}}else if(l.querySelector(".video_iframe")){let o=l.querySelector(".video_iframe"),a=o.getAttribute("data-mpvid"),s=o.getAttribute("data-ratio"),r=o.getAttribute("width"),c=o.getAttribute("height"),g=o.getAttribute("data-w"),x={type:"video",key:a,ratio:s,width:r,height:c,dataw:g,code:l.innerHTML};e.push(x)}else if(l.classList.contains("mp_redpacket_iframe_wrp")){let s={type:"redbag",key:l.querySelector(".redpackage_iframe").getAttribute("data-orderid"),code:l.outerHTML};e.push(s)}else if(l.querySelector(".channels_live_iframe")){let o=l.querySelector(".channels_live_iframe");console.log();let a=o.getAttribute("data-noticeid"),s=o.getAttribute("data-nickname"),r={type:"live",key:a,title:s,code:l.outerHTML};e.push(r)}else if(l.querySelector(".videosnap_video_iframe")){let o=l.querySelector(".videosnap_video_iframe"),a=o.getAttribute("data-id"),s=o.getAttribute("data-desc"),r=o.getAttribute("data-nickname"),c={type:"videoacc",key:a,title:s!==""?s:r+"的视频号视频",code:o.outerHTML};e.push(c)}else if(l.classList.contains("mp_profile_iframe_wrp")){let o=l.querySelector(".mp_profile_iframe");console.log(o);let a=o.getAttribute("data-id"),s=o.getAttribute("data-nickname"),r={type:"mpprofile",key:a,title:s,code:l.outerHTML};e.push(r)}}),z("importedComponentInfoList",e),q()});ie.addEventListener("click",()=>{let t=document.querySelector("#ueditor_0"),i=(t.contentDocument||t.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection");for(let o of i.children)o.hasAttribute("data-mpa-powered-by")&&o.removeAttribute("data-mpa-powered-by"),o.querySelector("mpchecktext")&&o.removeChild(o.querySelector("mpchecktext")),o.querySelector(".mp-caret")&&o.removeChild(o.querySelector(".mp-caret"));let l={type:"codebox",code:i.innerHTML};z("importedCodeboxInfo",l),q()});async function le(){try{const t=await navigator.clipboard.readText();return console.log("Text read from clipboard:",t),t}catch(t){console.error("Failed to read from clipboard:",t)}}ne.addEventListener("click",()=>{L=!1,u.style.display="none",p.style.backgroundColor="white",p.querySelector("path").setAttribute("fill","#12a3ff"),p.style.border="1px solid #DDDFE6";let t=document.querySelector("#ueditor_0"),i=(t.contentDocument||t.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection");i.innerHTML="";const e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="calc(50% - 70px)",e.style.width="140px",e.style.fontWeight="600",e.style.padding="2px 0px",e.style.textAlign="center",e.style.opacity="0",e.style.borderRadius="5px",e.style.transition="top 0.3s ease-in-out, opacity 0.3s linear";const l=document.querySelector("#editor_pannel");le().then(o=>{const a=document.createElement("span");a.classList.add("ripple");let s=document.querySelector(".edui-editor-iframeholder");s.style.position="relative",s.style.overflow="hidden",s.append(a);const r=s.getBoundingClientRect(),c=Math.max(r.width,r.height);a.style.width=a.style.height=`${c}px`,a.style.left=`${(r.right-r.left-c)/2}px`,a.style.top=`${-c/2}px`,a.addEventListener("animationend",()=>{console.log("Retrieved:",o),i.innerHTML=o,e.innerText="清空并导入成功",e.style.color="#12a3ff",e.style.border="1px solid #12a3ff",e.style.backgroundColor="#e2f4ff",e.style.opacity="1",e.style.top="20px",a.remove()})}).catch(o=>{e.innerText="导入失败",e.style.color="#f56c6c",e.style.border="1px solid #f56c6c",e.style.backgroundColor="#ffeff0",e.style.opacity="1",e.style.top="20px"}),l.appendChild(e),setTimeout(()=>{l.removeChild(e)},2e3)});A.appendChild(u);ee.insertBefore(p,te);