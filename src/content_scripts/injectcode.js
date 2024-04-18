//插入代码
//注入svg代码
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
      editbox.innerHTML = code;
      drop_btn.remove()
      ripple.remove()
    })
  }
  let addbtnOnPage = (code) => {
      let drop_btn_string = `<div class="drop_btn_container" style="pointer-events: all;width: 22px;height: 22px;background-color: #007AFF;padding: 14px;margin: 0;border-radius: 25px; display: flex;align-items: center;justify-content: center;">
      <svg width="15" height="22" style="pointer-events: none;" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99414 21.3008C6.54232 21.2943 5.27279 20.9948 4.18555 20.4023C3.09831 19.8164 2.25195 18.9928 1.64648 17.9316C1.04753 16.8704 0.748047 15.6302 0.748047 14.2109C0.748047 13.5534 0.826172 12.8861 0.982422 12.209C1.14518 11.5254 1.35352 10.8516 1.60742 10.1875C1.86133 9.51693 2.13477 8.88216 2.42773 8.2832C2.77279 7.54753 3.16341 6.80208 3.59961 6.04688C4.04232 5.29167 4.50781 4.53971 4.99609 3.79102C5.48438 3.03581 5.96615 2.29688 6.44141 1.57422C6.66276 1.23568 6.90039 0.985026 7.1543 0.822266C7.41471 0.659505 7.69466 0.578125 7.99414 0.578125C8.29362 0.578125 8.57031 0.659505 8.82422 0.822266C9.08464 0.985026 9.32552 1.23568 9.54688 1.57422C10.0091 2.27734 10.4746 2.99349 10.9434 3.72266C11.4186 4.45182 11.8711 5.18424 12.3008 5.91992C12.737 6.64909 13.1211 7.36849 13.4531 8.07812C13.7656 8.70312 14.0553 9.36068 14.3223 10.0508C14.5957 10.7409 14.8138 11.4375 14.9766 12.1406C15.1458 12.8438 15.2305 13.5339 15.2305 14.2109C15.2305 15.6302 14.9277 16.8704 14.3223 17.9316C13.7233 18.9928 12.8802 19.8164 11.793 20.4023C10.7122 20.9948 9.44596 21.2943 7.99414 21.3008Z" fill="white" fill-opacity="0.5"/>
      </svg>
  </div>`;
      const div = document.createElement('div')
      div.innerHTML = drop_btn_string;
      let drop_btn_container = div.querySelector('.drop_btn_container');
      drop_btn_container.style.position = "fixed";
      drop_btn_container.style.right = "10%";
      drop_btn_container.style.top = "50%";
      drop_btn_container.style.zIndex = "10000"
  
      document.body.appendChild(drop_btn_container)
      // 添加拖拽功能
      let edit_panel = document.querySelector(".edui-editor-iframeholder")
      let edit_box = edit_panel.getBoundingClientRect()
      let edit_left = edit_box.left;
      let edit_right = edit_box.right;
      let edit_bottom = edit_box.bottom;
      let edit_top = edit_box.top;
      let active = false;
      let currentX;
      let currentY;
      let initialX;
      let initialY;
      let xOffset = 0;
      let yOffset = 0;
      const checkPos = () => {
        const dragElRect = drop_btn_container.getBoundingClientRect();
        const x = dragElRect.left + dragElRect.width / 2;
        const y = dragElRect.top + dragElRect.height / 2;
        console.log(x, y, edit_left, edit_right, edit_bottom, edit_top)
        if (x > edit_left && x < edit_right && y < edit_bottom && y > edit_top) {
          drop_btn_container.style.cursor = "pointer"
          drop_btn_container.addEventListener("click", (e) => {
            inject_code(e, code)
          })
        } else {
          drop_btn_container.removeEventListener("click", inject_code)
        }
  
      }
      checkPos()
      const dragStart = (e) => {
        if (e.type === 'touchstart') {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }
        drop_btn_container.style.cursor = 'grabbing'
        if (e.target === drop_btn_container) {
          active = true;
        }
  
      };
  
      const dragEnd = () => {
        initialX = currentX;
        initialY = currentY;
        active = false;
        drop_btn_container.style.cursor = 'grab'
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
          setTranslate(currentX, currentY, drop_btn_container);
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
  