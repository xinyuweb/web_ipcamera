//制式设置
function load_form_vinorm()
{
	var f = document.getElementById("form_vinorm");
        var f1 = document.getElementById("form_vinormd");
	
	if(vinorm == "P")
	{
		f.options[0].selected = true;
                f1.options[0].selected = true;
	}
	else
	{
		f.options[1].selected = true;
                f1.options[1].selected = true;
	}
}

function submit_form_vinorm()
{
	var f = document.getElementById("form_vinorm");
	var s = document.getElementById("form_submit");
		
	switch (f.selectedIndex)
	{
		case 0:
			s.vinorm.value = "P";
			break;
		case 1:
			s.vinorm.value = "N"; 
			break;
		default:
			break;
	}

 	
	s.vinorm.name="-vinorm"; 
}
function load_form_profile()
{
	var f = document.getElementById("form_profile");
	
	if(profile == 0)
	{
		f.options[0].selected = true;
	}
	else
	{
		f.options[1].selected = true;
	}
}

function submit_form_profile()
{
	var f = document.getElementById("form_profile");
	var s = document.getElementById("form_submit");
		
        s.profile.value = f.selectedIndex;
	s.profile.name="-profile"; 
}

//第一码流分辨率设置
function load_form_size1()
{
	var f = document.getElementById("form_size1f");
       var e = document.getElementById("form_size1e");
      var d = document.getElementById("form_size1d");
	
       if (height_1 == 720)
       {
	      f.options[0].selected = true;
              e.options[0].selected = true;
	}	
       else if(height_1 == 352)
	{
		f.options[1].selected = true;
              e.options[1].selected = true;
	}
       else if(height_1 == 960)
	{
		f.options[2].selected = true;
	}
        else if(height_1 == 480)
	{
		f.options[3].selected = true;
	}
        else if(width_1 == 704)
	{
		d.options[0].selected = true;
	}
         else if(width_1 == 352)
	{
		d.options[1].selected = true;
	}			

}

//第二码流分辨率设置
function load_form_size2()
{
	var f = document.getElementById("form_size2v");
	var c = document.getElementById("form_size2q");
        var d = document.getElementById("form_size2d");

	if (width_2 == 640)
	{
		f.options[0].selected = true;
		c.options[0].selected = true;
                d.options[0].selected = true;
	}
	else
	{
		f.options[1].selected = true;
		c.options[1].selected = true;
                d.options[0].selected = true;
	}
}

//第三码流分辨率设置
function load_form_size3()
{
	var f = document.getElementById("form_size3v");
	var c = document.getElementById("form_size3q");
        var d = document.getElementById("form_size3d");
	if (width_3 == 320)
	{

		f.options[0].selected = true;
		c.options[0].selected = true;
                d.options[0].selected = true;
	}
	else
	{

		f.options[1].selected = true;
		c.options[1].selected = true;
                d.options[0].selected = true;
	}
	
}
//提交主次码流分辨率设置
function submit_form_videomode()
{
	var f = document.getElementById("form_size1f");
        var e = document.getElementById("form_size1e");
        var a = document.getElementById("form_size1d");
	var c = document.getElementById("form_size2q");
        var d = document.getElementById("form_size2v");

        
	var s = document.getElementById("form_submit");
	
	var j=f.selectedIndex;
        var n=e.selectedIndex;
        var b=a.selectedIndex;
	var k=c.selectedIndex;
        var l=d.selectedIndex;
	var mm = 0;
 if((j==0)||(j==1))
{
  if((j==0)&&(k==0)){mm = 31;}
  if((j==0)&&(k==1)){mm = 32;}
  if((j==1)&&(k==0)){mm = 33;}	 		
  if((j==1)&&(k==1)){mm = 34;}
}
else
{
 if((j==2)&&(l==0)){mm = 51;}
  if((j==2)&&(l==1)){mm = 52;}
  if((j==3)&&(l==0)){mm = 53;}
  if((j==3)&&(l==1)){mm = 54;}
}
  if((n==0)&&(k==0)){nn = 31;}
  if((n==0)&&(k==1)){nn = 32;}
  if((n==1)&&(k==0)){nn = 33;}	 		
  if((n==1)&&(k==1)){nn = 34;}

  if(b==0){oo = 17;}
  if(b==1){oo = 20;}

var strmode=model.charAt(5);
if(strmode=="f") 
{
	s.videomode.value = mm;
}
else if(strmode=="k") 
{
	s.videomode.value = oo;
}
else{
        s.videomode.value = nn;
}

	s.videomode.name  = "-videomode";
}

