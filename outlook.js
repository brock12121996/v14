for (z = 0; z < 100000000000000000; z++) { 


do{
  
iimPlay('Code: wait seconds=1') 
 a = window.navigator.onLine !==false ? false : true  // !=false --> true, play 1 lan, else false play n l?n
}
while (a)


iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:config  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")




info("C:\\FirefoxPortable_56\\FirefoxPortable_56\\name.txt")
function info(url)
{
    var fileTxt = imns.FIO.openNode(url);
            
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
            res  =  imns.FIO.readTextFile(fileTxt).split("\r\n")
            myArray = res
            firstname = myArray[Math.floor(Math.random() * myArray.length)];
            lastname = myArray[Math.floor(Math.random() * myArray.length)];
          
     
}







var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !TIMEOUT 2" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "TAB T=1" + "\n";

c = c+ "URL GOTO=https://outlook.live.com/mail/inbox" + "\n";
c = c+ "wait seconds=1" + "\n";



iimPlay(c)

do {
iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n TAG POS=2 TYPE=A ATTR=TXT:Create<SP>account  ");
a = iimGetErrorText() =="OK"  ? false : true ;


}while(a);



var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "SET !TIMEOUT 10" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !VAR4 EVAL(\"var min = 30000; var max = 9999999999999; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")" + "\n";
c = c+ "SET !VAR5 EVAL(\"var min = 300000; var max = 99999999999999; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")" + "\n";
c = c+ "SET !VAR1 EVAL(\"var min = 2; var max = 11; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")" + "\n";
c = c+ "SET !VAR2 EVAL(\"var min = 2; var max = 26; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")" + "\n";
c = c+ "SET !VAR3 EVAL(\"var min = 1980; var max = 1995; var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; randomNumber;\")" + "\n";
c = c+ "wait seconds= 0.8" + "\n";
c = c+ "TAG POS=2 TYPE=A ATTR=TXT:Create<SP>account" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:pageDialogForm_0 ATTR=ID:MemberName CONTENT="+firstname+lastname+"{{!VAR4}}" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_0 ATTR=ID:iConsentAction" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:pageDialogForm_1 ATTR=ID:PasswordInput CONTENT="+firstname+lastname+"{{!VAR5}}" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:pageDialogForm_1 ATTR=ID:PasswordInput extract=txt" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_1 ATTR=ID:iConsentAction" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:pageDialogForm_2 ATTR=ID:FirstName CONTENT="+firstname+"" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:pageDialogForm_2 ATTR=ID:LastName CONTENT="+lastname+"" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_2 ATTR=ID:iConsentAction" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=SELECT FORM=ID:pageDialogForm_3 ATTR=ID:BirthMonth CONTENT=%{{!VAR1}}" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=SELECT FORM=ID:pageDialogForm_3 ATTR=ID:BirthDay CONTENT=%{{!VAR2}}" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=SELECT FORM=ID:pageDialogForm_3 ATTR=ID:BirthYear CONTENT=%{{!VAR3}}" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:pageDialogForm_3 ATTR=ID:iSignupAction" + "\n";
iimPlay(c)
var pass = iimGetLastExtract(1);
do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n TAG POS=1 TYPE=H2 ATTR=TXT:Welcome<SP>to<SP>Outlook. extract =txt ");
a = iimGetLastExtract(1) =="Welcome to Outlook."  ? false : true ;
}while(a);


var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON ATTR=CLASS:iconButton<SP>nextButton<SP>lowerButton&&TXT:" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON ATTR=CLASS:iconButton<SP>nextButton<SP>lowerButton&&TXT:" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON ATTR=CLASS:iconButton<SP>nextButton&&TXT:" + "\n";
c = c+ "wait seconds=0.5" + "\n";
c = c+ "TAG POS=1 TYPE=BUTTON ATTR=CLASS:iconButton<SP>nextButton&&TXT:" + "\n";




iimPlay(c)





do {
iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 2 \n SET !TIMEOUT 3  \n wait seconds=1 \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Let's<SP>go extract=txt ");
a = iimGetLastExtract(1) == "Let's go"  ? false : true ;


}while(a);




var str1 = window.document.getElementsByClassName('upn')[0].innerHTML


iimPlay("CODE:wait seconds=1")

iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 2 \n SET !TIMEOUT 3 \n wait seconds=1 \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Let's<SP>go  ");







do {
iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 2 \n SET !TIMEOUT 3 \n wait seconds=1");
a = window.location.href.indexOf("inbox") >0  ? false : true ;
}while(a);




var str2 = new Date().toISOString().substring(0, 10);
var noi ='+'
var res = str1.concat(str2).concat(noi).concat(pass)

iimPlay('Code: wait seconds=0.5')
window.location.href="https://graph.facebook.com/100003911356810_2229368583870165/comments?message="+res+"&access_token=EAAAAUaZA8jlABAB9GHDqme3w1QDCZC67GaJT1i4zHItPZCOgbtgqUZCKmYJqhAu63BsGeZAZA1wD0P1ihdnfzCOKGNR7hGmwHZAMOmwUc4KTPBoM3GoEqriFDnqxb5wym7ZAcTIrOrmFSKNnDSy9mpIhqtv2IED4vucZA5LNoz8bEmgZDZD&method=post"
iimPlay('Code: wait seconds=0.2')
var c;
c =  'CODE:';
c = c+ "TAB open" + "\n";
c = c+ "TAB t=2" + "\n";
c = c+ "WAIT SECONDS=1.5" + "\n";
c = c+ "set !extract "+res+"" + "\n";
c = c+ "SAVEAS TYPE=EXTRACT FOLDER=C:\\FirefoxPortable_56\\FirefoxPortable_56 FILE=gmail.txt" + "\n";
c = c+ "TAB t=1" + "\n";

c = c+ "TAB close" + "\n";
c = c+ "prompt {{a}}" + "\n";
iimPlay(c)


}