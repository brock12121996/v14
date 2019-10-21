for (z = 0; z < 100000000000000000; z++) { 
iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:profiles  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")





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








// do something here

  
  // claim doge and ETH
  
var hola = ['http://dogecoin.expressfaucet.com/', 'http://ethereum.expressfaucet.com/'];

for (var v in hola) {
  var link = hola[v];

window.location.href= "about:config"
iimPlay('Code: wait seconds=0.2')
window.location.href= link
do {
iimPlay("CODE:  wait seconds=2 ");
a = window.document.getElementById('shorthid') !== null ? false : true ;
}while(a);

if (window.document.getElementById('timer_load')==null) {
if(window.document.getElementsByClassName('coinhive-captcha')[0] == undefined) {
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "TAG POS=1 TYPE=B ATTR=TXT:Verify<SP>you<SP>are<SP>human" + "\n";
c = c+ "wait seconds=1" + "\n";
iimPlay(c)

if (window.location.href.indexOf ('expressfaucet')== -1)
{
// captcha here
if ( window.document.getElementById('captcha_1') == null )
{
do {

iimPlay("CODE:  wait seconds=1 ");
a = window.document.getElementById('captchaShortlink') == null ? true : false;

  
}while(a);
}
  for (o = 0; o < 50; o++) { 
  for (k = 0; k < 50; k++) { 
var urls = ["TAG POS=1 TYPE=DIV ATTR=ID:overlay", "TAG POS=1 TYPE=CANVAS ATTR=ID:slog","TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image", "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink","TAG POS=1 TYPE=DIV ATTR=ID:outr" ];
iimPlay('Code: SET !ERRORIGNORE yes \n SET !TIMEOUT 1 \n SET !TIMEOUT_STEP 0 \n TAG POS=1 TYPE=DIV ATTR=PNDRCLCL:1&&TXT: \n TAG POS=4 TYPE=DIV ATTR=TXT:(adsbygoogle<SP>=<SP>window.adsbygoogle<SP>||<SP>[]).push({}* \n TAG POS=1 TYPE=A ATTR=PNDRCLCL:1&&CLASS:v_closeBtn&&TXT:\n   tab t=1 \n wait seconds =1 \n TAB CLOSEALLOTHERS') 
for (var i in urls) {
  var url = urls[i];
 for (j = 0; j < 50; j++) { 

var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "FRAME F="+j+"" + "\n";
c = c+ ""+urls[i]+"" + "\n";
c = c+ "TAB T=1" + "\n";
iimPlay(c)
var error=iimGetErrorText()

if (error == "OK")
{
var F=j
var tag=urls[i]
var type=urls[i].split(" ")[2].split("=")[1]
var id=  urls[i].split(" ")[3].split("=")[1].split(":")[1]

break ;
}

}

if (error == "OK")
break ;

}

if (error == "OK")
break ;

else {

iimPlay("Code: SET !ERRORIGNORE yes \n SET !TIMEOUT 60 \n url goto=about:blank \n url goto="+window.location.href+" \n wait seconds= 0.2 ")

}
}









if (error == "OK" && type == "DIV" && id !== "outr" )
{

var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "TAG POS=1 TYPE=P ATTR=TXT:PLAY" + "\n";
iimPlay(c)




var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:loading" + "\n";
iimPlay(c)
do {

iimPlay("CODE:  FRAME F= "+F+" \n TAG POS=1 TYPE=DIV ATTR=ID:loading EXTRACT=HTM");
a = iimGetLastExtract(1).indexOf("display") == -1 ? true : false;

  
}while(a);




iimPlay('Code: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n wait seconds= 1 \n TAG POS=1 TYPE=A ATTR=ID:adcopy-page-return-captchaShortlink')

var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "FILEDELETE NAME={{!FOLDER_DATASOURCE}}\\"+number+".png" + "\n";
c = c+ "wait seconds= 1" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE="+number+".png" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:overlay CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://www.free-ocr.com/" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:FILE FORM=ID:appform ATTR=ID:fileupfield CONTENT= {{!FOLDER_DATASOURCE}}\\"+number+".png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:appform ATTR=ID:fbut" + "\n";
c = c+ "wait seconds=1" + "\n";
iimPlay(c)






do {

iimPlay("CODE:  wait seconds=1");
a = window.document.getElementById('resultarea')== null ? true : false;

  
}while(a);
var b =  window.document.getElementById('resultarea').textContent.substring(14).replace(/\s/g, '<SP>');

var c;
c =  "CODE:";  
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "TAB T=0" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "EVENTS TYPE=KEYPRESS SELECTOR=\"#adcopy_response-captchaShortlink\" CHARS="+b+"" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#invisibleCaptchaShortlink\" BUTTON=0" + "\n";
iimPlay(c)


//document.getElementById('resultarea').textContent.replace(/\s/g, '<SP>'); http://www.free-ocr.com/


}


else 
{

var c;
c =  'CODE:';
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "WAIT SECONDS=0.1" + "\n";
c = c+ "TAG POS=1 TYPE=CANVAS ATTR=ID:slog EXTRACT=TXT  " + "\n";

c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink  EXTRACT=TXT " + "\n";

c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image  EXTRACT=TXT " + "\n";

c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:outr EXTRACT=TXT " + "\n";
c = c+ "TAB T=1" + "\n";
iimPlay(c)

vva = iimGetLastExtract(1);
vvb = iimGetLastExtract(2);
vvc = iimGetLastExtract(3);
vvd = iimGetLastExtract(4);


if ( vva !=="#EANF#" || vvb !=="#EANF#" || vvc !=="#EANF#" || vvd !=="#EANF#" )
{
var c;
c =  'CODE:';
c = c+ "SET apikey 6792ac886a0f3793b6c179441d84043f" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "FILEDELETE NAME={{!FOLDER_DATASOURCE}}\\"+number+".png" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE="+number+".png" + "\n";
c = c+ "TAG POS=1 TYPE=CANVAS ATTR=ID:slog CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:outr CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\"+number+".png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "SET b EVAL(\"'{{!EXTRACT}}'.replace(/\\s/g, '');\")" + "\n";  
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";

c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:adcopy_response CONTENT={{b}}" + "\n";

c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:link-view ATTR=ID:adcopy_response-captchaShortlink CONTENT={{b}}" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON FORM=ID:link-view ATTR=ID:invisibleCaptchaShortlink" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Login" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "wait seconds=0.1" + "\n";
iimPlay(c)
}
}

var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=TXT:The<SP>CAPTCHA<SP>was<SP>incorrect.<SP>Try<SP>again" + "\n";
c = c+ "TAB T=1" + "\n";
iimPlay(c)
var error=iimGetErrorText()

if (error !== "OK") {break ;}





else
 iimPlay("CODE: SET !TIMEOUT 60 \n refresh") 
}
do {
 iimPlay("CODE:  wait seconds=1   "); 
 a = window.document.getElementsByClassName('btn btn-success btn-lg get-link')[0] !==  undefined ? false : true;
}while(a);

do {
 iimPlay("CODE:  wait seconds=1   "); 
 a = window.document.getElementsByClassName('btn btn-success btn-lg get-link')[0].innerText == "Get Link" ? false : true;
}while(a);
 



 for (h = 0; h < 1; h++) { 
 iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT 60 \n SET !TIMEOUT_STEP 1 \n EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV:nth-of-type(3)>A\" BUTTON=0 MODIFIERS=\"ctrl\" \n  SET !TIMEOUT 60 \n  wait seconds=0.2    ") 
 
}
}
// other order after captcha
//
window.onload = function () { 
if(window.location.href.indexOf(""+link+"index.php")==0 && window.location.href.indexOf("=") ==-1 )
iimPlay("CODE: TAB CLOSEALLOTHERS")
else if(window.location.href.indexOf(""+link+"index.php")!==0 && window.location.href.indexOf("=") ==-1 )
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT 45 \n  url goto= about:config \n wait seconds= 1 \n url goto= "+link+"index.php \n wait seconds= 0.2 \n TAB CLOSEALLOTHERS ")

else
{
iimPlay("CODE: url goto= about:config \n wait seconds= 1 \n url goto= "+link+"index.php \n wait seconds= 0.2 \n TAB CLOSEALLOTHERS ")
}

}

}


iimPlay ("Code: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n wait seconds=3 \n TAG POS=1 TYPE=EM ATTR=TXT:Loading<SP>Captcha...<SP>If<SP>it<SP>doesn't<SP>load,<SP>ple*")
var error=iimGetErrorText()
if (error == "ok")
iimPlay ("Code: refresh")


for (y = 0; y < 50; y++) { 
var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "tab t=1" + "\n";
c = c+ "FRAME F="+y+"" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:verify-me" + "\n";
c = c+ "wait seconds= 1" + "\n";
iimPlay(c)
var error=iimGetErrorText()
if (error == "OK") // ko lỗi
{
var F=y
break ;
}
}
if (error !== "OK") break ;
for (u = 0; u < 50; u++) { 
if (error !== "OK"){

iimPlay("Code: SET !ERRORIGNORE yes \n SET !TIMEOUT 60 \n url goto=about:blank \n url goto="+window.location.href+" \n wait seconds= 0.2 ")

for (y = 0; y < 50; y++) { 
{
var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "tab t=1" + "\n";
c = c+ "FRAME F="+y+"" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:verify-me" + "\n";
c = c+ "wait seconds= 1" + "\n";
iimPlay(c)
var error=iimGetErrorText()

if (error == "OK")
{
var F=y
break ;
}
}
}
}
else if (error == "OK")break ;
else break ;
}

do {

iimPlay("CODE:  SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n  FRAME F= 5  \n TAG POS=1 TYPE=DIV ATTR=ID:verify-me  \n   TAG POS=1 TYPE=DIV ATTR=ID:verify-me-progress EXTRACT=HTM \n wait seconds=1 ");

a = iimGetLastExtract(1).split('width')[1] != undefined

}while(!a)



do {

iimPlay("CODE:  SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n  FRAME F= "+F+"   \n  TAG POS=1 TYPE=DIV ATTR=ID:verify-me-progress EXTRACT=HTM \n wait seconds=1 ");
a = iimGetLastExtract(1).split('width')[1]
b = iimGetLastExtract(1).split('width')[1].split(":")[1].split(';')[0].replace(/\s/g, '')
if (a == "undefined")

{ iimPlay("Code:  SET !ERRORIGNORE YES \n url goto= "+window.location.href+" \n SET TIMEOUT 45 \n wait seconds=1") }
a = iimGetLastExtract(1).split('width')[1] != undefined ? false : true;
b = iimGetLastExtract(1).split('width')[1].split(":")[1].split(';')[0].replace(/\s/g, '') == "100%" ? false : true;

  
}while(a || b)

if (window.location.href.lastIndexOf('doge')>0)
var wallet= "doge"
else if (window.location.href.lastIndexOf('eth')>0)
var wallet= "eth" ;

var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT 60" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !DATASOURCE "+wallet+".csv" + "\n";
c = c+ "SET !DATASOURCE_LINE "+number+"" + "\n";
c = c+ "SET !DATASOURCE_COLUMNS 1 " + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:? ATTR=NAME:dogeaddress CONTENT= {{!COL1}} " + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:? ATTR=NAME:test" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
iimPlay(c)

}
}



// check time lớn hon 1





   





// end something here

}











