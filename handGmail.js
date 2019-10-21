do{
  
iimPlay('Code: wait seconds=1') 
 a = window.navigator.onLine !==false ? false : true  // !=false --> true, play 1 lan, else false play n l?n
}
while (a)

iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:config  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")


var c;
c =  'CODE:';  
c = c+ "SET !ERRORIGNORE no" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "TAB CLOSEALLOTHERS" + "\n";
c = c+ "SET !USERAGENT \"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0\" "+ "\n";
c = c+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "URL GOTO=https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&flowName=GlifWebSignIn&flowEntry=ServiceLogin" + "\n";
c = c+ "TAG POS=1 TYPE=SPAN ATTR=TXT:Create<SP>account" + "\n";
c = c+ "" + "\n";
c = c+ "tab t=1" + "\n";
c = c+ "TAG POS=1 TYPE=SPAN ATTR=TXT:Next" + "\n";

c = c+ "wait seconds= 1" + "\n";
iimPlay(c)


iimPlay('Code:wait seconds=1')

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
            iimDisplay("" + str.data); /*hi?n useragent*/
            pref = imns.Cc["@mozilla.org/preferences-service;1"].getService(imns.Ci.nsIPrefBranch);
            pref.setComplexValue("general.useragent.override", imns.Ci.nsISupportsString, str);
            pref.setCharPref("general.buildID.override", build);
        } catch (err) {
            iimDisplay("? useragent + buildID = 0");
        }
    }
};
Comment._0xd249();


var file        = null;
var process     = null;
var args        = [""];

// create an nsIFile for the executable
file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
file.initWithPath("C:\\FirefoxPortable_56\\FirefoxPortable_56\\fill.exe");

// create an nsIProcess
process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
process.init(file);

// Launch the process
process.run(false , args, args.length);

