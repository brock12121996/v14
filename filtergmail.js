do {
    iimPlay('Code: wait seconds=1')
    a = window.navigator.onLine !== false ? false : true // !=false --> true, play 1 lan, else false play n l?n
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
var user1 = Comment._0xd249().data
var user = user1.replace(/ /g, '<SP>');
function num1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var num = num1(1000, 10000)
function wait(min, max) {
    return Math.random() * (max - min) + min;
}
function info(url) {
    var fileTxt = imns.FIO.openNode(url);
    lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
    res = imns.FIO.readTextFile(fileTxt).split("\r\n")
    myArray = res
    firstname = myArray[Math.floor(Math.random() * myArray.length)];
    lastname = myArray[Math.floor(Math.random() * myArray.length)];
    subname = myArray[Math.floor(Math.random() * myArray.length)];
}
info("C:\\FirefoxPortable_56\\FirefoxPortable_56\\name.txt")
function infoa(url) {
    var fileTxta = imns.FIO.openNode(url);
    lines1 = imns.FIO.readTextFile(fileTxta).split("\r\n").slice(1).join("\r\n");
    res1 = imns.FIO.readTextFile(fileTxta).split("\r\n")
    myArray = res1
    Amail = myArray[Math.floor(Math.random() * myArray.length)];
}
infoa("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt")
function check_duplicate(url) {
    var fileTxta = imns.FIO.openNode(url);
    gmailinfo = imns.FIO.readTextFile(fileTxta).split("\r\n").slice(0, 1).join("\r\n");
    gmail = gmailinfo.split(",")[0].toLowerCase()
    passmail = gmailinfo.split(",")[1]
    len = imns.FIO.readTextFile(fileTxta).split("\r\n").length;
}
check_duplicate("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
var items = ["!", "@"];
var spe = items[Math.floor(Math.random() * items.length)];
// định dạng gmail đưa vào ko có đuôi @gmal.com, nhớ check trùng truoc khi đưa vào
var c;
c = 'CODE:';
c = c + "SET !ERRORIGNORE yes" + "\n";
c = c + "SET !TIMEOUT_STEP 0" + "\n";
c = c + "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c + "SET !ENCRYPTION NO" + "\n";
c = c + "TAB T=1" + "\n";
c = c + " TAB CLOSEALLOTHERS " + "\n";
c = c + "URL GOTO=https://accounts.google.com/signin/v2" + "\n";
c = c + "SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt" + "\n";
c = c + "SET !DATASOURCE_LINE 1" + "\n";
c = c + "WAIT SECONDS=" + wait(1, 2) + "" + "\n";
c = c + "EVENT TYPE=CLICK SELECTOR=\"#identifierId\" BUTTON=0" + "\n";
c = c + "EVENTS TYPE=KEYPRESS SELECTOR=\"#identifierId\" CHARS={{!COL1}}" + "\n";
c = c + "WAIT SECONDS=" + wait(1, 2) + "" + "\n";
c = c + "EVENT TYPE=CLICK SELECTOR=\"#identifierNext>DIV:nth-of-type(2)\" BUTTON=0" + "\n";
c = c + "WAIT SECONDS=" + wait(1, 2) + "" + "\n";
c = c + "EVENTS TYPE=KEYPRESS SELECTOR=\"#password>DIV>DIV>DIV>INPUT\" CHARS={{!COL2}}" + "\n";
c = c + "EVENT TYPE=CLICK SELECTOR=\"#passwordNext>CONTENT>SPAN\" BUTTON=0" + "\n";
c = c + "EVENT TYPE=CLICK SELECTOR=\"#passwordNext>SPAN>SPAN\" BUTTON=0" + "\n";
c = c + "WAIT SECONDS=" + wait(1, 2) + "" + "\n";
c = c + "TAG POS=2 TYPE=DIV ATTR=CLASS:*" + "\n";
c = c + "WAIT SECONDS=" + wait(1, 2) + "" + "\n";
iimPlay(c)
iimPlay('Code:  SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n TAG POS=1 TYPE=SPAN ATTR=TXT:Done \n TAG POS=1 TYPE=CONTENT ATTR=TXT:Xong \n  wait seconds=1')
if (window.location.href.indexOf("myaccount.google.com") < 0) {
    function delete_line(url) {
        var fileTxt = imns.FIO.openNode(url);
        lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
        imns.FIO.writeTextFile(fileTxt, lines);
    }
    delete_line("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
    var c;
    c = 'CODE:';
    c = c + "WAIT SECONDS=1" + "\n";
    c = c + "prompt {{a}}" + "\n";
    iimPlay(c)
} else {
    iimPlay('Code:  SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n TAG POS=1 TYPE=SPAN ATTR=TXT:Done \n TAG POS=1 TYPE=CONTENT ATTR=TXT:Xong \n  wait seconds=1')
    
        var file = null;
        var process = null;
        var args = [""];
        // create an nsIFile for the executable
        file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
        file.initWithPath("C:\\FirefoxPortable_56\\FirefoxPortable_56\\export.exe");
        // create an nsIProcess
        process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
        process.init(file);
        // Launch the process
        process.run(false, args, args.length);
        iimPlay('Code: wait seconds=3')
        function delete_line(url) {
            var fileTxt = imns.FIO.openNode(url);
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
            imns.FIO.writeTextFile(fileTxt, lines);
        }
        delete_line("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
    
    var c;
    c = 'CODE:';
    c = c + "WAIT SECONDS=0.5" + "\n";
    c = c + "prompt {{a}}" + "\n";
    iimPlay(c)
}