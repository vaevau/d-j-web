;(function(doc){
    var arr = ['您好，请登录','我的订单','我的京东','京东会员','企业采购','客户服务','网站导航','手机京东'];
    var oCurntPlace = doc.querySelector('.J_current_place');    
    var oRegionalLs = doc.querySelector('#J_nav_ls .regional-ls');
    var aNavLk = doc.getElementsByClassName('J_nav_lk');
    var aNavLs = doc.getElementsByClassName('J_nav_ls');
    var aCateLk = doc.querySelectorAll('.J_cate_lk li');
    var aCateLs = doc.getElementsByClassName('cate-item');
    // var oul = doc.getElementById('J_cate_lk');
    
    var i = j = k = l = 0, aLkLen = aNavLk.length,
                           aLsLen = aNavLs.length,
                           cateLkLen = aCateLk.length,
                           cateLsLen = aCateLs.length;

    var h = s = 0;  //记录鼠标是否在目标身上 
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

     
    init();
})(document);





