for (i = 0; i < 1; i++) { 


iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:profiles  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

 var d = new Date();
    var h1 = addZero(d.getHours());
    var m1 = addZero(d.getMinutes());
    var s1 = addZero(d.getSeconds());
    var n= addZero(d.getFullYear());
    var b = addZero(d.getMonth());
    var u = addZero(d.getDate());
    var hour1 = h1 + ":" + m1 + ":" + s1 + ":" + n + ":" + b + ":" + u;
    
    
    
var thongtin=[];
	clear();

	
	
	function clear(){
var clearConsoleBrowserHistory = Components.classes["@mozilla.org/browser/nav-history-service;1"]
                                         .getService(Components.interfaces.nsIBrowserHistory);
        const NOW = Date.now() * 1000;
        clearConsoleBrowserHistory.removePagesByTimeframe(NOW - (3600000000 * 60), NOW);
	
		var clearConsoleCookieManager = Components.classes["@mozilla.org/cookiemanager;1"]
                            .getService(Components.interfaces.nsICookieManager);
clearConsoleCookieManager.removeAll();


var clearConsoleHttpLoginManager = Components.classes["@mozilla.org/network/http-auth-manager;1"].getService(Components.interfaces.nsIHttpAuthManager);
           clearConsoleHttpLoginManager.clearAll();

		var clearConsoleCacheManager = Components.classes["@mozilla.org/netwerk/cache-storage-service;1"].getService(Components.interfaces.nsICacheStorageService);
		try {
                clearConsoleCacheManager.clear();
            } catch(exception) {}
            let clearConsoleimageCacheManager = Components.classes["@mozilla.org/image/cache;1"].getService(Components.interfaces.imgICache);
            try {
                clearConsoleimageCacheManager.clearCache(false); // true=chrome, false=content
            } catch(exception) {}
			
            var clearConsoleAppCacheStorage = Components.classes["@mozilla.org/netwerk/cache-storage-service;1"]
                                                        .getService(Components.interfaces.nsICacheStorageService);
            try {
                clearConsoleAppCacheStorage.asyncEvictStorage(null);
            } catch(exception) {
                
            }
			
			var clearConsoleCacheManager = Components.classes["@mozilla.org/network/cache-service;1"].getService(Components.interfaces.nsICacheService);
            try {
                clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_ON_DISK);
                clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_IN_MEMORY);
                clearConsoleCacheManager.evictEntries(Components.interfaces.nsICache.STORE_OFFLINE);
            } catch(exception) {}
            let learConsoleimageCacheManager = Components.classes["@mozilla.org/image/cache;1"].getService(Components.interfaces.imgICache);
            try {
                learConsoleimageCacheManager.clearCache(false); // true=chrome, false=content
            } catch(exception) {}

}






var c;
c =  'CODE:';
c = c+ 'url goto= about:profiles' + '\n';
c = c+ 'wait seconds=0.2' + '\n';

iimPlay(c)
// window.location.href="about:profiles"
function getDefault() {
var ret;
var getAll  = window.document.querySelectorAll('#profiles > div');
for (var i=0;i<getAll.length;i++)
{
iimPlay('Code: wait seconds=0.2')
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

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var sock = pref.getBranch("network.proxy.");
var sockhost=sock.setCharPref("socks", "127.0.0.1") 
var shockport=sock.setIntPref("socks_port", no )
sock.setIntPref("type", 0);


for (i = 0; i < 1; i++) { 

for (i = 0; i < 41000; i++) { 

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var sock = pref.getBranch("network.proxy.");
var sockhost=sock.setCharPref("socks", "127.0.0.1") 
var shockport=sock.setIntPref("socks_port", no )
sock.setIntPref("type", 0);

var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE YES" + "\n";
d = d+ "SET !TIMEOUT 10" + "\n";
d = d+ "URL GOTO=http://connect.io/sshchange" + "\n";
iimPlay(d);
iimPlayCode(" wait seconds=0.2")
var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var sock = pref.getBranch("network.proxy.");
var sockhost=sock.setCharPref("socks", "127.0.0.1") 
var shockport=sock.setIntPref("socks_port", no )
sock.setIntPref("type", 1);

var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE no" + "\n";
d = d+ "SET !TIMEOUT 10" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "URL GOTO=http://l2.io/ip" + "\n"; 
iimPlay(d);
var error=iimGetErrorText()
if (error == "OK")

{
iimPlay('Code:wait seconds=0.2')
var connect=window.document.body.innerText.length
var ip=window.document.body.innerText
if  ( connect<20)
{
var link="https://iphub.info/api/ip/"

var res = link.concat(ip)


var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE no" + "\n";
d = d+ "SET !TIMEOUT 10" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "URL GOTO="+res+"" + "\n"; 
iimPlay(d);
iimPlay('Code:wait seconds=0.1')
do {
 iimPlay('CODE: wait seconds = 1');
 a = window.document.getElementsByClassName('objectBox objectBox-number')[1] != null ? false : true;
}while(a);


var check=window.document.getElementsByClassName('objectBox objectBox-number')[1].innerText
if ( check !== null && check !== -1 && check !== undefined )
{
var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE no" + "\n";
d = d+ "SET !TIMEOUT 7" + "\n";
d = d+ "SET !TIMEOUT_STEP 0" + "\n";
d = d+ "URL GOTO=https://www.google.com" + "\n"; 
iimPlay(d);
iimPlay('Code:wait seconds=0.3')
var loss=window.document.getElementsByClassName('title-text')[0]
if ( loss== undefined) {break ;} // load dc trang, ko load dc trang //
}

}




 }
}
if ( loss== undefined) 
// do something here
iimPlay('Code: wait seconds=1')




 var d = new Date();
    var h2 = addZero(d.getHours());
    var m2 = addZero(d.getMinutes());
    var s2 = addZero(d.getSeconds());

    var end=s2-s1
    alert (end)
    if ( end >3600) break;


}

// URL GOTO=http://dogecoin.expressfaucet.com/index.php?
// TAG POS=1 TYPE=B ATTR=TXT:Verify<SP>you<SP>are<SP>human






    // https://accounts.google.com/signin
    // window.document.getElementsByClassName('PendingEmailSection')[0].querySelector('a')
    // https://www.facebook.com/settings?tab=account&section=email&view
    // id = window.document.getElementsByClassName('_4t2a')[1].querySelector('div>form').id
    
    
    

}