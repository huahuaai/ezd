import{i as v}from"./interact.min-DamJm7fn.js";import{s as z}from"./utils-C4Bj6WAK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $=t=>{v(t).draggable({modifiers:[v.modifiers.restrictRect({restriction:"parent",endOnly:!0})],listeners:{move(n){const o=n.target;let e=(parseFloat(o.getAttribute("data-x"))||0)+n.dx,i=(parseFloat(o.getAttribute("data-y"))||0)+n.dy;o.style.transform=`translate(${e}px, ${i}px)`,o.setAttribute("data-x",e),o.setAttribute("data-y",i)}}}).resizable({edges:{left:!0,right:!0,bottom:!0,top:!0},margin:5,modifiers:[v.modifiers.restrictEdges({outer:"parent",endOnly:!0}),v.modifiers.restrictSize({min:{width:40,height:20},max:{width:2e3,height:2e3}})],listeners:{move(n){const o=n.target;let e=parseFloat(o.getAttribute("data-x"))||0,i=parseFloat(o.getAttribute("data-y"))||0;o.style.width=`${n.rect.width}px`,o.style.height=`${n.rect.height}px`,e+=n.deltaRect.left,i+=n.deltaRect.top,o.style.transform=`translate(${e}px, ${i}px)`,o.setAttribute("data-x",e),o.setAttribute("data-y",i)}}}).on("resizestart",function(n){n.target.style.cursor="nwse-resize"}).on("resizeend",function(n){n.target.style.cursor="move"})},H=t=>{let n=0;v(t).draggable({modifiers:[v.modifiers.restrictRect({restriction:"parent",endOnly:!0})],listeners:{move(o){const e=o.target;let i=(parseFloat(e.getAttribute("data-x"))||0)+o.dx,l=(parseFloat(e.getAttribute("data-y"))||0)+o.dy;e.style.transform=`translate(${i}px, ${l}px) rotate(${n}deg)`,e.setAttribute("data-x",i),e.setAttribute("data-y",l)}}}).resizable({edges:{left:!0,right:!0,bottom:!0,top:!0},margin:5,modifiers:[v.modifiers.restrictEdges({outer:"parent",endOnly:!0}),v.modifiers.restrictSize({min:{width:20,height:20},max:{width:2e3,height:2e3}}),v.modifiers.aspectRatio({ratio:"preserve",modifiers:[v.modifiers.restrictEdges({outer:"parent",endOnly:!0}),v.modifiers.restrictSize({min:{width:10,height:10},max:{width:2e3,height:2e3}})]})],listeners:{move(o){const e=o.target;let i=parseFloat(e.getAttribute("data-x"))||0,l=parseFloat(e.getAttribute("data-y"))||0;e.style.width=`${o.rect.width}px`,e.style.height=`${o.rect.height}px`,i+=o.deltaRect.left,l+=o.deltaRect.top,e.style.transform=`translate(${i}px, ${l}px) rotate(${n}deg)`,e.setAttribute("data-x",i),e.setAttribute("data-y",l)}}}).on("resizestart",function(o){o.target.style.cursor="nwse-resize"}).on("resizeend",function(o){o.target.style.cursor="move"})},r=document.createElement("div");r.classList.add("ezdrop-mask");const k=()=>{document.body.querySelector(".ezdrop-mask")&&document.body.removeChild(document.body.querySelector(".ezdrop-mask")),document.body.appendChild(r)},S=()=>{document.body.removeChild(document.body.querySelector(".ezdrop-mask"))},L=t=>{let n=document.body.querySelector(".ezdrop-mask").querySelector(".img-container"),o=n.querySelectorAll(".img-hotzone"),e=n.getBoundingClientRect();const i=e.x,l=e.y,u=e.width,g=e.height;let h=[],a=[],d=[],m=[];for(let b of o){const y=b.getBoundingClientRect();h.push((y.x-i)/u*100),a.push((y.y-l)/g*100),d.push(y.width/u*100),m.push(y.height/g*100)}z("updatedHotZone",{key:t,hotx:h,hoty:a,hotw:d,hoth:m}),document.body.removeChild(document.body.querySelector(".ezdrop-mask"))},q=()=>{r.querySelector(".hotzone-container")&&r.removeChild(r.querySelector(".hotzone-container")),r.querySelector(".svgcanvas-container")&&r.removeChild(r.querySelector(".svgcanvas-container")),r.querySelector(".hotzone-button")&&r.removeChild(r.querySelector(".hotzone-button")),r.querySelector(".tooltip-container")&&r.removeChild(r.querySelector(".tooltip-container")),r.querySelector(".svgcanvas-button")&&r.removeChild(r.querySelector(".svgcanvas-button"))},w=t=>{const n=`
    <div class="hotzone-container">
        <div class="img-container">
            <img class="img"  data-key="${t.key}" src="${t.imgurl}">
        </div>
    </div>
    `,o=document.createElement("div");o.innerHTML=n;const e=o.querySelector(".img");e.onload=()=>{const c=e.naturalWidth,p=e.naturalHeight;c>p?(e.style.width="750px",e.style.height="auto"):(e.style.width="auto",e.style.height="750px")};const i=["#12a3ff","#30c0ff","#54e3ff","#37f4b0","#02cca6","#b1ef7b","#f4e916","#f2af19","#ef701b","#ff80e1"];let l=t.hotx,u=t.hoty,g=t.hotw,h=t.hoth,a=[];for(let c=0;c<t.cnt;c++){const p=i[c%i.length];a.push(p)}const d=o.querySelector(".img-container");for(let c=0;c<t.cnt;++c){const p=document.createElement("div");p.classList.add("img-hotzone"),p.style.left=`${l[c]}%`,p.style.top=`${u[c]}%`,p.style.width=`${g[c]}%`,p.style.height=`${h[c]}%`,p.style.backgroundColor=a[c],p.textContent=`热区${c+1}`,$(p),d.appendChild(p)}q();const m=`
    <div class="hotzone-button">
        <button class="cancel-button">取消</button>
        <button class="save-button">保存</button>
    </div>
    `,b=document.createElement("div");b.innerHTML=m,b.querySelector(".cancel-button").addEventListener("click",()=>S()),b.querySelector(".save-button").addEventListener("click",()=>L(t.key)),r.appendChild(b.querySelector(".hotzone-button"));const y=`
    <div class="tooltip-container">
        <div>彩色热区<div style="display:inline-block;background-color:red;border: 2px dashed #FFF;opacity: 0.66;margin-left:2px;margin-right:2px;padding:0px;width:12px;height:12px;"></div>代表可触发区域 </div>
        <div>拖动热区边缘，调整大小；拖动热区，调整位置</div>
    </div>
    `,f=document.createElement("div");f.innerHTML=y,r.appendChild(f.querySelector(".tooltip-container")),r.appendChild(o.querySelector(".hotzone-container"))},E=t=>{let n=t.eldict,o=document.body.querySelector(".ezdrop-mask").querySelector(".img-container"),e=o.querySelectorAll(".effect-element"),i=o.getBoundingClientRect();console.log(n);const l=i.x,u=i.y,g=i.width,h=i.height;for(let a of e){a.childNodes[0];const d=a.getBoundingClientRect();n[a.dataset.key].elx=(d.x-l)/g*100,n[a.dataset.key].ely=(d.y-u)/h*100,n[a.dataset.key].elw=d.width/g*100,n[a.dataset.key].elh=d.height/h*100}console.log(n),z("updatedSvgCanvas",{key:t.key,eldict:n}),document.body.removeChild(document.body.querySelector(".ezdrop-mask"))},C=t=>{if(t.freshsvgcanvas)document.body.querySelector(".svgcanvas-container"),t.backgroundinfo[0],t.backgroundinfo[1],t.backgroundinfo[2];else{q();const n=`
        <div class="svgcanvas-container">
            <div class="img-container">
                <div class="background" data-key="${t.key}"></div>
            </div>
        </div>
        `,o=document.createElement("div");o.innerHTML=n;const e=o.querySelector(".background");let i=t.backgroundinfo[0],l=t.backgroundinfo[1],u=t.backgroundinfo[2];e.innerHTML=i,e.childNodes[0].tagName!=="svg"&&(e.childNodes[0].style.position="absolute",e.childNodes[0].style.height="100%",e.childNodes[0].style.width="100%"),l>u?(e.style.width="750px",e.style.height=`${u*750/l}px`):(e.style.width=`${l*750/u}px`,e.style.height="750px");for(let a of t.keylist){let d=t.eldict[a],m=d.elcode;if(m!==""){let b=d.elx,y=d.ely,f=d.elw,c=d.elh;const p=o.querySelector(".img-container"),s=document.createElement("div");s.classList.add("effect-element"),s.dataset.key=a,s.innerHTML=m,s.style.left=`${b}%`,s.style.top=`${y}%`,f!=="auto"?s.style.width=`${f}%`:s.style.width=`${f}`,c!=="auto"?s.style.height=`${c}%`:s.style.height=`${c}`,console.log(s),console.log(s.childNodes[0]),s.childNodes[0].tagName!=="svg"&&(s.childNodes[0].style.height="100%",s.childNodes[0].style.width="100%"),H(s),p.appendChild(s)}}const g=`
        <div class="svgcanvas-button">
            <button class="cancel-button">取消</button>
            <button class="save-button">保存</button>
        </div>
        `,h=document.createElement("div");h.innerHTML=g,h.querySelector(".cancel-button").addEventListener("click",()=>S()),h.querySelector(".save-button").addEventListener("click",()=>E(t)),r.appendChild(h.querySelector(".svgcanvas-button")),r.appendChild(o.querySelector(".svgcanvas-container"))}},_=t=>{q();const n=`
    <div class="hotzone-container">
        <div class="img-container">
            <div class="background" data-key="${t.key}"></div>
        </div>
    </div>
    `,o=document.createElement("div");o.innerHTML=n;const e=o.querySelector(".background");let i=t.backgroundinfo[0],l=t.backgroundinfo[1],u=t.backgroundinfo[2];e.innerHTML=i,l>u?(e.style.width="750px",e.style.height=`${u*750/l}px`):(e.style.width=`${l*750/u}px`,e.style.height="750px");const g="red";let h=t.hotx,a=t.hoty,d=t.hotw,m=t.hoth;const b=o.querySelector(".img-container"),y=document.createElement("div");y.classList.add("audio-hotzone"),y.style.left=`${h}%`,y.style.top=`${a}%`,y.style.width=`${d}%`,y.style.height=`${m}%`,y.style.backgroundColor=g,$(y),b.appendChild(y);const f=`
    <div class="hotzone-button">
        <button class="cancel-button">取消</button>
        <button class="save-button">保存</button>
    </div>
    `,c=document.createElement("div");c.innerHTML=f,c.querySelector(".cancel-button").addEventListener("click",()=>S()),c.querySelector(".save-button").addEventListener("click",()=>A(t.key)),r.appendChild(c.querySelector(".hotzone-button"));const p=`
    <div class="tooltip-container">
        <div>彩色热区<div style="display:inline-block;background-color:red;border: 2px dashed #FFF;opacity: 0.66;margin-left:2px;margin-right:2px;padding:0px;width:12px;height:12px;"></div>代表可触发区域 </div>
        <div>拖动热区边缘，调整大小；拖动热区，调整位置</div>
    </div>
    `,s=document.createElement("div");s.innerHTML=p,r.appendChild(s.querySelector(".tooltip-container")),r.appendChild(o.querySelector(".hotzone-container"))},A=t=>{let n=document.body.querySelector(".ezdrop-mask").querySelector(".img-container"),o=n.querySelector(".audio-hotzone"),e=n.getBoundingClientRect();const i=e.x,l=e.y,u=e.width,g=e.height;let h=0,a=0,d=0,m=0;const b=o.getBoundingClientRect();h=(b.x-i)/u*100,a=(b.y-l)/g*100,d=b.width/u*100,m=b.height/g*100,z("updatedAudioHotZone",{key:t,hotx:h,hoty:a,hotw:d,hoth:m}),document.body.removeChild(document.body.querySelector(".ezdrop-mask"))};let R=()=>{x&&x.disconnect(),x=chrome.runtime.connect({name:"mmask"}),x.onMessage.addListener(t=>{t.showhotzone&&(k(),w(t)),t.freshhotzone&&r.querySelector(".img").dataset.key===t.key&&document.body.querySelector(".ezdrop-mask")&&w(t),t.closehotzone&&document.body.querySelector(".ezdrop-mask")&&document.body.removeChild(document.body.querySelector(".ezdrop-mask")),t.showsvgcanvas&&(k(),C(t)),t.freshsvgcanvas&&r.querySelector(".background").dataset.key===t.key&&document.body.querySelector(".ezdrop-mask")&&C(t),t.closesvgcanvas&&document.body.querySelector(".ezdrop-mask")&&document.body.removeChild(document.body.querySelector(".ezdrop-mask")),t.showaudiohotzone&&(k(),_(t))}),x.onDisconnect.addListener(()=>{console.log("连接断开"),x=null}),console.log("重新连接")},x=null;R();