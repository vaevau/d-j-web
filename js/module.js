// const { inherits } = require("util")

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
