let heading = document.querySelector("h1");
let buttons = document.querySelectorAll("div>div>p")

let startSection = document.querySelector(".start")
let quizSection = document.querySelector(".quiz")
let startButton = document.querySelector("button")
let resultHeading = document.querySelector("h2")

class Question {
    constructor() {
        this.num1 = this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.question = `${this.num1} + ${this.num2}`;
        this.answers = [];
        this.getAnswers()
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getAnswers() {
        this.answers.splice(0, 5);
        this.correctIndex = this.getRandomInt(buttons.length);
        for (let i = 0; i < buttons.length; i += 1) {
            if (i === this.correctIndex) {
                this.correct = this.num1 + this.num2;
                this.answers.push(this.correct);
            } else {
                this.answers.push(this.getRandomInt(100));
            }
        }
    }

    getQuestion() {
        this.num1 = this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.question = `${this.num1} + ${this.num2}`;
    }

    display() {
        heading.innerHTML = this.question;
        for (let i = 0; i < this.answers.length; i += 1) {
            buttons[i].innerHTML = this.answers[i];
        }
    }
}

let quest1 = new Question();

quest1.display();

function startQuiz() {
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
}

startButton.addEventListener("click", startQuiz);

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", checkAnswer(i));
}

function checkAnswer(item) {
    return function () {
        if (buttons[item].innerHTML === String(quest1.correct)) {
            resultHeading.innerHTML = "правильно";
        } else {
            resultHeading.innerHTML = "неправильно";
        }
        quest1.getQuestion();
        quest1.getAnswers();
        quest1.display();
    }
}

