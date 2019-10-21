var connect = true;

function checkconnect_navigator() {
    do {
        iimPlay('Code: wait seconds=1')
        if (window.navigator.onLine) connect = true;
        else connect = false;
    }
    while (!connect)
}
checkconnect_navigator();

function checkconnect() {
    do {
        var myObject = {
            firstName: true,
            lastName: false,
            fullName: function testconnect() {
                const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");
                var xhr = new XMLHttpRequest();
                var file = "https://api6.ipify.org/";
                xhr.open('HEAD', file, false);
                iimPlayCode(" wait seconds=1")
                try {
                    xhr.send();
                    return this.firstName;;
                } catch (e) {
                    return this.lastName;
                }
            },
        };
    }
    while (!myObject.fullName())
}
checkconnect()

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

function wait(min, max) {
    return Math.random() * (max - min) + min;
}
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var items = ["!", "@"];
var spe = items[Math.floor(Math.random() * items.length)];
// định dạng gmail đưa vào ko có đuôi @gmal.com, nhớ check trùng truoc khi đưa vào
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    if (str == null || str == "") return;
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function click(object_click) {
    //if (object_click == undefined) return;
    var someLink = object_click;
    try {
        var simulateClick = function(elem) {
            // Create our event (with options)
            var evt = new window.MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            var canceled = !elem.dispatchEvent(evt);
        };
        simulateClick(someLink);
        someLink.focus();
    } catch (err) {}
}

function hover(object_hover) {
    // if (object_hover == undefined) return;
    var element = window.document.querySelectorAll('div[aria-label="' + datapost + '"]')[0]
    element.addEventListener('mouseover', function() {
        // console.log('Event triggered');
    });
    var event = new window.MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(event);
}

function copy(text) {
    var dummy = window.document.createElement("textarea");
    window.document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    window.document.execCommand("copy");
    window.document.body.removeChild(dummy);
}
var check = true;
var stop = 0

function do_while(elements, callback = null, next_element = null, scrolldown = null, always_click = null) {
    do {
        //	alert(elements.indexOf("myaccount.google.com") )
        if (elements.indexOf("accounts.google.com") >= 0) {
            if (window.document.querySelectorAll('a[id="optionsButton"]')[0] != undefined) {
                var value = window.document.querySelectorAll('a[id="optionsButton"]')[0]
                dom = parentE(value, 1).querySelectorAll('div')[0]
                click(dom)
            }
            if (window.document.querySelectorAll('div[data-accountrecovery="false"]')[0] != undefined) {
                dom = window.document.querySelectorAll('div[data-accountrecovery="false"]')[0]
                    //dom = parentE(value, 1).querySelectorAlsl('div')[0]
                click(dom)
            }
            if (window.document.querySelectorAll('input[id="knowledge-preregistered-email-response"]')[0] != undefined) {
                dom = window.document.querySelectorAll('input[id="knowledge-preregistered-email-response"]')[0]
                    //dom = parentE(value, 1).querySelectorAll('div')[0]
                sendkey(dom, "keypress", recovery_mail)
                dom = window.document.querySelectorAll('div[data-secondary-action-label=""]')[0].querySelectorAll('div>div>div')[2]
                click(dom)
                iimPlay("CODE: WAIT SECONDS = 2 ");
            }
            check = window.location.href.indexOf("myaccount.google.com") >= 0 ? false : true;
        } else if (elements == 'button[disabled=""]') {
            check = window.document.querySelectorAll(elements)[0] == undefined ? false : true;
        } else {
            check = window.document.querySelectorAll(elements)[0] != undefined ? false : true;
            if (always_click) click(found);
        }
        if (next_element)
            check = window.document.querySelectorAll(elements)[1] != undefined ? false : true;
        if (callback != null && check == true)
            callback();
        if (scrolldown) {
            window.scrollTo(0, 10000);
            if (window.document.querySelectorAll(elements)[0] != undefined)
                check = window.document.querySelectorAll(elements)[0].querySelectorAll('div>div>div')[0].innerText != undefined ? false : true;
        }
        iimPlay("CODE: wait seconds=1.5");
        stop++
        if (stop == 500) iimPlay("CODE: prompt {{}} ")
        if (!check) stop = 0;
    } while (check);
}
var found = undefined,
    time = null,
    saved_link = null,
    parent_element = null;

