// JavaScript Document
function load_form_enable()
{
	var f1 = document.getElementById("form_enable1");
	var f0 = document.getElementById("form_enable0");
	
	if (ov_enable == "1")
		f1.checked = true;
	else
		f0.checked = true;
}

function change_form_enable()
{
	var f = document.getElementById("form_enable1");
	var i;
	
	if(f.checked == true)
	{
		for (i = 0; i <= 1; i++)
		{
       		document.getElementById('layer' + i).style.visibility = "visible";
   		}
	}
	else
	{
		for (i = 0; i <= 1; i++)
		{
       		document.getElementById('layer' + i).style.visibility = "hidden";
   		}
	}
}

function submit_form_enable()
{
	var f = document.getElementById("form_enable1");
	var s = document.getElementById("form_submit");
	
	if (f.checked == true)
		s.enable.value = 1;
	else
		s.enable.value = 0;
		
	
}

function load_form_port()
{
	var f = document.getElementById("form_port");
	
	f.value = ov_port;	
}

function check_form_port()
{
	var f = document.getElementById("form_port");
	
	if (f.value == "")
	{
		alert(str_enter_port);
		return false;
	}
	else
	{
		
                if(checkProhibitedCharacter2(f,f.value)==false)
			return false;
			
	}	
	
	return true;
}

function submit_form_port()
{
	var f = document.getElementById("form_port");
	var s = document.getElementById("form_submit");

	s.port.value = f.value;	
	
}

function load_form_authflag()
{
	var f1 = document.getElementById("form_authflag1");
	var f0 = document.getElementById("form_authflag0");
	
	if (ov_authflag == "1")
		f1.checked = true;
	else
		f0.checked = true;
}
function submit_form_authflag()
{
	var f = document.getElementById("form_authflag1");
	var s = document.getElementById("form_submit");
	
	if (f.checked == true)
		s.authflag.value = 1;
	else
		s.authflag.value = 0;
		
	
}