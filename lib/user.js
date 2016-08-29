// JavaScript Document
function load_form_atpassword0()
{
	var f  = document.getElementById("form_atpassword0");
	var fr = document.getElementById("form_reatpassword0");
	var n  = document.getElementById("form_atusername0");
	
	f.value  = at_password0;
	fr.value = at_password0;
	n.value  = at_username0;
}

function check_form_atpassword0()
{
	var f  = document.getElementById("form_atpassword0");
	var fr = document.getElementById("form_reatpassword0");

	
	if (checkProhibitedCharacter(f.value) == false)
	{
		f.select();
		return false;
	}
	
	if (f.value != fr.value)
	{
		alert(str_alert91);
		fr.select();
		return false;
	}
	
	return true;
}

function submit_form_atpassword0()
{
	var f = document.getElementById("form_atpassword0");
	var n = document.getElementById("form_atusername0");
	var s = document.getElementById("form_submit");
	
	s.at_username0.value = at_username0;
	s.at_username0.name  = "-at_username";

        s.at_newname0.value = n.value;
	s.at_newname0.name  = "-at_newname";

        s.at_password0.value = f.value;
	s.at_password0.name  = "-at_password";
}

function load_form_atpassword1()
{
	var f  = document.getElementById("form_atpassword1");
	var fr = document.getElementById("form_reatpassword1");
	var n  = document.getElementById("form_atusername1");


	f.value  = at_password1;
	fr.value = at_password1;
	n.value = at_username1;
}

function check_form_atpassword1()
{
	var f  = document.getElementById("form_atpassword1");
	var fr = document.getElementById("form_reatpassword1");
	
	
	if (checkProhibitedCharacter(f.value) == false)
	{
		f.select();
		return false;
	}
	
	if (f.value != fr.value)
	{
		alert(str_alert91);
		fr.select();
		return false;
	}
	
	return true;
}

function submit_form_atpassword1()
{
	var f = document.getElementById("form_atpassword1");
	var n = document.getElementById("form_atusername1");
	var s = document.getElementById("form_submit");
	
	s.at_username1.value = at_username1;
	s.at_username1.name  = "-at_username";

        s.at_newname1.value = n.value;
	s.at_newname1.name  = "-at_newname";

        s.at_password1.value = f.value;
	s.at_password1.name  = "-at_password";
}


function load_form_atpassword2()
{
	var f  = document.getElementById("form_atpassword2");
	var fr = document.getElementById("form_reatpassword2");
	var n  = document.getElementById("form_atusername2");

	
	f.value  = at_password2;
	fr.value = at_password2;
	n.value = at_username2;
}

function check_form_atpassword2()
{
	var f  = document.getElementById("form_atpassword2");
	var fr = document.getElementById("form_reatpassword2");
	
	
	if (checkProhibitedCharacter(f.value) == false)
	{
		f.select();
		return false;
	}
	
	if (f.value != fr.value)
	{
		alert(str_alert91);
		fr.select();
		return false;
	}
	
	return true;
}

function submit_form_atpassword2()
{
	var f = document.getElementById("form_atpassword2");
	var n = document.getElementById("form_atusername2");
	var s = document.getElementById("form_submit");
	
	s.at_username2.value = at_username2;
	s.at_username2.name  = "-at_username";

        s.at_newname2.value = n.value;
	s.at_newname2.name  = "-at_newname";

        s.at_password2.value = f.value;
	s.at_password2.name  = "-at_password";
}

function check_form_username()
{
   var m =document.getElementById("form_atusername0");
   var n =document.getElementById("form_atusername1");
   var o =document.getElementById("form_atusername2");
   var s = document.getElementById("form_submit");

      if (m.value == "")
	{
		alert(str_alert93);
		m.select();
		return false;
	}
   

      if(m.value.search(/[^a-zA-Z0-9]/)!=-1)
	{
		m.select();
                alert(str_err_username);
		return false;
	}

     if (n.value == "")
	{
		alert(str_alert93);
		n.select();
		return false;
	}
   
      if(n.value.search(/[^a-zA-Z0-9]/)!=-1)
	{
		n.select();
                alert(str_err_username);
		return false;
	}
	

      if (o.value == "")
	{
		alert(str_alert93);
		o.select();
		return false;
	}
   

      if(o.value.search(/[^a-zA-Z0-9]/)!=-1)
	{
		o.select();
                alert(str_err_username);
		return false;
	}



    if (m.value == n.value)
	{
		alert(str_usernameno);
		n.select();
		return false;
	}
    else if (m.value == o.value)
	{
		alert(str_usernameno);
		o.select();
		return false;
	}
     else if (n.value == o.value)
	{
		alert(str_usernameno);
		o.select();
		return false;
	}
    return true;
}
