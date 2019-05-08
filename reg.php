<?php
header("Content-type:text/html;charset:utf-8");
$username=$_POST["username"];
$userphon=$_POST["userphon"];
$userpass=$_POST["userpass"];
$userpass1=$_POST["userpass1"];

	//2、找数据库（先判断用户名有没有，再保存）
	//1、连接数据库
	// mysql_connect("数据库服务器的地址","用户名","密码");
	$conn = mysql_connect("localhost:3306","root","root");
	if(!$conn){
		echo "服务器出错";
	}else{
		//选择数据库
		mysql_select_db("reg",$conn);

		//2、传输数据（执行SQL语句）inset表的名字
		$sqlstr="insert into register(username,userpass,userphon,userpass1)
	     values('$username','$userphon','$userpass','$userpass1')";

	    $result = mysql_query($sqlstr,$conn);

		//3、关闭数据库
	    mysql_close($conn);
	    // echo "result:$result<br/>";
	    if($result>0){
			echo "1";//注册成功！
	    }else{
			echo "0";//注册失败！
	    }
	}

	

?>