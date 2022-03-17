function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
console.log(document.cookie);
}

function getCookie(c_name){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1){	
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1){
		c_value = null;
	}
	else{
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1){
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

function anketa(){

	if(document.getElementById("pitanje1").checked){
		var broj=getCookie("pitanje1");

		broj++;
		setCookie("pitanje1",broj,40);
		document.getElementById("p1").innerHTML=getCookie("pitanje1");
	}
	if(document.getElementById("pitanje2").checked){
		var broj=getCookie("pitanje2");
		broj++;
		setCookie("pitanje2",broj,40);
		document.getElementById("p2").innerHTML=getCookie("pitanje2");
	}

	function postaviankete(){
	document.getElementById("p1").innerHTML=getCookie("pitanje1");
	document.getElementById("p2").innerHTML=getCookie("pitanje2");

	}
	}