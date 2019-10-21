do{
  
iimPlay('Code: wait seconds=1') 
 a = window.navigator.onLine !==false ? false : true  // !=false --> true, play 1 lan, else false play n l?n
}
while (a)



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function readExt(filename) {
    return imns.FIO.readTextFile(imns.FIO.openNode(filename));
}
var Comment = {
    _0xd249: function() {
        var useragent = "C:\\FirefoxPortable_56\\FirefoxPortable_56\\"; 
        var agent = readExt(useragent + "user.txt"); 
      
        var arrData = agent.split("\r\n");
        var str = imns.Cc["@mozilla.org/supports-string;1"].createInstance(imns.Ci.nsISupportsString);
        str.data = arrData[getRandomInt(0, arrData.length - 1)];
        var build = [getRandomInt(2012, 2018)] + [getRandomInt(10, 12)] + [getRandomInt(10, 28)] + [getRandomInt(100000, 199999)];
          
        try {
      
            pref = imns.Cc["@mozilla.org/preferences-service;1"].getService(imns.Ci.nsIPrefBranch);
            pref.setComplexValue("general.useragent.override", imns.Ci.nsISupportsString, str);
            pref.setCharPref("general.buildID.override", build);
        } catch (err) {
            iimDisplay("? useragent + buildID = 0");
        }
        
        return str;
    }
};
Comment._0xd249();


var user1=Comment._0xd249().data

var user = user1.replace(/ /g, '<SP>');

function num1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var num =num1(1000,10000)

function wait(min, max) {
    return Math.random() * (max - min) + min;
}








function info(url)
{
    var fileTxt = imns.FIO.openNode(url);
            
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
            res  =  imns.FIO.readTextFile(fileTxt).split("\r\n")
            myArray = res
            firstname = myArray[Math.floor(Math.random() * myArray.length)];
            lastname = myArray[Math.floor(Math.random() * myArray.length)];
            subname = myArray[Math.floor(Math.random() * myArray.length)];
     
}
info("C:\\FirefoxPortable_56\\FirefoxPortable_56\\name.txt")

function infoa(url)
{
    var fileTxta = imns.FIO.openNode(url);
            
            lines1 = imns.FIO.readTextFile(fileTxta).split("\r\n").slice(1).join("\r\n");
           
            res1  =  imns.FIO.readTextFile(fileTxta).split("\r\n")
           
            myArray = res1

            Amail = myArray[Math.floor(Math.random() * myArray.length)];
                    
          
     
}
infoa("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt")




function infob(url)
{
    var fileTxta = imns.FIO.openNode(url);
            
         gmailinfo = imns.FIO.readTextFile(fileTxta).split("\r\n").slice(0,1).join("\r\n");
         gmail =gmailinfo.split(",")[0].toLowerCase()
         passA =gmailinfo.split(",")[1]
}
infob("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")



var items = ["!", "@"];
var spe = items[Math.floor(Math.random()*items.length)];

var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ " TAB CLOSEALLOTHERS " + "\n";
c = c+ "URL GOTO=https://accounts.google.com/signin/v2" + "\n";
c = c+ "SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt" + "\n";
c = c+ "SET !DATASOURCE_LINE 1" + "\n";
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#identifierId\" BUTTON=0" + "\n";
c = c+ "EVENTS TYPE=KEYPRESS SELECTOR=\"#identifierId\" CHARS={{!COL1}}" + "\n";
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#identifierNext>DIV:nth-of-type(2)\" BUTTON=0" + "\n";
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
c = c+ "EVENTS TYPE=KEYPRESS SELECTOR=\"#password>DIV>DIV>DIV>INPUT\" CHARS={{!COL2}}" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#passwordNext>CONTENT>SPAN\" BUTTON=0" + "\n";
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
c = c+ "TAG POS=2 TYPE=DIV ATTR=CLASS:*" + "\n";
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
iimPlay(c)


if (window.location.href.indexOf("myaccount.google.com") < 0)

