window.onload = function(){
    init();
}
function init(){
   
}
var doc = document,
    h,
    s;
    //共用函数
    function show(obj, active){                  
        h = s = 1;                       
        addClass(obj, active);
        
    }
    function hide(obj, active){
        h = s = 0;       
        if(h !==1 || s !== 1){
            rmClass(obj, active);               
        }       
    }
    function delayHide(obj, active){
        h = s = 0; 
        setTimeout(function(){
            if(h !==1 || s !== 1){
                rmClass(obj, active);               
            }  
        }, 120)                  
    }

//地域列表显示隐藏
var siteLs = (function(){
   var oCurntPlace = doc.querySelector('.J_current_place'),   
        oRegionalLs = doc.querySelector('#J_nav_ls .regional-ls');
         
            oCurntPlace.onmouseover = function(){
                show(oRegionalLs,'show');
                addClass(oCurntPlace,'active-bg');
            }
            oCurntPlace.onmouseout = function(){
                delayHide(oRegionalLs,'show');
                rmClass(oCurntPlace, 'active-bg');
            }
            oRegionalLs.onmouseover = function(){
               show(oRegionalLs,'show');
               addClass(oCurntPlace,'active-bg');
            }
            oRegionalLs.onmouseout = function(){
                delayHide(oRegionalLs,'show');
                rmClass(oCurntPlace, 'active-bg');
            }
})();
   

//导航列表显示隐藏
var headerNavLs = (function(){
   var  aNavLk = doc.getElementsByClassName('J_nav_lk'),
        aNavLs = doc.getElementsByClassName('J_nav_ls'),
        i = 0,
        j = 0,        
        aLkLen = aNavLk.length,
        aLsLen = aNavLs.length,
        item;

        for(; i < aLkLen; i++){ 
            item = aNavLk[i]; 
            item.idx = i;   
            function commonShow(){
                item.onmouseover = function(){              
                    var index = this.idx;
                    show(aNavLs[index],'show'); 
                    addClass(aNavLk[index],'active-bg');               
                }
            }   
            commonShow();                         
           
            function commonHide(){
                item.onmouseout = function(){
                    var index = this.idx;
                    hide(aNavLs[index],'show'); 
                    rmClass(aNavLk[index],'active-bg');  
                }
            }
            commonHide();
        }

        for(; j < aLsLen; j++){
            item = aNavLs[j];
            item.idx = j;

            commonShow();
            commonHide();
        }        
})();


//main商品列表tab
var categoryGoods = (function(){
    var aCateLk = doc.querySelectorAll('.J_cate_lk li'),
        aCateLs = doc.getElementsByClassName('cate-item'),
        i = 0,
        j = 0,
        aCateLkLen = aCateLk.length,
        aCateLsLen = aCateLs.length,
        item;

        for(; i < aCateLkLen; i++){ 
            item = aCateLk[i]; 
            item.idx = i;   
            function commonShow(){
                item.onmouseover = function(){              
                    var index = this.idx;
                    show(aCateLs[index],'show');
                    addClass(aCateLk[index],'active-bg');                                  
                }
            }   
            commonShow();                         
           
            function commonHide(){
                item.onmouseout = function(){
                    var index = this.idx;
                    hide(aCateLs[index],'show');  
                    rmClass(aCateLk[index],'active-bg');                     
                }
            }
            commonHide();
        }

        for(; j < aCateLsLen; j++){
            item = aCateLs[j];
            item.idx = j;

            commonShow();
            commonHide();
        } 
})();


