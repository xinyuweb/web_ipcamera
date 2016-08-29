function getcookie(name)
{
	var strCookie=document.cookie;
    var arrCookie=strCookie.split('; ');
    for (var i=0;i<arrCookie.length;i++)
    {
		var arr=arrCookie[i].split('=');
        if (arr[0]==name)
			return unescape(arr[1]); //这里是对调用了escape的数据进行解码
    }
    return '';
}


function setcookie(name,value,expirehours)
{
	var cookieString=name+'='+escape(value);
    if (expirehours>0)
    {
		var date=new Date();
        date.setTime(date.getTime()+expirehours*3600*1000);
        cookieString=cookieString+'; expires='+date.toGMTString();
	}
    document.cookie=cookieString;
}



function showerror(camera,msg,err)
{
	var err_info;
	switch(err)
	{
	case 0:
		err_info='';
		break;
	case -1:
		err_info=str_err_connect;
		break;
	case -2:
		err_info=str_err_socket;
		break;
	case -3:
		err_info=str_err_timeout;
		break;
	case -4:
		err_info=str_err_version;
		break;
	case -5:
		err_info=str_err_cancel;
		break;
	case -6:
		err_info=str_err_closed;
		break;
	case -8:
		err_info=str_err_file;
		break;
	case -9:
		err_info=str_err_param;
		break;
	case -10:
		err_info=str_err_thread;
		break;
	case -11:
		err_info=str_err_status;
		break;
	case -12:
		err_info=str_err_id;
		break;
	case 1:
		err_info=str_fail_user;
		break;
	case 2:
		err_info=str_fail_maxconns;
		break;
	case 3:
		err_info=str_fail_version;
		break;
	case 4:
		err_info=str_fail_id;
		break;
	case 5:
		err_info=str_fail_pwd;
		break;
	case 6:
		err_info=str_fail_pri;
		break;
	case 7:
		err_info=str_fail_unsupport;
		break;	
	case 8:
		err_info=str_fail_forbidden;
		break;	
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}

/*function   isIE(){ 
    if   (window.navigator.userAgent.toString().toLowerCase().indexOf("msie") >=1)
      return   true;
    else
      return   false;
}

if(!isIE()){   //firefox   innerText   define
      HTMLElement.prototype.__defineGetter__(           "innerText",
        function(){
          var   anyString   =   "";
          var   childS   =   this.childNodes;
          for(var   i=0;   i <childS.length;   i++)   {
            if(childS[i].nodeType==1)
              anyString   +=   childS[i].tagName=="BR"   ?   '\n'   :   childS[i].innerText;
            else   if(childS[i].nodeType==3)
              anyString   +=   childS[i].nodeValue;
          }
          return   anyString;
        }
      );
      HTMLElement.prototype.__defineSetter__(           "innerText",
        function(sText){
          this.textContent=sText;
        }
      ); 
} 
*/
function changeImg()
{
 if(language=='simple_chinese')
 {
        	document.getElementById('img_logo').src="images/logo.gif";
            document.getElementById('play_back').src="images/play_back.gif";
		//	document.getElementById('img_zoom1').src="images/btn_zoom.gif";
		//	document.getElementById('img_focus').src="images/btn_focus.gif";
		//    document.getElementById('img_speed').src="images/btn_speed.gif";
			document.getElementById('recImage_avi').src="images/btn_luxiang.gif";
			document.getElementById('img_snapshot').src="images/btn_paizhao.gif";
			document.getElementById('img_listen').src="images/btn_jianting.gif";
			document.getElementById('img_talk').src="images/btn_talk.gif";
			document.getElementById('img_preset1').src="images/btn_diaoyong.gif";
			document.getElementById('img_preset2').src="images/btn_sheding.gif"
			document.getElementById('img_setup').src="images/btn_shezhi.gif";
            document.getElementById('img_path').src="images/btn_lujing.gif";
            document.getElementById('img_zoom').src="images/btn_zoom.gif";
		}
		else if(language=='traditional_chinese')
		{
        	document.getElementById('img_logo').src="images/logo.gif";
            document.getElementById('play_back').src="images/play_back_tc.gif";
		//	document.getElementById('img_zoom1').src="images/btn_zoom.gif";
		//	document.getElementById('img_focus').src="images/btn_focus.gif";
		//    document.getElementById('img_speed').src="images/btn_speed.gif";
			document.getElementById('recImage_avi').src="images/btn_luxiang_tc.gif";
			document.getElementById('img_snapshot').src="images/btn_paizhao_tc.gif";
			document.getElementById('img_listen').src="images/btn_jianting_tc.gif";
			document.getElementById('img_talk').src="images/btn_talk_tc.gif";
			document.getElementById('img_preset1').src="images/btn_diaoyong_tc.gif";
			document.getElementById('img_preset2').src="images/btn_sheding_tc.gif"
			document.getElementById('img_setup').src="images/btn_shezhi_tc.gif";
            document.getElementById('img_path').src="images/btn_lujing_tc.gif";
            document.getElementById('img_zoom').src="images/btn_zoom_tc.gif";
		}
		else if(language=='korean')
		{
        	document.getElementById('img_logo').src="images/logo_kr.gif";
			document.getElementById('play_back').src="images/play_back_kr.gif";
		//	document.getElementById('img_zoom1').src="images/btn_zoom.gif";
		//	document.getElementById('img_focus').src="images/btn_focus.gif";
		//    document.getElementById('img_speed').src="images/btn_speed.gif";
			document.getElementById('recImage_avi').src="images/btn_luxiang_kr.gif";
			document.getElementById('img_snapshot').src="images/btn_paizhao_kr.gif";
			document.getElementById('img_listen').src="images/btn_jianting_kr.gif";
			document.getElementById('img_talk').src="images/btn_talk_kr.gif";
			document.getElementById('img_preset1').src="images/btn_diaoyong_kr.gif";
			document.getElementById('img_preset2').src="images/btn_sheding_kr.gif"
			document.getElementById('img_setup').src="images/btn_shezhi_kr.gif";
            document.getElementById('img_path').src="images/btn_lujing_kr.gif";
            document.getElementById('img_zoom').src="images/btn_zoom_kr.gif";
		}
		else
		{
			document.getElementById('img_logo').src="images/logo_en.gif";
            document.getElementById('play_back').src="images/play_back_en.gif";
		//	document.getElementById('img_zoom1').src="images/btn_zoom_en.gif";
		//	document.getElementById('img_focus').src="images/btn_focus_en.gif";
		//	document.getElementById('img_speed').src="images/btn_speed_en.gif";
			document.getElementById('recImage_avi').src="images/btn_luxiang_en.gif";
			document.getElementById('img_snapshot').src="images/btn_paizhao_en.gif";
			document.getElementById('img_listen').src="images/btn_jianting_en.gif";
			document.getElementById('img_talk').src="images/btn_talk_en.gif";
			document.getElementById('img_preset1').src="images/btn_diaoyong_en.gif";
			document.getElementById('img_preset2').src="images/btn_sheding_en.gif"
			document.getElementById('img_setup').src="images/btn_shezhi_en.gif";
            document.getElementById('img_path').src="images/btn_lujing_en.gif";
            document.getElementById('img_zoom').src="images/btn_zoom_en.gif";
		}
}

var language=getcookie('language');
 if (navigator.appName.indexOf("Microsoft Internet Explorer") != -1)
 {
	if (language=='')
	{
		var strLan = navigator.browserLanguage;
		if(strLan.substring(0,2).indexOf("zh") > -1)
		{
			if((strLan.indexOf("hk") > -1) || (strLan.indexOf("tw") > -1) || (strLan.indexOf("mo") > -1)){
				language = 'traditional_chinese'; 			 
			}else{
				language = 'simple_chinese';
			}		
		}
		else
		{
			language = 'english';	
		}	
   }
 }
 else
 {
	 if (language=='')
	 {
		if (navigator.appName == 'Netscape') 
				language = navigator.language; 
		else 
				language = navigator.browserLanguage; 	
								
		if (language.indexOf('zh') > -1) 
			language = 'simple_chinese'; 
		else 
			language = 'english'; 	
	}
 }


 
if (language=='simple_chinese')
{
	document.write('<script src="simple_chinese/string.js"><\/script>');
}
else if (language=='traditional_chinese')
{
	document.write('<script src="traditional_chinese/string.js"><\/script>');
}
else if (language=='korean')
{
	document.write('<script src="korean/string.js"><\/script>');
}
else
{
	document.write('<script src="english/string.js"><\/script>');
	
}





function checkProhibitedCharacter (obj, string )
{
//if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
//if(( string.search("\/") != -1 )||( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 ))
{
	obj.select();
  alert(str_alert4);
  return false;
}
else if(( string.search("\/") != -1 )||( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 )||( string.search("\"") != -1 ))
{
	obj.select();
  alert(str_alert4+"(:,&,=,\"\,\\\,\/)");
  return false;
}
else
{
return true;
}
}
function checkProhibitedCharacter2(obj, string )
{
//if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
//if(( string.search("\/") != -1 )||( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 ))
{
	obj.select();
  alert(str_alert4);
  return false;
}
else if(( string.search("\/") != -1 )||( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 )||( string.search("\"") != -1 ))
{
	obj.select();
  alert(str_alert4+"(:,&,=,\"\,\\\,\/)");
  return false;
}
else
{
return true;
}
}
function checkProhibitedCharacter3(obj, string )
{
//if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
//if(( string.search("\/") != -1 )||( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 ))
{
	obj.select();
  alert(str_alert4);
  return false;
}
else if(( string.search(/\\/) != -1 )||( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 )||( string.search("\"") != -1 ))
{
	obj.select();
  alert(str_alert4+"(:,&,=,\"\,\\\)");
  return false;
}
else
{
return true;
}
}
function hasZenKaku(str){
var code;
for (var i = 0; i < str.length; ++i) {
code = str.charCodeAt(i);
if (code > 256 && (code < 0xff61 || code > 0xff9f)) {
return true;
}
}
return false;
}

function hasHankakuKana(str)
{
	var code;
	for (var i = 0; i < str.length; ++i) 
	{
		code = str.charCodeAt(i);
		if (code >= 0xff61 && code <= 0xff9f)
 		{
			return true;
		}
	}
	return false;
}


function checkHankakuNoKana(str,cObj,strMsg)
{
	var tmp;
    if (hasZenKaku(str) == true || hasHankakuKana(str) == true)
    {
		if (strMsg==null || strMsg=='' ) 
			alert(str_alert5);
  		else alert(strMsg);
			cObj.select();
			return false;
	}
	return true;
}