{
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
iimPlay(c)


var c;
c =  'CODE:';
c = c+ 'TAB T=1' + '\n';
c = c+ 'SET !ERRORIGNORE no' + '\n';
c = c+ 'SET !TIMEOUT_STEP 0' + '\n';
c = c+ 'EVENT TYPE=CLICK SELECTOR="#view_container>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI:nth-of-type(3)>DIV>DIV:nth-of-type(2)" BUTTON=0' + '\n';
c = c+ "WAIT SECONDS="+wait(1,3)+"" + "\n";
iimPlay(c)
var error=iimGetErrorText()

var c;
c =  'CODE:';
c = c+ 'TAB T=1' + '\n';
c = c+ 'SET !ERRORIGNORE no' + '\n';
c = c+ 'SET !TIMEOUT_STEP 0' + '\n';
c = c+ 'EVENT TYPE=CLICK SELECTOR=\"#view_container>FORM>DIV:nth-of-type(2)>DIV>DIV>DIV>UL>LI>DIV>DIV:nth-of-type(2)\" BUTTON=0' + '\n';
c = c+ "WAIT SECONDS="+wait(1,2)+"" + "\n";
iimPlay(c)
var error1=iimGetErrorText()








var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt" + "\n";
c = c+ "SET !DATASOURCE_LINE 1" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#phoneNumberId\" BUTTON=0" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#knowledge-preregistered-email-response\" BUTTON=0" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "EVENTS TYPE=KEYPRESS SELECTOR=\"#knowledge-preregistered-email-response\" CHARS={{!COL3}}" + "\n";
c = c+ "EVENTS TYPE=KEYPRESS SELECTOR=\"#phoneNumberId\" CHARS={{!COL3}}" + "\n";
c = c+ "WAIT SECONDS=1" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#next>CONTENT>SPAN\" BUTTON=0" + "\n";
c = c+ "EVENT TYPE=CLICK SELECTOR=\"#idvanyphonecollectNext>CONTENT>SPAN\" BUTTON=0" + "\n";
c = c+ "WAIT SECONDS=3" + "\n";


iimPlay(c)



if (window.document.getElementById('headingText') != null)
{
var very= window.document.getElementById('headingText').innerText
if (very=="Verify it's you" && error !=="OK" && error1 !=="OK" )
{
var c;
c =  'CODE:';
c = c+ "WAIT SECONDS=0.2" + "\n";
//c = c+ "TAB open" + "\n";
//c = c+ "TAB t=2" + "\n";
//c = c+ "WAIT SECONDS=1.5" + "\n";
//c = c+ "TAB close" + "\n";
//c = c+ "prompt {{a}}" + "\n";
iimPlay(c)
}
}




}





do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n wait seconds=1 \n SET !TIMEOUT 3  \n TAG POS=1 TYPE=SPAN ATTR=TXT:Done \n TAG POS=1 TYPE=CONTENT ATTR=TXT:Xong \n wait seconds=1");
a = window.location.href.indexOf("myaccount.google.com") >0  ? false : true ;
}while(a);
iimPlay('Code:  SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n TAG POS=1 TYPE=SPAN ATTR=TXT:Done \n TAG POS=1 TYPE=CONTENT ATTR=TXT:Xong \n  wait seconds=1')

iimPlay('Code:wait seconds=1')
if (window.document.getElementsByClassName('gb_Eb')[0] != undefined)
{
var email=window.document.getElementsByClassName('gb_Eb')[0].innerText
var emailcheck=email.split('@')[0]
var str1=emailcheck
var gmailinfo = str1

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
};

    var a=email.indexOf('@')
    var pass1 = email.substring(0, a).capitalize();  
    var pass2 =reverseString(pass1)+spe
    var passspe = pass2.split('.').join("");
    var pass = reverseString(pass1)
alert(pass)

//if  (emailcheck !== gmail)
//alert('Please check your mail and restart the browser')

}

window.location.href="https://mail.google.com/mail"

