
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

function validarI7(){
    var three_n1 = (txt_3n1.value).toLowerCase();
    var three_n2 = (txt_3n2.value).toLowerCase();

    if(three_n1 == "i" && three_n2 == 7){
        txt_3n1.style.color = "green";
        txt_3n2.style.color = "green";

        txt_3n1.disabled = "disabled";
        txt_3n2.disabled = "disabled";
    }

    else{
        txt_3n1.style.color = "red";
        txt_3n2.style.color = "red";
    }
}