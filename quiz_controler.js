document.addEventLstener("DOMContentLoaded", function(){
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}
//check function
Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

//Check answer if correct or not
Quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().isCorrectAnswer(answer)) {
		this.score++;
	}
	this.questionIndex++;
}

// Quiz added or not
Quiz.prototype.isEnded = function() {
	return this.questionIndex === this.questions.length;
}
});