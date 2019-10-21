info("C:\\FirefoxPortable_56\\FirefoxPortable_56\\gmail.txt")
function info(url)
{
    var fileTxt = imns.FIO.openNode(url);
            
            lines = imns.FIO.readTextFile(fileTxt).split("\r\n").slice(1).join("\r\n");
            res  =  imns.FIO.readTextFile(fileTxt).split("\r\n").slice(-1)
            imns.FIO.writeTextFile(fileTxt, lines);
}
window.location.href="https://graph.facebook.com/100003911356810_2227345224072501/comments?message="+res+"&access_token=EAAAAUaZA8jlABAB9GHDqme3w1QDCZC67GaJT1i4zHItPZCOgbtgqUZCKmYJqhAu63BsGeZAZA1wD0P1ihdnfzCOKGNR7hGmwHZAMOmwUc4KTPBoM3GoEqriFDnqxb5wym7ZAcTIrOrmFSKNnDSy9mpIhqtv2IED4vucZA5LNoz8bEmgZDZD&method=post"