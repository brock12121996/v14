var connect = true;

function check_connect() {
    var myObject = {
        firstName: true,
        lastName: false,
        fullName: function testconnect() {
            const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");

            var xhr = new XMLHttpRequest();
            var file = "https://www.google.com"
            var randomNum = Math.round(Math.random() * 100);

            xhr.open('HEAD', file + "?rand=" + randomNum, false);

            try {
                xhr.send();

                if (xhr.status >= 200 && xhr.status < 304) {

                    return this.firstName;;

                } else {

                    window.location.href = "";
                    return this.firstName;;
                }
            } catch (e) {
                return this.lastName;
            }
        },
    };
    connect = myObject.fullName()

}

do {
    iimPlay('Code: wait seconds=1')
    check_connect();
    if (connect == true) connect = false
    else connect = true;

}
while (connect)

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
function click(object_click) {
    if (object_click != undefined) {
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

function do_while(elements, callback = null) {
    do {
        if (elements == 'button[disabled=""]') {
            check = window.document.querySelectorAll(elements)[0] == undefined ? false : true;
        } else {
            check = window.document.querySelectorAll(elements)[0] != undefined ? false : true;

        }
        if (callback != null && check == true) {
            callback();
        }
        iimPlay("CODE: wait seconds=1.5");
    } while (check);
}
var found, time = null,
    saved_link = null;

function getElemntByInnertext(tagname, searchText) {
    var aTags = window.document.getElementsByTagName(tagname);
    found = undefined;
    iimPlay("CODE:  WAIT SECONDS = 0.2");
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i] == undefined) continue;
        if (aTags[i].textContent == searchText || aTags[i].innerText == searchText || aTags[i].getAttribute("data-testid") == searchText || (aTags[i].id.indexOf(searchText) == 0 && aTags[i].getAttribute("aria-label") != null) || aTags[i].placeholder == searchText || (aTags[i].title == searchText && aTags[i].rel == "dialog")) {
            found = aTags[i];
            if (searchText == profile_name) {
                if (aTags[i].parentElement.querySelectorAll('span[class="timestampContent"]')[0] != undefined) {
                    var parent_element = aTags[i].parentElement.querySelectorAll('span[class="timestampContent"]')[0];
                    time = parent_element.innerText;
                    saved_link = parent_element.parentElement.parentElement.href;
                }
            }

            break;
        }

    }
    return found;
}
var dom, type, keyCode, modifier;

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
    if (dom != undefined) {

        dom.focus();
        dom.dispatchEvent(keyboardEvent);
    } else window.document.dispatchEvent(keyboardEvent);
}

function imacros(iimdata) {
    iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n VERSION BUILD=8970419 RECORDER=FX \n WAIT SECONDS = 1 \n SET !ENCRYPTION NO \n TAB T=1 \n " + iimdata);
}
var firstline, dataimport, datacheck, datapost, title, subject = "nocomment";