function parentE(value, times) {
    //if(value==undefined) return;
    parent_element = value;
    for (var i = 0; i < times; i++) {
        if (parent_element.parentElement)
            parent_element = parent_element.parentElement
    }
    return parent_element
}
var profile_name = "";

function getElemntByInnertext(tagname, searchText) {
    var aTags = window.document.getElementsByTagName(tagname);
    found = undefined;
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i] == undefined) continue;
        if (aTags[i].textContent == searchText || aTags[i].innerText == searchText || aTags[i].getAttribute("data-testid") == searchText || (aTags[i].id.indexOf(searchText) == 0 && aTags[i].getAttribute("aria-label") != null) || aTags[i].placeholder == searchText || (aTags[i].title == searchText && aTags[i].rel == "dialog")) {
            found = aTags[i];
            if (profile_name == undefined || profile_name == null) continue;
            if (searchText == profile_name) {
                parentE(found, 12)
                if (parent_element.querySelectorAll('span[class="timestampContent"]')[0] != undefined) {
                    time = parent_element.querySelectorAll('span[class="timestampContent"]')[0].innerText;
                    saved_link = parent_element.querySelectorAll('span[class="timestampContent"]')[0].parentElement.parentElement.href;
                }
            }
            break;
        }
    }
    return found;
}
var dom, type, keyCode, modifier;
/// Nhớ keycode luôn có length>1 để click
function sendkey(dom, type, keyCode, modifier = false) {
    var keyboardEvent = window.document.createEvent('KeyboardEvent');
    var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
    if (typeof keyCode == "number") keyboard = keyCode;
    else keyboard = keyCode.charCodeAt(0);
    keyboardEvent[initMethod](
        type, // event type : keydown, keyup, keypress
        true, // bubbles
        true, // cancelable
        window, // viewArg: should be window
        modifier, // ctrlKeyArg
        false, // altKeyArg
        false, // shiftKeyArg
        false, // metaKeyArg
        keyboard, // keyCodeArg : unsigned long the virtual key code, else 0
        keyboard // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    );
    var text = keyCode.toString().trim();
    try {
        if (dom != undefined) {
            dom.focus();
            if (text.length > 1 || typeof keyCode == "number") {
                click(dom)
                iimPlay('Code: wait seconds=0.045')
                sendkey(dom, "keypress", "")
            }
            dom.dispatchEvent(keyboardEvent);
        } else window.document.dispatchEvent(keyboardEvent);
    } catch (e) {}
    if (text.length > 1 && typeof keyCode !== "number") {
        for (var i = 1; i < text.length; i++) {
            if (text[i] == ".") {
                copy(".")
                sendkey(dom, "keypress", 86, true)
                continue
            }
            sendkey(dom, type, text[i])
            iimPlay("CODE: WAIT SECONDS = 0.1 ");
        }
    }
}

function save_cookie() {
    iimPlay("CODE: WAIT SECONDS = 0.5 ");
    runfile("C:\\FirefoxPortable_56\\FirefoxPortable_56\\export.exe")
    iimPlay("CODE:  wait seconds=7 ") // đợi lâu để export file
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt");
    if (datapost != null && datapost != "")
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true);
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt");
    if (datapost != null && datapost != "")
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt", true);
    iimPlay("CODE: TAB OPEN \n TAB T=2 \n  URL GOTO=https://api6.ipify.org \n wait seconds=1 \n prompt {{}}") // đợi lâu để export file
}

function imacros(iimdata) {
    iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n VERSION BUILD=8970419 RECORDER=FX \n WAIT SECONDS = 1 \n SET !ENCRYPTION NO \n TAB T=1 \n " + iimdata);
}
var firstline, dataimport, datacheck, datapost, title, subject = "inbox";