//第一码流码率
function load_form_bps1()
{
	var f = document.getElementById("form_bps1");
        var s = document.getElementById("form_bps1d");
	
	f.value = bps_1;
        s.value = bps_1;
}

function submit_form_bps1()
{
	var m = document.getElementById("form_bps1");
        var n = document.getElementById("form_bps1d");
	var s = document.getElementById("form_submit");
   var strmode=model.charAt(5);
    if(strmode=="k")
	{s.bps1.value = n.value;}
	else
	{s.bps1.value = m.value;}
	s.bps1.name  = "-bps";
}

//第二码流码率
function load_form_bps2()
{
	var f = document.getElementById("form_bps2");
	var s = document.getElementById("form_bps2d");
	
	f.value = bps_2;
        s.value = bps_2;
}

function submit_form_bps2()
{
	var m = document.getElementById("form_bps2");
        var n = document.getElementById("form_bps2d");
	var s = document.getElementById("form_submit");
var strmode=model.charAt(5);
        if(strmode=="k")
	{s.bps2.value = n.value;}
	else
	{s.bps2.value = m.value;}
	s.bps2.name  = "-bps";
}


//第三码流码率
function load_form_bps3()
{
	var f = document.getElementById("form_bps3");
	var s = document.getElementById("form_bps3d");
	
	f.value = bps_3;
        s.value = bps_3;
}

function submit_form_bps3()
{
	var m = document.getElementById("form_bps3");
        var n = document.getElementById("form_bps3d");
	var s = document.getElementById("form_submit");
var strmode=model.charAt(5);
        if(strmode=="k")
	{s.bps3.value = n.value;}
	else
	{s.bps3.value = m.value;}
	s.bps3.name  = "-bps";
}

//第一码流帧率
function load_form_fps1()
{
	var f = document.getElementById("form_fps1");
	
	f.options[fps_1-1].selected = true;
}

//第二码流帧率
function load_form_fps2()
{
	var f = document.getElementById("form_fps2");
	
	f.options[fps_2-1].selected = true;
}

//第三码流帧率
function load_form_fps3()
{
	var f = document.getElementById("form_fps3");
	
	f.options[fps_3-1].selected = true;
}



function submit_form_fps1()
{
	var f = document.getElementById("form_fps1");
	var s = document.getElementById("form_submit");
	
	s.fps1.value = f.selectedIndex + 1;
	s.fps1.name  = "-fps";
}

function submit_form_fps2()
{
	var f = document.getElementById("form_fps2");
	var s = document.getElementById("form_submit");
	
	s.fps2.value = f.selectedIndex + 1;
	s.fps2.name  = "-fps";
}

function submit_form_fps3()
{
	var f = document.getElementById("form_fps3");
	var s = document.getElementById("form_submit");
	
	s.fps3.value = f.selectedIndex + 1;
	s.fps3.name  = "-fps";
}

function change_form_fps1()
{
	var f1 = document.getElementById("form_fps1");
	var f2 = document.getElementById("form_gop1");
	
	f2.value = f1.value * 2;
}

function change_form_fps2()
{
	var f1 = document.getElementById("form_fps2");
	var f2 = document.getElementById("form_gop2");

	f2.value = f1.value * 2;
}
function change_form_fps3()
{
	var f1 = document.getElementById("form_fps3");
	var f2 = document.getElementById("form_gop3");

	f2.value = f1.value * 2;
}

// 检测帧率与制式是否冲突
function check_form_fps1()
{
	var f1 = document.getElementById("form_fps1");
	var f2 = document.getElementById("form_vinorm");

	if ((f2.selectedIndex == 0) && (f1.value > 25))
	{
		alert(str_alert941);
		f1.focus();
		return false;
	}

	return true;

}

function check_form_fps2()
{
	var f1 = document.getElementById("form_fps2");
	var f2 = document.getElementById("form_vinorm");

	if ((f2.selectedIndex == 0) && (f1.value > 25))
	{
		alert(str_alert941);
		f1.focus();
		return false;
	}

	return true;
}

function check_form_fps3()
{
	var f1 = document.getElementById("form_fps3");
	var f2 = document.getElementById("form_vinorm");

	if ((f2.selectedIndex == 0) && (f1.value > 25))
	{
		alert(str_alert941);
		f1.focus();
		return false;
	}

	return true;
}

//主次码流主帧间隔
function load_form_gop1()
{
	var f = document.getElementById("form_gop1");
	
	f.value = gop_1;
}

function load_form_gop2()
{
	var f = document.getElementById("form_gop2");
	
	f.value = gop_2;
}
function load_form_gop3()
{
	var f = document.getElementById("form_gop3");
	
	f.value = gop_3;
}