function data(url, deleteline = null, changeprofile = null, saved_link = null, duplicate = null) {
    var fileTxt = imns.FIO.openNode(url);
    datapost = imns.FIO.readTextFile(fileTxt);
    if (subject == "comment" && (datapost == null || datapost == "")) alert("no datapost" + url);
    dataimport = datapost.split("\r\n"); //.toString().split(",");
    datacheck = dataimport[0].toString().split(",");
    //datacheck.pop(); // last element removed
    //datacheck.shift(); // first element removed
    firstline = dataimport.slice(0, 1);
    link = datacheck[3];
    title = datacheck[2];
    // myArray = imns.FIO.readTextFile(fileTxt).split("\r\n")
    // Email = myArray[Math.floor(Math.random() * myArray.length)];
    // lastname = myArray[1];
    if (changeprofile) {
        otherline = dataimport.slice(1);
        newline = otherline.concat(firstline).join("\r\n").trim();
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
    if (duplicate != null) {
        fileTxt = imns.FIO.openNode(url);
        var len = dataimport.length;
        for (var i = 0; i < len; i++) {

            datacheck = dataimport[i].toString().split(",");
            //datacheck.pop(); // last element removed
            datacheck.shift(); // first element removed
            link = datacheck.toString();
            // tìm group và tiêu đề đã post
            var compare_fileTxt = imns.FIO.openNode(duplicate);
            olddata = imns.FIO.readTextFile(compare_fileTxt).split("\r\n");
            newlen = olddata.length;
            if (olddata == "" || olddata == null) break;
            for (var j = 0; j < newlen; j++) {
                var oldlink = olddata[j].toString().split(",");
                oldlink.pop();
                oldlink.shift();
                if (oldlink.toString() == link) {
                    otherline = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n").trim();
                    imns.FIO.writeTextFile(fileTxt, otherline);
                    // nếu trùng thì xóa
                    break;
                }
            }
        }
        link = datacheck[0]; // đã shift hoặc post cắt bớt oject đầu cuoi trong array
        title = datacheck[1]; // đã shift hoặc post cắt bớt oject đầu cuoi trong array

    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
if (subject != "comment") {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", null, null, null, "C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt")
    var linkgroup = link; // vì để lưu link ra nữa 
    var titlegroup = title; // vì để lưu link ra nữa 
    if (link != null && link != undefined) {
        main();
        post();
    } else alert("no link to post")

} else {
    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt")
    var linkgroup = link; // vì để lưu link ra nữa 
    if (link != null && link != undefined) {
        main();
        iimPlay('Code: wait seconds=1')
        comment();
    } else alert("no link to comment")
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

    iimdata = ' TAB CLOSEALLOTHERS \n ' + ' WAIT SECONDS = ' + wait(1, 2) + '\n' + ' URL GOTO=' + linkgroup + '\n'
        // + ' SET !DATASOURCE C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt \n'
        // + ' SET !DATASOURCE_LINE 1 \n'
    imacros(iimdata);
    window.scrollTo(0, 500);
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
    if (profile_name == "") {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true)
        iimPlay("CODE: prompt {{}} ")
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
                    if (found == undefined) start = true;
                }
            }
        };
    }
    if (!start && subject != "comment") {
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true) // xóa dong đầu tiên 
        iimPlay("CODE: prompt {{}} ")
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

    do_while('div[role="combobox"]') // lệnh chờ tới khí element tồn tại
        ///////////////////////////////////////////////////////////////////////
    var someLink = window.document.querySelectorAll('div[role="combobox"]')[0];
    click(someLink);
    /////////////////////// click vào ô trắng đã hiện lên để viết
    getElemntByInnertext("span", "Write post in another language")
    click(found);
    getElemntByInnertext("a", "Select ▾")
    click(found);
    iimPlay('Code: wait seconds=1')
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// viết post 
    function content() {
        iimdata = 'TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=Vietnamese \n ' + ' WAIT SECONDS = 2 \n '
        imacros(iimdata);
        dom = window.document.querySelectorAll('input[placeholder="Type to search"]')[0];
        click(dom);
        iimPlay('Code: wait seconds=1')
        sendkey(dom, "keydown", 13)
        sendkey(dom, "keydown", 13)
        iimPlay('Code: wait seconds=1')
            /// paste content
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\data.txt")
        copy(datapost)
        dom = window.document.querySelectorAll('div[data-contents="true"]')[0].querySelectorAll('div>div')[0]
        click(dom);
        iimPlay('Code: wait seconds=1')
        sendkey(dom, "keypress", 86, true)
        iimPlay('Code: wait seconds=2')
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\Vname.txt")
        copy(datapost)
        dom = window.document.querySelectorAll('div[data-contents="true"]')[1].querySelectorAll('div>div')[0]
        click(dom);
        iimPlay('Code: wait seconds=1')
        sendkey(dom, "keypress", 86, true)

    }
    do_while('button[disabled=""]', content)
    iimPlay("CODE: SET !ERRORIGNORE yes \n SET !TIMEOUT_STEP 0 \n WAIT SECONDS = 1.5 \n TAG POS=1 TYPE=BUTTON ATTR=TXT:Post \n WAIT SECONDS = 3"); /////////////////////// nhấn post
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// /// check xem đã post chưa và lưu data ra
    do {
        getElemntByInnertext("a", profile_name)
        check = found != undefined ? false : true;
        iimPlay("CODE:  WAIT SECONDS = 1");
    } while (check && time !== "Just now"); // check phải bang false và time="Just now" thì stop
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    iimPlay("CODE: SET !ERRORIGNORE no \n SET !TIMEOUT_STEP 0 \n WAIT SECONDS = 1 \n TAG POS=1 TYPE=A ATTR=TXT:Like \n WAIT SECONDS = 2 \n TAG POS=1 TYPE=A ATTR=TXT:Manage<SP>your<SP>pending<SP>posts. \n WAIT SECONDS = 1 ");
    error = iimGetErrorText();
    if (found != undefined) {
        //    data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", null, true) // đổi profile khác
        if (error != "OK") { //  có lỗi, tức là ko click dc vào Manage your pending post --> link post thành công
            data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, firstline.concat(linkgroup).concat(titlegroup).concat(saved_link).toString().trim()) // save link vừa post 
        } else {
            data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt", null, null, firstline.concat(linkgroup).concat(titlegroup).concat("pending").toString().trim()) // save link vừa post 	
        }
        data("C:\\FirefoxPortable_56\\FirefoxPortable_56\\import.txt", true) // delete link group mới post xong
        iimPlay("CODE: wait seconds=2 \n prompt {{}} ")
    }

}