var loop = 10000;
for(var j = 1; j <= loop; j++)
{
	var thongtin=[];
	clear();
	pathinfo(j);
	loginfacebook();
	iimPlayCode("url goto=fb.com \n");
}
	
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

function pathinfo(i){
	var macro = 'CODE:';
	macro += 'SET !DATASOURCE clone.txt' + '\n';
	iimSet("LOOP",i);
	macro += 'SET !DATASOURCE_LINE {{LOOP}}' + '\n';
	macro += 'SET !DATASOURCE_COLUMNS 1' + '\n';
	macro += 'SET !EXTRACT {{!COL1}}' + '\n';
	iimPlay(macro);
	thongtin = iimGetExtract().trim().split(';');
	//thongtin=prompt("Nhập Cookie: định dạng c_user ; xs").split(' ; ');
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

}

