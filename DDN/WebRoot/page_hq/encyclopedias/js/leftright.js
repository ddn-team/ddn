// JavaScript Document


//第一个
var Speed_1 = 5; //速度(毫秒)
var Space_1 = 5; //每次移动(px)
var PageWidth_1 = 236 * 1; //翻页宽度
var interval_1 = 90000; //翻页间隔时间
var fill_1 = 0; //整体移位
var MoveLock_1 = false;
var MoveTimeObj_1;
var MoveWay_1="right";
var Comp_1 = 0;
var AutoPlayObj_1=null;


function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}

function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_1').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrUp_1(){if(GetObj('ISL_Cont_1').scrollLeft<=0){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft+GetObj('List1_1').offsetWidth}
GetObj('ISL_Cont_1').scrollLeft-=Space_1}

function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_1').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrDown_1(){if(GetObj('ISL_Cont_1').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft-GetObj('List1_1').scrollWidth}
GetObj('ISL_Cont_1').scrollLeft+=Space_1}

function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
function picrun_ini(){
GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
GetObj('ISL_Cont_1').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
GetObj("ISL_Cont_1").onmouseover=function(){clearInterval(AutoPlayObj_1)}
GetObj("ISL_Cont_1").onmouseout=function(){AutoPlay_1()}
//AutoPlay_1();
}


//第二个
var Speed_2 = 5; //速度(毫秒)
var Space_2 = 5; //每次移动(px)
var PageWidth_2 = 236 * 1; //翻页宽度
var interval_2 = 90000; //翻页间隔时间
var fill_2 = 0; //整体移位
var MoveLock_2 = false;
var MoveTimeObj_2;
var MoveWay_2="right";
var Comp_2 = 0;
var AutoPlayObj_2=null;

function GetObj_2(objName_2){if(document.getElementById){return eval('document.getElementById("'+objName_2+'")')}else{return eval('document.all.'+objName_2)}}
function AutoPlay_2(){clearInterval(AutoPlayObj_2);AutoPlayObj_2=setInterval('ISL_GoDown_2();ISL_StopDown_2();',interval_2)}
function ISL_GoUp_2(){if(MoveLock_2)return;clearInterval(AutoPlayObj_2);MoveLock_2=true;MoveWay_2="left";MoveTimeObj_2=setInterval('ISL_ScrUp_2();',Speed_2);}
function ISL_StopUp_2(){if(MoveWay_2 == "right"){return};clearInterval(MoveTimeObj_2);if((GetObj_2('ISL_Cont_2').scrollLeft-fill_2)%PageWidth_2!=0){Comp_2=fill_2-(GetObj_2('ISL_Cont_2').scrollLeft%PageWidth_2);CompScr_2()}else{MoveLock_2=false}
AutoPlay_2()}
function ISL_ScrUp_2(){if(GetObj_2('ISL_Cont_2').scrollLeft<=0){GetObj_2('ISL_Cont_2').scrollLeft=GetObj_2('ISL_Cont_2').scrollLeft+GetObj_2('List1_2').offsetWidth}
GetObj_2('ISL_Cont_2').scrollLeft-=Space_2}
function ISL_GoDown_2(){clearInterval(MoveTimeObj_2);if(MoveLock_2)return;clearInterval(AutoPlayObj_2);MoveLock_2=true;MoveWay_2="right";ISL_ScrDown_2();MoveTimeObj_2=setInterval('ISL_ScrDown_2()',Speed_2)}
function ISL_StopDown_2(){if(MoveWay_2 == "left"){return};clearInterval(MoveTimeObj_2);if(GetObj_2('ISL_Cont_2').scrollLeft%PageWidth_2-(fill_2>=0?fill_2:fill_2+1)!=0){Comp_2=PageWidth_2-GetObj_2('ISL_Cont_2').scrollLeft%PageWidth_2+fill_2;CompScr_2()}else{MoveLock_2=false}
AutoPlay_2()}
function ISL_ScrDown_2(){if(GetObj_2('ISL_Cont_2').scrollLeft>=GetObj_2('List1_2').scrollWidth){GetObj_2('ISL_Cont_2').scrollLeft=GetObj_2('ISL_Cont_2').scrollLeft-GetObj_2('List1_2').scrollWidth}
GetObj_2('ISL_Cont_2').scrollLeft+=Space_2}
function CompScr_2(){if(Comp_1==0){MoveLock_2=false;return}
var num_2,TempSpeed_2=Speed_2,TempSpace_2=Space_2;if(Math.abs(Comp_2)<PageWidth_2/2){TempSpace_2=Math.round(Math.abs(Comp_2/Space_2));if(TempSpace_2<1){TempSpace_2=1}}
if(Comp_2<0){if(Comp_2<-TempSpace_2){Comp_2+=TempSpace_2;num_2=TempSpace_2}else{num_2=-Comp_2;Comp_2=0}
GetObj_2('ISL_Cont_2').scrollLeft-=num_2;setTimeout('CompScr_2()',TempSpeed_2)}else{if(Comp_2>TempSpace_2){Comp_2-=TempSpace_2;num_2=TempSpace_2}else{num_2=Comp_2;Comp_2=0}
GetObj_2('ISL_Cont_2').scrollLeft+=num_2;setTimeout('CompScr_2()',TempSpeed_2)}}
function picrun_ini_2(){
GetObj_2("List2_2").innerHTML=GetObj_2("List1_2").innerHTML;
GetObj_2('ISL_Cont_2').scrollLeft=fill_2>=0?fill_2:GetObj_2('List1_2').scrollWidth-Math.abs(fill_2);
GetObj_2("ISL_Cont_2").onmouseover=function(){clearInterval(AutoPlayObj_2)}
GetObj_2("ISL_Cont_2").onmouseout=function(){AutoPlay_2()}
//AutoPlay_1();
}


