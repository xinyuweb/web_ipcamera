function load_form_aaenable()
{
	var f0 = document.getElementById("form_aaenable0");
        var f1 = document.getElementById("form_aaenable1");
	
   	if (aa_enable == "1")
        {
   		f0.checked = true;
        }
        else
	{
		f1.checked = true;
	}
}

function change_form_witch()
{
	var f = document.getElementById("form_aaenable0");
	
	if (f.checked == true)
	{
   		document.getElementById('audiorange').style.visibility = "visible";
  	}
	else
	{
		document.getElementById('audiorange').style.visibility = "hidden";
	}
}

function submit_form_aaenable()
{
	var f = document.getElementById("form_aaenable0");
	var s = document.getElementById("form_submit");
	
	if (f.checked)
		s.aa_enable.value="1";
	else
		s.aa_enable.value="0";
	s.aa_enable.name = "-aa_enable";
}

function load_form_aavalue()
{
	var f = document.getElementById("form_aavalue");
	
	f.value = aa_value;
}

function submit_form_aavalue()
{
	var f = document.getElementById("form_aavalue");
	var s = document.getElementById("form_submit");

       s.aa_value.value = f.value;
	
		
	s.aa_value.name = "-aa_value";
}

function check_form_aavalue()
{
	var f = document.getElementById("form_aavalue");
	
	if ((f.value < 1) || (f.value > 100))
	{
		alert(str_err_volume);
		f.select();
		return false;
	}

	return true;
}

