let opensp_btn = `<div class="opensp_btn_container" style="padding:0px;margin:0px">
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
</div>`

//add openbtn
//打开sidepanel点击动作
let openSidePanelOption = () => {
    chrome.runtime.sendMessage({ 'opensidepanel': true })
}
const div = document.createElement('div')
div.innerHTML = opensp_btn
div.className = "btngroup"
let openspBtn = div.querySelector('.opensp_btn_container')
openspBtn.style.position = "fixed"
openspBtn.style.right = "0px";
openspBtn.style.top = "50%";
openspBtn.style.transform = "translateY(-50%)";
openspBtn.style.padding = "0px";
openspBtn.style.zIndex = "10001";
let opensp_button = div.querySelector('.opensp_btn')
opensp_button.addEventListener('click', openSidePanelOption)
document.body.appendChild(div)


let drop_btn = `<div class="drop_btn_container" style="pointer-events: all;width: 26px;height: 26px;background-color: #007AFF;padding: 17px;margin: 0;border-radius: 30px; display: flex;align-items: center;justify-content: center;">
<svg width="20" height="26" style="pointer-events: none;" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99414 21.3008C6.54232 21.2943 5.27279 20.9948 4.18555 20.4023C3.09831 19.8164 2.25195 18.9928 1.64648 17.9316C1.04753 16.8704 0.748047 15.6302 0.748047 14.2109C0.748047 13.5534 0.826172 12.8861 0.982422 12.209C1.14518 11.5254 1.35352 10.8516 1.60742 10.1875C1.86133 9.51693 2.13477 8.88216 2.42773 8.2832C2.77279 7.54753 3.16341 6.80208 3.59961 6.04688C4.04232 5.29167 4.50781 4.53971 4.99609 3.79102C5.48438 3.03581 5.96615 2.29688 6.44141 1.57422C6.66276 1.23568 6.90039 0.985026 7.1543 0.822266C7.41471 0.659505 7.69466 0.578125 7.99414 0.578125C8.29362 0.578125 8.57031 0.659505 8.82422 0.822266C9.08464 0.985026 9.32552 1.23568 9.54688 1.57422C10.0091 2.27734 10.4746 2.99349 10.9434 3.72266C11.4186 4.45182 11.8711 5.18424 12.3008 5.91992C12.737 6.64909 13.1211 7.36849 13.4531 8.07812C13.7656 8.70312 14.0553 9.36068 14.3223 10.0508C14.5957 10.7409 14.8138 11.4375 14.9766 12.1406C15.1458 12.8438 15.2305 13.5339 15.2305 14.2109C15.2305 15.6302 14.9277 16.8704 14.3223 17.9316C13.7233 18.9928 12.8802 19.8164 11.793 20.4023C10.7122 20.9948 9.44596 21.2943 7.99414 21.3008Z" fill="white" fill-opacity="0.5"/>
</svg>
</div>`;