//第三个
var Speed_3 = 5; //速度(毫秒)
var Space_3 = 5; //每次移动(px)
var PageWidth_3 = 236 * 1; //翻页宽度
var interval_3 = 90000; //翻页间隔时间
var fill_3 = 0; //整体移位
var MoveLock_3 = false;
var MoveTimeObj_3;
var MoveWay_3="right";
var Comp_3 = 0;
var AutoPlayObj_3=null;

function GetObj_3(objName_3){if(document.getElementById){return eval('document.getElementById("'+objName_3+'")')}else{return eval('document.all.'+objName_3)}}
function AutoPlay_3(){clearInterval(AutoPlayObj_3);AutoPlayObj_3=setInterval('ISL_GoDown_3();ISL_StopDown_3();',interval_3)}
function ISL_GoUp_3(){if(MoveLock_3)return;clearInterval(AutoPlayObj_3);MoveLock_3=true;MoveWay_3="left";MoveTimeObj_3=setInterval('ISL_ScrUp_3();',Speed_3);}
function ISL_StopUp_3(){if(MoveWay_3 == "right"){return};clearInterval(MoveTimeObj_3);if((GetObj_3('ISL_Cont_3').scrollLeft-fill_3)%PageWidth_3!=0){Comp_3=fill_3-(GetObj_3('ISL_Cont_3').scrollLeft%PageWidth_3);CompScr_3()}else{MoveLock_3=false}
AutoPlay_3()}
function ISL_ScrUp_3(){if(GetObj_3('ISL_Cont_3').scrollLeft<=0){GetObj_3('ISL_Cont_3').scrollLeft=GetObj_3('ISL_Cont_3').scrollLeft+GetObj_3('List1_3').offsetWidth}
GetObj_3('ISL_Cont_3').scrollLeft-=Space_3}
function ISL_GoDown_3(){clearInterval(MoveTimeObj_3);if(MoveLock_3)return;clearInterval(AutoPlayObj_3);MoveLock_3=true;MoveWay_3="right";ISL_ScrDown_3();MoveTimeObj_3=setInterval('ISL_ScrDown_3()',Speed_3)}
function ISL_StopDown_3(){if(MoveWay_3 == "left"){return};clearInterval(MoveTimeObj_3);if(GetObj_3('ISL_Cont_3').scrollLeft%PageWidth_3-(fill_3>=0?fill_3:fill_3+1)!=0){Comp_3=PageWidth_3-GetObj_3('ISL_Cont_3').scrollLeft%PageWidth_3+fill_3;CompScr_3()}else{MoveLock_3=false}
AutoPlay_3()}
function ISL_ScrDown_3(){if(GetObj_3('ISL_Cont_3').scrollLeft>=GetObj_3('List1_3').scrollWidth){GetObj_3('ISL_Cont_3').scrollLeft=GetObj_3('ISL_Cont_3').scrollLeft-GetObj_3('List1_3').scrollWidth}
GetObj_3('ISL_Cont_3').scrollLeft+=Space_3}
function CompScr_3(){if(Comp_1==0){MoveLock_3=false;return}
var num_3,TempSpeed_3=Speed_3,TempSpace_3=Space_3;if(Math.abs(Comp_3)<PageWidth_3/2){TempSpace_3=Math.round(Math.abs(Comp_3/Space_3));if(TempSpace_3<1){TempSpace_3=1}}
if(Comp_3<0){if(Comp_3<-TempSpace_3){Comp_3+=TempSpace_3;num_3=TempSpace_3}else{num_3=-Comp_3;Comp_3=0}
GetObj_3('ISL_Cont_3').scrollLeft-=num_3;setTimeout('CompScr_3()',TempSpeed_3)}else{if(Comp_3>TempSpace_3){Comp_3-=TempSpace_3;num_3=TempSpace_3}else{num_3=Comp_3;Comp_3=0}
GetObj_3('ISL_Cont_3').scrollLeft+=num_3;setTimeout('CompScr_3()',TempSpeed_3)}}
function picrun_ini_3(){
GetObj_3("List2_3").innerHTML=GetObj_3("List1_3").innerHTML;
GetObj_3('ISL_Cont_3').scrollLeft=fill_3>=0?fill_3:GetObj_3('List1_3').scrollWidth-Math.abs(fill_3);
GetObj_3("ISL_Cont_3").onmouseover=function(){clearInterval(AutoPlayObj_3)}
GetObj_3("ISL_Cont_3").onmouseout=function(){AutoPlay_3()}
//AutoPlay_1();
}

