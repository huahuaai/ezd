let o=`<div class="opensp_btn_container" style="padding:0px;margin:0px">
<button type="button" class="opensp_btn" style="padding:0px;margin:0px">
  <svg width="59" height="258" viewBox="0 0 59 258" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</div>`,l=()=>{chrome.runtime.sendMessage({opensidepanel:!0})};const n=document.createElement("div");n.innerHTML=o;let t=n.querySelector(".opensp_btn_container");t.style.position="fixed";t.style.right="0px";t.style.top="50%";t.style.transform="translateY(-50%)";t.style.padding="0px";t.style.zIndex="10000";let s=n.querySelector(".opensp_btn");s.addEventListener("click",l);document.body.appendChild(t);let i=()=>{let e=document.querySelector(".opensp_btn");e.style.transition="transform 0.5s ease-in-out",e.style.transform="translateX(0)",setTimeout(()=>{e.style.transform="translateX(100%)"},0)},r=()=>{let e=document.querySelector(".opensp_btn");e.style.transition="transform 0.5s ease-in-out",e.style.transform="translateX(100%)",setTimeout(()=>{e.style.transform="translateX(0)"},0)},a=chrome.runtime.connect({name:"editSidePanel"});a.onMessage.addListener(e=>{console.log(e),e.espopen?(i(),console.log("open")):e.espclose&&(r(),console.log("close"))});
