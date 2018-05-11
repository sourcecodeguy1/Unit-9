// This function will execute when the body loads.
function bind() {
    wordItems = document.getElementsByTagName('strong');
// apply onMouseOver event to all strong items
    for (var i = 0; i < wordItems.length; i++) {
        wordItems[i].onmouseover = function () {
            this.style.color = "red";
        };
    }

}

