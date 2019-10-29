function runfile(url, args) {
    var file = null;
    var process = null;
    if (args == null) args = [""]
    // create an nsIFile for the executable
    file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
    file.initWithPath(url);
    // create an nsIProcess
    process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
    process.init(file);
    // Launch the process
    process.run(false, args, args.length);
}
runfile("C:\\Users\\Admin\\source\\repos\\test2\\test2\\bin\\Release\\auth.exe",["5TZC Y6EG JBHE P5IE 3MOK KQNT KCTL 4EFC"])