//搜索相关
var searchBox = (function(){
    var hotWordsArr = ['电脑数码过"萌"年','哇哈哈','机械键盘','内裤','电脑免费租','格力变频空调','办公椅','500G硬盘'],
        hotLkArr = ['超市购好物','家电超级五','苹果免息购','工业年末庆', '玩具乐器'],
        oSearch = doc.getElementById('J_srh_ipt'),
        oInput = oSearch.querySelector('.input'),
        oLkTxtVal = doc.querySelector('.rcm-lk .active'),
        oSrhHelp = doc.getElementById('J_search_helper'),
        oSrhHpUl = doc.querySelector('#J_search_helper ul'),      
        aSrhHpLi = oSrhHpUl.querySelectorAll('li'),
        oDelAll = doc.getElementById('J_delete_all'),
        oSrhBtn = doc.getElementById('J_srh_btn'),
        timer_hotWords,
        timer_hotLk,
        aSrhHpLiLen = aSrhHpLi.length;

        Array.prototype.randomEle = function(){
            return this[Math.floor(Math.random()*this.length)]
        }
        
        timer_hotWords = setInterval(rdmHotWords, 7000);
        timer_hotLk = setInterval(rdmHotLk, 4000);

        function rdmHotWords(){
            var hotWds = hotWordsArr.randomEle();
            oInput.value = hotWds;
        }
        function rdmHotLk(){
            var hotLk = hotLkArr.randomEle();
            oLkTxtVal.innerHTML = hotLk;
        }

        function stoprdmHotWs(){
            clearInterval(timer_hotWords);
            setTimeout(function(){
                oSrhHelp.style.display = 'block';
            }, 350)
        }
        function rcverdmHotWs(){
            hotWordsArr.forEach((item) => {
                if(oInput.value === item){
                    timer_hotWords = setInterval(rdmHotWords, 7000);
                }
            });
        }

        function changeAutoTxt(e){
            e = e || window.e;
        var eTget = e.target || e.srcElement;
            if(eTget.tagName.toUpperCase() === 'LI' ){
            }else if(eTget.tagName.toUpperCase() === 'SPAN'){
                eTget.innerHTML = '立即删除';
            } 
        }
        function recoverAutoTxt(e){
            e = e || window.e;
        var eTget = e.target || e.srcElement;
            if(eTget.tagName.toUpperCase() === 'LI' ){
            }else if(eTget.tagName.toUpperCase() === 'SPAN'){
                eTget.innerHTML = '搜索历史';
            } 
        }

        function delCurtHistory(e){       
            e = e || window.e;
            var eTget = e.target || e.srcElement;        
            if(eTget.tagName.toUpperCase() === 'LI' ){
                
           }else if(eTget.tagName.toUpperCase() === 'SPAN'){
               eTget.parentNode.style.display = 'none'; 
               aSrhHpLiLen--
               if( aSrhHpLiLen === 0){           
                oSrhHelp.style.display = 'none';            
               }
           } 
        }
        function delAllHistory(e){
            e = e || window.e;
            var eTget = e.target || e.srcElement;        
            eTget.parentNode.innerHTML = '';
            rmClass(oSrhHelp, 'search-helper');
        }
        function addSrhHistory(){
            var iptVal = oInput.value;
            if(iptVal == ''){
                iptVal = oInput.getAttribute('placeholder');
            }
             var addLi = `<li><a href="#">${iptVal}</a><span>搜索历史</span></li>`;        
             oSrhHpUl.innerHTML += addLi;
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
        oInput.addEventListener('focus', stoprdmHotWs);
        oInput.addEventListener('blur', rcverdmHotWs );
        oSrhHpUl.addEventListener('mouseover', changeAutoTxt);
        oSrhHpUl.addEventListener('mouseout', recoverAutoTxt);
        oSrhHpUl.addEventListener('click', delCurtHistory);
        oDelAll.addEventListener('click', delAllHistory);
        oSrhBtn.addEventListener('click', addSrhHistory);
})();


//banner轮播图
var mainBanner = (function(){
    var oImg = doc.getElementById('J_banner_img'),
        oDot = doc.getElementById('J_banner_dot'),
        aImgLs = oImg.querySelectorAll('li'),
        aDotLs = oDot.querySelectorAll('li'),
        oPrvBtn = doc.getElementById('J_prv_btn'),
        oNextBtn = doc.getElementById('J_next_btn'),
        i = 0, 
        index = 0, 
        aDotLsLen = aDotLs.length, 
        item,
        timer_imgSwitch;
        
        
        for(; i < aDotLsLen; i++){
            item = aDotLs[i];
            item.idx = i;
            item.onmouseover = function(){
                clearInterval(timer_imgSwitch); 
                currentIdx = this.idx;
                // 记录当前索引值，和上一次做比较 
                fading();     
               if(currentIdx > index  ){
                    aImgLs[currentIdx].className = 'fade-in';
               }else if(currentIdx < index) {
                    aImgLs[currentIdx].className = 'fade-in';
               }
               if(index == aImgLs.length-2){
                    aImgLs[0].className = 'fade-in';
               }
               if(currentIdx == 0){
                    aImgLs[currentIdx]
                    oImg.style.left = 0;
               }           
               //以上为淡入淡出相关判断 
                              
                index = this.idx;
                dotStyle();
                moveMent(oImg, 'left', -58*index, 20000, function(){
                    autoSwitch();                               
                });
            }
        }
        function dotStyle(){
            if(index === aImgLs.length-1){
                index = 0;
                oImg.style.left = 0;
            }
            for(var i = 0; i < aDotLsLen; i++){                
                aDotLs[i].className = '';                                           
            }            
            addClass(aDotLs[index], 'active');
        }
     
        function fading(){
            for(var i=0; i<aImgLs.length; i++){
                aImgLs[i].className = '';
           } 
        }
       
        function autoSwitch(){            
            timer_imgSwitch = setInterval(function(){
                fading();
                index++;                
                aImgLs[index].className = 'fade-in'; 
                index %= aImgLs.length;
                moveMent(oImg, 'left', -58*index, 20000, function(){
                    dotStyle();                               
                });
            }, 4000)
        }
        autoSwitch();
      
        function prevImg(){
            clearInterval(timer_imgSwitch);
            fading();            
            if(index === 0){
                index = aImgLs.length-1;
                aImgLs[index-1].className = 'fade-in';
            }//如果页面一刷新默认索引为0，当点击上一张时，让其到最后一张
            index--;
            aImgLs[index].className = 'fade-in';
            index %= aImgLs.length;
            moveMent(oImg, 'left', -58*index, 20000, function(){
                dotStyle();  
                autoSwitch();                             
            }); 
        }

        function nextImg(){
           fading();     
            aImgLs[index+1].className = 'fade-in';
            if(index == aImgLs.length-2){
                aImgLs[0].className = 'fade-in';
            }
            clearInterval(timer_imgSwitch);
            index++;
            index %= aImgLs.length;
            moveMent(oImg, 'left', -58*index, 20000, function(){
                dotStyle();
                autoSwitch();                               
            });
        }
        oPrvBtn.addEventListener('click', prevImg);
        oNextBtn.addEventListener('click', nextImg);
})();


//京东秒杀 轮播
var secKillBanner = (function(){
    var oSlidWrap = doc.getElementById('J_slider_wrapper'),
        oSliderDot = doc.getElementById('J_slider_dot'),
        aSliderLi = oSlidWrap.querySelectorAll('li'),
        aSliderDot = oSliderDot.querySelectorAll('li'),        
        item,
        i = 0,
        index = 0,
        aSliderDotLen = aSliderDot.length;

    for(; i < aSliderDotLen; i++){
        item = aSliderDot[i];
        item.idx = i;
        item.onmouseover = function(){
           index = this.idx;
           dotStyle();
           moveMent(oSlidWrap, 'left', -17*index, 20000, function(){
            autoSwitch();
         })
        }
    }

    function dotStyle(){
        for(var i = 0; i < aSliderDotLen; i++){
            aSliderDot[i].className = '';
        }        
        addClass(aSliderDot[index], 'active');
    }

    function autoSwitch(){
      timer_secKillBanner = setInterval(function(){
            index++;
            index %= aSliderLi.length;
            moveMent(oSlidWrap, 'left', -17*index, 20000, function(){
                dotStyle();
             })
        }, 3000)       
    }
    autoSwitch();
})()


//发现好货 无缝滚动
var googdsRolling = (function(){
    var oSeamlesRoll = doc.getElementById('J_semaless_rolling'),
        oRollGoodsLs = doc.getElementById('J_rolling-goods-ls'),
        aRollingLi = oSeamlesRoll.getElementsByTagName('li');

    //底部滑块
    var oRollBar = doc.getElementById('J_rolling_bar'),
        oTheSlider = doc.getElementById('J_the_slider');
       
        function rolling(){        
            oSeamlesRoll.style.left = oSeamlesRoll.offsetLeft + rollSpeed + 'px';
                // moveMent(oSeamlesRoll, 'left', rollSpeed, 10000, function(){});   
                if(oSeamlesRoll.offsetLeft < -parseInt(oSeamlesRoll.offsetWidth/2)){
                    oSeamlesRoll.style.left = 0 + 'px';
                    
                }else if(oSeamlesRoll.offsetLeft > 0){
                    oSeamlesRoll.style.left = -oSeamlesRoll.offsetWidth/2 + 'px';
                }
        }
        var timer_rolling = null;  
            oSeamlesRoll.innerHTML += oSeamlesRoll.innerHTML; 
            oSeamlesRoll.style.width = aRollingLi[0].offsetWidth*aRollingLi.length;
            
            timer_rolling = setInterval(function(){   
                rollSpeed  = -2;                         
                rolling();                                   
            }, 50)                      
       
        function clearRoll(){
            clearInterval(timer_rolling);        
        }
        function recoverRoll(){
            timer_rolling = setInterval(function(){  
                rollSpeed  = -2;           
                rolling();
            }, 50) 
        }
        oRollGoodsLs.addEventListener('mouseover', clearRoll);
        oRollGoodsLs.addEventListener('mouseout', recoverRoll);

        //底部滑块
        //计算容器的offsetLeft 
        var oRollBarLeft = oRollBar.offsetLeft,
        //计算相对于容器的边界
        leftMin = 0,
        leftMax = oRollBar.clientWidth - oTheSlider.clientWidth;
        oTheSlider.onmousedown = function(e){
            e = e || window.e;
            //计算滑块初始位置 
            startX = oTheSlider.offsetLeft;           
            doc.onmousemove = function(e){
              e = e || window.e;
              //计算滑块最后位置  
                endX = oTheSlider.offsetLeft;  
                x = endX - startX;                
               if(x > 0 ){                             
                rollSpeed  = -10;             
                rolling();               
            } else if(x < 0){                              
                rollSpeed  = 10;             
                rolling();
               }           
              //计算鼠标相对于容器最小边界的距离
               var mouseLeft = e.clientX - oRollBarLeft;
                //限定鼠标范围内可拖动 
               var  mouseLeft = Math.min(Math.max(leftMin, mouseLeft), leftMax); 
                //设置鼠标拖动的距离为滑块的left偏移量
                oTheSlider.style.left = mouseLeft + 'px';
            }
            doc.onmouseup = function(){
                endX = oTheSlider.offsetLeft;
                
                //当鼠标抬起，设置当前位置为滑块的位置
                doc.onmousedown = null;
                doc.onmousemove = null;
            }  
        }
})();


//新品首发 卡片轮播
var cardBanner = (function(){
    var oNewGoodsBox = doc.getElementById('J_new_goods_banner'),
        oPrvBtnGoods = doc.getElementById('J_prv_btn_goods'),
        oNextBtnGoods = doc.getElementById('J_next_btn_goods'),
        aNewGoodsLi = oNewGoodsBox.querySelectorAll('li'),
        oDivGoodsInfo = doc.getElementById('J_goods-info-footer'),
        aDivGoodsInfo = oDivGoodsInfo.getElementsByTagName('div');
        
    var oRmClass = doc.getElementById('J_rm_class'),
        oRmShow = doc.getElementById('J_rm_show'),
        currentIdx = 1,
        switchLeft = -420;  
        cardBanner_timer = null;

        function switchCardBanner(){
            currentIdx++;                  
           oNewGoodsBox.style.left = oNewGoodsBox.offsetLeft + switchLeft + 'px';
           rmClass(aNewGoodsLi[currentIdx-1], 'current-goods-pic');
           addClass(aNewGoodsLi[currentIdx], 'current-goods-pic');
           rmClass(aDivGoodsInfo[currentIdx-1], 'show');
           addClass(aDivGoodsInfo[currentIdx], 'show');                  
           if(parseInt(oNewGoodsBox.style.left) < -360){
               rmClass(oNewGoodsBox, 'hover-opacity');
                oNewGoodsBox.style.left = 0;            
                moveMent(oNewGoodsBox, 'left', 0, 10000, function(){})
                currentIdx = 1;                     
                addClass(aNewGoodsLi[currentIdx], 'current-goods-pic');
                addClass(aDivGoodsInfo[currentIdx], 'show');                        
                rmClass(oRmClass, 'current-goods-pic');
                rmClass(oRmShow, 'show');
                addClass(oNewGoodsBox, 'hover-opacity');        
           }       
        }         
        cardBanner_timer = setInterval(function(){                    
            switchCardBanner();
        },4000)
            
        function prevCardImg(){
            clearInterval(cardBanner_timer);         
            switchLeft = 180; 
            rmClass(aDivGoodsInfo[currentIdx], 'show');
            oNewGoodsBox.style.left = oNewGoodsBox.offsetLeft - switchLeft + 'px';   
            if(currentIdx === 1){            
                oNewGoodsBox.style.left = -360 + 'px';
                currentIdx = 5;             
            }
            currentIdx--;
                addClass(aNewGoodsLi[currentIdx], 'current-goods-pic');
                rmClass(aNewGoodsLi[currentIdx+1], 'current-goods-pic');
                rmClass(aNewGoodsLi[currentIdx-1], 'current-goods-pic');
                addClass(aDivGoodsInfo[currentIdx], 'show');
                rmClass(aDivGoodsInfo[currentIdx+1], 'show');
                rmClass(aDivGoodsInfo[currentIdx-1], 'show');            
                cardBanner_timer = setInterval(prevCardImg, 4000);
        }
        function nextCardImg(){
            clearInterval(cardBanner_timer);
            switchCardBanner();
            cardBanner_timer = setInterval(switchCardBanner, 4000);
        }
})();


//秒杀 倒计时
var secKillCountDown = (function(){
    var oCountDownPeriod = doc.getElementById('J_countdown_period'),
        oHour = doc.getElementById('J_hour'),
        oMinute = doc.getElementById('J_mitnute'),
        oSeconds = doc.getElementById('J_seconds');

        function countDown(){
            var oDate = new Date(),
            oH = oDate.getHours(),
            oM = oDate.getMinutes(),
            oS = oDate.getSeconds();
            oMinute.innerHTML = Math.abs(oM-59);
            oSeconds.innerHTML = Math.abs(60-oS); 
             
        if(oH % 2 != 0){    
            oCountDownPeriod.innerHTML = oH-1 + ': 00';
            oHour.innerHTML = '00';
        }else if(oH % 2 == 0){
            oCountDownPeriod.innerHTML = oH + ': 00';
            oHour.innerHTML = '01';
        }
        if(parseInt(oCountDownPeriod.innerHTML) < 10){
            oCountDownPeriod.innerHTML = '0' + oCountDownPeriod.innerHTML;
        }
    
            oSeconds.innerHTML -= 1; 
            if(oCountDownPeriod.innerHTML < 10){
                oCountDownPeriod.innerHTML = "0" + oCountDownPeriod.innerHTML;
            }       
            if(oSeconds.innerHTML < 10){
                oSeconds.innerHTML = "0" + oSeconds.innerHTML;
            }
            if (oMinute.innerHTML < 10){
                oMinute.innerHTML = "0" + oMinute.innerHTML;
            }
            if(oSeconds.innerHTML == 0){
                oMinute.innerHTML -= 1;
                oSeconds.innerHTML = 59;
            }
        }
      setInterval(countDown, 1000);
        countDown();
})();


//滚动条相关事件
var fixSearch = (function(){
    var oSearchFixed = doc.getElementById('J_search_fixed_top'),    
        oTheSideMenu = doc.getElementById('J_menu_side'),
        aElvItem = oTheSideMenu.getElementsByClassName('elv_item');
    
    
    var scrollTop = 0;
    function scrollEvent(){
        if(doc.documentElement && doc.documentElement.scrollTop){
            scrollTop =  doc.documentElement.scrollTop;
        }
    if(scrollTop >= 560){
        moveMent(oSearchFixed, 'top', 0, 10000,function(){
            addClass(oTheSideMenu, 'elevator-list');
        })
    }else if(scrollTop < 560){
        moveMent(oSearchFixed, 'top', -5, 10000,function(){
            rmClass(oTheSideMenu, 'elevator-list');
        })
    }
    }
    doc.addEventListener('scroll', scrollEvent);

    var topDisArr = [540,900,1800,2700,0];
    topDisArr.forEach((item,index) => {
        aElvItem[index].onclick = function(){            
            doc.documentElement.scrollTo({
                top:item,
                behavior: 'smooth'
            }); 
        }
    })
})();
