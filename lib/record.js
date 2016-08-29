function load_form_timerec()
{
       var f = document.getElementById("form_recfile");
	
	f.value = planrec_time;
}

function check_form_timerec()
{
	var f = document.getElementById("form_recfile");

	var j = 0;
	var planrec_time = f.value;
	
	for (j = 0; j < (planrec_time.length); j++)
	{
		var ch = planrec_time.substring(j,j+1);
		
		if ("0" > ch || ch > "9") 
		{
			alert(str_alert4);
			f.select();
			return false;
		}
	}
	
	if ((f.value < 15) || (f.value >900))
	{
		alert(str_err_recfile);
		f.select();
		return false;
	}

	return true;
}

function submit_form_timerec()
{
	var f = document.getElementById("form_recfile");
	var s = document.getElementById("form_submit");
      
	
	s.planrec_time.value = f.value;
	
}


function load_form_timearea()
{
   var f = document.getElementById("form_recplan");
   var i,j,item;
   var week = new Array(); 
   week[0]=week0;
   week[1]=week1;
   week[2]=week2;
   week[3]=week3;
   week[4]=week4;
   week[5]=week5;
   week[6]=week6;         
   for (i = 0; i < 7; i++)
	{
		value = week[i];		
		for (j = 0; j < 48; j++)
		{
			item = value.charAt(j);
			if (item == 'P')
			{
				table1.rows[i+1].cells[j+1].className="newbg";
			}
		}	
	}
}

function load_form_recswitch()
{
        var f0 = document.getElementById("form_recon");
	var f1 = document.getElementById("form_recoff");
	
	if (planrec_enable == "1")
	{
		f0.checked = true;
	}
	else
	{
		f1.checked = true;
	}
}
function submit_form_recswitch()
{
     var f = document.getElementById("form_recon");
	var s = document.getElementById("form_submit");
	
	if (f.checked == true)
	{
		s.recswitch.value = "1";
	}
	else
	{
		s.recswitch.value = "0";
	}

	
}
function load_form_recstream()
{
        var f = document.getElementById("form_recstream");
	
	if (planrec_chn == "11")
	{
		f.options[0].selected = true;
	}
	else if (planrec_chn == "12")
	{
		f.options[1].selected = true;
	}
        else
	{
		f.options[0].selected = true;
	}
}

function submit_form_recstream()
{
    var f = document.getElementById("form_recstream");
	var s = document.getElementById("form_submit");
    s.recstream.value = f.value;
	
}

function submit_form_timearea()
{
      var s = document.getElementById("form_submit");
      var i,j,strtime;
      var week = new Array(); 
      for (i=0;i<7;i++)
	{
		strtime="";
		for (j = 0; j < 48; j++)
		{
			if (table1.rows[i+1].cells[j+1].className == "newbg")
			        strtime = strtime+"P";
			else
				strtime = strtime+"N";
		}
		week[i] = strtime;		
	}
     for (i = 0; i <= 6; i++)
	{  
         s.week0.value=week[0];
         s.week1.value=week[1];
         s.week2.value=week[2];
         s.week3.value=week[3];
         s.week4.value=week[4];
         s.week5.value=week[5];
         s.week6.value=week[6];
        }
        
}
