
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

    if (two_n1 == "e" && two_n2 == "p" && two_n3 == "r" && txt_1n2.value == "o" && two_n5 == "m") {
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

    else {
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

    if (three_n1 == "r" && three_n2 == "a" && three_n3 == "m") {
        txt_3n1.style.color = "green";
        txt_3n2.style.color = "green";
        txt_3n3.style.color = "green";

        txt_3n1.disabled = "disabled";
        txt_3n2.disabled = "disabled";
        txt_3n3.disabled = "disabled";
    }

    else {
        txt_3n1.style.color = "red";
        txt_3n2.style.color = "red";
        txt_3n3.style.color = "red";
    }
}

function validarCPU() {
    four_n1 = (txt_4n1.value).toLowerCase();
    four_n2 = (txt_4n2.value).toLowerCase();
    four_n3 = (txt_4n3.value).toLowerCase();

    if (four_n1 == "c" && four_n2 == "p" && four_n3 == "u") {
        txt_4n1.style.color = "green";
        txt_4n2.style.color = "green";
        txt_4n3.style.color = "green";

        txt_4n1.disabled = "disabled";
        txt_4n2.disabled = "disabled";
        txt_4n3.disabled = "disabled";

    }

    else {
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

    if (five_n1 == "f" && five_n2 == "l" && five_n3 == "a" && five_n4 == "s" && five_n5 == "h") {
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

    else {
        txt_5n1.style.color = "red";
        txt_5n2.style.color = "red";
        txt_5n3.style.color = "red";
        txt_5n4.style.color = "red";
        txt_5n5.style.color = "red";
    }
}

function validarULA() {
    var six_n1 = (txt_6n1.value).toLowerCase();
    var six_n2 = (txt_6n2.value).toLowerCase();
    var six_n3 = (txt_6n3.value).toLowerCase();

    if (six_n1 == "u" && six_n2 == "l" && six_n3 == "a") {
        txt_6n1.style.color = "green";
        txt_6n2.style.color = "green";
        txt_6n3.style.color = "green";

        txt_6n1.disabled = "disabled";
        txt_6n2.disabled = "disabled";
        txt_6n3.disabled = "disabled";

    }

    else {
        txt_6n1.style.color = "red";
        txt_6n2.style.color = "red";
        txt_6n3.style.color = "red";
    }
}

function validarDMA() {
    var seven_n1 = (txt_7n1.value).toLowerCase();
    var seven_n2 = (txt_7n2.value).toLowerCase();
    var seven_n3 = (txt_7n3.value).toLowerCase();

    if (seven_n1 == "d" && seven_n2 == "m" && seven_n3 == "a") {
        txt_7n1.style.color = "green";
        txt_7n2.style.color = "green";
        txt_7n3.style.color = "green";

        txt_7n1.disabled = "disabled";
        txt_7n2.disabled = "disabled";
        txt_7n3.disabled = "disabled";

    }

    else {
        txt_7n1.style.color = "red";
        txt_7n2.style.color = "red";
        txt_7n3.style.color = "red";

    }
}

function validarRegistradores() {
    var eight_n1 = (txt_8n1.value).toLowerCase();
    var eight_n2 = (txt_8n2.value).toLowerCase();
    var eight_n3 = (txt_8n3.value).toLowerCase();
    var eight_n4 = (txt_8n4.value).toLowerCase();
    var eight_n5 = (txt_8n5.value).toLowerCase();
    var eight_n6 = (txt_8n6.value).toLowerCase();
    var eight_n7 = (txt_8n7.value).toLowerCase();
    var eight_n8 = (txt_8n8.value).toLowerCase();
    var eight_n9 = (txt_8n9.value).toLowerCase();
    var eight_n10 = (txt_8n10.value).toLowerCase();
    var eight_n11 = (txt_8n11.value).toLowerCase();
    var eight_n12 = (txt_8n12.value).toLowerCase();
    var eight_n13 = (txt_8n13.value).toLowerCase();

    if (eight_n1 == "r" && eight_n2 == "e" && eight_n3 == "g" &&
        eight_n4 == "i" && eight_n5 == "s" && eight_n6 == "t" &&
        eight_n7 == "r" && eight_n8 == "a" && eight_n9 == "d" &&
        eight_n10 == "o" && eight_n11 == "r" && eight_n12 == "e" &&
        eight_n13 == "s") {

        txt_8n1.style.color = "green";
        txt_8n2.style.color = "green";
        txt_8n3.style.color = "green";
        txt_8n4.style.color = "green";
        txt_8n5.style.color = "green";
        txt_8n6.style.color = "green";
        txt_8n7.style.color = "green";
        txt_8n8.style.color = "green";
        txt_8n9.style.color = "green";
        txt_8n10.style.color = "green";
        txt_8n11.style.color = "green";
        txt_8n12.style.color = "green";
        txt_8n13.style.color = "green";

        txt_8n1.disabled = "disabled";
        txt_8n2.disabled = "disabled";
        txt_8n3.disabled = "disabled";
        txt_8n4.disabled = "disabled";
        txt_8n5.disabled = "disabled";
        txt_8n6.disabled = "disabled";
        txt_8n7.disabled = "disabled";
        txt_8n8.disabled = "disabled";
        txt_8n9.disabled = "disabled";
        txt_8n10.disabled = "disabled";
        txt_8n11.disabled = "disabled";
        txt_8n12.disabled = "disabled";
        txt_8n13.disabled = "disabled";

    }

    else {
        txt_8n1.style.color = "red";
        txt_8n2.style.color = "red";
        txt_8n3.style.color = "red";
        txt_8n4.style.color = "red";
        txt_8n5.style.color = "red";
        txt_8n6.style.color = "red";
        txt_8n7.style.color = "red";
        txt_8n8.style.color = "red";
        txt_8n9.style.color = "red";
        txt_8n10.style.color = "red";
        txt_8n11.style.color = "red";
        txt_8n12.style.color = "red";
        txt_8n13.style.color = "red";

    }
}

function validarCS() {
    nine_n1 = (txt_9n1.value).toLowerCase();
    nine_n2 = (txt_9n2.value).toLowerCase();

    if (nine_n1 == "c" && nine_n2 == "s") {
        txt_9n1.style.color = "green";
        txt_9n2.style.color = "green";

        txt_9n1.disabled = "disabled";
        txt_9n2.disabled = "disabled";

    }

    else {
        txt_9n1.style.color = "red";
        txt_9n2.style.color = "red";
    }
}

// memória de massa

function validarMemomiraDeMassa() {
    ten_n1 = (txt_10n1.value).toLowerCase();
    ten_n2 = (txt_10n2.value).toLowerCase();
    ten_n3 = (txt_10n3.value).toLowerCase();
    ten_n4 = (txt_10n4.value).toLowerCase();
    ten_n5 = (txt_10n5.value).toLowerCase();
    ten_n6 = (txt_10n6.value).toLowerCase();
    ten_n7 = (txt_10n7.value).toLowerCase();
    // ten_n8 = (txt_10n8.value).toLowerCase();
    ten_n9 = (txt_10n9.value).toLowerCase();
    ten_n10 = (txt_10n10.value).toLowerCase();
    // ten_n11 = (txt_10n11.value).toLowerCase();
    ten_n12 = (txt_10n12.value).toLowerCase();
    ten_n13 = (txt_10n13.value).toLowerCase();
    ten_n14 = (txt_10n14.value).toLowerCase();
    ten_n15 = (txt_10n15.value).toLowerCase();
    ten_n16 = (txt_10n16.value).toLowerCase();

    if (ten_n1 == "m" && ten_n2 == "e" && ten_n3 == "m" &&
        ten_n4 == "o" && ten_n5 == "r" && ten_n6 == "i" &&
        ten_n7 == "a" && ten_n9 == "d" && ten_n10 == "e" &&
        ten_n12 == "m" && ten_n13 == "a" && ten_n14 == "s" &&
        ten_n15 == "s" && ten_n16 == "a") {

        txt_10n1.style.color = "green";
        txt_10n2.style.color = "green";
        txt_10n3.style.color = "green";
        txt_10n4.style.color = "green";
        txt_10n5.style.color = "green";
        txt_10n6.style.color = "green";
        txt_10n7.style.color = "green";
        txt_10n8.style.color = "green";
        txt_10n9.style.color = "green";
        txt_10n10.style.color = "green";
        txt_10n11.style.color = "green";
        txt_10n12.style.color = "green";
        txt_10n13.style.color = "green";
        txt_10n14.style.color = "green";
        txt_10n15.style.color = "green";
        txt_10n16.style.color = "green";

        txt_10n1.disabled = "disabled";
        txt_10n2.disabled = "disabled";
        txt_10n3.disabled = "disabled";
        txt_10n4.disabled = "disabled";
        txt_10n5.disabled = "disabled";
        txt_10n6.disabled = "disabled";
        txt_10n7.disabled = "disabled";
        txt_10n8.disabled = "disabled";
        txt_10n9.disabled = "disabled";
        txt_10n10.disabled = "disabled";
        txt_10n11.disabled = "disabled";
        txt_10n12.disabled = "disabled";
        txt_10n13.disabled = "disabled";
        txt_10n14.disabled = "disabled";
        txt_10n15.disabled = "disabled";
        txt_10n16.disabled = "disabled";

    }

    else {
        txt_10n1.style.color = "red";
        txt_10n2.style.color = "red";
        txt_10n3.style.color = "red";
        txt_10n4.style.color = "red";
        txt_10n5.style.color = "red";
        txt_10n6.style.color = "red";
        txt_10n7.style.color = "red";
        txt_10n8.style.color = "red";
        txt_10n9.style.color = "red";
        txt_10n10.style.color = "red";
        txt_10n11.style.color = "red";
        txt_10n12.style.color = "red";
        txt_10n13.style.color = "red";
        txt_10n14.style.color = "red";
        txt_10n15.style.color = "red";
        txt_10n16.style.color = "red";

    }
}

// adress bus

function validarAdressBus() {
    var eleven_n1 = (txt_11n1.value).toLowerCase();
    var eleven_n2 = (txt_11n2.value).toLowerCase();
    var eleven_n3 = (txt_11n3.value).toLowerCase();
    var eleven_n4 = (txt_11n4.value).toLowerCase();
    var eleven_n5 = (txt_11n5.value).toLowerCase();
    var eleven_n6 = (txt_11n6.value).toLowerCase();
    // var eleven_n7 = (txt_11n7.value).toLowerCase();
    var eleven_n8 = (txt_11n8.value).toLowerCase();
    var eleven_n9 = (txt_11n9.value).toLowerCase();
    var eleven_n10 = (txt_11n10.value).toLowerCase();

    if (eleven_n1 == "a" && eleven_n2 == "d" && eleven_n3 == "r" &&
        eleven_n4 == "e" && eleven_n5 == "s" && eleven_n6 == "ss" &&
        eleven_n8 == "b" && eleven_n9 == "u" && eleven_n10 == "s") {

        txt_11n1.style.color = "green";
        txt_11n2.style.color = "green";
        txt_11n3.style.color = "green";
        txt_11n4.style.color = "green";
        txt_11n5.style.color = "green";
        txt_11n6.style.color = "green";
        txt_11n7.style.color = "green";
        txt_11n8.style.color = "green";
        txt_11n9.style.color = "green";
        txt_11n10.style.color = "green";

        txt_11n1.disabled = "disabled";
        txt_11n2.disabled = "disabled";
        txt_11n3.disabled = "disabled";
        txt_11n4.disabled = "disabled";
        txt_11n5.disabled = "disabled";
        txt_11n6.disabled = "disabled";
        txt_11n7.disabled = "disabled";
        txt_11n8.disabled = "disabled";
        txt_11n9.disabled = "disabled";
        txt_11n10.disabled = "disabled";

    }

    else {
        txt_11n1.style.color = "red";
        txt_11n2.style.color = "red";
        txt_11n3.style.color = "red";
        txt_11n4.style.color = "red";
        txt_11n5.style.color = "red";
        txt_11n6.style.color = "red";
        txt_11n7.style.color = "red";
        txt_11n8.style.color = "red";
        txt_11n9.style.color = "red";
        txt_11n10.style.color = "red";

    }
}

function validarI5() {
    var twelve_n1 = (txt_12n1.value).toLowerCase();
    var twelve_n2 = (txt_12n2.value).toLowerCase();

    if (twelve_n1 == "i" && twelve_n2 == "5") {
        txt_12n1.style.color = "green";
        txt_12n2.style.color = "green";

        txt_12n1.disabled = "disabled";
        txt_12n2.disabled = "disabled";

    }

    else {
        txt_12n1.style.color = "red";
        txt_12n2.style.color = "red";
    }
}

// Data bus

function validarDataBus() {

    thirteen_n1 = (txt_13n1.value).toLowerCase();
    thirteen_n2 = (txt_13n2.value).toLowerCase();
    thirteen_n3 = (txt_13n3.value).toLowerCase();
    thirteen_n4 = (txt_13n4.value).toLowerCase();
    // thirteen_n5 = (txt_13n5.value).toLowerCase();
    thirteen_n6 = (txt_13n6.value).toLowerCase();
    thirteen_n7 = (txt_13n7.value).toLowerCase();
    thirteen_n8 = (txt_13n8.value).toLowerCase();

    if(thirteen_n1 == "d" && thirteen_n2 == "a" && thirteen_n3 == "t" &&
       thirteen_n4 == "a" && thirteen_n6 == "b" && thirteen_n7 == "u" &&
       thirteen_n8 == "s"){

        txt_13n1.style.color = "green";
        txt_13n2.style.color = "green";
        txt_13n3.style.color = "green";
        txt_13n4.style.color = "green";
        txt_13n5.style.color = "green";
        txt_13n6.style.color = "green";
        txt_13n7.style.color = "green";
        txt_13n8.style.color = "green";

        txt_13n1.disabled = "disabled";
        txt_13n2.disabled = "disabled";
        txt_13n3.disabled = "disabled";
        txt_13n4.disabled = "disabled";
        txt_13n5.disabled = "disabled";
        txt_13n6.disabled = "disabled";
        txt_13n7.disabled = "disabled";
        txt_13n8.disabled = "disabled";

       }

       else{
        txt_13n1.style.color = "red";
        txt_13n2.style.color = "red";
        txt_13n3.style.color = "red";
        txt_13n4.style.color = "red";
        txt_13n5.style.color = "red";
        txt_13n6.style.color = "red";
        txt_13n7.style.color = "red";
        txt_13n8.style.color = "red";

       }
}

// quad core

function validarQuadCore() {
    var fourteen_n1 = (txt_14n1.value).toLowerCase();
    var fourteen_n2 = (txt_14n2.value).toLowerCase();
    var fourteen_n3 = (txt_14n3.value).toLowerCase();
    var fourteen_n4 = (txt_14n4.value).toLowerCase();
    // var fourteen_n5 = (txt_14n5.value).toLowerCase();
    var fourteen_n6 = (txt_14n6.value).toLowerCase();
    var fourteen_n7 = (txt_14n7.value).toLowerCase();
    var fourteen_n8 = (txt_14n8.value).toLowerCase();
    var fourteen_n9 = (txt_14n9.value).toLowerCase();

    if(fourteen_n1 == "q" && fourteen_n2 == "u" && fourteen_n3 == "a" &&
       fourteen_n4 == "d" && fourteen_n6 == "c" && fourteen_n7 == "o" &&
       fourteen_n8 == "r" && fourteen_n9 == "e"){

        txt_14n1.style.color = "green";
        txt_14n2.style.color = "green";
        txt_14n3.style.color = "green";
        txt_14n4.style.color = "green";
        txt_14n5.style.color = "green";
        txt_14n6.style.color = "green";
        txt_14n7.style.color = "green";
        txt_14n8.style.color = "green";
        txt_14n9.style.color = "green";

        txt_14n1.disabled = "disabled";
        txt_14n2.disabled = "disabled";
        txt_14n3.disabled = "disabled";
        txt_14n4.disabled = "disabled";
        txt_14n5.disabled = "disabled";
        txt_14n6.disabled = "disabled";
        txt_14n7.disabled = "disabled";
        txt_14n8.disabled = "disabled";
        txt_14n9.disabled = "disabled";

       }

       else{
        txt_14n1.style.color = "red";
        txt_14n2.style.color = "red";
        txt_14n3.style.color = "red";
        txt_14n4.style.color = "red";
        txt_14n5.style.color = "red";
        txt_14n6.style.color = "red";
        txt_14n7.style.color = "red";
        txt_14n8.style.color = "red";
        txt_14n9.style.color = "red";

       }
}

function validarI7() {
    var fiveteen_n1 = (txt_15n1.value).toLowerCase();
    var fiveteen_n2 = (txt_15n2.value).toLowerCase();

    if (fiveteen_n1 == "i" && fiveteen_n2 == 7) {
        txt_15n1.style.color = "green";
        txt_15n2.style.color = "green";

        txt_15n1.disabled = "disabled";
        txt_15n2.disabled = "disabled";
    }

    else {
        txt_15n1.style.color = "red";
        txt_15n2.style.color = "red";
    }
}

// dual core

function validarDualCore() {

    var sixteen_n1 = (txt_16n1.value).toLowerCase();
    var sixteen_n2 = (txt_16n2.value).toLowerCase();
    var sixteen_n3 = (txt_16n3.value).toLowerCase();
    var sixteen_n4 = (txt_16n4.value).toLowerCase();
    // var sixteen_n5 = (txt_16n5.value).toLowerCase();
    var sixteen_n6 = (txt_16n6.value).toLowerCase();
    var sixteen_n7 = (txt_16n7.value).toLowerCase();
    var sixteen_n8 = (txt_16n8.value).toLowerCase();
    var sixteen_n9 = (txt_16n9.value).toLowerCase();

    if(sixteen_n1 == "d" && sixteen_n2 == "u" && sixteen_n3 == "a" &&
       sixteen_n4 == "l" && sixteen_n6 == "c" && sixteen_n7 == "o" &&
       sixteen_n8 == "r" && sixteen_n9 == "e"){

        txt_16n1.style.color = "green";
        txt_16n2.style.color = "green";
        txt_16n3.style.color = "green";
        txt_16n4.style.color = "green";
        txt_16n5.style.color = "green";
        txt_16n6.style.color = "green";
        txt_16n7.style.color = "green";
        txt_16n8.style.color = "green";

        txt_16n1.disabled = "disabled";
        txt_16n2.disabled = "disabled";
        txt_16n3.disabled = "disabled";
        txt_16n4.disabled = "disabled";
        txt_16n5.disabled = "disabled";
        txt_16n6.disabled = "disabled";
        txt_16n7.disabled = "disabled";
        txt_16n8.disabled = "disabled";

       }

       else{

        txt_16n1.style.color = "red";
        txt_16n2.style.color = "red";
        txt_16n3.style.color = "red";
        txt_16n4.style.color = "red";
        txt_16n5.style.color = "red";
        txt_16n6.style.color = "red";
        txt_16n7.style.color = "red";
        txt_16n8.style.color = "red";

       }
}