let inject_code = (e, code) => {
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    let edit_panel = document.querySelector(".edui-editor-iframeholder")
    let drop_btn = document.querySelector('.drop_btn_container');
    let iframe = document.querySelector('#ueditor_0')
    let iframe_doc = iframe.contentDocument || iframe.contentWindow.document;
    let editbox = iframe_doc.querySelector(".view.rich_media_content.autoTypeSetting24psection");
    console.log(editbox)
    edit_panel.style.position = "relative"
    edit_panel.style.overflow = "hidden"
    edit_panel.append(ripple)
    const rect = edit_panel.getBoundingClientRect();
    const rippleSize = Math.max(rect.width, rect.height)
    ripple.style.width = ripple.style.height = `${rippleSize}px`
    ripple.style.left = `${e.clientX - rect.left - rippleSize / 2}px`
    ripple.style.top = `${e.clientY - rect.top - rippleSize / 2}px`
    ripple.addEventListener('animationend', () => {
        editbox.innerHTML = "";
        editbox.innerHTML = code;
        chrome.runtime.sendMessage({ 'clearcode': true })
        drop_btn.remove()
        ripple.remove()
    })
}
let addInjectEvent = (code) => {
    let dropBtn = document.body.querySelector('.drop_btn_container')
    // 添加拖拽功能
    let edit_panel = document.querySelector(".edui-editor-iframeholder")
    let edit_box = edit_panel.getBoundingClientRect()
    let edit_left = edit_box.left;
    let edit_right = edit_box.right;
    let edit_bottom = edit_box.bottom;
    let edit_top = edit_box.top;
    let iframe = document.querySelector('#ueditor_0')
    let iframe_doc = iframe.contentDocument || iframe.contentWindow.document;
    let editbox = iframe_doc.querySelector(".view.rich_media_content.autoTypeSetting24psection");
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    const checkPos = () => {
        const dragElRect = dropBtn.getBoundingClientRect();
        const x = dragElRect.left + dragElRect.width / 2;
        const y = dragElRect.top + dragElRect.height / 2;
        console.log(x, y, edit_left, edit_right, edit_bottom, edit_top)
        if (x > edit_left && x < edit_right && y < edit_bottom && y > edit_top) {
            dropBtn.style.cursor = "pointer"
            dropBtn.addEventListener("click", (e) => {
                editbox.innerHTML = ""
                inject_code(e, code)
            })
        } else {
            dropBtn.removeEventListener("click", inject_code)
            setTimeout(() => {
                dropBtn.style.zIndex = '10000'
                dropBtn.style.transition = "transform 0.5s"
                dropBtn.style.transform = "translateX(0)"
            }, 50)
            dropBtn.addEventListener('transitionend', () => {
                dropBtn.style.transform = ""
                dropBtn.style.transition = ""
                let dropRect = dropBtn.getBoundingClientRect()
                dropBtn.style.zIndex = "10002"
                dropBtn.style.right = dropRect.right - dropRect.left + 'px';
            });
        }

    }
    const dragStart = (e) => {

        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        dropBtn.style.cursor = 'grabbing'

        if (e.target === dropBtn) {
            active = true;
        }
    };

    const dragEnd = () => {
        initialX = currentX;
        initialY = currentY;
        active = false;
        checkPos()
    };

    const drag = (e) => {
        if (active) {

            e.preventDefault();

            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, dropBtn);
        }
    };
    const setTranslate = (xPos, yPos, el) => {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    };

    document.addEventListener('touchstart', dragStart, false);
    document.addEventListener('touchend', dragEnd, false);
    document.addEventListener('touchmove', drag, false);
    document.addEventListener('mousedown', dragStart, false);
    document.addEventListener('mouseup', dragEnd, false);
    document.addEventListener('mousemove', drag, false);
}
let addDropBtn = (code) => {
    const div = document.createElement('div');
    div.innerHTML = drop_btn;
    let dropBtn = div.querySelector('.drop_btn_container')
    dropBtn.style.position="fixed"
    const openspRect = document.body.querySelector('.opensp_btn_container').getBoundingClientRect();
    dropBtn.style.top = `${openspRect.top+openspRect.height/2.75}px`;  
    dropBtn.style.right = "0px";
    dropBtn.style.transform = "translateX(100%) scale(0.5)";
    dropBtn.style.zIndex = "10000"
    document.body.appendChild(dropBtn)
    setTimeout(() => {
        dropBtn.style.transition = "transform .8s"
        dropBtn.style.transform = "translateX(-100%) scale(1)"
    }, 100)

    dropBtn.addEventListener('transitionend', () => {
        let dropRect = dropBtn.getBoundingClientRect()
        dropBtn.style.top = `${openspRect.top+openspRect.height/2.75}px`;  
        dropBtn.style.transform = ""
        dropBtn.style.transition = ""
        dropBtn.style.zIndex = "10002"
        dropBtn.style.right = dropRect.right - dropRect.left + 'px';
        addInjectEvent(code)
    });
}

let removeDropBtn = () => {
    let dropBtn = document.querySelector('.drop_btn_container')
    if (dropBtn) {
        setTimeout(() => {
            dropBtn.style.zIndex = '10000'
            dropBtn.style.transition = "transform 0.8s"
            dropBtn.style.transform = "translateX(120%) scale(0.5)"
        }, 50)
        dropBtn.addEventListener('transitionend', () => {
            dropBtn.remove()
        });
    }
}


chrome.runtime.sendMessage({ 'hascode': true }, async (response) => {
    if (response.svgcode !== '') {
        addDropBtn(response.svgcode)
    }
})

let svgport = chrome.runtime.connect({ name: 'svgcode' })
svgport.onMessage.addListener((msg) => {
    if (msg.svgcode !== "") {
        removeDropBtn()
        addDropBtn(msg.svgcode)
    }
})



const resizeObserver = new ResizeObserver(() => {
    let dropBtn = document.body.querySelector('.drop_btn_container')
    const rect = document.body.querySelector('.opensp_btn_container').getBoundingClientRect();
    console.log(rect)
    // 根据 observed 的 bounding rect 调整 target 的位置
    if(dropBtn){
        dropBtn.style.top = `${rect.top+rect.height/2.75}px`;   // 对齐 observed 的顶部
    }

});

resizeObserver.observe(document.body);