//第四个
var Speed_4 = 5; //速度(毫秒)
var Space_4 = 5; //每次移动(px)
var PageWidth_4 = 236 * 1; //翻页宽度
var interval_4 = 90000; //翻页间隔时间
var fill_4 = 0; //整体移位
var MoveLock_4 = false;
var MoveTimeObj_4;
var MoveWay_4="right";
var Comp_4 = 0;
var AutoPlayObj_4=null;

function GetObj_4(objName_4){if(document.getElementById){return eval('document.getElementById("'+objName_4+'")')}else{return eval('document.all.'+objName_4)}}
function AutoPlay_4(){clearInterval(AutoPlayObj_4);AutoPlayObj_4=setInterval('ISL_GoDown_4();ISL_StopDown_4();',interval_4)}
function ISL_GoUp_4(){if(MoveLock_4)return;clearInterval(AutoPlayObj_4);MoveLock_4=true;MoveWay_4="left";MoveTimeObj_4=setInterval('ISL_ScrUp_4();',Speed_4);}
function ISL_StopUp_4(){if(MoveWay_4 == "right"){return};clearInterval(MoveTimeObj_4);if((GetObj_4('ISL_Cont_4').scrollLeft-fill_4)%PageWidth_4!=0){Comp_4=fill_4-(GetObj_4('ISL_Cont_4').scrollLeft%PageWidth_4);CompScr_4()}else{MoveLock_4=false}
AutoPlay_4()}
function ISL_ScrUp_4(){if(GetObj_4('ISL_Cont_4').scrollLeft<=0){GetObj_4('ISL_Cont_4').scrollLeft=GetObj_4('ISL_Cont_4').scrollLeft+GetObj_4('List1_4').offsetWidth}
GetObj_4('ISL_Cont_4').scrollLeft-=Space_4}
function ISL_GoDown_4(){clearInterval(MoveTimeObj_4);if(MoveLock_4)return;clearInterval(AutoPlayObj_4);MoveLock_4=true;MoveWay_4="right";ISL_ScrDown_4();MoveTimeObj_4=setInterval('ISL_ScrDown_4()',Speed_4)}
function ISL_StopDown_4(){if(MoveWay_4 == "left"){return};clearInterval(MoveTimeObj_4);if(GetObj_4('ISL_Cont_4').scrollLeft%PageWidth_4-(fill_4>=0?fill_4:fill_4+1)!=0){Comp_4=PageWidth_4-GetObj_4('ISL_Cont_4').scrollLeft%PageWidth_4+fill_4;CompScr_4()}else{MoveLock_4=false}
AutoPlay_4()}
function ISL_ScrDown_4(){if(GetObj_4('ISL_Cont_4').scrollLeft>=GetObj_4('List1_4').scrollWidth){GetObj_4('ISL_Cont_4').scrollLeft=GetObj_4('ISL_Cont_4').scrollLeft-GetObj_4('List1_4').scrollWidth}
GetObj_4('ISL_Cont_4').scrollLeft+=Space_4}
function CompScr_4(){if(Comp_1==0){MoveLock_4=false;return}
var num_4,TempSpeed_4=Speed_4,TempSpace_4=Space_4;if(Math.abs(Comp_4)<PageWidth_4/2){TempSpace_4=Math.round(Math.abs(Comp_4/Space_4));if(TempSpace_4<1){TempSpace_4=1}}
if(Comp_4<0){if(Comp_4<-TempSpace_4){Comp_4+=TempSpace_4;num_4=TempSpace_4}else{num_4=-Comp_4;Comp_4=0}
GetObj_4('ISL_Cont_4').scrollLeft-=num_4;setTimeout('CompScr_4()',TempSpeed_4)}else{if(Comp_4>TempSpace_4){Comp_4-=TempSpace_4;num_4=TempSpace_4}else{num_4=Comp_4;Comp_4=0}
GetObj_4('ISL_Cont_4').scrollLeft+=num_4;setTimeout('CompScr_4()',TempSpeed_4)}}
function picrun_ini_4(){
GetObj_4("List2_4").innerHTML=GetObj_4("List1_4").innerHTML;
GetObj_4('ISL_Cont_4').scrollLeft=fill_4>=0?fill_4:GetObj_4('List1_4').scrollWidth-Math.abs(fill_4);
GetObj_4("ISL_Cont_4").onmouseover=function(){clearInterval(AutoPlayObj_4)}
GetObj_4("ISL_Cont_4").onmouseout=function(){AutoPlay_4()}
//AutoPlay_1();
}