var c;
c =  'CODE:';
c = c+ "WAIT SECONDS=0.2" + "\n";
c = c+ "TAB open" + "\n";
c = c+ "TAB t=2" + "\n";
iimPlay(c)


/////////////////////////////////////////////////////////////////////////////////////////facebook



iimPlayCode("SET !TIMEOUT 10 \n url goto=fb.com/profile.php \n wait seconds=1 ");
if (window.location.href.indexOf("checkpoint") >0)
{


do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n SET !TIMEOUT 3 \n wait seconds=5");
a =window.location.href.indexOf("checkpoint") <0  ? false : true ;
}while(a);


}
else
{

do {

iimPlayCode(" wait seconds=2 ");
var clone="1";
if ( window.document.getElementsByName('profile_id')[0] != undefined )
    var clone = window.document.getElementsByName('profile_id')[0].value




	if (clone=="1" )
	{
	var macro = 'CODE:';
	macro += 'SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt' + '\n';
	iimSet("LOOP",1);
	macro += 'SET !DATASOURCE_LINE {{LOOP}}' + '\n';
	macro += 'SET !DATASOURCE_COLUMNS 1' + '\n';
	macro += 'SET !EXTRACT {{!COL1}}' + '\n';
	iimPlay(macro);
        clone = iimGetLastExtract(1);
          if ( clone != null)
	
	
	{
	var thongtin=[];
	pathinfo(1);
	loginfacebook();
	iimPlayCode("SET !TIMEOUT 10 \n url goto=fb.com/profile.php \n wait seconds=1 ");
	if (window.location.href.indexOf("checkpoint") >0)
	{
function delete_clone(url)
{
    var fileTxt = imns.FIO.openNode(url);
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
 
            imns.FIO.writeTextFile(fileTxt, lines);
}
delete_clone("C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt")
	}
	}
	}
a = window.location.href.indexOf("checkpoint") < 0  ? false : true ;
b = clone != null ? false : true ;
}while(a || b);
}

function pathinfo(i){
	var macro = 'CODE:';
	macro += 'SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt' + '\n';
	iimSet("LOOP",i);
	macro += 'SET !DATASOURCE_LINE {{LOOP}}' + '\n';
	macro += 'SET !DATASOURCE_COLUMNS 1' + '\n';
	macro += 'SET !EXTRACT {{!COL1}}' + '\n';
	iimPlay(macro);
	thongtin = iimGetExtract().trim().split(';');
	//thongtin=prompt("Nhập Cookie: định dạng c_user ; xs").split(' ; ');
	clone = iimGetExtract();
	
}

function loginfacebook(){
	var cookieall = thongtin;
	
	var k=0;for(k;k<cookieall.length;k++)
	{
		if(cookieall[k].indexOf("c_user=")>=0)
		{
			var userid = cookieall[k].split('=')[1];
		}
		if(cookieall[k].indexOf("xs=")>=0)
		{
			var userxs = cookieall[k].split('=')[1];
			var userxs = userxs.replace(/:/g,"%3A");
		}
	}
	var cookieManager = Components.classes["@mozilla.org/cookiemanager;1"].getService(Components.interfaces.nsICookieManager);
	Components.utils.import("resource://gre/modules/Services.jsm");
	var cookieService = Services.cookies;
	//cookieManager .add("facebook.com","/","c_user","100014280161380", true, true, true, 1487908862);
Services.cookies.add(".facebook.com","/","c_user",userid, true, true, true, Date.now()+6000000);
Services.cookies.add(".facebook.com","/","xs",userxs, true, true, true, Date.now()+6000000);
return cookieService
}
do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n SET !TIMEOUT 3 \n wait seconds=1");
a = window.location.href.indexOf("facebook") < 0  ? false : true ;
}while(a);













/////////////////////////////////////////////////////////////////////////////////////////twitter


//var a=window.document.getElementById('react-root').querySelector('DIV>MAIN>DIV>DIV>DIV>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>INPUT')
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "URL GOTO=https://twitter.com" + "\n";
c = c+ "wait seconds=3" + "\n";
iimPlay(c)
if (window.document.getElementsByClassName('u-linkComplex-target')[0] != undefined)
var twitterID = window.document.getElementsByClassName('u-linkComplex-target')[0].innerText

