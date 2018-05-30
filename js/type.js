document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var i = 0;
    function typing() {
        var txt = 'hi im Marcin, aspiring developer';
        if (i < txt.length) {
            document.querySelector(".welcome").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typing,50);
        }
    }

    typing();


});