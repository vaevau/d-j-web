;(function(doc){
    var oCurntPlace = doc.querySelector('.J_current_place'),   
        oRegionalLs = doc.querySelector('#J_nav_ls .regional-ls'),
        aNavLk = doc.getElementsByClassName('J_nav_lk'),
        aNavLs = doc.getElementsByClassName('J_nav_ls'),
        aCateLk = doc.querySelectorAll('.J_cate_lk li'),
        aCateLs = doc.getElementsByClassName('cate-item');    
    var h = s = 0;  //记录鼠标是否在目标身上 
    var i = j = k = l = 0, aLkLen = aNavLk.length,
                           aLsLen = aNavLs.length,
                           cateLkLen = aCateLk.length,
                           cateLsLen = aCateLs.length;

    

    //搜索框相关　
    var inputVal = ['芭比娃娃','哇哈哈','机械键盘','内裤','电脑免费租','格力变频空调','办公椅','500G硬盘'],
        lkTxtVal = ['超市购好物','家电超级五','苹果免息购','工业年末庆'],
        oIptVal = doc.querySelector('.srh-ipt .input'),
        oLkTxtVal = doc.querySelector('.rcm-lk .active'),
        oSrhHelp = doc.getElementById('J_search_helper'),
        oSrhHpUl = doc.querySelector('#J_search_helper ul'),      
        aSrhLi = oSrhHpUl.querySelectorAll('li'),
        oDelAll = doc.getElementById('J_delete_all'),
        oSrhBtn = doc.getElementById('J_srh_btn');

    //轮播图相关
    var oBannerImg = doc.getElementById('J_banner_img'),
        oBannerDot = doc.getElementById('J_banner_dot'),
        aBannerImg = oBannerImg.querySelectorAll('li'),
        aBannerDot = oBannerDot.querySelectorAll('li'),
        oPrvBtn = doc.getElementById('J_prv_btn'),
        oNextBtn = doc.getElementById('J_next_btn'),
        m = 0,  aBnerDotLen = aBannerDot.length;
    var init = function(){
        bindEvent();
        
    }
    function bindEvent(){  
        //显示隐藏，tab切换相关
        oCurntPlace.addEventListener('mouseover', show, false);
        oCurntPlace.addEventListener('mouseout', hide, false); 
        oRegionalLs.addEventListener('mouseover', show, false);
        oRegionalLs.addEventListener('mouseout', hide, false); 
        
        for(; i<aLkLen; i++){ 
            aNavLk[i].idx = i;        
            aNavLk[i].addEventListener('mouseover', showNavList, false);
            aNavLk[i].addEventListener('mouseout', hideNavList, false);
        }
        for(; j<aLsLen; j++){ 
            aNavLs[j].idx = j;        
            aNavLs[j].addEventListener('mouseover', showNavList, false);
            aNavLs[j].addEventListener('mouseout', hideNavList, false);
        }
        for (; k<cateLkLen; k++){
            aCateLk[k].idx = k;                  
            aCateLk[k].addEventListener('mouseover', showCateList, false);
            aCateLk[k].addEventListener('mouseout', hideCateList, false);
        }
        //事件委托
        // oul.addEventListener('mouseover', sEvtEntruse, false);
        // oul.addEventListener('mouseout', HEvtEntruse, false);
        for (; l<cateLsLen; l++){
            aCateLs[l].idx = l;            
            aCateLs[l].addEventListener('mouseover', showCateList, false);
            aCateLs[l].addEventListener('mouseout', hideCateList, false);
        }
        //搜索框相关
        oIptVal.addEventListener('focus', clearEvent, false);
        oIptVal.addEventListener('blur', recoverEvent, false);
        oSrhHpUl.addEventListener('mouseover', changeTxt,false);
        oSrhHpUl.addEventListener('mouseout', recoverTxt,false);
        oSrhHpUl.addEventListener('click', delSinglSrhEntry,false);
        oDelAll.addEventListener('click', delAllSrhEntry,false);
        oSrhBtn.addEventListener('click', addSrhEntry, false);

        //轮播相关
        oPrvBtn.addEventListener('click', prveImg);
        oNextBtn.addEventListener('click', nextImg);
        for(; m<aBnerDotLen; m++){
            aBannerDot[m].idx = m;
            aBannerDot[m].addEventListener('mouseover', switchImg)
        }
       
    }

    // 事件委托
    // function sEvtEntruse(e){
    //     h = s = 1; 
    //    var  e = e || window.e;
    //     var eTget = e.target || e.srcElement;
    //     for (; k<cateLkLen; k++){
    //         aCateLk[k].idx = k;             
    //     }
        
    //     if(eTget.nodeName == 'LI' || eTget.nodeName == 'A'){
    //         addClass(aCateLs[eTget.idx], 'show');
    //     }       
    // }
    // function HEvtEntruse(e){
    //     var index = this.idx;        
    //     h = s = 0; 
    //     var  e = e || window.e;
    //     var eTget = e.target || e.srcElement;
    //     for (; k<cateLkLen; k++){
    //         aCateLk[k].idx = k;             
    //     }
        
    //     if(eTget.nodeName == 'LI' || eTget.nodeName == 'A'){
    //         rmClass(aCateLs[eTget.idx], 'show');
    //     }          
    // }

    function show(){   
             h = s = 1;                       
            addClass(oRegionalLs,'show');
            addClass(oCurntPlace,'active-bg');
    }
    function hide(){
        h = s = 0;
        setTimeout(function(){
            if(h !==1 || s !== 1){
                rmClass(oRegionalLs, 'show');
                rmClass(oCurntPlace, 'active-bg');
            }
        },100);
    }
     function showNavList(){
         var index = this.idx;
         h = s = 1; 
        //  var reg1 =  /\bJ_nav_lk\b/;
        //  var reg2 = /\bcate-item\b/;
        // 通过正则判断当前移入的是那个目标，让所有
        // 隐藏列表共用一个显示隐藏函数,
            addClass(aNavLs[index], 'show');  
            addClass(aNavLk[index], 'active-bg');            
     }
     function hideNavList(){
        var index = this.idx;
         h = s = 0;       
        if(h !==1 || s !== 1){
            rmClass(aNavLs[index], 'show'); 
            rmClass(aNavLk[index], 'active-bg'); 
        }                  
     }
     function showCateList(){
        var index = this.idx;
        h = s = 1; 
        addClass(aCateLs[index], 'show');
    }
    function hideCateList(){
        var index = this.idx;
        h = s = 0;       
        if(h !==1 || s !== 1){
            rmClass(aCateLs[index], 'show'); 
        }                  
     } 

     //搜索框相关  
        Array.prototype.randomEle = function(){
             return this[Math.floor(Math.random()*this.length)];         
     }
     
    var timer_1 =  setInterval(setIpuVal, 9000),
        timer_2 = setInterval(setLkVal, 4000);
     function setIpuVal(){
        var iptEle = inputVal.randomEle();
            oIptVal.value = iptEle;         
     }
     function setLkVal(){
        var lkEle = lkTxtVal.randomEle();
            oLkTxtVal.innerHTML = lkEle;
     }

     function clearEvent(){        
        clearInterval(timer_1); 
        setTimeout(function(){
            oSrhHelp.style.display = 'block';
        },350)       
     }
     function recoverEvent(){       
        inputVal.forEach((item) =>{
            if(oIptVal.value === item){
               timer_1 = setInterval(setIpuVal, 9000);
            }
        }) 
     }
 
     function changeTxt(e){
         e = e || window.e;
       var  eTget = e.target || e.srcElement;
       console.log(e);
         if(eTget.tagName.toUpperCase() === 'LI' ){
         }else if(eTget.tagName.toUpperCase() === 'SPAN'){
             eTget.innerHTML = '立即删除';
         }        
     }
     function recoverTxt(e){
         e = e || window.e;
         var eTget = e.target || e.srcElement;         
         if(eTget.tagName.toUpperCase() === 'LI' ){
        }else if(eTget.tagName.toUpperCase() === 'SPAN'){
            eTget.innerHTML = '搜索历史';
        } 
     }

    var aSrhLiLen = aSrhLi.length;
    function delSinglSrhEntry(e){       
        e = e || window.e;
        var eTget = e.target || e.srcElement;        
        if(eTget.tagName.toUpperCase() === 'LI' ){
            
       }else if(eTget.tagName.toUpperCase() === 'SPAN'){
           eTget.parentNode.style.display = 'none'; 
           aSrhLiLen--;
           if( aSrhLiLen === 0){           
            oSrhHelp.style.display = 'none';            
           }
       } 
    }
    oSrhHelp.onmouseover = function(){
        h = s = 2;
    }
    oSrhHelp.onmouseout = function(){
        h = s = 0;
    }
    doc.body.onclick = function(){
        if(h !== 2 || s !== 2){
            oSrhHelp.style.display = 'none';
        }
    }
    function delAllSrhEntry(e){
        e = e || window.e;
        var eTget = e.target || e.srcElement;        
        eTget.parentNode.innerHTML = '';
        rmClass(oSrhHelp, 'search-helper');
    }
    function addSrhEntry(){
        var iptVal = oIptVal.value;
        if(iptVal == ''){
            iptVal = oIptVal.getAttribute('placeholder');
        }
         var addLi = `<li><a href="#">${iptVal}</a><span>搜索历史</span></li>`;        
         oSrhHpUl.innerHTML += addLi;
    }

  
    //轮播图相关
        // function switchImg(e){           
        //     e = e || window.e;
        //     var eTget = e.target || e.srcElement;  
            
        //     for(var i = 0,aBnerDotLen = aBannerDot.length; i<aBnerDotLen; i++){
        //         aBannerDot[i].idx = i;                               
        //    } 
        //     if(eTget.tagName.toUpperCase() === 'LI'){                                                        
        //         var index = eTget.idx;               
        //         oBannerImg.style.left = -58*index + 'rem'; 
        //         dotStyle();  
        //         function dotStyle(){                   
        //             for(i = 0; i<aBnerDotLen; i++){
        //                 aBannerDot[i].className = '';
        //             }
        //               addClass(eTget, 'active'); 
        //         }        
        //     }              
        // }
        // function autoSwitchImg(e){
        //     e = e || window.e;
        //     var eTget = e.target || e.srcElement;  
        //     var index = eTget.idx;
        //     alert(index);
        //     timer_3 = setInterval(() => {
        //         for(var i = 0,aBnerDotLen = aBannerDot.length; i<aBnerDotLen; i++){
        //             aBannerDot[i].idx = i;                               
        //        } 
        //         if(eTget.tagName.toUpperCase() === 'LI'){                                                        
        //             var index = eTget.idx;               
        //             oBannerImg.style.left = -58*index + 'rem';  
        //             function dotStyle(){                   
        //                 for(i = 0; i<aBnerDotLen; i++){
        //                     aBannerDot[i].className = '';
        //                 }
        //                   addClass(eTget, 'active'); 
        //             }        
        //         } 
        //     }, 3000);
        // }
        var index = 0;       
    function switchImg(){          
        clearInterval(timer_3);
         currentIdx = this.idx;
         // 记录当前索引值，和上一次做比较
     
        console.log(currentIdx-index);
        for(var i=0; i<aBannerImg.length; i++){
            aBannerImg[i].className = '';
        }      
        if(currentIdx > index  ){
            aBannerImg[currentIdx].className = 'fade-in';
        }else if(currentIdx < index) {
            aBannerImg[currentIdx].className = 'fade-in';
        }
        if(index == aBannerImg.length-2){
            aBannerImg[0].className = 'fade-in';
        }
        if(currentIdx == 0){
            aBannerImg[currentIdx]
            oBannerImg.style.left = 0;
        }           
        //以上为淡入淡出相关判断        
         index = this.idx;
         
         dotStyle();
        // oBannerImg.style.left = -58*index + 'rem';
        moveMent(oBannerImg, 'left', -58*index, 20000, function(){
            autoSwitchImg();  
            //用户操作完成后，重新开始执行自动播放          
        });
    }
    function dotStyle(){   
        if(index == aBannerImg.length-1){
            index = 0;            
            oBannerImg.style.left = 0;
            //如果到了最后一张，则让从头开始
        }else if(index == 0){            
            index = aBannerImg.length-1;
            oBannerImg.style.left = -58*aBannerImg.length;
        }     
        for(var m = 0; m<aBnerDotLen; m++){
            aBannerDot[m].className = '';
        }        
        addClass(aBannerDot[index], 'active');
    }
    var timer_3;
    function autoSwitchImg(){ 
                            
       timer_3 = setInterval(function(){  
        for(var i=0; i<aBannerImg.length; i++){
            aBannerImg[i].className = '';
        }      
        aBannerImg[index+1].className = 'fade-in';     
        if(index == aBannerImg.length-2){
            aBannerImg[0].className = 'fade-in';
        }   
            index++;
            index %= aBannerImg.length;// index不能无限自增
            moveMent(oBannerImg, 'left', -58*index, 20000, function(){
                dotStyle();
            })
        }, 3000);  
    }
    autoSwitchImg();

    function prveImg(){
        for(var i=0; i<aBannerImg.length; i++){
            aBannerImg[i].className = '';
        }
        aBannerImg[index-1].className = 'fade-in';
        
        clearInterval(timer_3);
        if(index == 0){
            index = aBannerImg.length-1;
        }//如果页面一刷新默认索引为0，当点击上一张时，让其到最后一张
        index--;
        index %= aBannerImg.length;// index不能无限自增
        moveMent(oBannerImg, 'left', -58*index, 20000, function(){
            dotStyle();
            autoSwitchImg();
            //用户操作完成后，重新开始执行自动播放 
        })
    }
    function nextImg(){   
        for(var i=0; i<aBannerImg.length; i++){
            aBannerImg[i].className = '';
        }      
        aBannerImg[index+1].className = 'fade-in';
        if(index == aBannerImg.length-2){
            aBannerImg[0].className = 'fade-in';
        }
        clearInterval(timer_3);
        if(index == aBannerImg.length-1){
            index = 0;
        }
        index++;
        index %= aBannerImg.length;// index不能无限自增
        moveMent(oBannerImg, 'left', -58*index, 20000, function(){
            dotStyle();
            autoSwitchImg();
            //用户操作完成后，重新开始执行自动播放 
        }) 
          
    }

    //淡入淡出　
    // function fadeIn(){
    //     setOpacity(ele,0);
        
    //     for(var i = 0; i<20; i++){
                       
    //         (function(){
    //             var opacityLevel = i * 5; 
    //             setTimeout(() => {
    //                 setOpacity(ele, opl)
    //             }, 100);
    //         })(i);
    //     }
    // }
    

    init();
})(document);





