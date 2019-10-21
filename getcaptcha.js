 for (k = 0; k < 50; k++) { 
var urls = ["TAG POS=1 TYPE=DIV ATTR=ID:overlay", "TAG POS=1 TYPE=CANVAS ATTR=ID:slog","TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image", "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink" ];

for (var i in urls) {
  var url = urls[i];
 for (j = 0; j < 50; j++) { 

var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "FRAME F="+j+"" + "\n";
c = c+ ""+urls[i]+"" + "\n";

iimPlay(c)
var error=iimGetErrorText()

if (error == "OK")
{
var F=j
var tag=urls[i]
var type=urls[i].split(" ")[2].split("=")[1]


break ;
}

}

if (error == "OK")
break ;

}













if (error == "OK" && type == "DIV")
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
c = c+ "wait seconds= 1" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE=media.png" + "\n";
c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:overlay CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://www.free-ocr.com/" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:FILE FORM=ID:appform ATTR=ID:fileupfield CONTENT= {{!FOLDER_DATASOURCE}}\\media.png" + "\n";
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
c = c+ "WAIT SECONDS=2" + "\n";
c = c+ "TAG POS=1 TYPE=CANVAS ATTR=ID:slog EXTRACT=TXT  " + "\n";
c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink  EXTRACT=TXT " + "\n";


c = c+ "TAG POS=1 TYPE=DIV ATTR=ID:outr EXTRACT=TXT " + "\n";
iimPlay(c)
vva = iimGetLastExtract(1);
vvb = iimGetLastExtract(2);
vvc = iimGetLastExtract(3);


if ( vva =="" || vvb =="" || vvc ==""  )
{
var b="b"
var c;
c =  'CODE:';
c = c+ "SET apikey 6792ac886a0f3793b6c179441d84043f" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "FRAME F="+F+"" + "\n";
c = c+ "WAIT SECONDS=2" + "\n";
c = c+ "ONDOWNLOAD FOLDER=* FILE="+b+".png" + "\n";
c = c+ "TAG POS=1 TYPE=CANVAS ATTR=ID:slog CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image-captchaShortlink CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";
c = c+ "TAG POS=1 TYPE=IMG ATTR=ID:adcopy-puzzle-image-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT" + "\n";

c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB OPEN" + "\n";
c = c+ "TAB T=2" + "\n";
c = c+ "SET !TIMEOUT 20" + "\n";
c = c+ "URL GOTO=http://api.aioseoservice.com/iMacros.php" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:key CONTENT={{apikey}}" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:fileToUpload CONTENT= {{!FOLDER_DATASOURCE}}\\"+b+".png" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=TYPE:submit" + "\n";
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "SET !TIMEOUT_STEP 10" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT ATTR=NAME:result EXTRACT=TXT" + "\n";
c = c+ "SET b EVAL(\"'{{!EXTRACT}}'.replace(/\\s/g, '');\")" + "\n";  
c = c+ "WAIT SECONDS=0.5" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:link-view ATTR=ID:adcopy_response-captchaShortlink CONTENT={{b}}" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON FORM=ID:link-view ATTR=ID:invisibleCaptchaShortlink" + "\n";

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
iimPlay(c)
var error=iimGetErrorText()
alert (error)
if (error !== "OK") {break ;}





else
 iimPlay("CODE: SET !TIMEOUT 60 \n refresh") 
}



do {
 iimPlay("CODE: SET !ERRORIGNORE YES \n SET !TIMEOUT_STEP 1 \n TAG POS=1 TYPE=A ATTR=TXT:Get<SP>Link EXTRACT=TXT  \n wait seconds=1 \n TAG POS=1 TYPE=A ATTR=TXT:Get<SP>Link "); 
 a = iimGetLastExtract(1) == null ? false : true;
}while(a);
