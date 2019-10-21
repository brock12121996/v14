iimPlayCode(" SET !ERRORIGNORE YES \n clear \n  url goto= about:config  \n TAB CLOSEALLOTHERS \n   wait seconds=0.1 \n clear \n wait seconds=0.1 \n EVENTS TYPE=KEYPRESS  KEYS=\"[120]\" \n wait seconds=0.5    ")
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




