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
        s.ename.value = "md";
        s.ename.name  = "-ename";
}
