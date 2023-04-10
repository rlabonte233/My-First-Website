var bodyHeight = document.body.clientHeight
if(window.innerHeight>bodyHeight){
    document.querySelector("footer").style = `position: absolute; left: 0; top: ${window.innerHeight - document.querySelector("footer").clientHeight}px:`
}