else {
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "wait seconds=0" + "\n";
c = c+ "URL GOTO=https://twitter.com/i/flow/signup" + "\n";
c = c+ "wait seconds=0.5" + "\n";
iimPlay(c)

if (window.document.getElementsByClassName('u-linkComplex-target')[0] != undefined)
var twitterID = window.document.getElementsByClassName('u-linkComplex-target')[0].innerText



do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2  \n SET !TIMEOUT 3  \n wait seconds=0.5");
a =window.document.getElementsByTagName('input')[0] != undefined ? false : true ;
b =window.document.getElementsByTagName('input')[1] != undefined ? false : true ;
}while(a && b);



iimPlay('Code: wait seconds=0.5') 

for (i = 0; i < 3; i++) { 
if (window.document.getElementsByTagName('input')[i] != undefined)
{
if (window.document.getElementsByTagName('input')[i].name !== "" && window.document.getElementsByTagName('input')[i].type == "text")
var usename=window.document.getElementsByTagName('input')[i].name
if (window.document.getElementsByTagName('input')[i].name == "phone_number"  && window.document.getElementsByTagName('input')[i].type == "tel"  )
{
var phone=window.document.getElementsByTagName('input')[i].name 
var k=i


}
}
}


 
//var usename=window.document.getElementsByTagName('input')[0].tagName
//var phone=window.document.getElementsByTagName('input')[1].tagName
//var phone=window.document.getElementsByTagName('input')[1].name
//var phone1=window.document.getElementsByTagName('input')[1].tagName

var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "wait seconds=1" + "\n";
//c = c+ "EVENT TYPE=CLICK SELECTOR=\""+d+"\"  BUTTON=0" + "\n";
//c = c+ "EVENT TYPE=CLICK SELECTOR="+d+" BUTTON=0" + "\n";
//c = c+ "EVENTS TYPE=KEYPRESS SELECTOR="+usename+" CHARS="+firstname+"" + "\n";
//c = c+ "EVENT TYPE=CLICK SELECTOR="+usename+" BUTTON=0" + "\n";
//c = c + "EVENT TYPE=CLICK SELECTOR=\"INPUT:eq(1)\" BUTTON=0" + "\n";
//c = c+ "EVENTS TYPE=KEYPRESS SELECTOR="+usename+" CHARS="+firstname+"" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:"+usename+" CONTENT="+firstname+"" + "\n";
//c = c+ "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:"+phone+" CONTENT="+firstname+"" + "\n";

//c = c+ "EVENT TYPE=CLICK SELECTOR=\"INPUT\" BUTTON=0" + "\n";
c = c+ "wait seconds=1" + "\n";
//c = c+ "EVENTS TYPE=KEYPRESS SELECTOR="+usename+" CHARS="+firstname+"" + "\n";
//= c+ "EVENTS TYPE=KEYPRESS SELECTOR="+phone1+" CHARS="+firstname+"" + "\n";

iimPlay(c)







do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2  \n SET !TIMEOUT 3 \n wait seconds=0.2");



if (window.document.getElementsByClassName('UserHeader-name')[0]!= undefined)
var twitterID = window.document.getElementsByClassName('UserHeader-name')[0].innerText

if (window.document.getElementsByTagName('input')[1] != undefined)
{
if (window.document.getElementsByTagName('input')[1].name== "password") {
var matkhau=window.document.getElementsByTagName('input')[1].name
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
//c = c + "EVENT TYPE=CLICK SELECTOR=\"INPUT\" BUTTON=0" + "\n";
c = c+ "wait seconds=1" + "\n";
//c = c+ "EVENTS TYPE=KEYPRESS SELECTOR="+matkhau+" CHARS="+pass+"" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=NAME:"+matkhau+" CONTENT="+pass+"" + "\n";
c = c+ "wait seconds=0.5" + "\n";
iimPlay(c)
}
}

