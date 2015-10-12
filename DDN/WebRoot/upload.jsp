<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>upload</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <!-- 定时调用 action=process即可 -->
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.form.js"></script>
  	<script type="text/javascript">
  		$(document).ready(function(){
  			var process = function(){
  				$.post('servlet/upload',{
  					action:'process'
  				},function(data){
  					$("#process_show").html(data);		
  				});
  			},interval = null;
  			$('form').on('submit',function(){
  				//interval = setInterval(process,300);
  				$(this).ajaxSubmit({
  					type:'post',
  					url:'servlet/upload',
  					success:function(data){
  						console.log(data);
  						//clearInterval(interval);
  					}
  				});
  			});
  		});
  	</script>
  </head>
  
  <body>
    <form enctype="multipart/form-data" >
    	<input name="filename" type="file" />
    	<input type="submit" value="Submit"/>
    </form>
  </body>
</html>
