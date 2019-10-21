iimPlayCode("SET !TIMEOUT 10 \n url goto=fb.com/profile.php \n wait seconds=1 ");
if (window.location.href.indexOf("checkpoint") > 0) {
    do {
        iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n SET !TIMEOUT 3 \n wait seconds=5");
        a = window.location.href.indexOf("checkpoint") < 0 ? false : true;
    } while (a);
} else {
    do {
        iimPlayCode(" wait seconds=1 ");
        var clone = "1";
        if (window.document.getElementsByName('profile_id')[0] != undefined)
            var clone = window.document.getElementsByName('profile_id')[0].value
        if (clone == "1") {
            var macro = 'CODE:';
            macro += 'SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt' + '\n';
            iimSet("LOOP", 1);
            macro += 'SET !DATASOURCE_LINE {{LOOP}}' + '\n';
            macro += 'SET !DATASOURCE_COLUMNS 1' + '\n';
            macro += 'SET !EXTRACT {{!COL1}}' + '\n';
            iimPlay(macro);
            clone = iimGetLastExtract(1);
            if (clone != null)
            {
                var thongtin = [];
				
                pathinfo(1);
				alert(thongtin)
                loginfacebook();
                iimPlayCode("SET !TIMEOUT 10 \n url goto=fb.com/profile.php \n wait seconds=1 ");
                if (window.location.href.indexOf("checkpoint") > 0) {
                    function delete_clone(url) {
                        var fileTxt = imns.FIO.openNode(url);
                        lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
                        imns.FIO.writeTextFile(fileTxt, lines);
                    }
                    delete_clone("C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt")
                }
            }
        }
        a = window.location.href.indexOf("checkpoint") < 0 ? false : true;
        b = clone != null ? false : true;
    } while (a || b);
}
function pathinfo(i) {
    var macro = 'CODE:';
    macro += 'SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt' + '\n';
    iimSet("LOOP", i);
    macro += 'SET !DATASOURCE_LINE {{LOOP}}' + '\n';
    macro += 'SET !DATASOURCE_COLUMNS 1' + '\n';
    macro += 'SET !EXTRACT {{!COL1}}' + '\n';
    iimPlay(macro);
    thongtin = iimGetExtract().trim().split(';');
    //thongtin=prompt("Nhập Cookie: định dạng c_user ; xs").split(' ; ');
    clone = iimGetExtract();
}
function loginfacebook() {
    var cookieall = thongtin;
    var k = 0;
    for (k; k < cookieall.length; k++) {
        if (cookieall[k].indexOf("c_user=") >= 0) {
            var userid = cookieall[k].split('=')[1];
        }
        if (cookieall[k].indexOf("xs=") >= 0) {
            var userxs = cookieall[k].split('=')[1];
            var userxs = userxs.replace(/:/g, "%3A");
        }
    }
    var cookieManager = Components.classes["@mozilla.org/cookiemanager;1"].getService(Components.interfaces.nsICookieManager);
    Components.utils.import("resource://gre/modules/Services.jsm");
    var cookieService = Services.cookies;
    //cookieManager .add("facebook.com","/","c_user","100014280161380", true, true, true, 1487908862);
    Services.cookies.add(".facebook.com", "/", "c_user", userid, true, true, true, Date.now() + 6000000);
    Services.cookies.add(".facebook.com", "/", "xs", userxs, true, true, true, Date.now() + 6000000);
    return cookieService
}
do {
    alert("")
    iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 2 \n wait seconds=1 \n SET !TIMEOUT 3 \n wait seconds=1");
    a = window.location.href.indexOf("facebook") < 0 ? false : true;
} while (a);