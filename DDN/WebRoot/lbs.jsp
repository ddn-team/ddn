<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		html,body{margin:0;padding:0;}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=zg3AM1VaaxfvA8TcIFcOVUQB"></script>
	<title>IP定位获取当前城市</title>
	
	<style>
		.bd_component_container{
			font-size:14px; margin:0;padding:0;font-family:"微软雅黑";
		}
		.bd_component_container .local_detail{
			background: white;
		}
		.bd_component_container .mapContainer {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
		.bd_component_container .anchorBL{display:none;}  
		.bd_component_container .juzhong{  
			position:absolute;  
			top:50%;  
			left:50%; 
			height:24px;
			margin-top:-12px; 
		}
		.bd_component_container .mapSearch{
			right:0; 
			top:0; 
			width:100%; 
			position:fixed; 
			padding:5px; 
			text-align:center;
			background: rgba(0, 0, 0, 0.3) !important; /* IE无效，FF有效 */    
		    filter: alpha(opacity=30);    
		    -moz-opacity:0.8;    
		    -khtml-opacity: 0.3;    
		    opacity: 0.8;   
    	}
	</style> 
  </head>
  
  <body>
  	<div class="bd_component_container">
	  	<div id="allmap" class="mapContainer"></div>
	  	<div class="mapSearch">
	  		<input id="suggestId" type="text" placeholder="输入地址查询" />
	  		<span id="local_detail" class="local_detail"></span>
	  	</div>
	  	<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
	  	<img class="juzhong" src="map_marker.png"/>
  	</div>
  </body>
  <script type="text/javascript">
	// 百度地图API功能
	var map   = new BMap.Map("allmap",{enableMapClick:false});//构造底图时，关闭底图可点功能
	    map.enableScrollWheelZoom();//启用滚轮控制缩放
	var point = new BMap.Point(116.331398,39.897445);//默认首都
	map.centerAndZoom(point,12);
	
	//建立一个自动完成的对象
	var ac = new BMap.Autocomplete( {"input" : "suggestId" ,"location" : map });
	
	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
		var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if (e.fromitem.index > -1) {
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			
			value = "";
			if (e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			G("searchResultPanel").innerHTML = str;
		});
	
		var myValue;
		ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
		var _value = e.item.value;
			myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			
		//地址转换为经纬度
		var local = new BMap.LocalSearch(map, { //智能搜索
		  onSearchComplete: function(){
				var p = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
				map.centerAndZoom(p, 18);
				searchLocal(p.lng,p.lat);
			}
		});
		local.search(myValue);
	});
	
	//根据IP定位当前所在城市
	var myCity = new BMap.LocalCity();
	myCity.get(function(result){
		map.setCenter(result.name,12);
		console.log("地图中心点变更为：" + result.center.lng + ", " + result.center.lat); 
		searchLocal(result.center.lng,result.center.lat);
	});
	
	/*-------------地图相关监听事件START-------------*/
	map.addEventListener("dragging",function(){
		var center = map.getCenter();    
	 	console.log("地图中心点变更为：" + center.lng + ", " + center.lat); 
	 	G("local_detail").innerHTML = "["+center.lng+","+center.lat+"]";
	});
	
	map.addEventListener("zoomend", function(){   
		var center = map.getCenter();    
	 	console.log("地图中心点变更为：" + center.lng + ", " + center.lat); 
	 	searchLocal(center.lng,center.lat);
	});
	
	map.addEventListener("dragend", function(){    
		var center = map.getCenter();    
	 	console.log("地图中心点变更为：" + center.lng + ", " + center.lat); 
	 	searchLocal(center.lng,center.lat);
	});
	/*-------------地图相关监听事件END-------------*/
	
	
	/*根据经纬度换算为地址*/
	var gc = new BMap.Geocoder();
	function searchLocal(lng,lat){
	 	var new_point = new BMap.Point(lng,lat);
	 	gc.getLocation(new_point, function(rs){
		    var addComp = rs.addressComponents;
		    address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
		    G("local_detail").innerHTML = "["+ address +"]";
	    });
	}
	
	function G(id){
		return document.getElementById(id);
	}
</script>
</html>
