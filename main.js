
function validarROM() {
    var one_n1 = (txt_1n1.value).toLowerCase();
    var one_n2 = (txt_1n2.value).toLowerCase();
    var one_n3 = (txt_1n3.value).toLowerCase();

    if (one_n1 == "r" && one_n2 == "o" && one_n3 == "m") {
        txt_1n1.style.color = "green";
        txt_1n2.style.color = "green";
        txt_1n3.style.color = "green";

        txt_1n1.disabled = "disabled";
        txt_1n2.disabled = "disabled";
        txt_1n3.disabled = "disabled";

    }

    else {
        txt_1n1.style.color = "red";
        txt_1n2.style.color = "red";
        txt_1n3.style.color = "red";
    }
}

function validarEPROM() {
    var two_n1 = (txt_2n1.value).toLowerCase();
    var two_n2 = (txt_2n2.value).toLowerCase();
    var two_n3 = (txt_2n3.value).toLowerCase();
    var two_n5 = (txt_2n5.value).toLowerCase();

    if(two_n1 == "e" && two_n2 == "p" && two_n3 == "r" && txt_1n2.value == "o" && two_n5 == "m"){
        txt_2n1.style.color = "green";
        txt_2n2.style.color = "green";
        txt_2n3.style.color = "green";
        txt_1n2.style.color = "green";
        txt_2n5.style.color = "green";

        txt_2n1.disabled = "disabled";
        txt_2n2.disabled = "disabled";
        txt_2n3.disabled = "disabled";
        txt_1n2.disabled = "disabled";
        txt_2n5.disabled = "disabled";
    }

    else{
        txt_2n1.style.color = "red";
        txt_2n2.style.color = "red";
        txt_2n3.style.color = "red";
        txt_2n5.style.color = "red";
    }
}

function validarRAM() {
    var three_n1 = (txt_3n1.value).toLowerCase();
    var three_n2 = (txt_3n2.value).toLowerCase();
    var three_n3 = (txt_3n3.value).toLowerCase();

    if(three_n1 == "r" && three_n2 == "a" && three_n3 == "m"){
        txt_3n1.style.color = "green";
        txt_3n2.style.color = "green";
        txt_3n3.style.color = "green";

        txt_3n1.disabled = "disabled";
        txt_3n2.disabled = "disabled";
        txt_3n3.disabled = "disabled";
    }

    else{
        txt_3n1.style.color = "red";
        txt_3n2.style.color = "red";
        txt_3n3.style.color = "red";
    }
}

function validarCPU() {
    four_n1 = (txt_4n1.value).toLowerCase();
    four_n2 = (txt_4n2.value).toLowerCase();
    four_n3 = (txt_4n3.value).toLowerCase();

    if(four_n1 == "c" && four_n2 == "p" && four_n3 == "u"){
        txt_4n1.style.color = "green";
        txt_4n2.style.color = "green";
        txt_4n3.style.color = "green";

        txt_4n1.disabled = "disabled";
        txt_4n2.disabled = "disabled";
        txt_4n3.disabled = "disabled";

    }

    else{
        txt_4n1.style.color = "red";
        txt_4n2.style.color = "red";
        txt_4n3.style.color = "red";
    }
}

function validarFlash() {
    var five_n1 = (txt_5n1.value).toLowerCase();
    var five_n2 = (txt_5n2.value).toLowerCase();
    var five_n3 = (txt_5n3.value).toLowerCase();
    var five_n4 = (txt_5n4.value).toLowerCase();
    var five_n5 = (txt_5n5.value).toLowerCase();

    if(five_n1 == "f" && five_n2 == "l" && five_n3 == "a" && five_n4 == "s" && five_n5 == "h"){
        txt_5n1.style.color = "green";
        txt_5n2.style.color = "green";
        txt_5n3.style.color = "green";
        txt_5n4.style.color = "green";
        txt_5n5.style.color = "green";

        txt_5n1.disabled = "disabled";
        txt_5n2.disabled = "disabled";
        txt_5n3.disabled = "disabled";
        txt_5n4.disabled = "disabled";
        txt_5n5.disabled = "disabled";

    }

    else{
        txt_5n1.style.color = "red";
        txt_5n2.style.color = "red";
        txt_5n3.style.color = "red";
        txt_5n4.style.color = "red";
        txt_5n5.style.color = "red";
    }
}

function validarI7(){
    var fiveteen_n1 = (txt_15n1.value).toLowerCase();
    var fiveteen_n2 = (txt_15n2.value).toLowerCase();

    if(fiveteen_n1 == "i" && fiveteen_n2 == 7){
        txt_15n1.style.color = "green";
        txt_15n2.style.color = "green";

        txt_15n1.disabled = "disabled";
        txt_15n2.disabled = "disabled";
    }

    else{
        txt_15n1.style.color = "red";
        txt_15n2.style.color = "red";
    }
}