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
    }
};
Comment._0xd249();
var c;
c =  'CODE:';
c = c+ "SET !ERRORIGNORE yes" + "\n";
c = c+ "SET !TIMEOUT_STEP 0" + "\n";
c = c+ "VERSION BUILD=8970419 RECORDER=FX" + "\n";
c = c+ "SET !ENCRYPTION NO" + "\n";
c = c+ "TAB T=1" + "\n";
c = c+ "wait seconds=1" + "\n";
c = c+ "URL GOTO=https://twitter.com/i/flow/signup" + "\n";
iimPlay(c)