function data(url, deleteline = null, new_line = null, saved_link = null, duplicate = null) {
    var fileTxt = imns.FIO.openNode(url);
    datapost = imns.FIO.readTextFile(fileTxt);
    if (subject == "comment" && (datapost == null || datapost == "")) alert("no datapost" + url);
    dataimport = datapost.split("\r\n"); //.toString().split(",");
    datacheck = dataimport[0].toString().split(",");
    //datacheck.pop(); // last element removed
    //datacheck.shift(); // first element removed
    firstline = dataimport.slice(0, 1);
    title = datacheck[2];
    link = datacheck[1];
    // myArray = imns.FIO.readTextFile(fileTxt).split("\r\n")
    // Email = myArray[Math.floor(Math.random() * myArray.length)];
    // lastname = myArray[1];
    if (new_line) {
        otherline = dataimport.slice(0);
        newline = otherline.concat(new_line).join("\r\n").trim();
        imns.FIO.writeTextFile(fileTxt, newline);
    }
    if (saved_link != null) {
        otherline = saved_link;
        firstline = dataimport.slice(0);
        newline = firstline.concat(otherline).join("\r\n").trim();
        imns.FIO.writeTextFile(fileTxt, newline);
    }
    if (deleteline) {
        otherline = dataimport.slice(1).join("\r\n").trim();
        imns.FIO.writeTextFile(fileTxt, otherline);
    }
}

function runfile(url) {
    var file = null;
    var process = null;
    var args = [""];
    // create an nsIFile for the executable
    file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
    file.initWithPath(url);
    // create an nsIProcess
    process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
    process.init(file);
    // Launch the process
    process.run(false, args, args.length);
}

