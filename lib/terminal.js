// JavaScript Document

function load_form_tiltscan()
{
	var f = document.getElementById("form_tiltscan");
	
	f.value = tiltscan;	
}

function check_form_tiltscan()
{
	var f = document.getElementById("form_tiltscan");
	
	if (f.value == "")
	{
		alert(str_tiltno);
		return false;
	}
	
	if ((f.value>50)||(f.value<1))
        {
		alert(tiltmunmax);
		return false;
		
	}	
	
	return true;
}

function submit_form_tiltscan()
{
	var f = document.getElementById("form_tiltscan");
	var s = document.getElementById("form_submit");
   

	s.tiltscan.value = f.value;
        s.panscan.value = f.value;	
	
}

function load_form_tiltspeed()
{
	var f = document.getElementById("form_tiltspeed");
	
	f.options[tiltspeed].selected=true; 	
}

function submit_form_tiltspeed()
{
	var f = document.getElementById("form_tiltspeed");
	var s = document.getElementById("form_submit");
   

	s.tiltspeed.value = f.selectedIndex;
        s.panspeed.value = f.selectedIndex;
	
}

function load_form_movehome()
{
	var f1 = document.getElementById("form_movehome1");
	var f0 = document.getElementById("form_movehome0");
	
	if (movehome == "on")
		f1.checked = true;
	else
		f0.checked = true;
}
function submit_form_movehome()
{
	var f = document.getElementById("form_movehome1");
	var s = document.getElementById("form_submit");
	
	if (f.checked == true)
		s.movehome.value = "on";
	else
		s.movehome.value = "off";
	
}

function load_form_ptzalarmmask()
{
	var f1 = document.getElementById("form_ptzalarmmask1");
	var f0 = document.getElementById("form_ptzalarmmask0");
	
	if (ptzalarmmask == "on")
		f1.checked = true;
	else
		f0.checked = true;
}
function submit_form_ptzalarmmask()
{
	var f = document.getElementById("form_ptzalarmmask1");
	var s = document.getElementById("form_submit");
	
	if (f.checked == true)
		s.ptzalarmmask.value = "on";
	else
		s.ptzalarmmask.value = "off";
	
}
