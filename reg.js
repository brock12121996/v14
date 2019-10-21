
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
        } catch (err) {}
    }
}
function sendkey(dom, type,keyCode, modifier=false){
  var keyboardEvent = window.document.createEvent('KeyboardEvent');
  var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
  if (typeof keyCode=="number" ) keyboard=keyCode;
  else                          keyboard=keyCode.charCodeAt(0);
 
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
    if (dom != undefined)
	{
		//alert("")
		dom.focus();
        dom.dispatchEvent(keyboardEvent);
	}
	else dom.dispatchEvent(keyboardEvent);
}

function copy(text) {
    var input = window.document.createElement('input');
    input.setAttribute('value', text);
    window.document.body.appendChild(input);
    input.select();
    var result = window.document.execCommand('copy');
    window.document.body.removeChild(input)
    return result;
 }
//copy("123")
var dom;
dom=window.document.querySelectorAll('div[data-testid="UFI2ComposerInput/comment:rich-input"]')[0]
click(dom);
var txt="please".trim()
for (var i = 0; i < txt.length; i++) {
    //sendkey(dom,"keypress",txt[i])  
}
    sendkey(dom,"keypress",86,true)  // ctrl V ko có dc
   // sendkey(dom,"keydown",13) 
  // sendkey(dom,"keydown",13,true) // ctrl enter
 