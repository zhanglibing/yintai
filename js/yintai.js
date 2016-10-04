window.onload=function(){
// banner轮播开始
var bg=$('.banner')[0]
var bgcolor=['#cfebf6','#9b78e6','#0f56a6','#7c7d7b']
var range=$('.banner-box')[0]
var Bimgbox=$('.lunbo-list')[0];
var Img1=$('a',Bimgbox)
var linkBox=$('.lunbo-link')[0];
var link=$('li',linkBox)
var zuoyou=$('.zuoyou')[0];
var linkZY=$('div',zuoyou)
var iw=parseInt(getStyle(Img1[0],'width'))
Img1[0].style.left=0;
var index=0;
link[0].style.background="#e5004f"
 zuoyou.style.display="none"
var next=0;
var flagg=true;
function move(){
   if(!flagg){
        return;
      }
      flagg=false;
    next++;
    if(next==link.length){
      next=0;
    }
    Img1[next].style.left=iw+"px";
    link[index].style.background=""
    animate(Img1[index],{left:-iw},500)
    bg.style.background=""
    animate(Img1[next],{left:0},500,function(){
      flagg=true;
    })
    link[next].style.background="#e5004f";
    bg.style.background=bgcolor[next]
    index=next;
}
var t=setInterval(move,2000)
range.onmouseover=function(){
  clearInterval(t);
  zuoyou.style.display="block"
}
range.onmouseout=function(){
  t=setInterval(move,2000)
  zuoyou.style.display="none"
}
// banner右边隐藏显示开始
var box=$('.banner-left')[0]
var link1=$('.banner-left1')
var yin=$('.banner-none',box);
console.log(yin)
var index2=0;
for (var i = 0; i < link1.length; i++) {
   link1[i].index2=i;
  link1[i].onmouseover=function(){
    for (var j = 0; j < yin.length; j++) {
      // yin[j].style.display="none"
      //  yin[j].style.zIndex="0"
    };yin[this.index2].style.display="block"
    yin[this.index2].style.zIndex="10000"
  }
  link1[i].onmouseout=function(){
      yin[this.index2].style.display="none"
      yin[i].style.zIndex="0"
  }
};
// 中间点击

   for (var i = 0; i < link.length; i++) {
      link[i].index=i
      link[i].onclick=function(){
      if(index==this.index){   
          return
     }
    //  next++;
    // if(next==link.length){
    //   next=0;
    // }
     link[index].style.background=""
  // 判断移动方向
  if(this.index>index){
    // 左移动
    Img1[this.index].style.left=iw+"px";
    animate(Img1[index],{left:-iw},500)
  }else if(this.index<index){
    // 有移动
    Img1[this.index].style.left=-iw+"px";
    animate(Img1[index],{left:iw},500)
         }
      animate(Img1[this.index],{left:0},500)
      bg.style.background=bgcolor[this.index]
       link[this.index].style.background="#e5004f"
      index=this.index;
  }
    };
// 左边按钮
linkZY[1].onclick=function(){
  move()
}
// 右边按钮
linkZY[0].onclick=function(){
   if(!flagg){
        return;
      }
      flagg=false;
  next--;
    if(next<0){
      next=link.length-1;
    }
    Img1[next].style.left=-iw+"px";
    link[index].style.background=""
    animate(Img1[index],{left:iw},500)
    animate(Img1[next],{left:0},500,function(){
      flagg=true;
    })
    link[next].style.background="#e5004f"
    index=next;
}
// banner轮播结束
// 选项卡开始
var list2Box=getclass('select-list',document)[0];
var list2=list2Box.getElementsByTagName('div');
var link2Box=getclass('select-link',document)[0]
var link2=link2Box.getElementsByTagName('a')
var linkRt=link2Box.getElementsByTagName('span')
list2[0].style.display="block";
linkRt[0].style.borderBottomColor="#e5004f";
link2[0].style.borderColor="#e5004f";
link2[0].style.fontWeight="bold"
  var aa=0;
for (var j = 0; j < link2.length; j++) {
    link2[j].aa=j;
	link2[j].onmouseover=function(){
      for (var i = 0; i < list2.length; i++) {
      	list2[i].style.display="none"
      	linkRt[i].style.borderBottomColor="";
      	link2[i].style.borderColor=""
      	link2[i].style.fontWeight="normal"
      };
      list2[this.aa].style.display="block"
      linkRt[this.aa].style.borderBottomColor="#e5004f"
      link2[this.aa].style.borderColor="#e5004f"
      link2[this.aa].style.fontWeight="bold"
	}
};
// 选项卡结束
// 选项卡边框开始
 // *************两个div的方法********************************
// function bor(r,b){
// var imgbox=list2[r].getElementsByTagName('a');
// var line=imgbox[b].getElementsByTagName('span')
// imgbox[b].onmouseover=function(){
//   animate(line[0],{width:220,height:260},500)
//   animate(line[1],{width:220,height:260},500)
// }
// imgbox[b].onmouseout=function(){
//   animate(line[0],{width:0,height:0},500)
//   animate(line[1],{width:0,height:0},500)
// }
// };
// for (var j= 0; j < 3;j++) {
//   for (var i = 0; i < 4; i++) {
//     bor(j,i)
//   };
// };


// *********************边框新方法**********************
function bor(r,b){
  var imgbox=$('.first')[r];
  var imgboxA=$('a',imgbox)[b]
  var bbord=$('span',imgboxA)
  imgboxA.onmouseover=function(){
    animate(bbord[0],{width:220},500)
    animate(bbord[1],{height:260},500)
    animate(bbord[2],{height:260},500)
    animate(bbord[3],{width:220},500)
  }
  imgboxA.onmouseout=function(){
    animate(bbord[0],{width:0},500)
    animate(bbord[1],{height:0},500)
    animate(bbord[2],{height:0},500)
    animate(bbord[3],{width:0},500)
  }
}
     for (var j= 0; j < 3;j++) {
       for (var i = 0; i < 4; i++) {
         bor(j,i)
      };
    };

// 选项卡边框结束

// middle2边框动画开始


function bor2(r){
var mddBox=getclass('middle2-list-2',document)[0]
var borRange=mddBox.getElementsByTagName('a')
var bordd=borRange[r].getElementsByTagName('b')
 borRange[r].onmouseover=function(){
  animate(bordd[0],{width:198,height:251},500)
  animate(bordd[1],{width:198,height:251},500)
}
borRange[r].onmouseout=function(){
  animate(bordd[0],{width:0,height:0},500)
  animate(bordd[1],{width:0,height:0},500)
 }
}
for (var i = 0; i < 8; i++) {
  bor2(i)
};

// middle2边框动画结束
// middle3动画开始
function bor3(b,r){
var mddBox2=getclass('middle3-right',document);
var borRange2=mddBox2[b].getElementsByTagName('a')
var bordd2=borRange2[r].getElementsByTagName('span')
borRange2[r].onmouseover=function(){
  animate(bordd2[0],{width:270,height:180},500)
  animate(bordd2[1],{width:270,height:180},500)
}
borRange2[r].onmouseout=function(){
  animate(bordd2[0],{width:0,height:0},500)
  animate(bordd2[1],{width:0,height:0},500)
 }
 }
 for (var j= 0; j <9; j++) {
    for (var i = 0; i <4; i++) {
        bor3(j,i)
 };

};
// middle3动画结束
// middle选项卡开始
var list3Box=getclass('middle2-list',document)[0];
var list3=list3Box.getElementsByTagName('div')
var link3Box=getclass('middle2-link',document)[0]
var link3=link3Box.getElementsByTagName('a');
 var linkRt3=link3Box.getElementsByTagName('span');
 list3[0].style.display="block";
linkRt3[0].style.borderBottomColor="#e5004f";
link3[0].style.borderColor="#e5004f";
link3[0].style.fontWeight="bold"
var bb=0;
for (var k = 0; k < link3.length;k++) {
    link3[k].bb=k;
	link3[k].onmouseover=function(){
      for (var i = 0; i < list3.length; i++) {
      	list3[i].style.display="none"
      	linkRt3[i].style.borderBottomColor="";
      	link3[i].style.borderColor=""
      	link3[i].style.fontWeight="normal"
      };
      list3[this.bb].style.display="block"
      linkRt3[this.bb].style.borderBottomColor="#e5004f"
      link3[this.bb].style.borderColor="#e5004f"
      link3[this.bb].style.fontWeight="bold"
	}
};
// middle选项卡结束
// middle左边左右点击开始
// function mddgundong(r){
// var Mbox=getclass('middle3-left',document)[r]
// var listM=getclass('middle3-left-bottom-img',Mbox)
// var linkM=getclass('sanjiao',Mbox)
// listM[0].style.zIndex="10"
//   var ii=0;
// linkM[0].onclick=function(){
//   ii++;
//   if(ii>1){
//     ii=0;
//     for (var i = 0; i < listM.length; i++){
//       listM[i].style.zIndex="0"
//   } };listM[ii].style.zIndex="10"
  
//   }
// linkM[1].onclick=function(){
//   ii--;
//   if(ii<0){
//     ii=listM.length;}
//     for (var i = 0; i < listM.length; i++){
//       listM[i].style.zIndex="0"
//   }
//   ;listM[ii].style.zIndex="10"
// }
// }
// for (var i = 0; i <6; i++) {
//  mddgundong(i)
// };
//  middle左边左右点击结束
// middle中间轮播开始
// function mddlunbo(r){
// var anniuBox=getclass('middle3-middle',document)[r]
// var anniu=anniuBox.getElementsByTagName('span')
// var anImg=anniuBox.getElementsByTagName('a')
// var circle=anniuBox.getElementsByTagName('b')
// console.log(circle)
// anImg[1].style.display="block"
// circle[1].style.background="#e5004f"
// var Mindex=0;
// for (var h = 0; h < circle.length; h++) {
//   circle[h].Mindex=h;
//   circle[h].onmouseover=function(){
//      for (var i = 0; i < anImg.length; i++) {
//       anImg[i].style.display="none"
//       circle[i].style.background=""
//      };circle[this.Mindex].style.background="#e5004f"
//      anImg[this.Mindex].style.display="block"
//      Mindex=this.Mindex;
//   }
// };
// anniu[1].onclick=function(){
//     Mindex++;
//    if(Mindex>1){
//       Mindex=0
//     }
//    for (var i = 0; i <anImg.length; i++) {
//      anImg[i].style.display="none"
//      circle[i].style.background=""
//    };circle[Mindex].style.background="#e5004f"
//      anImg[Mindex].style.display="block"
// }

// anniu[0].onclick=function(){
//     Mindex--;
//    if(Mindex<0){
//       Mindex=1
//     }
//    for (var i = 0; i <anImg.length; i++) {
//      anImg[i].style.display="none"
//      circle[i].style.background=""
//    };circle[Mindex].style.background="#e5004f"
//      anImg[Mindex].style.display="block"
// }
// }
// for (var i = 0; i <6; i++) {
//   mddlunbo(i)
// };
// middle中间轮播开始
function mddlunbo(r){
var anniuBox=getclass('middle3-middle',document)[r]
var anniu=anniuBox.getElementsByTagName('span')
var anImg=anniuBox.getElementsByTagName('a')
var circle=anniuBox.getElementsByTagName('b')
var iw=parseInt(getStyle(anImg[0],'width'))
anImg[0].style.left=0;
circle[0].style.background="#e5004f"
var Mindex=0;
var Mnext=0;
var ff=true;
function move5(){
    if(!ff){
      return;
     }
     Mnext++;
   if(Mnext==anImg.length){
    Mnext=anImg.length-1;
    return;
   }
   ff=false;
   anImg[Mnext].style.left=iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:-iw},500)
    animate(anImg[Mnext],{left:0},500,function(){
      ff=true;
    });
    circle[Mnext].style.background="#e5004f";
    Mindex=Mnext;
}
anniu[1].onclick=function(){
  move5()
}
anniu[0].onclick=function(){
    if(!ff){
      return;
 }
     Mnext--;
   if(Mnext<0){
    Mnext=0;
    return;
   }
   ff=false;
   anImg[Mnext].style.left=-iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:iw},500)
    animate(anImg[Mnext],{left:0},500,function(){
      ff=true;
    });
    circle[Mnext].style.background="#e5004f";
    Mindex=Mnext;
  }
  for (var i = 0; i < circle.length; i++) {
    circle[i].Mindex=i;
    circle[i].onclick=function(){
       Mnext++;
       if(Mindex==this.Mindex){
        return
       }
   if(Mnext==anImg.length){
    Mnext=0;
   }
   anImg[this.Mindex].style.left=iw+"px";
   circle[Mindex].style.background=""
   animate(anImg[Mindex],{left:-iw},500)
    animate(anImg[this.Mindex],{left:0},500);
    circle[this.Mindex].style.background="#e5004f";
    Mindex=this.Mindex;
    }
  };

  anniuBox.onmouseover=function(){
    animate(anniu[0],{left:0},200)
    animate(anniu[1],{left:360},200)
  }
  anniuBox.onmouseout=function(){
    animate(anniu[0],{left:-30},200)
    animate(anniu[1],{left:390},200)
  }
}
for (var i = 0; i <9; i++) {
  mddlunbo(i)
  }
