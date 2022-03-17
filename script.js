function skrivanje(){
document.getElementById('formular').style.visibility = "hidden";
document.getElementById('pass').style.visibility = "hidden";



}
function dodavanje(){

var usern = document.formular.username.value;
var passn = document.formular.password.value;
document.getElementById('ucitavanje1').innerHTML= usern+"&nbsp;&nbsp;<input type= 'button' value='izloguj se'>";



}
function provera_user()
{
var username=document.formular.username.value.length;
if (username < 5)
	{
		document.getElementById('user').innerHTML = "*&nbsp;&nbsp;";
		
		
		document.getElementById('username').select();
	}
	else
	{
			document.getElementById('user').innerHTML = "OK";
			
			
	}

}
function provera_pass()
{
if (document.formular.password.value.length < 5)
	{
		document.getElementById('pass').innerHTML = "&nbsp;*&nbsp;";
		
		document.getElementById('password').select();
	}
	else
	{
		document.getElementById('pass').innerHTML = "OK";
			
	}

}
function provera(){
if ( (document.getElementById('user').innerHTML == "OK") && (document.getElementById('pass').innerHTML == "OK")){
skrivanje();
dodavanje();

}
}