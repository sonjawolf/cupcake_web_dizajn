function provera(){
var ime=document.getElementById('ime').value;
var prezime=document.getElementById('prezime').value;
var email=document.getElementById('email').value;
var mobilni=document.getElementById('mobilni').value;
var povod=document.getElementById('povod').options[document.getElementById('povod').selectedIndex].value;
var text=document.getElementById("text");
var zbir=document.getElementById("zbir");
var regime=/^[\w\s]{5,}$/;
var regprezime=/^[\w\s]{5,}$/;
var regemail=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
var regmobilni=/^06[0123456789]\/[0-9]{6,9}$/;
var regzbir=/^11$/;
var greske=new Array();
if(!regime.test(ime)){
	greske.push("Ime mora sadrzati najmanje 5 karaktera");
	document.getElementById('ime').style.border="1px red solid";
	var greska_ime=document.getElementById('greska_ime');
	var sadrzaj="  Ime mora sadrzati najmanje 5 karaktera";
	greska_ime.innerHTML=sadrzaj;
	document.getElementById('greska_ime').style.visibility="visible";
}
else{
		document.getElementById('ime').style.border="1px gray solid";
		document.getElementById('greska_ime').style.visibility="Hidden";
}
if(!regprezime.test(prezime)){
	greske.push("Prezime mora sadrzati najmanje 5 karaktera");
	document.getElementById('prezime').style.border="1px red solid";
	var greska_prezime=document.getElementById('greska_prezime');
	var sadrzaj="  Prezime mora sadrzati najmanje 5 karaktera";
	greska_prezime.innerHTML=sadrzaj;
	document.getElementById('greska_prezime').style.visibility="visible";
}else
{document.getElementById('prezime').style.border="1px gray solid";
document.getElementById('greska_prezime').style.visibility="Hidden";
}if(!regemail.test(email)){
	greske.push("Niste uneli validan mail");
	document.getElementById('email').style.border="1px red solid";
	var greska_mail=document.getElementById('greska_mail');
	var sadrzaj="  Niste uneli validan mail";
	greska_mail.innerHTML=sadrzaj;
	document.getElementById('greska_mail').style.visibility="visible";
	}else{
	document.getElementById('email').style.border="1px gray solid";document.getElementById('greska_mail').style.visibility="Hidden";
	}if(!regmobilni.test(mobilni)){
	greske.push("Niste uneli validan broj");
	document.getElementById('mobilni').style.border="1px red solid";
	var greska_mobilni=document.getElementById('greska_mobilni');
	var sadrzaj="  Unesite broj u formatu 06*/***";
	greska_mobilni.innerHTML=sadrzaj;
	document.getElementById('greska_mobilni').style.visibility="visible";
	}else{
	document.getElementById('mobilni').style.border="1px gray solid";
	document.getElementById('greska_mobilni').style.visibility="Hidden";
	}if(povod[0]==false){
	greske.push("Niste uneli povod");
	document.getElementById('povod').style.border="1px red solid";
	var greska_povod=document.getElementById('greska_povod');
	var sadrzaj=" Izaberite povod";
	greska_povod.innerHTML=sadrzaj;
	document.getElementById('greska_povod').style.visibility="visible";
	}else{
	document.getElementById('povod').style.border="1px gray solid";
	document.getElementById('greska_povod').style.visibility="Hidden";
	}if(!regzbir.test(zbir)){
	greske.push("Greska");
	document.getElementById('zbir').style.border="1px red solid";
	var greska_zbir=document.getElementById('greska_zbir');
	var sadrzaj=" Niste uneli tacno";
	greska_zbir.innerHTML=sadrzaj;
	document.getElementById('greska_zbir').style.visibility="visible";
	}else{
	document.getElementById('zbir').style.border="1px gray solid";
	document.getElementById('greska_zbir').style.visibility="Hidden";
}
if(greske.length==0)
	{
		  var ispis=document.getElementById('upis');
		  var sadrzaj="Zahvaljujemo se";
		  ispis.innerHTML=sadrzaj;
						 
						}
else
   {
	var ispis=document.getElementById('upis');
	var sadrzaj="Niste dobro uneli podatke";
	ispis.innerHTML=sadrzaj;
}

}