//第五个
var Speed_5 = 5; //速度(毫秒)
var Space_5 = 5; //每次移动(px)
var PageWidth_5 = 236 * 1; //翻页宽度
var interval_5 = 90000; //翻页间隔时间
var fill_5 = 0; //整体移位
var MoveLock_5 = false;
var MoveTimeObj_5;
var MoveWay_5="right";
var Comp_5 = 0;
var AutoPlayObj_5=null;

function GetObj_5(objName_5){if(document.getElementById){return eval('document.getElementById("'+objName_5+'")')}else{return eval('document.all.'+objName_5)}}
function AutoPlay_5(){clearInterval(AutoPlayObj_5);AutoPlayObj_5=setInterval('ISL_GoDown_5();ISL_StopDown_5();',interval_5)}
function ISL_GoUp_5(){if(MoveLock_5)return;clearInterval(AutoPlayObj_5);MoveLock_5=true;MoveWay_5="left";MoveTimeObj_5=setInterval('ISL_ScrUp_5();',Speed_5);}
function ISL_StopUp_5(){if(MoveWay_5 == "right"){return};clearInterval(MoveTimeObj_5);if((GetObj_5('ISL_Cont_5').scrollLeft-fill_5)%PageWidth_5!=0){Comp_5=fill_5-(GetObj_5('ISL_Cont_5').scrollLeft%PageWidth_5);CompScr_5()}else{MoveLock_5=false}
AutoPlay_5()}
function ISL_ScrUp_5(){if(GetObj_5('ISL_Cont_5').scrollLeft<=0){GetObj_5('ISL_Cont_5').scrollLeft=GetObj_5('ISL_Cont_5').scrollLeft+GetObj_5('List1_5').offsetWidth}
GetObj_5('ISL_Cont_5').scrollLeft-=Space_5}
function ISL_GoDown_5(){clearInterval(MoveTimeObj_5);if(MoveLock_5)return;clearInterval(AutoPlayObj_5);MoveLock_5=true;MoveWay_5="right";ISL_ScrDown_5();MoveTimeObj_5=setInterval('ISL_ScrDown_5()',Speed_5)}
function ISL_StopDown_5(){if(MoveWay_5 == "left"){return};clearInterval(MoveTimeObj_5);if(GetObj_5('ISL_Cont_5').scrollLeft%PageWidth_5-(fill_5>=0?fill_5:fill_5+1)!=0){Comp_5=PageWidth_5-GetObj_5('ISL_Cont_5').scrollLeft%PageWidth_5+fill_5;CompScr_5()}else{MoveLock_5=false}
AutoPlay_5()}
function ISL_ScrDown_5(){if(GetObj_5('ISL_Cont_5').scrollLeft>=GetObj_5('List1_5').scrollWidth){GetObj_5('ISL_Cont_5').scrollLeft=GetObj_5('ISL_Cont_5').scrollLeft-GetObj_5('List1_5').scrollWidth}
GetObj_5('ISL_Cont_5').scrollLeft+=Space_5}
function CompScr_5(){if(Comp_1==0){MoveLock_5=false;return}
var num_5,TempSpeed_5=Speed_5,TempSpace_5=Space_5;if(Math.abs(Comp_5)<PageWidth_5/2){TempSpace_5=Math.round(Math.abs(Comp_5/Space_5));if(TempSpace_5<1){TempSpace_5=1}}
if(Comp_5<0){if(Comp_5<-TempSpace_5){Comp_5+=TempSpace_5;num_5=TempSpace_5}else{num_5=-Comp_5;Comp_5=0}
GetObj_5('ISL_Cont_5').scrollLeft-=num_5;setTimeout('CompScr_5()',TempSpeed_5)}else{if(Comp_5>TempSpace_5){Comp_5-=TempSpace_5;num_5=TempSpace_5}else{num_5=Comp_5;Comp_5=0}
GetObj_5('ISL_Cont_5').scrollLeft+=num_5;setTimeout('CompScr_5()',TempSpeed_5)}}
function picrun_ini_5(){
GetObj_5("List2_5").innerHTML=GetObj_5("List1_5").innerHTML;
GetObj_5('ISL_Cont_5').scrollLeft=fill_5>=0?fill_5:GetObj_5('List1_5').scrollWidth-Math.abs(fill_5);
GetObj_5("ISL_Cont_5").onmouseover=function(){clearInterval(AutoPlayObj_5)}
GetObj_5("ISL_Cont_5").onmouseout=function(){AutoPlay_5()}
//AutoPlay_1();
}