function submit_form_gop1()
{
	var f = document.getElementById("form_gop1");
	var s = document.getElementById("form_submit");

	s.gop1.value = f.value;
	s.gop1.name  = "-gop";
}

function submit_form_gop2()
{
	var f = document.getElementById("form_gop2");
	var s = document.getElementById("form_submit");

	s.gop2.value = f.value;
	s.gop2.name  = "-gop";
}
function submit_form_gop3()
{
	var f = document.getElementById("form_gop3");
	var s = document.getElementById("form_submit");

	s.gop3.value = f.value;
	s.gop3.name  = "-gop";
}
//码率范围检测
function check_form_bps1()
{
	var m = document.getElementById("form_bps1");
    var n = document.getElementById("form_bps1d");
	var strmode=model.charAt(5);
       if(strmode=="k")
	{
		if ((n.value<32) || (n.value > 2048))
	  {
		alert(str_alert962);
		n.select();
		return false;
	  }
	}
	else
	{	
        if ((m.value<32) || (m.value > 6144))
	{
		alert(str_alert963);
		m.select();
		return false;
	}
	}

	return true;

}

function check_form_bps2()
{
	var m = document.getElementById("form_bps2");
    var n = document.getElementById("form_bps2d");
var strmode=model.charAt(5);
      if(strmode=="k")
	{
	  if ((n.value<32) || (n.value > 512))
	  {
		alert(str_alert964);
		n.select();
		return false;
	  }
	}
	else
	{	
        if ((m.value<32) || (m.value > 6144))
	{
		alert(str_alert963);
		m.select();
		return false;
	}
	}

	return true;
}

function check_form_bps3()
{
	var m = document.getElementById("form_bps3");
    var n = document.getElementById("form_bps3d");
var strmode=model.charAt(5);
       if(strmode=="k")
	{
		if ((n.value<32) || (n.value > 256))
	{
		alert(str_alert965);
		n.select();
		return false;
	}
	}
	else
	{	
        if ((m.value<32) || (m.value > 6144))
	{
		alert(str_alert963);
		m.select();
		return false;
	}
	}

	return true;
}

// 主帧间隔范围检测
function check_form_gop1()
{
	var f = document.getElementById("form_gop1");
	
	if ((f.value < 2) || (f.value > 150))
	{
		alert(str_alert95);
		f.select();
		return false;
	}

	return true;
}

function check_form_gop2()
{
	var f = document.getElementById("form_gop2");
	
	if ((f.value < 2) || (f.value > 150))
	{
		alert(str_alert95);
		f.select();
		return false;
	}  

	return true;
}
function check_form_gop3()
{
	var f = document.getElementById("form_gop3");
	
	if ((f.value < 2) || (f.value > 150))
	{
		alert(str_alert95);
		f.select();
		return false;
	}  

	return true;
}



//视频编码控制 0 固定编码，可变编码
function load_form_brmode1()
{
	var f0 = document.getElementById("form_brmode1_0");
	var f1 = document.getElementById("form_brmode1_1");
	
	if(brmode_1 == 1)
	{
		f1.checked = true;
	}
	else
	{
		f0.checked = true;
	}
}

function load_form_brmode2()
{
	var f0 = document.getElementById("form_brmode2_0");
	var f1 = document.getElementById("form_brmode2_1");
	
	if(brmode_2 == 1)
	{
		f1.checked = true;
	}
	else
	{
		f0.checked = true;
	}	
}

function load_form_brmode3()
{
	var f0 = document.getElementById("form_brmode3_0");
	var f1 = document.getElementById("form_brmode3_1");
	
	if(brmode_3 == 1)
	{
		f1.checked = true;
	}
	else
	{
		f0.checked = true;
	}	
}

function submit_form_brmode1()
{
	var f = document.getElementById("form_brmode1_0");
	var s = document.getElementById("form_submit");
	
	if(f.checked == true)
	{
		s.brmode1.value = "0";
	}
	else
	{
		s.brmode1.value = "1";
	}

	s.brmode1.name = "-brmode";
}

function submit_form_brmode2()
{
	var f = document.getElementById("form_brmode2_0");
	var s = document.getElementById("form_submit");
	
	if(f.checked == true)
	{
		s.brmode2.value = "0";
	}
	else
	{
		s.brmode2.value = "1";
	}
	
	s.brmode2.name = "-brmode";	
}

function submit_form_brmode3()
{
	var f = document.getElementById("form_brmode3_0");
	var s = document.getElementById("form_submit");
	
	if(f.checked == true)
	{
		s.brmode3.value = "0";
	}
	else
	{
		s.brmode3.value = "1";
	}
	
	s.brmode3.name = "-brmode";	
}

