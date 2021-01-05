;(function(doc){
    var oCurntPlace = doc.querySelector('.J_current_place'),   
        oRegionalLs = doc.querySelector('#J_nav_ls .regional-ls'),
        aNavLk = doc.getElementsByClassName('J_nav_lk'),
        aNavLs = doc.getElementsByClassName('J_nav_ls'),
        aCateLk = doc.querySelectorAll('.J_cate_lk li'),
        aCateLs = doc.getElementsByClassName('cate-item');
    // var oul = doc.getElementById('J_cate_lk');
    
    var i = j = k = l = 0, aLkLen = aNavLk.length,
                           aLsLen = aNavLs.length,
                           cateLkLen = aCateLk.length,
                           cateLsLen = aCateLs.length;

    var h = s = 0;  //记录鼠标是否在目标身上 
    var inputVal = ['芭比娃娃','哇哈哈','机械键盘','内裤','电脑免费租','格力变频空调','办公椅','500G硬盘'],
        lkTxtVal = ['超市购好物','家电超级五','苹果免息购','工业年末庆'],
        oIptVal = doc.querySelector('.srh-ipt .input'),
        oLkTxtVal = doc.querySelector('.rcm-lk .active'),
        oSrhHelp = doc.getElementById('J_search_helper');  
    var init = function(){
        bindEvent();
    }
    function bindEvent(){  
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
        oIptVal.addEventListener('focus', clearEvent, false);
        oIptVal.addEventListener('blur', recoverEvent, false);
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
        oSrhHelp.style.display = 'block';
     }
     function recoverEvent(){       
        inputVal.forEach((item, index) =>{
            if(oIptVal.value === item){
               timer_1 = setInterval(setIpuVal, 9000);
            }
        }) 
        oSrhHelp.style.display = 'none';
     }

    
    init();
})(document);