//第六个
var Speed_6 = 5; //速度(毫秒)
var Space_6 = 5; //每次移动(px)
var PageWidth_6 = 236 * 1; //翻页宽度
var interval_6 = 90000; //翻页间隔时间
var fill_6 = 0; //整体移位
var MoveLock_6 = false;
var MoveTimeObj_6;
var MoveWay_6="right";
var Comp_6 = 0;
var AutoPlayObj_6=null;

function GetObj_6(objName_6){if(document.getElementById){return eval('document.getElementById("'+objName_6+'")')}else{return eval('document.all.'+objName_6)}}
function AutoPlay_6(){clearInterval(AutoPlayObj_6);AutoPlayObj_6=setInterval('ISL_GoDown_6();ISL_StopDown_6();',interval_6)}
function ISL_GoUp_6(){if(MoveLock_6)return;clearInterval(AutoPlayObj_6);MoveLock_6=true;MoveWay_6="left";MoveTimeObj_6=setInterval('ISL_ScrUp_6();',Speed_6);}
function ISL_StopUp_6(){if(MoveWay_6 == "right"){return};clearInterval(MoveTimeObj_6);if((GetObj_6('ISL_Cont_6').scrollLeft-fill_6)%PageWidth_6!=0){Comp_6=fill_6-(GetObj_6('ISL_Cont_6').scrollLeft%PageWidth_6);CompScr_6()}else{MoveLock_6=false}
AutoPlay_6()}
function ISL_ScrUp_6(){if(GetObj_6('ISL_Cont_6').scrollLeft<=0){GetObj_6('ISL_Cont_6').scrollLeft=GetObj_6('ISL_Cont_6').scrollLeft+GetObj_6('List1_6').offsetWidth}
GetObj_6('ISL_Cont_6').scrollLeft-=Space_6}
function ISL_GoDown_6(){clearInterval(MoveTimeObj_6);if(MoveLock_6)return;clearInterval(AutoPlayObj_6);MoveLock_6=true;MoveWay_6="right";ISL_ScrDown_6();MoveTimeObj_6=setInterval('ISL_ScrDown_6()',Speed_6)}
function ISL_StopDown_6(){if(MoveWay_6 == "left"){return};clearInterval(MoveTimeObj_6);if(GetObj_6('ISL_Cont_6').scrollLeft%PageWidth_6-(fill_6>=0?fill_6:fill_6+1)!=0){Comp_6=PageWidth_6-GetObj_6('ISL_Cont_6').scrollLeft%PageWidth_6+fill_6;CompScr_6()}else{MoveLock_6=false}
AutoPlay_6()}
function ISL_ScrDown_6(){if(GetObj_6('ISL_Cont_6').scrollLeft>=GetObj_6('List1_6').scrollWidth){GetObj_6('ISL_Cont_6').scrollLeft=GetObj_6('ISL_Cont_6').scrollLeft-GetObj_6('List1_6').scrollWidth}
GetObj_6('ISL_Cont_6').scrollLeft+=Space_6}
function CompScr_6(){if(Comp_1==0){MoveLock_6=false;return}
var num_6,TempSpeed_6=Speed_6,TempSpace_6=Space_6;if(Math.abs(Comp_6)<PageWidth_6/2){TempSpace_6=Math.round(Math.abs(Comp_6/Space_6));if(TempSpace_6<1){TempSpace_6=1}}
if(Comp_6<0){if(Comp_6<-TempSpace_6){Comp_6+=TempSpace_6;num_6=TempSpace_6}else{num_6=-Comp_6;Comp_6=0}
GetObj_6('ISL_Cont_6').scrollLeft-=num_6;setTimeout('CompScr_6()',TempSpeed_6)}else{if(Comp_6>TempSpace_6){Comp_6-=TempSpace_6;num_6=TempSpace_6}else{num_6=Comp_6;Comp_6=0}
GetObj_6('ISL_Cont_6').scrollLeft+=num_6;setTimeout('CompScr_6()',TempSpeed_6)}}
function picrun_ini_6(){
GetObj_6("List2_6").innerHTML=GetObj_6("List1_6").innerHTML;
GetObj_6('ISL_Cont_6').scrollLeft=fill_6>=0?fill_6:GetObj_6('List1_6').scrollWidth-Math.abs(fill_6);
GetObj_6("ISL_Cont_6").onmouseover=function(){clearInterval(AutoPlayObj_6)}
GetObj_6("ISL_Cont_6").onmouseout=function(){AutoPlay_6()}
//AutoPlay_1();
}




