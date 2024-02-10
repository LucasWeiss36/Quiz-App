

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];
    // geht in questions rein und nimmt den wert (currentQuestion=0) heraus 

    document.getElementById("questiontext").innerHTML = question['question'];
    //geht in questions[3]['question']und der wert wird bei id eingefügt("Wie stellt man Text am BESTEN fett dar?")

    document.getElementById("answer_1").innerHTML = question['answer_1'];
    //geht in questions[3]['answer_1']und der wert wird bei id eingefügt("&lt;strong&gt")

    document.getElementById("answer_2").innerHTML = question['answer_2'];
    //geht in questions[3]['answer_2']und der wert wird bei id eingefügt("CSS nutzen")

    document.getElementById("answer_3").innerHTML = question['answer_3'];
    //geht in questions[3]['answer_3']und der wert wird bei id eingefügt("&lt;bold&gt;")
    
    document.getElementById("answer_4").innerHTML = question['answer_4'];
    //geht in questions[3]['answer_4']und der wert wird bei id eingefügt("&lt;b&gt;")

}