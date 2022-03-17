function Pretraga(){
 var Uneta_rec=document.getElementById("uneto").value.toUpperCase();
 var Odgovor=document.getElementById("odgovor");
 if(Uneta_rec==""){
  Odgovor.innerHTML="Unesite pojam koji želite da nađete";
 }
 else if(Uneta_rec.length<3){
  Odgovor.innerHTML ="Uneta rec mora biti duza od 3 slova";
 }
 else{
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","Pretraga.xml",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  
 var rezultat="";
 var svi = xmlDoc.getElementsByTagName("text");
 for(var i=0;i<svi.length;i++){
 
  var ekipa=xmlDoc.getElementsByTagName("text")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue.toLowerCase();
  
  if(ekipa.toUpperCase().indexOf(Uneta_rec)>=0){
  rezultat+=xmlDoc.getElementsByTagName("text")[i].getElementsByTagName("pasus")[0].childNodes[0].nodeValue;break;
  }
  else{
   rezultat="";
  }
 }
 if(rezultat==""){
  Odgovor.innerHTML="Nema rezultata za unesenu rec";
 }
 else{
  Odgovor.innerHTML=rezultat;
 }
 }
}
