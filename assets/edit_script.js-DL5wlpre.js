let T=`<div class="opensp_btn_container" style="padding:0px;margin:0px">
<button type="button" class="opensp_btn" style="padding:0px;margin:0px">
  <svg style="dispaly:block;" width="59" height="258" viewBox="0 0 59 258" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_98_7145)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0002 122.026C22.0002 100.681 48.9534 86.1105 56.5706 66.1713L59.5995 58.243C85.903 -10.6103 188.052 8.23686 188.052 81.9434L188.052 161.459C188.052 235.493 85.4496 254.424 59.0293 185.265L56.0688 177.515C48.5105 157.73 22.0002 143.205 22.0002 122.026Z" fill="#007AFF"/>
    </g>
    <path d="M34.5791 121.949C34.5791 122.19 34.6279 122.415 34.7256 122.623C34.8167 122.825 34.9632 123.023 35.165 123.219L42.5381 130.445C42.8376 130.745 43.2021 130.895 43.6318 130.895C43.9118 130.895 44.1722 130.823 44.4131 130.68C44.654 130.543 44.846 130.357 44.9893 130.123C45.126 129.889 45.1943 129.628 45.1943 129.342C45.1943 128.912 45.0283 128.528 44.6963 128.189L38.2607 121.939L44.6963 115.699C45.0283 115.374 45.1943 114.993 45.1943 114.557C45.1943 114.27 45.126 114.01 44.9893 113.775C44.846 113.541 44.654 113.355 44.4131 113.219C44.1722 113.076 43.9118 113.004 43.6318 113.004C43.2021 113.004 42.8376 113.15 42.5381 113.443L35.165 120.67C34.9632 120.865 34.8167 121.067 34.7256 121.275C34.6344 121.477 34.5856 121.702 34.5791 121.949Z" fill="white" fill-opacity="0.5"/>
    <defs>
    <filter id="filter0_d_98_7145" x="0.000244141" y="0.456055" width="210.052" height="256.785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="7"/>
    <feGaussianBlur stdDeviation="11"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_7145"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_7145" result="shape"/>
    </filter>
    </defs>
    </svg>
</button>
</div>`,I=()=>{chrome.runtime.sendMessage({opensidepanel:!0})};const b=document.createElement("div");b.innerHTML=T;b.className="btngroup";let y=b.querySelector(".opensp_btn_container");y.style.position="fixed";y.style.right="0px";y.style.top="50%";y.style.transform="translateY(-50%)";y.style.padding="0px";y.style.zIndex="10001";let k=b.querySelector(".opensp_btn").querySelector("svg");k.addEventListener("click",I);document.body.appendChild(b);let F=`<div class="drop_btn_container" style="pointer-events: all;width: 26px;height: 26px;background-color: #007AFF;padding: 17px;margin: 0;border-radius: 30px; display: flex;align-items: center;justify-content: center;">
<svg width="20" height="26" style="pointer-events: none;" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99414 21.3008C6.54232 21.2943 5.27279 20.9948 4.18555 20.4023C3.09831 19.8164 2.25195 18.9928 1.64648 17.9316C1.04753 16.8704 0.748047 15.6302 0.748047 14.2109C0.748047 13.5534 0.826172 12.8861 0.982422 12.209C1.14518 11.5254 1.35352 10.8516 1.60742 10.1875C1.86133 9.51693 2.13477 8.88216 2.42773 8.2832C2.77279 7.54753 3.16341 6.80208 3.59961 6.04688C4.04232 5.29167 4.50781 4.53971 4.99609 3.79102C5.48438 3.03581 5.96615 2.29688 6.44141 1.57422C6.66276 1.23568 6.90039 0.985026 7.1543 0.822266C7.41471 0.659505 7.69466 0.578125 7.99414 0.578125C8.29362 0.578125 8.57031 0.659505 8.82422 0.822266C9.08464 0.985026 9.32552 1.23568 9.54688 1.57422C10.0091 2.27734 10.4746 2.99349 10.9434 3.72266C11.4186 4.45182 11.8711 5.18424 12.3008 5.91992C12.737 6.64909 13.1211 7.36849 13.4531 8.07812C13.7656 8.70312 14.0553 9.36068 14.3223 10.0508C14.5957 10.7409 14.8138 11.4375 14.9766 12.1406C15.1458 12.8438 15.2305 13.5339 15.2305 14.2109C15.2305 15.6302 14.9277 16.8704 14.3223 17.9316C13.7233 18.9928 12.8802 19.8164 11.793 20.4023C10.7122 20.9948 9.44596 21.2943 7.99414 21.3008Z" fill="white" fill-opacity="0.5"/>
</svg>
</div>`,R=(o,e)=>{const t=document.createElement("span");t.classList.add("ripple");let n=document.querySelector(".edui-editor-iframeholder"),i=document.querySelector(".drop_btn_container"),r=document.querySelector("#ueditor_0"),d=(r.contentDocument||r.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection");n.style.position="relative",n.style.overflow="hidden",n.append(t);const l=n.getBoundingClientRect(),c=Math.max(l.width,l.height);t.style.width=t.style.height=`${c}px`,t.style.left=`${o.clientX-l.left-c/2}px`,t.style.top=`${o.clientY-l.top-c/2}px`,t.addEventListener("animationend",()=>{i.remove(),d.innerHTML="",d.innerHTML=e,chrome.runtime.sendMessage({clearcode:!0}),t.remove()})},z=o=>{let e=document.body.querySelector(".drop_btn_container");const t=e.getBoundingClientRect(),n={top:t.top,left:t.left,right:t.right-t.left};let i=document.querySelector(".edui-editor-iframeholder"),r=document.querySelector("#ueditor_0"),d=(r.contentDocument||r.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection"),l=!1,c=1,g=1,_,x;const C=()=>{c!==g&&(c+=(g-c)*.1,Math.abs(g-c)<.01&&(c=g),e.style.transform=`scale(${c})`,requestAnimationFrame(C))},L=()=>{const s=parseFloat(e.style.left),u=parseFloat(e.style.top),v=(n.left-s)*.1,f=(n.top-u)*.1;e.style.left=`${s+v}px`,e.style.top=`${u+f}px`,Math.abs(v)<1&&Math.abs(f)<1?(e.style.left="auto",e.style.right=`${n.right}px`,e.style.top=`${n.top}px`):requestAnimationFrame(L)},S=s=>{s.target===e&&(l=!0,e.style.cursor="grabbing",g=.8,requestAnimationFrame(C),_=s.clientX-e.offsetLeft,x=s.clientY-e.offsetTop)},w=s=>{if(l){s.preventDefault();const u=s.clientX-_,v=s.clientY-x;e.style.left=`${u}px`,e.style.top=`${v}px`}},q=()=>{if(l){l=!1,g=1,requestAnimationFrame(C);const s=e.getBoundingClientRect(),u=i.getBoundingClientRect();if(s.right>u.left&&s.left<u.right&&s.bottom>u.top&&s.top<u.bottom)e.addEventListener("click",f=>{d.innerHTML="",R(f,o)});else{let f=y.getBoundingClientRect();n.top=f.top+f.height/2.83,n.left=e.parentElement.offsetWidth-(n.right+e.offsetWidth),requestAnimationFrame(L)}}};document.addEventListener("mousedown",S,!1),document.addEventListener("mouseup",q,!1),document.addEventListener("mousemove",w,!1),document.addEventListener("touchstart",S,!1),document.addEventListener("touchend",q,!1),document.addEventListener("touchmove",w,!1)},B=o=>{const e=document.createElement("div");e.innerHTML=F;let t=e.querySelector(".drop_btn_container");t.style.position="fixed";const n=document.body.querySelector(".opensp_btn_container").getBoundingClientRect();t.style.top=`${n.top+n.height/2.83}px`,t.style.right="0px",t.style.transform="translateX(100%) scale(0.5)",t.style.zIndex="10000",document.body.appendChild(t),setTimeout(()=>{t.style.transition="transform .8s",t.style.transform="translateX(-100%) scale(1)"},100),t.addEventListener("transitionend",()=>{let i=t.getBoundingClientRect();t.style.top=`${n.top+n.height/2.83}px`,t.style.transform="",t.style.transition="",t.style.zIndex="10002",t.style.right=i.right-i.left+"px",z(o)})},H=()=>{let o=document.querySelector(".drop_btn_container");o&&(setTimeout(()=>{o.style.zIndex="10000",o.style.transition="transform 0.8s",o.style.transform="translateX(120%) scale(0.5)"},50),o.addEventListener("transitionend",()=>{o.remove()}))};chrome.runtime.sendMessage({hascode:!0},async o=>{o.svgcode!==""&&B(o.svgcode)});let A=()=>{h&&h.disconnect(),h=chrome.runtime.connect({name:"svgcode"}),h.onMessage.addListener(o=>{o.svgcode!==""&&(H(),B(o.svgcode))}),h.onDisconnect.addListener(()=>{console.log("连接断开"),port=null}),console.log("重新连接")},h=null;const $=6e4;A();setInterval(A,$);const D=new ResizeObserver(()=>{let o=document.body.querySelector(".drop_btn_container");const e=document.body.querySelector(".opensp_btn_container").getBoundingClientRect();o&&(o.style.top=`${e.top+e.height/2.83}px`)});D.observe(document.body);let X=`<div class="showezbox"><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.802734 1.94727L5.02734 6.26562C5.32031 6.5625 5.64453 6.71094 6 6.71094C6.18359 6.70703 6.35156 6.66992 6.50391 6.59961C6.66016 6.5293 6.81445 6.41797 6.9668 6.26562L11.1855 1.94727C11.4043 1.73242 11.5137 1.46875 11.5137 1.15625C11.5137 0.941406 11.4609 0.746094 11.3555 0.570312C11.2539 0.398438 11.1152 0.259766 10.9395 0.154297C10.7676 0.0488281 10.5762 -0.00390625 10.3652 -0.00390625C10.041 -0.00390625 9.75977 0.123047 9.52148 0.376953L5.80664 4.22656H6.20508L2.47852 0.376953C2.23242 0.123047 1.94727 -0.00390625 1.62305 -0.00390625C1.41602 -0.00390625 1.22461 0.0488281 1.04883 0.154297C0.876953 0.259766 0.738281 0.398438 0.632812 0.570312C0.53125 0.746094 0.480469 0.941406 0.480469 1.15625C0.480469 1.3125 0.505859 1.45508 0.556641 1.58398C0.611328 1.71289 0.693359 1.83398 0.802734 1.94727Z" fill="#007AFF"/>
</svg>
</div>`,N=`
<div class="ezbox"  style="display:none">
    <div class="boxtitle">ezBox</div>
    
    <div class="import-btn-container">
        
        <div class="import-btn import-component" title="将编辑区域内的“视频”“音频”“视频号”“红包封面”等组件提取至列表">
            提取组件
        </div>
        <div class="import-btn import-context" title="将编辑区域内的所有内容提取至列表">
            提取全文
        </div>
        <div class="import-btn import-code" title="将剪切板中的代码导入编辑区域">
            导入代码
        </div>
    </div>
</div>
`;const W=document.querySelector("#editor_pannel"),Y=document.querySelector("#js_toolbar_0"),O=document.querySelector("#edui103"),M=document.createElement("div"),E=document.createElement("div");M.innerHTML=N;E.innerHTML=X;let a=M.querySelector(".ezbox"),m=E.querySelector(".showezbox");m.addEventListener("mouseenter",o=>{const e=m.getBoundingClientRect();a.style.display="",a.style.position="fixed",m.style.backgroundColor="#007AFF",m.querySelector("path").setAttribute("fill","white"),a.style.top="98px",a.style.zIndex="10000",console.log(e.left),a.style.left=`${e.left-86}px`});m.addEventListener("mouseleave",o=>{let e=!1;o.target===a&&(e=!0),o.target!==a&&e&&(a.style.display="none")});a.addEventListener("mouseleave",o=>{a.style.display="none",m.style.backgroundColor="white",m.querySelector("path").setAttribute("fill","#007AFF")});let j=a.querySelector(".import-component"),Z=a.querySelector(".import-context"),G=a.querySelector(".import-code");j.addEventListener("click",()=>{let o=document.querySelector("#ueditor_0"),t=(o.contentDocument||o.contentWindow.document).querySelector(".view.rich_media_content.autoTypeSetting24psection"),n=[];t.childNodes.forEach(i=>{if(i.removeAttribute("data-mpa-powered-by"),i.classList.contains("wx-edui-media-wrp")){let r=i.querySelector(".audio_iframe"),p=r.getAttribute("voice_encode_fileid"),d=r.getAttribute("name");console.log(i.outerHTML);let l={type:"audio",key:p,title:d,code:i.outerHTML};n.push(l)}else if(i.querySelector(".video_iframe")){let r=i.querySelector(".video_iframe"),p=r.getAttribute("data-mpvid"),d=r.getAttribute("data-ratio"),l=r.getAttribute("data-w"),c={type:"video",key:p,ratio:d,width:l,code:i.innerHTML};n.push(c)}else if(i.classList.contains("mp_redpacket_iframe_wrp")){let d={type:"redbag",key:i.querySelector(".redpackage_iframe").getAttribute("data-orderid"),code:i.outerHTML};n.push(d)}else if(i.querySelector(".channels_live_iframe")){let r=i.querySelector(".channels_live_iframe");console.log();let p=r.getAttribute("data-noticeid"),d=r.getAttribute("data-nickname"),l={type:"live",key:p,title:d,code:i.outerHTML};n.push(l)}else if(i.querySelector(".videosnap_video_iframe")){let r=i.querySelector(".videosnap_video_iframe"),p=r.getAttribute("data-id"),d=r.getAttribute("data-desc"),l={type:"videoacc",key:p,title:d,code:r.outerHTML};n.push(l)}}),console.log(n),chrome.runtime.sendMessage({components:n})});Z.addEventListener("click",()=>{});G.addEventListener("click",()=>{});W.appendChild(a);Y.insertBefore(m,O);
