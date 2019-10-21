iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:profiles  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")
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
var shockport=sock.setIntPref("socks_port", 1080) 
sock.setIntPref("type", 1);

var pref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
var http    = pref.getBranch("network.proxy.");
var httphost=http.setCharPref("http", "127.0.0.1") 
var httpport=http.setIntPref("http_port", 999) 
http.setIntPref("type", 1);



if(window.navigator.onLine)
{
for (r=204;r<1000000000000;r++) {

for (i=0;i<1000000000000;i++) {

for (j=0;j<400000;j++) 
{
sock.setIntPref("type", 0);
var c;
c =  "CODE:";
c = c+ "SET !ERRORIGNORE YES" + "\n";
c = c+ "SET !TIMEOUT 15" + "\n";
c = c+ "SET !TIMEOUT_STEP 1" + "\n";
c = c+ "URL GOTO=http://connect.io/sshchange" + "\n"; // chèn link reset vào
c = c+ " wait seconds=1" + "\n";
iimPlay(c);
sockhost
shockport
httphost
httpport
http.setIntPref("type", 1);



window.location.href = "https://www.example.com"
var myObject = {
    firstName:true,
    lastName: false,
    fullName: function testconnect() {
    const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");

        var xhr = new XMLHttpRequest();
        var file =  window.location.href ; 
        var randomNum = Math.round(Math.random() * 10);

        xhr.open('HEAD', file + "?rand=" + randomNum, false);
iimPlayCode(" wait seconds=1")
        try {
            xhr.send();

            if (xhr.status >= 200 && xhr.status < 304) {
               
                return this.firstName;;
         
            } else {
                
             
                window.location.href = "";
                return this.firstName;;
            }
        } catch (e) {
            return  this.lastName;
        }
    } ,
} ;
var connect=myObject.fullName()

var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE YES" + "\n";
d = d+ "SET !TIMEOUT 30" + "\n";
d = d+ " wait seconds=1" + "\n";
d = d+ "URL GOTO=https://iphub.info/" + "\n"; // chèn link reset vào
d = d+ " wait seconds=1" + "\n";
iimPlay(d);

if(connect)
iimPlay('Code: wait seconds=1')
if ( window.document.getElementById('type') !== null && window.document.getElementById('type').innerText.indexOf('Bad') == -1 )  {break ;} 
}
iimPlay('Code: wait seconds=0.2')
if ( window.document.getElementById('type') !== null && window.document.getElementById('type').innerText.indexOf('Bad') == -1 )  {break ;} 


}
// do something here

var d;
d =  "CODE:";
d = d+ "SET !ERRORIGNORE YES" + "\n";
d = d+ "SET !EXTRACT_TEST_POPUP NO" + "\n";
d = d+ "SET !TIMEOUT 80" + "\n";
d = d+ "SET !DATASOURCE mcheat.csv" + "\n";
d = d+ "set !loop "+r+"" + "\n";
d = d+ "SET !DATASOURCE_LINE {{!loop}}" + "\n";
d = d+ "SET !DATASOURCE_COLUMNS 2" + "\n";
d = d+ "URL GOTO=https://klancer.io" + "\n";
d = d+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:balanceform ATTR=ID:check_name CONTENT={{!COL2}}" + "\n";
d = d+ "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:balanceform ATTR=ID:check_email CONTENT={{!COL1}}@gmail.com" + "\n";
d = d+ "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:balanceform ATTR=*" + "\n";
d = d+ " wait seconds=3" + "\n";
iimPlay(d);


}

}





