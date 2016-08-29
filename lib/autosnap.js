// JavaScript Document
function load_form_asinterval()
{
	var f1 = document.getElementById("form_asinterval1");
       
        var f3 = document.getElementById("form_asinterval3");

	f1.value = as_snap_interval;
       
        f3.value = as_ftp_interval;
}

function check_form_asinterval1()
{
	var f = document.getElementById("form_asinterval1");

	var j = 0;
	var intervalvalue = f.value;
	
	for (j = 0; j < (intervalvalue.length); j++)
	{
		var ch = intervalvalue.substring(j,j+1);
		
		if ("0" > ch || ch > "9") 
		{
			alert(str_alert4);
			f.select();
			return false;
		}
	}
	
	if ((f.value < 5) || (f.value >86400))
	{
		alert(str_alert3);
		f.select();
		return false;
	}
	
	return true;
}



function check_form_asinterval3()
{
	var f = document.getElementById("form_asinterval3");

	var j = 0;
	var intervalvalue = f.value;
	
	for (j = 0; j < (intervalvalue.length); j++)
	{
		var ch = intervalvalue.substring(j,j+1);
		
		if ("0" > ch || ch > "9") 
		{
			alert(str_alert4);
			f.select();
			return false;
		}
	}
	
	if ((f.value < 5) || (f.value >86400))
	{
		alert(str_alert3);
		f.select();
		return false;
	}
	
	return true;
}

function submit_form_asinterval()
{
	var f1 = document.getElementById("form_asinterval1");
	
	var f3 = document.getElementById("form_asinterval3");
	var s = document.getElementById("form_submit");

	s.as_snap_interval.value = f1.value;
       
        s.as_ftp_interval.value = f3.value;

	s.as_snap_interval.name  = "-as_interval";
	
	s.as_ftp_interval.name  = "-as_interval";
}

function load_form_astype()
{
	var f1 = document.getElementById("form_astype1");
	
        var f3 = document.getElementById("form_astype3");

	f1.checked = false;
	
        f3.checked = false;

	if (as_snap_enable == 1)
	{
			f1.checked = true;
	}
        
	if (as_ftp_enable == 1)
	{
			f3.checked = true;
	}
        
	
}

function submit_form_astype()
{
	var f1 = document.getElementById("form_astype1");
	
        var f3 = document.getElementById("form_astype3");
	var s  = document.getElementById("form_submit");

	s.as_snap.value  = "snap";
       
        s.as_ftp.value  = "ftp";
	
	if (f1.checked == true)
	{
	s.as_snap_enable.value = 1;
	}
       else
       {
        s.as_snap_enable.value = 0;
       }

	

      if (f3.checked == true)
	{
	s.as_ftp_enable.value = 1;	
	}
       else
      {
      s.as_ftp_enable.value = 0;
      }




        s.as_snap.name  = "-as_type";
   
        s.as_ftp.name  = "-as_type";

	s.as_snap_enable.name  = "-as_enable";
	
	s.as_ftp_enable.name   = "-as_enable";
}


function load_form_timearea()
{
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
        s.week0.name = "-week0";
        s.week1.name = "-week1";
        s.week2.name = "-week2";
        s.week3.name = "-week3";
        s.week4.name = "-week4";
        s.week5.name = "-week5";
        s.week6.name = "-week6";
        s.ename.value = "snap";
        s.ename.name  = "-ename";
}

