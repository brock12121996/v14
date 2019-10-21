var c;
c =  'CODE:';
c = c+ 'url goto= about:profiles' + '\n';
c = c+ 'wait seconds=1' + '\n';

iimPlay(c)

function getDefault() {
var ret;
var getAll  = window.document.querySelectorAll('#profiles > div');
for (var i=0;i<getAll.length;i++)
{
var profile = getAll[i];
var profileName = profile.getElementsByTagName('h2')[0];
if (profile.querySelector('table > tbody > tr > td').innerText.indexOf('yes') > -1) {
  ret =  profileName.innerText.split(':')[1].substr(1);
  break;
}
}
return ret;
}


var last1=getDefault()
iimPlayCode(" wait seconds=1")
var number=parseInt(last1)
if (number<10)
{
var first='108'
var last=String(number)
var no = parseInt(first+last)
}
else if (20>number)
{
var first='109'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (30>number)
{
var first='110'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (40>number)
{
var first='111'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (50>number)
{
var first='112'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}
else if (60>number)
{
var first='113'
var last=String(number.toString().split('').pop())
var no = parseInt(first+last)
}




for (i = 0; i < 1000000; i++) { 
iimPlayCode("SET !ERRORIGNORE YES \n SET !TIMEOUT 15  \n TAB CLOSEALLOTHERS \n  url goto = http://freebitcoin.win/login \n wait seconds=1.5 ");

if ( window.location.href.indexOf('login') > 0 )
{

var c;
c =  'CODE:';
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !DATASOURCE nick.csv " + "\n"
c = c+ "set !loop "+last1+"" + "\n";
c = c+ "SET !DATASOURCE_LINE {{!loop}} " + "\n"
c = c+ "SET !DATASOURCE_COLUMNS 1" + "\n";
c = c+ "SET !EXTRACT {{!COL1}}" + "\n";


iimPlay(c)

   var nick = iimGetLastExtract(1);
 
  if ( nick !== null ) 
  {
var c;
c =  'CODE:';
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "SET !TIMEOUT_STEP 20" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=NAME:email CONTENT= "+nick+"" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "set !EXTRACT null" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:* ATTR=NAME:pass CONTENT=nam9162174" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "WAIT SECONDS=2" + "\n";
c = c+ "TAG POS=1 TYPE=DIV FORM=ID:link-view ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";

c = c+ "SET apikey 7118d9453c6bfce184ea7b532cc586d3" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";


c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:adcopy_response CONTENT={{!EXTRACT}}" + "\n";
c = c+ "SET !TIMEOUT_STEP 2" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "WAIT SECONDS=0.2" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*" + "\n";
c = c+ "WAIT SECONDS=2" + "\n";
iimPlay(c)
}
}
  


for (i = 0; i < 4; i++) { 



var urls = ['http://freebitcoin.win/faucet/bitcoin', 'http://freebitcoin.win/faucet/ethereum', 'http://freebitcoin.win/faucet/dogecoin' ];

for (var i in urls) {
  var url = urls[i];
  var c;
c =  'CODE:';
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !REPLAYSPEED FAST " + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "url goto = "+url+"" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
iimPlay(c)

if ( window.document.getElementsByClassName('btn btn-block btn-primary')[0].value !== undefined) 
{
var c;
c =  'CODE:';
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !REPLAYSPEED FAST " + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n"
c = c+ "SET apikey 7118d9453c6bfce184ea7b532cc586d3" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";

c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAG POS=1 TYPE=DIV FORM=ID:link-view ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 20" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:adcopy_response CONTENT={{!EXTRACT}}" + "\n";
c = c+ "WAIT SECONDS=0.2" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";
iimPlay(c)

try {
    var a=window.document.getElementsByClassName('alert alert-warning')[0].querySelectorAll('p')[0].innerText
    var b= window.document.getElementsByClassName('btn btn-block btn-primary')[0].value
    if (a == "Captcha wrong" && b !== undefined )
    {
    var c;
c =  'CODE:';    
c = c+ "TAB T=1" + "\n";
c = c+ "EVENT TYPE=KEYPRESS SELECTOR=\"#adcopy_response\" CHAR=\"a\" MODIFIERS=\"ctrl\"" + "\n";
c = c+ "EVENT TYPE=KEYPRESS SELECTOR=\"#adcopy_response\" KEY=8" + "\n";
c = c+ "SET apikey 7118d9453c6bfce184ea7b532cc586d3" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";

c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAG POS=1 TYPE=DIV FORM=ID:link-view ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:adcopy_response CONTENT={{!EXTRACT}}" + "\n";
c = c+ "WAIT SECONDS=0.2" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*" + "\n";
c = c+ "WAIT SECONDS=2" + "\n";
iimPlay(c)
    
    
}
}
catch(err) {
    var a=1
}
}
}

}













var urls = ['http://freebitcoin.win/settings/withdraw/dogecoin', 'http://freebitcoin.win/settings/withdraw/bitcoin', 'http://freebitcoin.win/settings/withdraw/ethereum' ];

for (var i in urls) {
  var url = urls[i];
  var c;
c =  'CODE:';
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !REPLAYSPEED FAST " + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "URL GOTO="+url+"" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";

iimPlay(c)

if( window.document.getElementsByClassName('btn btn-block btn-primary')[0].value !== undefined)
{
var c;
c =  'CODE:';
c = c+ "SET apikey 7118d9453c6bfce184ea7b532cc586d3" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";

c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAG POS=1 TYPE=DIV FORM=ID:link-view ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:adcopy_response CONTENT={{!EXTRACT}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*" + "\n";
iimPlay(c)

try {
    var a=window.document.getElementsByClassName('alert alert-warning')[0].querySelectorAll('p')[0].innerText
    if (a == "Captcha wrong" )
    {
    var c;
c =  'CODE:';    
c = c+ "TAB T=1" + "\n";
c = c+ "EVENT TYPE=KEYPRESS SELECTOR=\"#adcopy_response\" CHAR=\"a\" MODIFIERS=\"ctrl\"" + "\n";
c = c+ "EVENT TYPE=KEYPRESS SELECTOR=\"#adcopy_response\" KEY=8" + "\n";
c = c+ "SET apikey 7118d9453c6bfce184ea7b532cc586d3" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAG POS=1 TYPE=DIV FORM=ID:link-view ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=ID:adcopy_response CONTENT={{!EXTRACT}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*" + "\n";
iimPlay(c)
    }
}
catch(err) {
    var a=1
}

}

}
}
