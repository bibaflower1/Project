document.addEventLstener("DOMContentLoaded", function(){

function question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
	return this.answer === choice;
}

});