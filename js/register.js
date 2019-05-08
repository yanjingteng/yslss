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

r("#btnReg").onclick = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("post","../reg.php",true);

		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					location.href="register.html";
				}else{
					r("#messageBox").innerHTML="注册失败！";
					r("#messageBox").style.display = "block";
				}
			}
		}

		//如果是post方式，必须要设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头

		//4、发送
		xhr.send(`username=${r("#username").value}&userphon=${r("#userphon").value}&userpass=${r("#userpass").value}&userpass1=${r("#userpass1").value}`);
	}
// r("#username").onblur = function(){
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
