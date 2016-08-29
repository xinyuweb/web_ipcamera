// JavaScript Document
// 上下翻转
function load_form_flip()
{
	var f = document.getElementById("form_flip");
	
	if (flip == "on")
	{
		f.checked = true;
	}
	else
	{
		f.checked = false;
	}
}

function submit_form_flip()
{
	var f = document.getElementById("form_flip");
	var s = document.getElementById("form_submit");

	if (f.checked == true)
	{
		s.flip.value = "on";
	}
	else
	{
		s.flip.value = "off";
	}	
	
	s.flip.name="-flip";		
}

// 左右翻转
function load_form_mirror()
{
	var f = document.getElementById("form_mirror");
	
	if(mirror == "on")
	{	
		f.checked = true;
	}
	else
	{
		f.checked = false;
	}
}

function submit_form_mirror()
{
	var f = document.getElementById("form_mirror");
	var s = document.getElementById("form_submit");
	
	if(f.checked == true)
	{
		s.mirror.value = "on";
	}
	else
	{
		s.mirror.value = "off";
	}
	
	s.mirror.name = "-mirror";
}