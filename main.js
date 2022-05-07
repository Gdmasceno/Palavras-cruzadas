
function validarROM() {
    var five_n1 = (txt_5n1.value).toLowerCase();
    var five_n2 = (txt_5n2.value).toLowerCase();
    var five_n3 = (txt_5n3.value).toLowerCase();

    if (five_n1 == "r" && five_n2 == "o" && five_n3 == "m") {
        txt_5n1.style.color = "green";
        txt_5n2.style.color = "green";
        txt_5n3.style.color = "green";

        txt_5n1.disabled = "disabled";
        txt_5n2.disabled = "disabled";
        txt_5n3.disabled = "disabled";

    }

    else {
        txt_5n1.style.color = "red";
        txt_5n2.style.color = "red";
        txt_5n3.style.color = "red";
    }
}

function validarEPROM() {
    var six_n1 = (txt_6n1.value).toLowerCase();
    var six_n2 = (txt_6n2.value).toLowerCase();
    var six_n3 = (txt_6n3.value).toLowerCase();
    var six_n5 = (txt_6n5.value).toLowerCase();

    if(six_n1 == "e" && six_n2 == "p" && six_n3 == "r" && txt_5n2.value == "o" && six_n5 == "m"){
        txt_6n1.style.color = "green";
        txt_6n2.style.color = "green";
        txt_6n3.style.color = "green";
        txt_5n2.style.color = "green";
        txt_6n5.style.color = "green";

        txt_6n1.disabled = "disabled";
        txt_6n2.disabled = "disabled";
        txt_6n3.disabled = "disabled";
        txt_5n2.disabled = "disabled";
        txt_6n5.disabled = "disabled";
    }

    else{
        txt_6n1.style.color = "red";
        txt_6n2.style.color = "red";
        txt_6n3.style.color = "red";
        txt_6n5.style.color = "red";
    }
}

function validarI7(){
    var fourteen_n1 = (txt_14n1.value).toLowerCase();
    var fourteen_n2 = (txt_14n2.value).toLowerCase();

    if(fourteen_n1 == "i" && fourteen_n2 == 7){
        txt_14n1.style.color = "green";
        txt_14n2.style.color = "green";

        txt_14n1.disabled = "disabled";
        txt_14n2.disabled = "disabled";
    }

    else{
        txt_14n1.style.color = "red";
        txt_14n2.style.color = "red";
    }
}