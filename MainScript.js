
// Variáveis

var Button = document.getElementById("TransportButton");

var ButtonText = document.getElementById("FeijoadaDescription");

var PageTitle = document.getElementById("PageTitle");


var Times = 0
Times = -1

var Messages = [

    "_",

    "Serio? Voce clicou de novo?",

    "Voce e persistente, hein?",

    "Ainda nao vai desistir?",

    "Voce e teimoso, ne?",

    "Sabe que nao vai ganhar nada com isso, ne?",

    "Voce e um idiota, ne?",

    "Voce e um idiota, ne?",

    "VOCE E UM IDIOTA, NE?",

    "Desisto. Faz o que quiser."

];


var LanguageButton = document.getElementById("LanguageButton");

// Funções

function ButtonClick() {

    // Aqui um sistema que te joga pra um Rickroll, kkkkk

    Times += 1;

    if (Times >= 10) {

        Times = 9;

    }
    

    if (Times <= 0) {

        Button.innerHTML = "Caiu no Rickroll!";

        PageTitle.innerHTML = "Caiu na armadilha mais velha da internet!";

    } else {

        Button.innerHTML = Messages[Times];

        PageTitle.innerHTML = Messages[Times];

    }


    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");


    //window.close();

}

Button.onclick = ButtonClick;


function LanguageButtonClick() {

    if (LanguageButton.innerHTML == "Language") {

        LanguageButton.innerHTML = "Idioma";

    } else {

        LanguageButton.innerHTML = "Language";

    };

};

LanguageButton.onclick = LanguageButtonClick;