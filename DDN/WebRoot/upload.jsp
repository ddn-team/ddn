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
    <script type="text/javascript" src="res/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="ajaxfileupload.js"></script>
  	<script type="text/javascript" src="res/pcm/pcm.src.js"></script>
 	<script type="text/javascript">
  		$(document).ready(function(){
  			/*var process = function(){
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
  			});*/
  			
  			
  		});
  		
  		function upload(){
  			 /*
  			  $.ajaxFileUpload({  
		        url : "servlet/upload",   //submit to UploadFileServlet  
		        secureuri : false,  
		        fileElementId : 'filename',  
		        dataType : 'text', //or json xml whatever you like~  
		        success : function(data, status) {  
		            console.log(data);
		        },  
		        error : function(data, status, e) {  
		            $("#result").append(data);  
		        }  
		    }); 
  			  */  
  			  
  			  Pcm.ajax.uploadFile({
  				  fileElementId:"filename",
  				  packageName:""
  				  success:function(data){
  				  	console.log(data);
  				  }
  			  });
  		}
  	</script>
  </head>
  
  <body>
    <form enctype="multipart/form-data" >
    	<input id="filename" name="filename" type="file" />
    	<input type="button" value="Submit" onClick="upload()"/>
    </form>
  </body>
</html>
