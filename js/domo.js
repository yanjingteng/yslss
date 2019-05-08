//获取id元素
//firstchild和elementchild不一样
let shopeCheck=document.getElementById("shoppeCheck");
let shope=shopeCheck.firstElementChild;
let  shopes=shope.nextElementSibling;
let electronics=document.getElementById("electronics");
let electron=document.getElementById("electronline");//li
// window.onload=function(){
    shopes.style.display="none";
    shope.onmouseenter=function () {
        shopes.style.display="block";
        shopes.style.transition="all 2s";
    }
    shopes.onmouseleave=function () {
        shopes.style.display="none";
        shopes.style.transition="all 2s";
    }
    electron.firstElementChild.nextElementSibling.style.display="none";
    electron.firstElementChild.onmouseenter=function () {
        electron.firstElementChild.nextElementSibling.style.display="block";
    }
    electron.firstElementChild.nextElementSibling.onmouseleave=function () {
        electron.firstElementChild.nextElementSibling.style.display="none";

    }

//获取到所有的a标签
let navsa=document.getElementsByClassName("nav-dom");
let navbox=document.getElementsByClassName("nav-box");
for (let i=0;i<navsa.length;i++){
    //为每一个标题记录下标
    navsa[i].index=i;
    navsa[i].onmouseenter=function () {
        for(let j=0;j<navsa.length;j++){
            navbox[j]._className="";
            navbox[j].style.display="none";
        }
        // this.className="on";//留下当前操作
        navbox[this.index].style.display="block";

    }
    navbox[i].onmouseleave=function (){
        navbox[i].style.display="none";
    }
}
class  Slideshow {
    constructor(newImg){
        this.img=newImg;
        this.index=0;
    }
    // 上一张
    previous(){
        this.index--;
        if(this.index<0){
            this.index=this.img.length-1;
        }
        r("#img").src=this.img[this.index];
        this.className = "ons ";



}
    next(){
        this.index++;
        if(this.index==this.img.length){
            this.index=0;
        }
        r("#img").src=this.img[this.index];
        this.className="ons";
    }
    getEven(){

        r("#next").onclick = ()=>{
            this.next();
            r("#next").style.course="pointer";
            r("#next").style.boxShadow="2px 2px 1px 0px #cccccc,-2px -2px 1px 0px #cccccc";

        }
        r("#next").onmouseleave=()=>{
            r("#next").style.boxShadow="none";
            r("#next").style.cursor="pointer";
        }

        r("#previous").onclick=()=>{
            this.previous();
            r("#previous").style.boxShadow="2px 2px 1px 0px #cccccc,-2px -2px 1px 0px #cccccc";

        }
        r("#previous").onmouseleave=()=>{
            r("#previous").style.boxShadow="none";
            r("#previous").style.cursor="pointer";


        }

    }
    autoPlay(){
        setInterval(()=>{
            this.index++;
            if (this.index>this.img.length-1){
                this.index=0;
            }
            r("#img").src=this.img[this.index];
        },5000)
    }
}
let img=new Array("../img/banner/01.jpg","../img/banner/02.jpg","../img/banner/03.jpg","../img/banner/04.jpg","../img/banner/05jpg.jpg");
let fn=new Slideshow(img);
// fn.previous();
fn.getEven();
fn.autoPlay()
function r(str) {
    if(str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if(str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}
let stara=document.getElementsByClassName("star-a1");
let stb1=document.getElementsByClassName("stb1");
for(let i=0;i<stara.length;i++){
    stara[i].index=i;//for循环是不执行代码的，
    //通过这句话的意思来记录下标

        stara[i].onclick=function () {
            //现在开始执行代码
            for(let j=0;j<stara.length;j++){
                // stb1._className="";
                stb1[j].style.display="none";
        }
            stb1[this.index].style.display="block";
            //下标.index那么就是this.index
    }
}
//明星产品的
let stbLeft=r("#stbLeft");//获取左边
let stbRight=r("#stbRight");//获取右边
let stb1lbGe=r(".stb1lbGe");//获取div盒子
let index=0;
for (let i=0;i<stb1lbGe.length;i++){
    //通过循环获取到每张图片
    //循环获取下标
    stbRight.onclick=function () {
        index++;
        if (index>=stb1lbGe.length){
            index=0;
        }
        for (let j=0;j<stb1lbGe.length;j++){
            stb1lbGe[j].style.display="none";
        }
        stb1lbGe[index].style.display="block";
        stbRight.style.cursor="pointer";
    }
    stbLeft.onclick=function () {
        index--;
        if (index<0){
            index=stb1lbGe.length;
        }
        for (let j=0;j<stb1lbGe.length;j++){
            stb1lbGe[j].style.display="none";
            stb1lbGe[0].style.display="none";

        }
        stb1lbGe[index].style.display="block";
        stbLeft.style.cursor="pointer";

    }

}
let diandian=r(".diandian");
for(let k=0;k<diandian.length;k++){
    diandian[k].num=k;
    diandian[k].onclick=function () {
        index=this.num;
        for (let j=0;j<stb1lbGe.length;j++){
            stb1lbGe[j].style.display="none";
            stb1lbGe[0].style.display="none";

        }
        stb1lbGe[index].style.display="block";
    }
}
let stbmasks=r("#stbmasks");
stbmasks.style.display="none";

    // $("#stb-mk li").mouseover(function(){
    //
    //     $("#stbmasks").fadeToggle();
    //     // $("#div2").fadeToggle("slow");
    //     // $("#div3").fadeToggle(3000);
    // });
$(".stb1lb-img").mouseenter(function(){
//     $(this).find("#stbmasks").stop().fadeIn();
// },function(){
//     $(this).find("#stbmasks").stop().fadeOut();
    $("#stbmasks").css({"display":"block"});

});
$(".stb1lb-img").mouseout(function(){
//     $(this).find("#stbmasks").stop().fadeIn();
// },function(){
//     $(this).find("#stbmasks").stop().fadeOut();
    $("#stbmasks").css({"display":"none"});

});

let stbid=r(".stb-id");
// stbid.style.color="#black;
    for(let g=0;g<stbid.length;g++){
        // stbid[g].nu=g;
        //记录每个a的下标
        stbid[g].onmouseenter=function(){
            stbid[g].style.backgroundColor="black";
            stbid[g].style.color="#ffffff";
            stbid[g].style.cursor="pointer";

            // stbid[g].style.display.backgroundColor="red";
        }
        stbid[g].onmouseleave=function(){
            stbid[g].style.backgroundColor="#ffffff";
            stbid[g].style.color="black";
            stbid[g].style.cursor="pointer";
            // stbid[g].style.display.backgroundColor="red";
        }
    }
 let arh =r(".arhCosmetics");
 let aaimg=r(".aaimg");
//  arh[0].style.display="none";
//
// aaimg[0].onmousemove=function (evt) {
//     var e=evt||event;
//     arh[0].style.left=e.pageX+"px";
//     arh[0].style.top=e.pageY+"px";
//     arh[0].style.display="block";
//     arh[0].style.backgroundColor="#ffffff";
// }
// aaimg[0].onmouseout=function () {
//        arh[0].style.display="none";
//
// }
r("#btnReg").onclick = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("post","reg.php",true);

		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					location.href="register.html";
				}else{
					$("#messageBox").innerHTML="注册失败！";
					$("#messageBox").style.display = "block";
				}
			}
		}

		//如果是post方式，必须要设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头

		//4、发送
		xhr.send(`userId=${$("#userId").value}&userName=${$("#userName").value}&userPass=${$("#userPass").value}`);
	}
// r("#username").onclick = function(){
// 		//1、创建对象
// 		let xhr = new XMLHttpRequest();
// 		//2、设置请求参数
// 		xhr.open("post","reg.php?username="+this.value",true);
// 
// 		//3、设置回调函数
// 					r("#messageBox").innerHTML="亲，该用户名已经被人使用了，请重新选择！";
// 				xhr.onreadystatechange = function(){
// 			if(xhr.readyState==4 && xhr.status==200){
// 				if(xhr.responseText=="1"){
// 		}else{
// 					
// 					r("#messageBox").innerHTML="亲，恭喜您，该用户名没有人使用，请赶紧注册吧！";
// 				}
// 			}
// 		}
// 
// 		xhr.send();
// 	}














