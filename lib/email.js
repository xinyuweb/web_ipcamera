// JavaScript Document
function load_form_maserver()
{
	var f = document.getElementById("form_maserver");
	
	f.value = ma_server;
}

function check_form_maserver()
{
	var f = document.getElementById("form_maserver");
	
	
	if (checkHankakuNoKana(f.value, f, str_alert20) == false)
		return false;
	if (checkProhibitedCharacter2(f, f.value) == false)
		return false;
	return true;
}

function submit_form_maserver()
{
	var f = document.getElementById("form_maserver");
	var s = document.getElementById("form_submit");
	
	s.ma_server.value = f.value;
	s.ma_server.name  = "-ma_server";
}

function load_form_maport()
{
	var f = document.getElementById("form_maport");
	
	f.value = ma_port;
}

function check_form_maport()
{
	var f = document.getElementById("form_maport");
	
	var j;
	var portvalue = f.value;
	
	for(j = 0; j < (portvalue.length); j++)
	{
		var ch = portvalue.substring(j, j + 1);
		if ("0" > ch || ch > "9") 
		{
			alert(str_alert4);
			f.select();
			return false;
		}
	}
	
	if ((f.value < 1) || (f.value > 65535))
	{
		alert(str_alert33);
		f.select();
		return false;
	}
	
	return true;
}

function submit_form_maport()
{
	var f = document.getElementById("form_maport");
	var s = document.getElementById("form_submit");
	
	s.ma_port.value = f.value;
	s.ma_port.name  = "-ma_port";
}

function load_form_massl()
{
	var f = document.getElementById("form_massl");

	if (ma_ssl == "0")
	{
		f.options[0].selected = true;
	}
	else if (ma_ssl == "1")
	{
		f.options[1].selected = true;
	}
	else if (ma_ssl == "2")
	{
		f.options[2].selected = true;
	}
        else
	{
		f.options[3].selected = true;
	}
}

function submit_form_massl()
{
	var f = document.getElementById("form_massl");
	var s = document.getElementById("form_submit");
	
	s.ma_ssl.value = f.value;
	
	s.ma_ssl.name = "-ma_ssl";
}

// 验证 用户名 密码
function load_form_malogintype()
{
	var f1 = document.getElementById("form_malogintype1");
	var f3 = document.getElementById("form_malogintype3");
	var fu = document.getElementById("form_mausername");
	var fp = document.getElementById("form_mapassword");

	if (ma_logintype == 3)
	{
		f3.checked = "true";
	}
	else
	{
		f1.checked = "true";
	}
	
	fu.value = ma_username;
	fp.value = ma_password;
}

function do_FimeName()
{
	var fl = document.getElementById("form_malogintype1");

	if (fl.checked == true)
	{
		for(i = 0; i <= 1; i++)
		{
			document.getElementById('layer' + i).style.visibility = "visible";
		}
	}
	else
	{
		for(i = 0; i <= 1; i++)
		{
			document.getElementById('layer' + i).style.visibility = "hidden";
		}
	}
}

function check_form_malogintype()
{
	var fl = document.getElementById("form_malogintype1");
	var fu = document.getElementById("form_mausername");
	var fp = document.getElementById("form_mapassword");

	
	if (checkHankakuNoKana(fu.value, fu, str_alert27) == false)
		return false;
	if (checkHankakuNoKana(fp.value, fp, str_alert27) == false)
		return false;
	if (checkProhibitedCharacter2(fu, fu.value) == false)
		return false;	
        if (checkProhibitedCharacter2(fp, fp.value) == false)
		return false;	

	return true;
}

function submit_form_logintype()
{
	var fl = document.getElementById("form_malogintype1");
	var fu = document.getElementById("form_mausername");
	var fp = document.getElementById("form_mapassword");
	var s  = document.getElementById("form_submit");
	
	if (fl.checked == true)
	{
		s.ma_username.value  = fu.value;
		s.ma_password.value  = fp.value;
		s.ma_logintype.value = "1";
	}
	else
	{
		s.ma_logintype.value = "3";
	}
	
	s.ma_username.name  = "-ma_username";
	s.ma_password.name  = "-ma_password";
	s.ma_logintype.name = "-ma_logintype";
}

function load_form_mato()
{
	var f1 = document.getElementById("form_address1");
        var f2 = document.getElementById("form_address2");
        var f3 = document.getElementById("form_address3");

	var splits = ma_to.split(";");
	
	if (splits.length >= 1)
		f1.value = splits[0];
        if (splits.length >= 2)
		f2.value = splits[1];
        if (splits.length >= 3)
		f3.value = splits[2];
	if (splits.length == 0)
	{
		f1.value = "";
                f2.value = "";
                f3.value = "";
	}
}