function pathinfo(i) {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\clone.txt");
    if (firstline.indexOf(";") >= 0)
        thongtin = firstline.trim().split(';');
    else if (firstline.indexOf(",") >= 0)
        thongtin = firstline.trim().split(',');
    //thongtin=prompt("Nhập Cookie: định dạng c_user ; xs").split(' ; ');
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
try {
    if (subject == "post") {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt")
        var original = datacheck;
        var linkgroup = link;
        if (link != null && link != undefined) {
            main();
            post();
        } else alert("no link to post")
    } else if (subject == "comment") {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt")
        var linkgroup = link; // vì để lưu link ra nữa 
        if (link != null && link != undefined) {
            main();
            iimPlay('Code: wait seconds=1')
            comment();
        } else alert("no link to comment")
    } else if (subject == "getlinkgroup") {
        getlinkgroup();
    } else if (subject == "inbox") {
        inbox();
    } else if (subject == "gmailchangepass") {
        gmailchangepass();
    } else if (subject == "gmailchecklogin") {
        gmailchecklogin();
    }
} catch (e) {
    iimPlay("CODE: prompt {{}}")
}

function comment() {
    var dom;
    dom = window.document.querySelectorAll('div[data-testid="UFI2ComposerInput/comment:proxy-input"]')[0];
    click(dom);
    dom = window.document.querySelectorAll('div[data-testid="UFI2ComposerInput/comment:rich-input"]')[0];
    var txt = "please".trim()
    for (var i = 0; i < txt.length; i++) {
        sendkey(dom, "keypress", txt[i])
    }
    // sendkey(dom,"keypress",86,true)  // ctrl V ko có dc
    sendkey(dom, "keydown", 13)
        // sendkey(dom,"keydown",13,true) // ctrl enter
    iimPlay("CODE: wait seconds=2 \n prompt {{}} ")
}
var profile_name = "";

function main() { // dùng để load link và kiem tra link tồn tại ok
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /// load url cần tìm
    iimdata = ' TAB CLOSEALLOTHERS \n ' + ' WAIT SECONDS = ' + wait(1, 2) + '\n' + ' URL GOTO= URL GOTO=' + linkgroup + '\n'
        // + ' SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt \n'
        // + ' SET !DATASOURCE_LINE 1 \n'
    imacros(iimdata);
    window.scrollTo(0, 300);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// check login
    var find = window.document.querySelectorAll('div[data-testid="UFI2Composer/root"]')
    for (var i = 0; i < find.length; i++) {
        if (find[i] != undefined) {
            if (find[i].querySelectorAll('div>span>img')[0] != undefined)
                profile_name = find[i].querySelectorAll('div>span>img')[0].alt;
            break;
        }
    }
    var profile_icon = window.document.querySelectorAll('div[data-click="profile_icon"]')[0];
    if (profile_icon == undefined) {
        iimPlay("CODE: PROMPT No_login ")
        alert("No login")
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// kiểm tra xem joing gr hay pending gì ko, nếu có thì đổi profile hoac link khác
    var start = false;
    getElemntByInnertext("h2", "Sorry, this content isn't available at the moment")
    if (found == undefined) {
        getElemntByInnertext("a", "joinButton_")
        if (found == undefined) {
            getElemntByInnertext("a", "Pending")
            if (found == undefined) {
                getElemntByInnertext("div", "react-composer-root") // có quyền post hay k
                if (found != undefined) {
                    getElemntByInnertext("span", "The admin has temporarily turned off commenting.") // có bị khóa post hay k
                    if (found == undefined)
                        getElemntByInnertext("div", "No posts to show")
                    if (found == undefined)
                        start = true;
                }
            }
        };
    }
    if (!start && subject == "post") {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true) // xóa dong đầu tiên 
        iimPlay("CODE: PROMPT Can't_post ")
    } else;
}

function post() {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// click vào các ô trắng tìm để write post
    getElemntByInnertext("span", "Start Discussion")
    if (found != undefined) {
        click(found); /////// click vào start discussion
        do_while('div[data-contents="true"]'); // lệnh chờ tới khí element tồn tại
    }
    iimPlay('Code: wait seconds=1')
    getElemntByInnertext("textarea", "Write something...")
    click(found);
    /////////////////////// click vào ô trắng write something
    do_while('div[role="combobox"]', null, null, null, true) // lệnh chờ tới khí element tồn tại
        ///////////////////////////////////////////////////////////////////////
    click(window.document.querySelectorAll('div[role="combobox"]')[0]);
    /////////////////////// click vào ô trắng đã hiện lên để viết
    getElemntByInnertext("span", "Write post in another language")
    click(found);
    getElemntByInnertext("a", "Select ▾")
    click(found);
    iimPlay('Code: wait seconds=1')
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// viết post 
    function content() {
        dom = window.document.querySelectorAll('input[placeholder="Type to search"]')[0];
        click(dom);
        sendkey(dom, "keypress", "Vietnamese")
        iimPlay('Code: wait seconds=1')
        sendkey(dom, "keydown", 13)
        iimPlay('Code: wait seconds=1')
            /// paste content
        sendkey(dom, "keydown", 13)
        var choose_data = getRandomInt(1, 2)
        if (choose_data == 1) data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
        else data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\Vname.txt")
        copy(datapost)
        do_while('div[data-contents="true"]')
        dom = window.document.querySelectorAll('div[data-contents="true"]')[0].querySelectorAll('div>div')[0]
        click(dom);
        iimPlay('Code: wait seconds=1')
        sendkey(dom, "keypress", 86, true)
        iimPlay('Code: wait seconds=2')
        if (choose_data == 1) data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\Vname.txt")
        else data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
        copy(datapost)
        do_while('div[data-contents="true"]', true)
        if (window.document.querySelectorAll('div[data-contents="true"]')[1] != undefined) {
            dom = window.document.querySelectorAll('div[data-contents="true"]')[1].querySelectorAll('div>div')[0]
            click(dom);
            iimPlay('Code: wait seconds=1')
            sendkey(dom, "keypress", 86, true)
        }
    }
    do_while('button[disabled=""]', content)
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// /// check xem đã post chưa và lưu data ra
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 0 \n WAIT SECONDS = 1.5 \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Post \n WAIT SECONDS = 5  \n TAG POS=1 TYPE=A ATTR=TXT:Manage<SP>your<SP>pending<SP>posts. ");
    error = iimGetErrorText();
    iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n TAG POS=1 TYPE=A ATTR=TXT:Like \n WAIT SECONDS= 2");
    //    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", null, true) // đổi profile khác
    if (error != "OK") { //  có lỗi, tức là ko click dc vào Manage your pending post --> link post thành công
        do {
            getElemntByInnertext("a", profile_name)
            check = found != undefined ? false : true;
            iimPlay("CODE:  WAIT SECONDS = 1");
        } while (check); // check phải bang false và time="Just now" thì stop, dấu || chính là && trong while, while lun play khi 1 trong các ĐK xảy ra
        iimdata = ' TAG POS=3 TYPE=SPAN ATTR=TXT:Just<SP>now \n WAIT SECONDS = 2'
        imacros(iimdata);
        saved_link = window.location.href;
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, original.concat(saved_link).toString().trim()) // save link vừa post 
    } else {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, original.concat("pending").toString().trim()) // save link vừa post 	
    }
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true) // delete link group mới post xong
    iimPlay("CODE: TAB OPEN \n TAB T=2 \n URL GOTO= \n wait seconds=3 ")
    iimPlay("CODE:prompt {{}} ")
}