//第七个
var Speed_7 = 5; //速度(毫秒)
var Space_7 = 5; //每次移动(px)
var PageWidth_7 = 236 * 1; //翻页宽度
var interval_7 = 90000; //翻页间隔时间
var fill_7 = 0; //整体移位
var MoveLock_7 = false;
var MoveTimeObj_7;
var MoveWay_7="right";
var Comp_7 = 0;
var AutoPlayObj_7=null;

function GetObj_7(objName_7){if(document.getElementById){return eval('document.getElementById("'+objName_7+'")')}else{return eval('document.all.'+objName_7)}}
function AutoPlay_7(){clearInterval(AutoPlayObj_7);AutoPlayObj_7=setInterval('ISL_GoDown_7();ISL_StopDown_7();',interval_7)}
function ISL_GoUp_7(){if(MoveLock_7)return;clearInterval(AutoPlayObj_7);MoveLock_7=true;MoveWay_7="left";MoveTimeObj_7=setInterval('ISL_ScrUp_7();',Speed_7);}
function ISL_StopUp_7(){if(MoveWay_7 == "right"){return};clearInterval(MoveTimeObj_7);if((GetObj_7('ISL_Cont_7').scrollLeft-fill_7)%PageWidth_7!=0){Comp_7=fill_7-(GetObj_7('ISL_Cont_7').scrollLeft%PageWidth_7);CompScr_7()}else{MoveLock_7=false}
AutoPlay_7()}
function ISL_ScrUp_7(){if(GetObj_7('ISL_Cont_7').scrollLeft<=0){GetObj_7('ISL_Cont_7').scrollLeft=GetObj_7('ISL_Cont_7').scrollLeft+GetObj_7('List1_7').offsetWidth}
GetObj_7('ISL_Cont_7').scrollLeft-=Space_7}
function ISL_GoDown_7(){clearInterval(MoveTimeObj_7);if(MoveLock_7)return;clearInterval(AutoPlayObj_7);MoveLock_7=true;MoveWay_7="right";ISL_ScrDown_7();MoveTimeObj_7=setInterval('ISL_ScrDown_7()',Speed_7)}
function ISL_StopDown_7(){if(MoveWay_7 == "left"){return};clearInterval(MoveTimeObj_7);if(GetObj_7('ISL_Cont_7').scrollLeft%PageWidth_7-(fill_7>=0?fill_7:fill_7+1)!=0){Comp_7=PageWidth_7-GetObj_7('ISL_Cont_7').scrollLeft%PageWidth_7+fill_7;CompScr_7()}else{MoveLock_7=false}
AutoPlay_7()}
function ISL_ScrDown_7(){if(GetObj_7('ISL_Cont_7').scrollLeft>=GetObj_7('List1_7').scrollWidth){GetObj_7('ISL_Cont_7').scrollLeft=GetObj_7('ISL_Cont_7').scrollLeft-GetObj_7('List1_7').scrollWidth}
GetObj_7('ISL_Cont_7').scrollLeft+=Space_7}
function CompScr_7(){if(Comp_1==0){MoveLock_7=false;return}
var num_7,TempSpeed_7=Speed_7,TempSpace_7=Space_7;if(Math.abs(Comp_7)<PageWidth_7/2){TempSpace_7=Math.round(Math.abs(Comp_7/Space_7));if(TempSpace_7<1){TempSpace_7=1}}
if(Comp_7<0){if(Comp_7<-TempSpace_7){Comp_7+=TempSpace_7;num_7=TempSpace_7}else{num_7=-Comp_7;Comp_7=0}
GetObj_7('ISL_Cont_7').scrollLeft-=num_7;setTimeout('CompScr_7()',TempSpeed_7)}else{if(Comp_7>TempSpace_7){Comp_7-=TempSpace_7;num_7=TempSpace_7}else{num_7=Comp_7;Comp_7=0}
GetObj_7('ISL_Cont_7').scrollLeft+=num_7;setTimeout('CompScr_7()',TempSpeed_7)}}
function picrun_ini_7(){
GetObj_7("List2_7").innerHTML=GetObj_7("List1_7").innerHTML;
GetObj_7('ISL_Cont_7').scrollLeft=fill_7>=0?fill_7:GetObj_7('List1_7').scrollWidth-Math.abs(fill_7);
GetObj_7("ISL_Cont_7").onmouseover=function(){clearInterval(AutoPlayObj_7)}
GetObj_7("ISL_Cont_7").onmouseout=function(){AutoPlay_7()}
//AutoPlay_1();
}