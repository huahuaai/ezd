
let import_btn = `<div class="import_btn_container" style="width: 95;height: 27;position:absolute;right: 125px;">
<button type="button" class="import_btn" style="display: flex;align-items: center;justify-content: space-between;width: 90px;height: 22px;background-color:#007AFF;border-radius: 5px;padding: 2px 7px 2px 7px;">
  <svg width="19" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.61182 14.3518C1.94743 14.3518 1.44808 14.1868 1.11377 13.8567C0.783691 13.5308 0.618652 13.04 0.618652 12.384V8.62622C0.618652 8.33846 0.644043 8.10994 0.694824 7.94067C0.745605 7.76717 0.84082 7.59367 0.980469 7.42017L3.17676 4.70337C3.4222 4.39868 3.65072 4.13843 3.8623 3.92261C4.07389 3.70679 4.30452 3.54175 4.5542 3.42749C4.80811 3.31323 5.12337 3.2561 5.5 3.2561H6.62354V4.15112H5.42383C5.19531 4.15112 4.9668 4.23576 4.73828 4.40503C4.514 4.5743 4.32357 4.75627 4.16699 4.95093L1.91992 7.78833C1.7972 7.94067 1.75277 8.05493 1.78662 8.1311C1.82048 8.20304 1.92839 8.23901 2.11035 8.23901H6.14111C6.30615 8.23901 6.42887 8.29191 6.50928 8.39771C6.58968 8.5035 6.62988 8.62199 6.62988 8.75317V8.77856C6.62988 9.02401 6.68913 9.2631 6.80762 9.49585C6.93034 9.72437 7.10173 9.91479 7.32178 10.0671C7.54183 10.2153 7.80208 10.2893 8.10254 10.2893C8.40299 10.2893 8.66325 10.2153 8.8833 10.0671C9.10335 9.91479 9.27474 9.72437 9.39746 9.49585C9.52018 9.2631 9.58154 9.02401 9.58154 8.77856V8.75317C9.58154 8.62199 9.61963 8.5035 9.6958 8.39771C9.7762 8.29191 9.89893 8.23901 10.064 8.23901H14.1074C14.2809 8.23901 14.3867 8.20516 14.4248 8.13745C14.4629 8.06974 14.4185 7.95337 14.2915 7.78833L12.0381 4.95093C11.8815 4.75627 11.6911 4.5743 11.4668 4.40503C11.2425 4.23576 11.014 4.15112 10.7812 4.15112H9.58154V3.2561H10.7114C11.0838 3.2561 11.397 3.31323 11.6509 3.42749C11.9048 3.54175 12.1354 3.70679 12.3428 3.92261C12.5544 4.13843 12.785 4.39868 13.0347 4.70337L15.2246 7.42017C15.3685 7.59367 15.4637 7.76717 15.5103 7.94067C15.561 8.10994 15.5864 8.33846 15.5864 8.62622V12.384C15.5864 13.0357 15.4214 13.5266 15.0913 13.8567C14.7612 14.1868 14.2619 14.3518 13.5933 14.3518H2.61182ZM2.62451 13.3298H13.5806C13.8937 13.3298 14.1349 13.2452 14.3042 13.0759C14.4777 12.9067 14.5645 12.657 14.5645 12.3269V9.17212H10.54C10.4893 9.56567 10.3517 9.91903 10.1274 10.2322C9.90739 10.5411 9.62174 10.7865 9.27051 10.9685C8.9235 11.1462 8.53418 11.2351 8.10254 11.2351C7.67513 11.2351 7.28581 11.1462 6.93457 10.9685C6.58757 10.7865 6.30192 10.5411 6.07764 10.2322C5.85335 9.91903 5.71582 9.56567 5.66504 9.17212H1.64062V12.3269C1.64062 12.657 1.72526 12.9067 1.89453 13.0759C2.0638 13.2452 2.30713 13.3298 2.62451 13.3298ZM8.10254 8.16284C8.03906 8.16284 7.9777 8.15226 7.91846 8.1311C7.85921 8.10571 7.79785 8.06128 7.73438 7.9978L5.58887 5.92847C5.49154 5.8269 5.44287 5.71476 5.44287 5.59204C5.44287 5.46086 5.48519 5.35506 5.56982 5.27466C5.65446 5.19002 5.76237 5.14771 5.89355 5.14771C6.04167 5.14771 6.16016 5.19849 6.24902 5.30005L7.20752 6.32202L7.63916 6.77271L7.60107 5.82056V0.799561C7.60107 0.668376 7.64974 0.554118 7.74707 0.456787C7.84863 0.359456 7.96712 0.310791 8.10254 0.310791C8.23796 0.310791 8.35645 0.359456 8.45801 0.456787C8.55957 0.554118 8.61035 0.668376 8.61035 0.799561V5.82056L8.56592 6.77271L8.99756 6.32202L9.95605 5.30005C10.0449 5.19849 10.1613 5.14771 10.3052 5.14771C10.4364 5.14771 10.5443 5.19002 10.6289 5.27466C10.7178 5.35506 10.7622 5.46086 10.7622 5.59204C10.7622 5.71476 10.7135 5.8269 10.6162 5.92847L8.4707 7.9978C8.40723 8.06128 8.34587 8.10571 8.28662 8.1311C8.22738 8.15226 8.16602 8.16284 8.10254 8.16284Z" fill="white"/>
  </svg>
  <span style="color:white;font-family:"-apple-system-font,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei";
  font-size: 13px;">导入列表</span>
</button>
</div>`
let opensp_btn = `<div class="opensp_btn_container" style="padding:0px;margin:0px">
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
</div>`
//add openbtn
//打开sidepanel点击动作
let openSidePanelOption=()=> {
  chrome.runtime.sendMessage({ 'opensidepanel': true })
}
const div = document.createElement('div')
div.innerHTML = opensp_btn
let openspBtn = div.querySelector('.opensp_btn_container')
openspBtn.style.position = "fixed"
openspBtn.style.right = "0px";
openspBtn.style.top = "50%";
openspBtn.style.transform = "translateY(-50%)";
openspBtn.style.padding = "0px";
openspBtn.style.zIndex = "10000";
let opensp_button = div.querySelector('.opensp_btn')
opensp_button.addEventListener('click', openSidePanelOption)
document.body.appendChild(openspBtn);
let topTitle = document.querySelector(".weui-desktop-panel__title")?document.querySelector(".weui-desktop-panel__title").textContent:""
console.log(topTitle)
//插入导入图片按钮

