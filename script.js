
let rightQuestions = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/win.mp3');
let AUDIO_FAIL = new Audio('audio/lose.mp3');

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
    if (gameIsOver()){
      showEndScreen();
    }else{
      progressBar();
      showNextQuestion();
    }
}

function answer(selection) {
  let question = questions[currentQuestion]; 
  // currentQuestion = 0|| question = pos 0 im Array questions
  let selectedQuestionNumber = selection.slice(-1); 
  // nimmt nur die Zahl z.B wenn answer_1, dann wert = 1

  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  // es wird immer answer_(die richtig antwort einer frage (3))

  if (rightAnswerSelected(selectedQuestionNumber, question)) {
      //Wenn selectedQuestionNumber(1) == 3
      document.getElementById(selection).parentNode.classList.add("bg-success");
      //dann parentElement der id selection(answer_3) die Klasse bg-success hinzufügen
      rightQuestions++;
      // fügt der Variable +1 hinzu 
      AUDIO_SUCCESS.play();
  } else {
    //ansonsten parentElement der id selection(answer_1/answer_2/answer_4) die Klasse bg-danger hinzufügen
    //& parentElement der id idOfRightAnswer(answer_3) die Klasse bg-success hinzufügen
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play()
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

function replay() {
  rightQuestions = 0;
  currentQuestion = 0;
  init();
  document.getElementById("end-container").style = 'display: none!important';
  //fügt den Style display none dem end-container hinzu
  document.getElementById("question-container").style = "";
  //entfernt den Style display none vom question-container
}



function showEndScreen(){
  document.getElementById("end-container").style = '';
  //entfernt den Style display none vom end-container
  document.getElementById("question-container").style = "display: none!important";
  //fügt den Style display none dem question-container hinzu

  document.getElementById("amount-of-questions").innerHTML = questions.length; 
  // zeigt im end-container an wie viele fragen vorhanden sind 
  document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
  //zeigt im end-container an wie viele fragen richtig sind  
}


function showNextQuestion(){
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

function progressBar(){
  let percent = (currentQuestion + 1) / questions.length;
      percent = Math.round(percent * 100);
      document.getElementById("progress-bar").innerHTML = `${percent}%`;
      document.getElementById("progress-bar").style = `width: ${percent}%`;
}


function gameIsOver(){
  return currentQuestion >= questions.length;
}

function rightAnswerSelected(selectedQuestionNumber, question){
  return selectedQuestionNumber == question["right_answer"];
}