// middle中间轮播结束
// 中间左边小图标左右滑动开始
function lunn(r){
  var Range=$('.middle3-left-bottom')[r]
  var San=$('.sanjiao',Range)
  var bbox=$('.imgg-box',Range)
  bbox[0].style.left='0'
  var inn=0;
  var nex=0;
  var flag=true;
    San[0].onclick=function(){
        nex--;
    if(nex<0){
      nex=bbox.length-1;
  }
    if(!flag){
      return
    }
    flag=false;
    bbox[nex].style.left="-170px"
    animate(bbox[inn],{left:170},500)
    animate(bbox[nex],{left:0},500,function(){
      flag=true;
    })
    inn=nex;
 }
 
  San[1].onclick=function(){
    nex++;
    if(nex==bbox.length){
      nex=0;
    }
    if(!flag){
      return
    }
    flag=false;
    bbox[nex].style.left="170px"
    animate(bbox[inn],{left:-170},500)
    animate(bbox[nex],{left:0},500,function(){
      flag=true;
    })
    inn=nex;
  }
}
 for (var i = 0; i< 9; i++) {
   lunn(i)
 };

//  中间左边小图标左右滑动

// 滚轮事件
var guding=$('.guding')[0];
var links=$('div',guding)
var scroll=$('.scroll')
var arr=[];
console.log(links[9])
for (var i = 0; i < scroll.length; i++) {
  arr.push(scroll[i].offsetTop)
};
window.onscroll=function(){
  var stop=document.documentElement.scrollTop||document.body.scrollTop
  if(stop>900){
    guding.style.display="block"
  }else{
     guding.style.display="none"
  }

  for (var i = 0; i < arr.length; i++) {
   if(stop+200>arr[i]){
    for (var j = 0; j < links.length; j++) {
      $('a',links[j])[0].style.opacity="";
    };
     $('a',links[i])[0].style.opacity="1";
   }
  };

  var indd=0
  for (var i = 0; i < links.length; i++) {
    links[i].indd=i;
    links[i].onclick=function(){
       if(this.indd==9){
           animate(document.documentElement,{scrollTop:0},1000)
          animate(document.body,{scrollTop:0},1000)
        }else{
      animate(document.documentElement,{scrollTop:scroll[this.indd].offsetTop},500)
        animate(document.body,{scrollTop:scroll[this.indd].offsetTop},500)
    }
    }
  };
}
// 滚轮结束
// 顶部鼠标经过微信和手机扫描开始
function block(r){
    var blink=$('.block')[r]
    var imgg=$('.block1',blink)[0]
    imgg.style.display="none"
       hover(blink,function(){
         blink.onmouseover=function(){
         blink.style.zIndex='20'
         blink.style.background="#fff"
         imgg.style.display="block"
    };
       },function(){
         blink.onmouseout=function(){
         blink.style.zIndex='0'
         blink.style.background=""
         imgg.style.display="none"
     };
       })
    //   blink.onmouseover=function(){
    //      blink.style.zIndex='20'
    //      blink.style.background="#fff"
    //      imgg.style.display="block"
    // };
    //  blink.onmouseout=function(){
    //      blink.style.zIndex='0'
    //      blink.style.background=""
    //      imgg.style.display="none"
    //  };
  }
for (var i = 0; i < 3; i++) {
 block(i)
};














}