function getlinkgroup() {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt");
    if (firstline == null && firstline == "") {
        alert("no data in import file")
        return;
    }
    if (firstline.toString().indexOf(",") >= 0) firstline = firstline.toString().split(',')[0]
    var profile = firstline;
    var keyword = encodeURI("robot");
    iimdata = ' TAB CLOSEALLOTHERS \n ' + ' WAIT SECONDS = ' + wait(1, 2) + '\n' + ' URL GOTO= https://www.facebook.com/search/groups/?q=' + keyword + '&epa  \n TAG POS=1 TYPE=SPAN ATTR=TXT:My<SP>groups \n FILEDELETE NAME=C:\\FirefoxPortable_56\\FirefoxPortable_56\\' + profile + '.txt \n SET !EXTRACT NULL  \n   SAVEAS TYPE=EXTRACT FOLDER=C:\\FirefoxPortable_56\\FirefoxPortable_56 FILE=' + profile + '.txt'
    imacros(iimdata);
    do_while('div[id="browse_end_of_results_footer"]', null, null, true)
    var group = window.document.querySelectorAll('div[data-testid="browse-result-content"]')
        //runfile("C:\\FirefoxPortable_56\\FirefoxPortable_56\\"+profile+".txt")
    for (var i = 0; i < group.length; i++) {
        link = window.document.querySelectorAll('div[data-testid="browse-result-content"]')[i].querySelector("div>div>div>div>div>a").href
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\" + profile + ".txt", null, link);
    }
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true);
    iimPlay("CODE: wait seconds=1 \n prompt {{}} ")
}

function inbox() {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt");
    if (firstline == null && firstline == "") {
        alert("no data in txt file")
        return;
    }
    var id = "";
    if (firstline.toString().indexOf(",") >= 0) id = firstline.toString().split(',')[1]
    else id = firstline;
    var keyword = encodeURI("tuyển dung logicstic");
    /// set content để post, phải đặt content trước các lệnh sendkey và click
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
    copy(datapost);
    iimdata = ' TAB CLOSEALLOTHERS \n URL GOTO= https://www.messenger.com/t/' + id + ' \n WAIT SECONDS = 1'
    imacros(iimdata);
    do_while('div[data-testid="info_panel"]')
    iimPlay("CODE: WAIT SECONDS = 2 ");
    var block = getElemntByInnertext("div", "You cannot reply to this conversation.")
    block = getElemntByInnertext("div", "Bạn không thể trả lời cuộc trò chuyện này")
    if (block != undefined) {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt", true);
        iimPlay("CODE: wait seconds=1 \n prompt {{}} ")
    }
    var dom = window.document.querySelectorAll('div[data-contents="true"]')[0].querySelectorAll('div>div')[0]
    sendkey(dom, "keypress", 86, true)
    iimPlay("CODE: WAIT SECONDS = 3 ");
    sendkey(dom, "keydown", 13);
    iimPlay("CODE: WAIT SECONDS = 5 ");
    if (window.document.querySelectorAll('div[aria-label="' + datapost + '"]')[0] != undefined) {
        dom = window.document.querySelectorAll('div[aria-label="' + datapost + '"]')[0]
        hover(dom);
        dom = parentE(dom, 1).querySelectorAll('span:nth-child(3)')[0]
        click(dom)
        iimdata = 'WAIT SECONDS = 2s \n TAG POS=1 TYPE=A ATTR=TXT:Remove \n WAIT SECONDS = 4'
        imacros(iimdata);
        dom = window.document.querySelectorAll('input[name="messengerRemoveOptions"]')[0]
        sendkey(dom, "keypress", 40);
        iimdata = ' WAIT SECONDS = 2 \n TAG POS=1 TYPE=A ATTR=TXT:Remove \n TAG POS=2 TYPE=BUTTON ATTR=TXT:Remove \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Remove \n WAIT SECONDS = 3 '
        imacros(iimdata);
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt", true);
    }
    iimPlay("CODE: wait seconds=1 \n prompt {{}} ")
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function gmailchangepass() {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\add.txt");
    if (firstline == null || firstline == "") {
        alert("no data in import file")
        return;
    }
    if (firstline.toString().indexOf(",") >= 0) {
        id = firstline.toString().split(',')[0]
        if (id.indexOf('@') >= 0) id = id.split('@')[0];
        pass = firstline.toString().split(',')[1]
        recovery_mail = firstline.toString().split(',')[2]
    } else id = firstline;
    var newpass = reverseString(id);
    iimdata = ' TAB CLOSEALLOTHERS \n URL GOTO= https://accounts.google.com/signin/v2 \n WAIT SECONDS = 1'
    imacros(iimdata);
    if (window.location.href.indexOf("myaccount.google") < 0) {
        do_while('h1[id="headingText"]')
        var dom = window.document.querySelectorAll('input[id="identifierId"]')[0]
        sendkey(dom, "keypress", id)
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        var dom = window.document.querySelectorAll('div[id="identifierNext"]')[0].querySelectorAll('span')[0];
        click(dom);
        do_while('input[type="password"]');
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        var dom = window.document.querySelectorAll('input[type="password"]')[0]
        sendkey(dom, "keypress", pass)
        iimPlay("CODE: WAIT SECONDS = 1 ");
        var dom = window.document.querySelectorAll('div[id="passwordNext"]')[0].querySelectorAll('span')[0];
        click(dom);
        do_while('accounts.google.com');
    }
    if (pass != newpass) {
        iimdata = ' TAB CLOSEALLOTHERS \n URL GOTO= https://myaccount.google.com/security \n WAIT SECONDS = 1'
        imacros(iimdata);
        do {
            check = window.document.getElementsByTagName("h3")[0] != undefined ? false : true;
            iimPlay("CODE: WAIT SECONDS = 0.5 ");
        } while (check)
        dom = window.document.getElementsByTagName("h3")[0];
        click(dom)
        do_while('input[type="password"]');
        dom = window.document.querySelectorAll('input[type="password"]')[0]
        sendkey(dom, "keypress", pass)
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        sendkey(dom, "keydown", 13);
        do_while('input[type="password"]');
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        dom = window.document.querySelectorAll('input[type="password"]')[0]
        sendkey(dom, "keypress", newpass)
        dom = window.document.querySelectorAll('input[type="password"]')[1]
        sendkey(dom, "keypress", newpass)
        dom = getElemntByInnertext("span", "Change password")
        click(dom)
        sendkey(dom, "keydown", 13);
        do {
            check = window.document.getElementsByTagName("h3")[0] != undefined ? false : true;
            iimPlay("CODE: WAIT SECONDS = 0.5 ");
        } while (check)
    }
    iimPlay("CODE: WAIT SECONDS = 0.5 ");
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, id.concat(",").concat(newpass).concat(",").concat(recovery_mail).toString().trim())
    save_cookie();
}

