$(function(){
	var topr=$(".topr")[0]
	var topr1=$(".topr1")[0]
	var top=$(".top")[0]
    topr.onclick=function(){
    	top.style.display="block"
    	 topr.style.display="none"
    }
    topr1.onclick=function(){
    	top.style.display="none"
    	topr.style.display="block"
    }
    var wzdh=$(".wzdh")[0]
    var tck=$(".tck")[0]

    tck.onmouseover=wzdh.onmouseover=function(){
    	wzdh.style.background="#fff"
    	wzdh.style.border="1px solid #ddd"
    	wzdh.style.borderBottomWidth=0
    	tck.style.display="block"
    	animate(tck,{height:200},200)
    	}
    wzdh.onmouseout=tck.onmouseout=function(){
    	animate(tck,{height:0},200,function(){
   tck.style.display="none"
   wzdh.style.border=0
   wzdh.style.background="#F5F5F5"})
}
    var wzdh1=$(".wzdh")[1]
    var tck1=$(".tck")[1]

    tck1.onmouseover=wzdh1.onmouseover=function(){
        wzdh1.style.background="#fff"
        wzdh1.style.border="1px solid #ddd"
        wzdh1.style.borderBottomWidth=0
        tck1.style.display="block"
        animate(tck1,{height:95},200)
        }
    wzdh1.onmouseout=tck1.onmouseout=function(){
        animate(tck1,{height:0},200,function(){
   tck1.style.display="none"
   wzdh1.style.border=0
   wzdh1.style.background="#F5F5F5"})
}
var wzdh2=$(".wzdh")[2]
    var tck2=$(".tck")[2]

    tck2.onmouseover=wzdh2.onmouseover=function(){
        wzdh2.style.background="#fff"
        wzdh2.style.border="1px solid #ddd"
        wzdh2.style.borderBottomWidth=0
        tck2.style.display="block"
        animate(tck2,{height:120},200)
        }
    wzdh2.onmouseout=tck2.onmouseout=function(){
        animate(tck2,{height:0},200,function(){
   tck2.style.display="none"
   wzdh2.style.border=0
   wzdh2.style.background="#F5F5F5"})
}
var wzdh3=$(".wzdh")[3]
    var tck3=$(".tck")[3]

    tck3.onmouseover=wzdh3.onmouseover=function(){
        wzdh3.style.background="#fff"
        wzdh3.style.border="1px solid #ddd"
        wzdh3.style.borderBottomWidth=0
        tck3.style.display="block"
        animate(tck3,{height:210},200)
        }
    wzdh3.onmouseout=tck3.onmouseout=function(){
        animate(tck3,{height:0},200,function(){
   tck3.style.display="none"
   wzdh3.style.border=0
   wzdh3.style.background="#F5F5F5"})
}
var wzdh4=$(".wzdh")[4]
    var tck4=$(".tck")[4]

    tck4.onmouseover=wzdh4.onmouseover=function(){
        wzdh4.style.background="#fff"
        wzdh4.style.border="1px solid #ddd"
        wzdh4.style.borderBottomWidth=0
        tck4.style.display="block"
        animate(tck4,{height:159},200)
        }
    wzdh4.onmouseout=tck4.onmouseout=function(){
        animate(tck4,{height:0},200,function(){
   tck4.style.display="none"
   wzdh4.style.border=0
   wzdh4.style.background="#F5F5F5"})
}


var banner=$(".banner")[0]
var banbox1=$(".banbox1")[0]
var ban1=$("li",banbox1)
var color=["#F6E5D1","#E01324","#DA131A","#39427D","#B21C0E","#647CE8","#FED406","#E62916","#DE1A1E","#EF1D38","#9C0E0A","#B20000","#E22416","#D10121","#E12208","#62020E","#A00024","#EDF0E9","#FD1E4B","#000000"]
var left=$(".left")[0]
var right=$(".right")[0]
var flag1=1
var flag2=1
var n=0
var m=20
function move(){
   n++
   if(n==20){n=0}
  animate(banbox1,{marginLeft:-750},0,function(){
    var first=getFirst(banbox1)
    banbox1.appendChild(first)
    banbox1.style.marginLeft=0
banner.style.background=color[n]
m=n
  })
  }
left.onclick=function(){
move()
   }
right.onclick=function(){
   m--
  if(m==0){m=20}
   var first=getFirst(banbox1)
   var last=getLast(banbox1)
    banbox1.insertBefore(last,first)
    banner.style.background=color[m]
    n=m
   }   
var t=setInterval(move,4000)

banner.onmouseover=function(){
left.style.display="block"
right.style.display="block"
clearInterval(t)
}
banner.onmouseout=function(){
left.style.display="none"
right.style.display="none"
t=setInterval(move,4000)
}


 var fsbtn2=$(".fsbtn2")[0]
 var fsbtn1=$(".fsbtn1")[0]
 var fsbox1=$(".fsbox1")[0]
 var fsbox2=$(".fsbox2")[0]
 fsbtn2.onclick=function(){
fsbox1.style.display="none"
fsbox2.style.display="block"
fsbtn1.style.borderBottomWidth=0
fsbtn2.style.borderBottom="3px solid #ff6b80"
fsbtn1.style.fontWeight="normal"
fsbtn1.style.color="#666"
fsbtn2.style.fontWeight="bold"
fsbtn2.style.color="#222"
 }
  fsbtn1.onclick=function(){
fsbox2.style.display="none"
fsbox1.style.display="block"
fsbtn2.style.borderBottomWidth=0
fsbtn1.style.borderBottom="3px solid #ff6b80"
fsbtn2.style.fontWeight="normal"
fsbtn2.style.color="#666"
fsbtn1.style.fontWeight="bold"
fsbtn1.style.color="#222"
 }
 var left1=$(".left1")[0]
 var right1=$(".right1")[0]
 var snrbox=$(".snrbox")[0]
 snrbox.onmouseover=function(){
    left1.style.display="block"
    right1.style.display="block"
 }
snrbox.onmouseout=function(){
    left1.style.display="none"
    right1.style.display="none"
}
var hdbox=$(".hdbox")[0]
function yd(){
 animate(hdbox,{marginLeft:-999},500,function(){
    var f1=getFirst(hdbox)
    hdbox.appendChild(f1)
    hdbox.style.marginLeft=0
flag3=1
 })
}
var flag3=1
var flag4=1
left1.onclick=function(){
if(flag3){flag3=0
    yd()}
    }
right1.onclick=function(){
if(flag4){flag4=0
    var l1=getLast(hdbox)
    var f1=getFirst(hdbox)
    hdbox.insertBefore(l1,f1)
    hdbox.style.marginLeft="-999px"
    animate(hdbox,{marginLeft:0},500,function(){flag4=1})
    }
    }
var bb=document.documentElement.scrollTop?document.documentElement:document.body
var zbtn=$(".zbtn")[0]
   if(bb.scrollTop>720){
    zbtn.style.display="block"}
if(bb.scrollTop<720){
    zbtn.style.display="none"
}
var imgs=$("img")
for (var i = 0; i < imgs.length; i++) {
          if(imgs[i].offsetTop<setoffWindow().height)
          {imgs[i].src=imgs[i].getAttribute("data-src")}  
        }
window.onscroll=function(){
    var zbtn=$(".zbtn")[0]
    var aa=document.documentElement.scrollTop?document.documentElement:document.body
    var flag5=1
    var flag6=1
    var tss=$(".tss")[0]
    if(aa.scrollTop>900){
  tss.style.display="block"
    }
      if(aa.scrollTop<900){
  tss.style.display="none"
    }
   if(aa.scrollTop>720){
   if(flag5){flag5=0
    zbtn.style.display="block"
flag6=1
}
    }
    if(aa.scrollTop<720){
    if(flag6){flag6=0
    zbtn.style.display="none"
    flag5=1
}
}
 var btns=$("li",zbtn)
 var fsbhbox=$(".fsbhbox")
 var ph=$(".ph")
  var bh=$(".bh")
for (var i = 0; i < btns.length; i++) {btns[i].index=i
    btns[i].onclick=function(){
    top1=fsbhbox[this.index].offsetTop
    animate(aa,{scrollTop:top1})
    
    }
btns[i].onmouseover=function(){
for (var j= 0; j < btns.length; j++) {
       ph[j].style.display="none"
    }
    bh[this.index].style.display="none"
     ph[this.index].style.display="block"
     btns[this.index].style.background="#fff"

    }
btns[i].onmouseout=function(){
for (var j= 0; j < btns.length; j++) {
       ph[j].style.display="none"
    }
    bh[this.index].style.display="block"
     ph[this.index].style.display="none"
 btns[this.index].style.background="#f4f4f4"
    }
}
var fh=$(".fh")[0]
fh.onclick=function(){
  animate(aa,{scrollTop:0})
}
var imgs=$("img")
  for (var a = 0; a < imgs.length; a++) {
          if(aa.scrollTop>imgs[a].offsetTop-setoffWindow().height)
          {imgs[a].src=imgs[a].getAttribute("data-src")}  
}  
}
var lc3=$(".lc3")
var zzb=$(".zzb")
for (var i = 0; i < zzb.length; i++) {zzb[i].index=i
  zzb[i].onmouseover=lc3[i].onmouseover=function(){
     lc3[this.index].style.background="#FFAA01"
    lc3[this.index].style.color="#383838"
    animate(lc3[this.index],{right:35},500)
  }
  zzb[i].onmouseout=function(){
    animate(lc3[this.index],{right:-39},500)
    lc3[this.index].style.background="#383838"
    lc3[this.index].style.color="#FFAA01"
  }
}
})