//add import btn
if(topTitle.includes('图片')){

  //选择逻辑
  let imgMap = new Map();
  let imgAllSelector = document.querySelector('.weui-desktop-global__info .weui-desktop-form__checkbox')
  let imgSelectors = document.querySelectorAll('.weui-desktop-img-picker__item .weui-desktop-form__checkbox')
  let imgs = document.querySelectorAll('.weui-desktop-img-picker__item .weui-desktop-img-picker__img-thumb')
  let getImgKey=(imgItem, index)=>{
    return imgItem.querySelector('.weui-desktop-img-picker__img-thumb').style.backgroundImage.match(/url\("?(.*?)"?\)/)[1].split('/')[4]+index+imgItem.querySelector('.weui-desktop-img-picker__img-title').textContent;
  }
  let extractImgInfo=(imgItem, index)=>{
    let imgurl = imgItem.querySelector('.weui-desktop-img-picker__img-thumb').style.backgroundImage.match(/url\("?(.*?)"?\)/)[1]
    let imgtitle = imgItem.querySelector('.weui-desktop-img-picker__img-title').textContent
    let imgkey = getImgKey(imgItem,index)
    
    imgMap.set(
      imgkey,
      {
        imgurl:imgurl,
        imgtitle:imgtitle
      }
    )
  }
  let selectEventHandler =(imgItem,index)=>{
    return (e)=> {
      if(e.target.checked){
        extractImgInfo(imgItem,index);
        console.log(imgMap)
      }else{
        let imgkey=getImgKey(imgItem,index);
        imgMap.delete(imgkey);
        console.log(imgMap)
      }
    }
  }
  let imgSelectEvents = []
  let imgClickEvents = []
  imgAllSelector.addEventListener('change', (e)=>{
    imgSelectors.forEach((imgselector,index)=>{
      let imgItem = imgselector.parentNode.parentNode;
      selectEventHandler(imgItem,index)(e);
    })
  })
  for(let i=0;i<imgs.length;i++){
    let dispatchCheck=(e)=>{
      imgSelectors[i].dispatchEvent(new Event('change'))
      imgSelectors[i].dispatchEvent(new Event('change'))
    }
    imgs[i].addEventListener('click',dispatchCheck)
    imgClickEvents.push(dispatchCheck)
  }
  imgSelectors.forEach((imgselector,index)=>{
    let imgItem = imgselector.parentNode.parentNode;
    let event = selectEventHandler(imgItem,index);
    imgSelectEvents.push(event)
    imgselector.addEventListener('change', event)
  })

  //选择逻辑
  const observer = new MutationObserver((mutations)=>{

    for(let i=0;i<imgSelectors.length;++i){
      imgSelectors[i].removeEventListener('change',imgSelectEvents[i])
      imgs[i].removeEventListener('click',imgClickEvents[i])
    }
    imgSelectEvents=[]
    imgClickEvents=[]
    imgSelectors = document.querySelectorAll('.weui-desktop-img-picker__item .weui-desktop-form__checkbox')
    let selectedCnt = 0;
    imgSelectors.forEach((imgselector,index)=>{
      let imgItem = imgselector.parentNode.parentNode;
      let imgkey = getImgKey(imgItem,index);
      if(imgMap.has(imgkey)){
        selectedCnt++;
        imgselector.click()
      }
    })
    if(selectedCnt===imgSelectors.length){
      imgAllSelector.click();
    }
    imgs = document.querySelectorAll('.weui-desktop-img-picker__item .weui-desktop-img-picker__img-thumb')
    imgSelectors = document.querySelectorAll('.weui-desktop-img-picker__item .weui-desktop-form__checkbox')
    imgSelectors.forEach((imgselector,index)=>{
      let imgItem = imgselector.parentNode.parentNode;
      let event = selectEventHandler(imgItem,index);
      imgSelectEvents.push(event)
      imgselector.addEventListener('change',event)
    })
    for(let i=0;i<imgs.length;i++){
      let dispatchCheck=(e)=>{
        //触发两侧事件确保能够选中
        imgSelectors[i].dispatchEvent(new Event('change'))
        imgSelectors[i].dispatchEvent(new Event('change'))
      }
      imgs[i].addEventListener('click',dispatchCheck)
      imgClickEvents.push(dispatchCheck)
    }
  })

  const imgList = document.querySelectorAll('.weui-desktop-img-picker__img-thumb');
  const imgListConfig = {attributes: true, subtree: true}
  imgList.forEach((imgbox)=>{
    observer.observe(imgbox, imgListConfig)
  })

  let importImg =()=> {
    let imgInfoList = [];
    imgMap.forEach((value,key)=>{
      imgInfoList.push(
        {
          type: 'img',
          key: key,
          imgurl: value.imgurl,
          imgtitle: value.imgtitle
        }
      )

    })
    openSidePanelOption();
    imgMap.clear()
    setTimeout(()=>{
      chrome.runtime.sendMessage(
        {
          imginfoList: imgInfoList,
        }, (response) => {
          console.log('I send it success')
        }
      )
    },500)
    const cancelAll = document.querySelectorAll('.weui-desktop-global__info > a')[0];
    cancelAll.click()
  }
  const div = document.createElement('div')
  div.innerHTML=import_btn
  let importBtn = div.querySelector('.import_btn_container');
  importBtn.addEventListener('click',importImg)
  let target = document.querySelector(".weui-desktop-global-mod");
  target.style.position = "relative";
  target.insertBefore(importBtn, target.firstChild)
}
//插入音频导入按钮
let importAudio =()=> {

}
if(topTitle.includes('音频')){
  const div = document.createElement('div')
  div.innerHTML=import_btn
  let importBtn = div.querySelector('.import_btn_container');
  let target = document.querySelector(".weui-desktop-media__checked-tips_right");
  target.style.position = "relative";
  target.insertBefore(importBtn, target.firstChild)

}

//导入视频元素
topTitle = document.querySelector(".weui-desktop-panel__title")?document.querySelector(".weui-desktop-panel__title").textContent:""
let importVideo =()=> {

}