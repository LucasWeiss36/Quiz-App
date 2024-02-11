let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  // als beispiel lautet die Variable currentQuestion = 0 sondern currentQuestion = 3

  // die Variable question hat den wert -> position 3 vom Array question
  //                              0
  let question = questions[currentQuestion];
  // geht in questions rein und nimmt den wert (currentQuestion=0) heraus

  document.getElementById("questiontext").innerHTML = question["question"];
  //geht in questions[3]['question']und der wert wird bei id eingefügt("Wer hat HTML erfunden?")

  document.getElementById("answer_1").innerHTML = question["answer_1"];
  //geht in questions[3]['answer_1']und der wert wird bei id eingefügt("Robbie Williams")

  document.getElementById("answer_2").innerHTML = question["answer_2"];
  //geht in questions[3]['answer_2']und der wert wird bei id eingefügt("Lady Gaga")

  document.getElementById("answer_3").innerHTML = question["answer_3"];
  //geht in questions[3]['answer_3']und der wert wird bei id eingefügt("Tim Berners-Lee")

  document.getElementById("answer_4").innerHTML = question["answer_4"];
  //geht in questions[3]['answer_4']und der wert wird bei id eingefügt("Justin Bieber")
}

function answer(selection) {
  let question = questions[currentQuestion]; // currentQuestion = 0|| question = pos 0 im Array questions
  let selectedQuestionNumber = selection.slice(-1); // nimmt nur die Zahl z.B wenn answer_1, dann wert = 1

  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  // es wird immer answer_(die richtig antwort einer frage (3))

  //Wenn selectedQuestionNumber(1) == 3
  if (selectedQuestionNumber == question["right_answer"]) {
      document.getElementById(selection).parentNode.classList.add("bg-success");
      //wenn true dann parentElement der id selection(answer_3) die Klasse bg-success hinzufügen
  } else {
    //ansonsten parentElement der id selection(answer_1/answer_2/answer_4) die Klasse bg-danger hinzufügen
    //& parentElement der id idOfRightAnswer(answer_3) die Klasse bg-success hinzufügen
    document.getElementById(selection).parentNode.classList.add("bg-danger");

    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-btn").disabled = false;
  //wenn eine Antwort ausgewählt dann wird der Button freigegeben bzw enabled
  //wenn keine antwort ausgewählt dann kann man nicht zur nächsten Frage
}


function nextQuestion(){
    currentQuestion++; // wird um 1 erhöht z.B currentQuestion= 0 + 1 dann 1 + 1 dann 2 + 1 usw
    document.getElementById("next-btn").disabled = true;
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    resetAnswerButtons();
    showQuestion()
}


function resetAnswerButtons(){
    document.getElementById("answer_1").parentElement.classList.remove('bg-danger');
    document.getElementById("answer_1").parentElement.classList.remove('bg-success');
    document.getElementById("answer_2").parentElement.classList.remove('bg-danger');
    document.getElementById("answer_2").parentElement.classList.remove('bg-success');
    document.getElementById("answer_3").parentElement.classList.remove('bg-danger');
    document.getElementById("answer_3").parentElement.classList.remove('bg-success');
    document.getElementById("answer_4").parentElement.classList.remove('bg-danger');
    document.getElementById("answer_4").parentElement.classList.remove('bg-success');

}

