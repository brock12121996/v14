



var c;
c =  'CODE:';
c = c+ 'url goto= about:profiles' + '\n';
c = c+ 'wait seconds=0.2' + '\n';

iimPlay(c)
// window.location.href="about:profiles"
function getDefault() {
var ret;
var getAll  = window.document.querySelectorAll('#profiles > div');
for (var x=0;x<getAll.length;x++)
{
iimPlay('Code: wait seconds=0.2')
var profile = getAll[x];
var profileName = profile.getElementsByTagName('h2')[0];
if (profile.querySelector('table > tbody > tr > td').innerText.indexOf('yes') > -1) {
  ret =  profileName.innerText.split(':')[1].substr(1);
  break;
}
}
return ret;
}
var last1=getDefault()
var number=parseInt(last1)
if (number<10)
{
var first='108'
var last=String(number)
var no = parseInt(first+last)
}
else if (10<=number<20)
{
var first='109'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (20<=number<30)
{
var first='110'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (30<=number<40)
{
var first='111'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (40<=number<50)
{
var first='112'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (50<=number<60)
{
var first='113'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}







for (t = 0; t < 41000; t++) { 
var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var sock = pref.getBranch("network.proxy.");
var sockhost=sock.setCharPref("socks", "127.0.0.1") 
var shockport=sock.setIntPref("socks_port", no )
sock.setIntPref("type", 1);




var e;
e =  "CODE:";
e = e+ "SET !ERRORIGNORE no" + "\n";
e = e+ "SET !TIMEOUT 10" + "\n";
e = e+ "SET !TIMEOUT_STEP 0" + "\n";
e = e+ "URL GOTO=http://127.0.0.1:999/ssh/"+number+"" + "\n"; 
iimPlay(e);

iimPlayCode(" wait seconds=1")

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var sock = pref.getBranch("network.proxy.");
var sockhost=sock.setCharPref("socks", "127.0.0.1") 
var shockport=sock.setIntPref("socks_port", no )
sock.setIntPref("type", 1);

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var http    = pref.getBranch("network.proxy.");
var httphost=http.setCharPref("http", "") 
var httpport=http.setIntPref("http_port", 0) 
http.setIntPref("type", 1);


var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE yes" + "\n";
d = d+ "SET !TIMEOUT 10" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "URL GOTO=http://l2.io/ip" + "\n"; 
iimPlay(d);
if (window.location.href.indexOf("npav-pc")==-1) {
do {
 iimPlay('CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT 10 \n URL GOTO=http://l2.io/ip \n  wait seconds = 1');
 a = window.document.body !=null ? false : true;
}while(a);



if( window.document.body !=null) {

var error=iimGetErrorText()
if (error == "OK")

{
iimPlay('Code:wait seconds=0.2')
var connect=window.document.body.innerText.length
var ip=window.document.body.innerText
 if  ( connect<20 && ip != "Too Many Attempts.")
{
var link="https://iphub.info/api/ip/"

var res = link.concat(ip)


var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE no" + "\n";
d = d+ "SET !TIMEOUT 10" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "url goto=about:blank" + "\n";
d = d+ "tab open" + "\n";
d = d+ "tab t=2" + "\n";
d = d+ "URL GOTO="+res+"" + "\n"; 
iimPlay(d);
iimPlay('Code:wait seconds=0.1')
do {
 iimPlay("CODE: URL GOTO="+res+" \n wait seconds = 1");
 a = window.document.getElementsByClassName('objectBox objectBox-number')[1] != null ? false : true;
}while(a);


var check=parseInt(window.document.getElementsByClassName('objectBox objectBox-number')[1].innerText.replace(/\s/g, ''))

if ( check !== null && check != 1 && check !== undefined )
{
var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE yes" + "\n";
d = d+ "SET !TIMEOUT 8" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "URL GOTO=https://www.google.com" + "\n"; 
d = d+ "TAB CLOSEALLOTHERS" + "\n";
iimPlay(d);
iimPlay('Code:wait seconds=0.3')

var loss=window.document.getElementsByClassName('title-text')[0]

if (window.location.href.indexOf("iphub")!==-1) iimPlay('Code: SET !ERRORIGNORE yes \n SET !TIMEOUT 8 \n URL GOTO=https://www.google.com \n wait seconds=0.5 \n TAB CLOSEALLOTHERS')
// có iphub
if (window.location.href.indexOf("google")!==-1 && loss== undefined)  {break ;} // có google

}

}

 }

}
}
}
if ( loss== undefined) 
// do something here
var sdasdasd=1