//主次码流视频编码质量
function load_form_imagegrade1()
{
	var f = document.getElementById("form_imagegrade1");
	
	f.options[imagegrade_1 - 1].selected=true;
}

function load_form_imagegrade2()
{
	var f = document.getElementById("form_imagegrade2");

	f.options[imagegrade_2 - 1].selected=true;	
}

function load_form_imagegrade3()
{
	var f = document.getElementById("form_imagegrade3");

	f.options[imagegrade_3 - 1].selected=true;	
}


function submit_form_imagegrade1()
{
	var f = document.getElementById("form_imagegrade1");
	var s = document.getElementById("form_submit");
	
	s.imagegrade1.value = f.selectedIndex + 1;
	s.imagegrade1.name  = "-imagegrade";
}

function submit_form_imagegrade2()
{
	var f = document.getElementById("form_imagegrade2");
	var s = document.getElementById("form_submit");
	
	s.imagegrade2.value = f.selectedIndex + 1;
	s.imagegrade2.name  = "-imagegrade";
}

function submit_form_imagegrade3()
{
	var f = document.getElementById("form_imagegrade3");
	var s = document.getElementById("form_submit");
	
	s.imagegrade3.value = f.selectedIndex + 1;
	s.imagegrade3.name  = "-imagegrade";
}

function load_form_region0()
{
	var f1 = document.getElementById("form_region0_on");
	var f0 = document.getElementById("form_region0_off");
	
	if(width_1 >= 320)
	{	
		if(show_0 == 1)
		{
			f1.checked=true;
		}
		else
		{
			f0.checked=true;
		}
	}
}

function submit_form_region0()
{
	var f = document.getElementById("form_region0_on");
	var s = document.getElementById("form_submit");

	if(f.checked == true)
	{
		s.show0.value=1;
	}
	else
	{
		s.show0.value=0;
	}

	s.region0.value = 0;
	
	s.region0.name  = "-region";
	s.show0.name    = "-show";
}

function load_form_region1()
{
	var f1 = document.getElementById("form_region1_on");
	var f0 = document.getElementById("form_region1_off");
	var fn = document.getElementById("form_region1_name");
	
	if(width_1 >= 320)
	{			
		if(show_1==1)
		{
			f1.checked=true;
		}
		else
		{
			f0.checked=true;
		}
	}
	
	fn.value = name_1;
}

function check_form_region1()
{
	var f = document.getElementById("form_region1_name");

	if (f.value == "")
	{
		alert(str_alert93);
		f.select();
		return false;
	}

    
     if (checkProhibitedCharacter3(f,f.value) == false)
	{
		f.select();
		return false;
	}       

	var clen = checkLen(f.value);
	if (clen > 18)
	{
		alert(str_alert94);
		f.select();
		return false;
	}

	return true;
}

function submit_form_region1()
{
	var f = document.getElementById("form_region1_on");
	var n = document.getElementById("form_region1_name");
	var s = document.getElementById("form_submit");
		
	if(f.checked == true)
	{
		s.show1.value = 1;
	}
	else
	{
		s.show1.value = 0;
	}
	
	s.name1.value = n.value;
	s.region1.value = 1;
	
	s.region1.name="-region";
	s.show1.name="-show";
	s.name1.name = "-name";
}
function load_form_msize()
{
        var f1 = document.getElementById("form_msize1");
	var f2 = document.getElementById("form_msize2");
        var f3 = document.getElementById("form_msize3");

    if (msize == "1")
	{
		f1.options[0].selected = true;
		f2.options[0].selected = true;
                f3.options[0].selected = true;
		
	}
     else
        {
		f1.options[1].selected = true;
		f2.options[1].selected = true;
                f3.options[1].selected = true;
		
}
}

function submit_form_msize()
{
         var f = document.getElementById("form_size1f");
         var e = document.getElementById("form_size1e");
         var d = document.getElementById("form_size1d");
         var e = document.getElementById("form_size1e");
         var f1 = document.getElementById("form_msize1");
	 var f2 = document.getElementById("form_msize2");
         var f3 = document.getElementById("form_msize3");
         var s = document.getElementById("form_submit");
		 
var strmode=model.charAt(5);
if(strmode=="f") 
{
         if((f.selectedIndex==0)||(f.selectedIndex==1))
	  {s.msize.value = f2.selectedIndex+1;
	  }
	  else
	  {s.msize.value = f1.selectedIndex+1;
	  }
}
else if(strmode=="k") 
{
s.msize.value = f3.selectedIndex+1;
}
else
{
s.msize.value = f2.selectedIndex+1;
}

     s.msize.name  = "-msize";
 }
