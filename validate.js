var errfound=false;
function ValidNum(itemc,itemcname)  
 {
  if (itemc.value.length>0)
   {
    for (var i=0;i<itemc.value.length;i++)
     {
      var ch=itemc.value.substring(i,i+1);
      if ("0">ch || ch>"9") error(itemc,itemcname,"invalid number");
      }
    }
  }
function NumBetween(itemc,itemcname,Min,Max)
{
	if(Min>itemc.value||itemc.value>Max)
	error(itemc,itemcname,"the value is out of bound");
}  	
function NullNum(itemc,itemcname)
{
	if(itemc.value.length<=0)
	error(itemc,itemcname,"the content is NULL ");
} 
function error(elem,itemcname,text)  
 {
  if (errfound) return;
  window.alert(itemcname+" input is error!\n\n"+text);
  elem.select();
  elem.focus();
  errfound = true;
  }
  
function checkProhibitedCharacter ( string )
{
//if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
if((string.search("&") != -1)||(string.search("=") != -1 )||(string.search("cmd=") != -1)
{
alert("Invalid character");
return false;
}
else
{
return true;
}
}
function checkProhibitedCharacterUser(string)
{
	if(string.search("=") != -1)
	{
		alert("Invalid character");
		return false
	}
else 
	{
		return checkProhibitedCharacter ( string );
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
			if (strMsg==null || strMsg=='' ) alert('Input an effective value.');
  		else alert(strMsg);
			cObj.select();
			return false;
		}
		return true;
}

function ValidIp(itemc,itemcname)  //检查是否合法IP地址
 {
  var i,n,st,j;
  n=0;j=0;
  for (i=0;i<itemc.value.length;i++)
   {
    st=itemc.value.substr(i,1);
    if (st==".") 
     {
      j++;
      if (j==1 && n==0) error(itemc,itemcname," is invalide ");
      if (0>n || n>255) error(itemc,itemcname," is invalide");
      n=0;
      }
    else
     {
      if ("0">st || st>"9") error(itemc,itemcname,"invalide number");
      n=n*10+parseInt(st);
      }
    }
  if (j!=3) error(itemc,itemcname," is invalide");
  if (0>n || n>255) error(itemc,itemcname," is invalide");
  if (n==0) error(itemc,itemcname," is invalide");
  }
  
function ValidTime(hour,minute,second)
{
	var hourI=0,minuteI=0,secondI=0;
	alert(hour+minute+second);
	if ((hour.length)>0)
   {
    for (var i=0;i<(hour.length);i++)
     {
      var ch=hour.substring(i,i+1);
      if ("0">ch || ch>"9") 
      {
      	return false;
      }
      }
    }
	if ((minute.length )>0)
   {
    for (var i=0;i<(minute.length);i++)
     {
      var ch=minute.substring(i,i+1);
      if ("0">ch || ch>"9") 
      {
      	return false;
      }
      }
    }
		if ((second.length) >0)
   {
    for (var i=0;i<(second.length);i++)
     {
      var ch = second.substring(i,i+1);
      if ("0">ch || ch>"9") 
      {
      	return false;
      }
      }
    }
	hourI=parseInt(hour);
	minuteI=parseInt(minute);
	secondI=parseInt(second);
	if(hourI < 0 ||hourI > 23)
	{
		return false;
	}
	if(minuteI < 0 ||minuteI > 59)
	{
		return false;
	}
	if(secondI < 0 ||secondI > 59)
	{
		return false;
	}
	return true;
}


function ValidCompareTime(beginTimeItem,endTimeItem)
{
	var timeB,timeE;
	timeB=beginTimeItem.split(":");
	timeE=endTimeItem.split(":");
	if(((timeB.length) != 3 )||(ValideTime(timeB[0],timeB[1],timeB[2])!= true))
	{
		window.alert("input is error!\n\n");
    beginTimeItem.select();
    beginTimeItem.focus();
    return false;
	}
	if(((timeE.length) != 3 )||(ValideTime(timeE[0],timeE[1],timeE[2])!= true))
	{
		window.alert("input is error!\n\n");
    endTimeItem.select();
    endTimeItem.focus();
    return false;
	}
	if((parseInt(timeB[0]) > parseInt(timeE[0]))|| ((parseInt(timeB[0])=parseInt(timeE[0]))&&((parseInt(timeB[1]) > parseInt(timeE[1]))||(parseInt(timeB[2])>parseInt(timeE[2])))))
	{
		window.alert("input is error!\n\n");
    beginTimeItem.select();
    beginTimeItem.focus();
    return false;
	}
	
}


function checkProhibitedCharacter ( string )
{
//if( string.search(/[^a-zA-Z0-9_\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\s]/) != -1 )
if(( string.search(":") != -1 )||( string.search("&") != -1 )||( string.search("=") != -1 ))
{
alert("Invalid user name.");
return false;
}
else
{
return true;
}
}