function gmailchecklogin() {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt");
    if (firstline == null || firstline == "") {
        alert("no data in import file")
        return;
    }
    if (firstline.toString().indexOf(",") >= 0) {
        id = firstline.toString().split(',')[0]
        if (id.indexOf('@') >= 0) id = id.split('@')[0];
        pass = firstline.toString().split(',')[1]
        recovery_mail = firstline.toString().split(',')[2]
    } else id = firstline;
    iimdata = ' TAB CLOSEALLOTHERS \n URL GOTO= https://accounts.google.com/signin/v2 \n WAIT SECONDS = 1'
    imacros(iimdata);
    if (window.location.href.indexOf("myaccount.google") < 0) {
        do_while('h1[id="headingText"]')
        var dom = window.document.querySelectorAll('input[id="identifierId"]')[0]
        sendkey(dom, "keypress", id)
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        var dom = window.document.querySelectorAll('div[id="identifierNext"]')[0].querySelectorAll('span')[0];
        click(dom);
        do_while('input[type="password"]');
        iimPlay("CODE: WAIT SECONDS = 0.5 ");
        var dom = window.document.querySelectorAll('input[type="password"]')[0]
        sendkey(dom, "keypress", pass)
        iimPlay("CODE: WAIT SECONDS = 1 ");
        var dom = window.document.querySelectorAll('div[id="passwordNext"]')[0].querySelectorAll('span')[0];
        click(dom);
        do_while('accounts.google.com');
        //data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, firstline)
    }
    var newpass = reverseString(id);
    if (pass != newpass) alert("WRONG PASS");
    var mail = getElemntByInnertext("div", id.toLowerCase() + "@gmail.com")
    if (mail == undefined) data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, firstline)
    save_cookie();
}