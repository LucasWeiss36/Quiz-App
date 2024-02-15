let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {


    if (currentQuestion >= questions.length){
        document.getElementById("question-container").innerHTML = `
        <img class="endimg object-fit-contain" src="img/brain result.png" alt="">
        <h5 class="d-flex justify-content-center p-3">COMPLETE <br> HTML QUIZ</h5>
        <div class="p-3 d-flex justify-content-center">
          <span class="me-">YOUR SCORE</span>
          <span>10/10</span>
        </div>
        <div class="d-flex flex-column align-items-center">
        <button class="btn btn-primary w-25">SHARE</button>
        <button class="btn text-primary w-25">REPLAY</button>
        </div>`;
        
    }else{
        document.getElementById("current-question").innerHTML = currentQuestion + 1;
        // zeigt im Element der id current-question die aktuelle Frage an (1 weil currentQuestion = 0, 0+1=1)
        let question = questions[currentQuestion];
        // die Variable currentQuestion hat den Wert 0 definiert
        // geht in questions rein und nimmt den Wert 0(weil currentQuestion=0) heraus
      document.getElementById("questiontext").innerHTML = question["question"];
      //geht in questions[0]['question']und der wert wird bei id questiontext eingefügt("Wer hat HTML erfunden?")
      document.getElementById("answer_1").innerHTML = question["answer_1"];
      //geht in questions[0]['answer_1']und der wert wird bei id answer_1 eingefügt("Robbie Williams")
      document.getElementById("answer_2").innerHTML = question["answer_2"];
      //geht in questions[0]['answer_2']und der wert wird bei id answer_2 eingefügt("Lady Gaga")
      document.getElementById("answer_3").innerHTML = question["answer_3"];
      //geht in questions[0]['answer_3']und der wert wird bei id answer_3 eingefügt("Tim Berners-Lee")
      document.getElementById("answer_4").innerHTML = question["answer_4"];
      //geht in questions[0]['answer_4']und der wert wird bei id answer_4 eingefügt("Justin Bieber")
    }
}

function answer(selection) {
  let question = questions[currentQuestion]; 
  // currentQuestion = 0|| question = pos 0 im Array questions
  let selectedQuestionNumber = selection.slice(-1); 
  // nimmt nur die Zahl z.B wenn answer_1, dann wert = 1

  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  // es wird immer answer_(die richtig antwort einer frage (3))

  if (selectedQuestionNumber == question["right_answer"]) {
      //Wenn selectedQuestionNumber(1) == 3
      document.getElementById(selection).parentNode.classList.add("bg-success");
      //dann parentElement der id selection(answer_3) die Klasse bg-success hinzufügen
  } else {
    //ansonsten parentElement der id selection(answer_1/answer_2/answer_4) die Klasse bg-danger hinzufügen
    //& parentElement der id idOfRightAnswer(answer_3) die Klasse bg-success hinzufügen
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById("next-btn").disabled = false;
  //wenn eine Antwort ausgewählt dann wird der Button freigegeben bzw enabled
  //wenn keine antwort ausgewählt dann kann man nicht zur nächsten Frage
}


function nextQuestion(){
    currentQuestion++; // wird um 1 erhöht z.B currentQuestion= 0 + 1 dann 1 + 1 dann 2 + 1 usw
    document.getElementById("next-btn").disabled = true;
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