if (window.document.getElementsByClassName('UserHeader-name')[1]!= undefined)
var twitterID = window.document.getElementsByClassName('UserHeader-name')[1].innerText


if (window.document.getElementsByClassName('u-linkComplex-target')[0] != undefined)
var twitterID = window.document.getElementsByClassName('u-linkComplex-target')[0].innerText

if (window.document.getElementsByTagName('input')[2] != undefined)
{
if (window.document.getElementsByTagName('input')[2].name== "password") {
var matkhau=window.document.getElementsByTagName('input')[2].name
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
//c = c + "EVENT TYPE=CLICK SELECTOR=\"INPUT\" BUTTON=0" + "\n";
c = c+ "wait seconds=1" + "\n";
//c = c+ "EVENTS TYPE=KEYPRESS SELECTOR="+matkhau+" CHARS="+pass+"" + "\n";
c = c+ "TAG POS=1 TYPE=INPUT:PASSWORD ATTR=NAME:"+matkhau+" CONTENT="+pass+"" + "\n";
c = c+ "wait seconds=0.5" + "\n";
iimPlay(c)
}
}




a = window.location.href.indexOf("signup") <0  ? false : true ;
b = window.location.href.indexOf("twitter") >0  ? false : true ;
c = twitterID != undefined ? false : true ;
}while(a || b || c);
}
iimPlay('Code: wait seconds=1')


/////////////////////////////////////////////////////////////////////////////////////////telegram

var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "TAB open" + "\n";
c = c+ "TAB t=2" + "\n";
c = c+ "URL GOTO=https://web.telegram.org/#/login" + "\n";
c = c+ "wait seconds=5" + "\n";
iimPlay(c)




do {

iimPlay('Code: wait seconds=1') 
if ( window.document.getElementsByClassName('login_phone_head')[0]!= undefined)
var sdt=window.document.getElementsByClassName('login_phone_head')[0].querySelectorAll('span')[1].innerText
a = window.location.href.indexOf("#/im") >0  ? false : true ;
}while(a);


do {
iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT 5 \n SET !TIMEOUT_STEP 2 \n wait seconds=2 ");
a = window.location.href.indexOf("save.com") > 0  ? false : true ;
}while(a);










/////////////////////////////////////////////////////////////////////////////////////////save
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "URL GOTO=https://myaccount.google.com" + "\n";
c = c+ "wait seconds=1" + "\n";
iimPlay(c)



iimPlay('Code: wait seconds=0.5') 

var file        = null;
var process     = null;
var args        = [""];

// create an nsIFile for the executable
file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
file.initWithPath("C:\\FirefoxPortable_56\\FirefoxPortable_56\\export.exe");

// create an nsIProcess
process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
process.init(file);

// Launch the process
process.run(false , args, args.length);

iimPlay('Code: wait seconds=3') 

function delete_line1(url)
{
    var fileTxt = imns.FIO.openNode(url);
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
 
            imns.FIO.writeTextFile(fileTxt, lines);
}

delete_line1("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt")



var today = new Date().toISOString().substring(0, 10);
var noi ='+'
var res = gmailinfo.concat(noi).concat(pass).concat(noi).concat(clone).concat(noi).concat(sdt).concat(noi).concat(twitterID).concat(noi).concat(today).replace(/\s+/g, '');

var c;
c =  'CODE:';
c = c+ "WAIT SECONDS=0.2" + "\n";
c = c+ "TAB open" + "\n";
c = c+ "TAB t=2" + "\n";
c = c+ "WAIT SECONDS=1.5" + "\n";
c = c+ "SET !EXTRACT "+res+" " + "\n";
c = c+ "SAVEAS TYPE = EXTRACT FOLDER=C:\\FirefoxPortable_56\\FirefoxPortable_56 FILE=gmail.txt" + "\n";
c = c+ "TAB close" + "\n";
c = c+ "prompt {{a}}" + "\n";
iimPlay(c)

iimPlay('Code: wait seconds=1')