function ValidEmail(itemc)     // 检查EMAIL的合法性
{
	if (itemc.value.length > 0)
	{
		if (itemc.value.length < 6)
		{
			alert(str_alert13);
			itemc.select();
			return false;
		}
		
		if ((itemc.value.indexOf('@',0) == -1) || (itemc.value.indexOf("'",0) != -1))
		{
			alert(str_alert14);
			itemc.select();
			return false;
		}
	}
}
function check_form_mato()
{
	var f1 = document.getElementById("form_address1");
        var f2 = document.getElementById("form_address2");
        var f3 = document.getElementById("form_address3");
	
	if (checkHankakuNoKana(f1.value, f1, str_alert21) == false)
		return false;
        if (checkProhibitedCharacter2(f1, f1.value) == false)
		return false;
        if (checkHankakuNoKana(f2.value, f2, str_alert21) == false)
		return false;
        if (checkProhibitedCharacter2(f2, f2.value) == false)
		return false;
        if (checkHankakuNoKana(f3.value, f3, str_alert21) == false)
		return false;
        if (checkProhibitedCharacter2(f3, f3.value) == false)
		return false;
		
	return true;
}

function submit_form_mato()
{
        var f1 = document.getElementById("form_address1");
        var f2 = document.getElementById("form_address2");
        var f3 = document.getElementById("form_address3");
	var s  = document.getElementById("form_submit");

	if(f2.value=="")
	{
		str2=f1.value;
	}
	else
	{
	str1=f1.value.concat(";");
	str2=str1.concat(f2.value);
	}
	if(f3.value=="")
	{
		str4=str2;
	}
	else
		{
	str3=str2.concat(";");
	str4=str3.concat(f3.value);
	}
	s.ma_to.value=str4;	

        s.ma_to.name  = "-ma_to";

}

function load_form_mafrom()
{
	var f = document.getElementById("form_mafrom");
	
	f.value = ma_from;
}

function check_form_mafrom()
{
	var f = document.getElementById("form_mafrom");

	
	if (checkHankakuNoKana(f.value, f, str_alert21) == false)
		return false;
        if (checkProhibitedCharacter2(f, f.value) == false)
		return false;
		
	return true;
}

function submit_form_mafrom()
{
	var f = document.getElementById("form_mafrom");
	var s = document.getElementById("form_submit");
	
	s.ma_from.value = f.value;
	s.ma_from.name  = "-ma_from";
}

function load_form_masubject()
{
	var f = document.getElementById("form_masubject");
	
	f.value = ma_subject;
}

function check_form_masubject()
{
	var f = document.getElementById("form_masubject");
	
	if (checkHankakuNoKana(f.value, f, str_alert25) == false)
		return false;
	if (checkProhibitedCharacter2(f, f.value) == false)
		return false;	
	return true;
}

function submit_form_masubject()
{
	var f = document.getElementById("form_masubject");
	var s = document.getElementById("form_submit");
	
	if (f.value == "")
	{
		s.ma_subject.value = " ";
	}
	else
	{
		s.ma_subject.value = f.value;
	}
	
	s.ma_subject.name = "-ma_subject";
}

function load_form_matext()
{
	var f = document.getElementById("form_matext");
	
	f.value = ma_text;
}

function check_form_matext()
{
	var f = document.getElementById("form_matext");

	if (checkHankakuNoKana(f.value, f,str_alert26) == false)
		return false;
	if (checkProhibitedCharacter2(f, f.value) == false)
		return false;
		
	if (f.value.length > 127)
	{
		alert(str_alert29);
		return false;
	}

	return true;
}

function submit_form_matext()
{
	var f = document.getElementById("form_matext");
	var s = document.getElementById("form_submit");
	
	if (f.value == "")
	{
			s.ma_text.value = " ";
	}
	else
	{
			s.ma_text.value = f.value;
	}
	
	var area_flag = 0;
	
	while (s.ma_text.value.indexOf("\r\n") >= 0)
	{
		area_flag = 1;
		s.ma_text.value = s.ma_text.value.replace("\r\n","\\r\\n");
	}
	
	if (area_flag == 0)
	{
		while (s.ma_text.value.indexOf("\n") >= 0)
		{
			s.ma_text.value = s.ma_text.value.replace("\n","\\r\\n");
		}
	}
	
	s.ma_text.name = "-ma_text";
}



