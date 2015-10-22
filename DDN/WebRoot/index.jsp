<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="res/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="res/pcm/pcm.src.js"></script>
  </head>
  
  <body>
    This is my JSP page. <br>
    <script type="text/javascript">
    	Pcm.ajax.postMVC({
				noAlert:true,
				//server:'dictionariesRpc',
				//method:"queryLtByBelongType",
				server:"exampleRpc",method:"add",
				params:[{
					name:"案例一",
					coverUrl:"e/url/head.jpg",
					describes:"案例描述",
					pics:[{
						typeCode:"head",
						urls:["e/url/head/1.jpg"]
					},{
						typeCode:"shuini",
						urls:["e/url/head/1.jpg"]
					}]
				}],
				//server:"commonRPC",method:'register', params:["admin","123456","RPCS68"],
				//server:"commonRPC",method:'login', params:[ { username:"admin",password:"123456" }],
				////params:["houseType"],
				success:function(data,user){
					console.log(data);
					console.log(user);
				},
				failure:function(msg){
					console.log(msg);
				}
			});
    </script>
  </body>
</html>
