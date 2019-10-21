function checkconnect() {
do {
var myObject = {
    firstName:true,
    lastName: false,
    fullName: function testconnect() {
    const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");
        var xhr = new XMLHttpRequest();
        var file =  "https://google.com" ; 
        xhr.open('HEAD', file , false);
iimPlayCode(" wait seconds=1")
        try {
            xhr.send();
            return this.firstName;;
        } catch (e) {
            return  this.lastName;
        }
    } ,
} ;
}
while (!myObject.fullName())
}
checkconnect()