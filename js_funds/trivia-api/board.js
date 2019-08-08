
var url = "https://opentdb.com/api.php?amount=9&type=multiple"
let currentQuestions; 
let score = 0;


const board = document.getElementById("board");
const score_board = document.getElementById("score_board");

function getQuestions() {
  $.get(url, function(res) {
    currentQuestions = res;
    console.log(currentQuestions.results);

    for (index in currentQuestions.results) {
      // console.log()
      categoryTitle = currentQuestions.results[index].category; 
      categoryQuestion = currentQuestions.results[index].question;  
      categoryDifficulty = currentQuestions.results[index].difficulty;
      categoryCorrectAns = currentQuestions.results[index].correct_answer;
      

      let categoryScore;
      if (categoryDifficulty === 'easy'){categoryScore = 100}
      else if (categoryDifficulty === 'medium'){categoryScore = 200}  
      else if (categoryDifficulty === 'hard'){categoryScore = 300}   
      context = "<div class='col-md-4'>";
      //Title
      context += "<h5 class='jumbotron p-2 my-1 text-center bg-warning'>"+categoryTitle+"</h5>";

      //Score
      context += "<div class='jumbotron btn-outline-secondary text-center' id='score"+index+"' onclick='reveal("+index+")'><h3 class='text-dark'>"+categoryScore+"</h3></div>";
      
      //Correct Tile
      context += "<div class='d-none jumbotron text-center bg-success py-3' id='correct"+index+"'><i class='fas fa-check fa-9x text-white'></i></div>";
      
      //Incorrect Tile
      context += "<div class='d-none jumbotron text-center bg-danger py-3' id='incorrect"+index+"'><i class='fas fa-times fa-9x text-white'></i></div>";
      
      //Question
      context += "<div class='d-none jumbotron p-2' id='question"+index+"'><small>"+categoryQuestion+"</small>";

      //Correct Answer
      context += "<div class='custom-control custom-radio'><input type='radio' id='ans-correct"+index+"' class='custom-control-input answer"+index+"' name='answer"+index+"' value='correct' placeholder='"+categoryScore+"'><label class='custom-control-label' for='ans-correct"+index+"'>"+categoryCorrectAns+"</label></div>";
      
      //Incorrect Answer
      for (index2 in currentQuestions.results[index].incorrect_answers){
        categoryIncorrectAns = currentQuestions.results[index].incorrect_answers[index2];
        context += "<div class='custom-control custom-radio'><input type='radio' id='ans-incorrect"+index+"-"+index2+"' class='custom-control-input answer"+index+"' name='answer"+index+"' value='incorrect' placeholder='"+categoryScore+"'><label class='custom-control-label' for='ans-incorrect"+index+"-"+index2+"'>"+categoryIncorrectAns+"</label></div>";
      }
      
      //Submission
      context += "<button class='btn btn-sm btn-outline-primary' id='button"+index+"' onclick='checkAns("+index+")'>Am I right?</button>"
      context += "</div>";
      context += "</div>";

      board.innerHTML += context;
      score_board.innerHTML = score;
    }
  }, "json")
}

getQuestions();


function reveal(q_id) {
  var question_id = "question"+q_id;
  var score_id = "score"+q_id;
  console.log("QUESTION REVEALED")
  $("#"+score_id).addClass('d-none');
  $("#"+question_id).toggleClass('d-none');
}

function checkAns(q_id) {
  var ans_id = "answer"+q_id;
  // console.log(ans_id);
  var answers = document.getElementsByClassName(ans_id);
  
  
  for (index3 in answers) {
    if (answers[index3].value === 'correct' && answers[index3].checked == true) {
      score += parseInt(answers[index3].placeholder, 10);
      $(score_board).text(score);
      $("#question"+q_id).toggleClass('d-none');
      $("#correct"+q_id).toggleClass('d-none');
    }
    else if (answers[index3].value === 'incorrect' && answers[index3].checked == true) {
      score -= parseInt(answers[index3].placeholder, 10);
      $(score_board).text(score);
      $("#question"+q_id).toggleClass('d-none');
      $("#incorrect"+q_id).toggleClass('d-none');
    }
    else if (answers[index3].value === 'correct' && answers[index3].checked != true) {
      $("#button"+q_id).removeClass('btn-outline-primary');
      $("#button"+q_id).addClass('btn-danger');
      $("#button"+q_id).text('Choose an option!');
      $("#question"+q_id).effect("shake");
    }
    
  }


}