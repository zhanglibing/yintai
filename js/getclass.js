
 function getclass(ClassName,range){
            // 判断浏览器是否支持类名  用了隐式转化
            if(document.getElementsByClassName){
                return range.getElementsByClassName(ClassName);
            }else{
                var all=range.getElementsByTagName('*');
                // 获取html的所有标签
                var arr=[];
                for (var i = 0; i < all.length; i++) {
                    if(checkclass(all[i].className,ClassName)){
                        arr.push(all[i]);
                        // all[i]为对象集合
                    }
                };
                return arr;
            }

        }

   function checkclass(sclass,aclass){
     var aa=sclass.split(" ");
    for (var i = 0; i < aa.length; i++) { 
      if(aa[i]==aclass){
             return true;
         }else{
         return false;
          }
         };
     }