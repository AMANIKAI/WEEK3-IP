$(document).ready(function () {
const quizAnswers = document.querySelectorAll(".ouranswers");

const submitAnswer = document.querySelector("#submit_ans");

let marks = 0;

let total = 0;

quizAnswers.forEach(function (jibu) {

    if (parseInt(jibu.value) > 0) {

        total += parseInt(jibu.value);

    }

    else {

        total = total;

    }

    jibu.addEventListener("change", function (event) {

        marks += parseInt(event.target.value);

    });

});

submitAnswer.addEventListener("click", function (event) {

    let score = (marks / total) * 100;

    let level = "";


    if (score > 80){
        level += "Welldone Passed";
    }

    else if(score >= 50 && score >= 80 ){
        level += "Good performance";
    }

    else{
        level += "\nPoor performance, Please retake test.";

    }
    alama.textContent = "You have scored: " + score +"%"+level ;

});
});
