var a=window.document.querySelectorAll('span[data-tooltip-alignh="center"]')[0]
parentE(a,1)

function parentE(value, times) {
//	if(value==undefined) return;
    parent_element = value;
    for (var i = 0; i < times; i++) {
        if (parent_element.parentElement)
            parent_element = parent_element.parentElement
    }
    return parent_element
}