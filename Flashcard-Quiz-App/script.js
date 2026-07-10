// Default Flashcards
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity to websites."
    }
];

let currentIndex = 0;

// Elements
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswerBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");

const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");

const flashcardList = document.getElementById("flashcardList");

const cardCount = document.getElementById("cardCount");
const progress = document.getElementById("progress");

// Save Data
function saveCards(){
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
}
// Display Current Card
function displayCard() {

    if (flashcards.length === 0) {
        question.textContent = "No Flashcards Available";
        answer.textContent = "";
        cardCount.textContent = "0 / 0";
        progress.style.width = "0%";
        flashcardList.innerHTML = "";
        return;
    }

    question.textContent = flashcards[currentIndex].question;
    answer.textContent = flashcards[currentIndex].answer;

    answer.classList.add("hidden");
    showAnswerBtn.innerHTML =
        '<i class="fa-solid fa-eye"></i> Show Answer';

    cardCount.textContent =
        `${currentIndex + 1} / ${flashcards.length}`;

    progress.style.width =
        ((currentIndex + 1) / flashcards.length) * 100 + "%";

    renderList();
}

// Render Flashcard List
function renderList() {

    flashcardList.innerHTML = "";

    flashcards.forEach((card, index) => {

        const li = document.createElement("li");

        li.textContent = `${index + 1}. ${card.question}`;

        if (index === currentIndex) {
            li.style.background = "#dbeafe";
        }

        li.addEventListener("click", () => {
            currentIndex = index;
            displayCard();
        });

        flashcardList.appendChild(li);

    });

}

// Initial Load
displayCard();
// Show Answer
showAnswerBtn.addEventListener("click", () => {

    answer.classList.remove("hidden");

    showAnswerBtn.innerHTML =
        '<i class="fa-solid fa-check"></i> Answer Shown';

});

// Next Card
nextBtn.addEventListener("click", () => {

    if (flashcards.length === 0) return;

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayCard();

});

// Previous Card
prevBtn.addEventListener("click", () => {

    if (flashcards.length === 0) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();

});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

});
// Add New Card
addBtn.addEventListener("click", () => {

    const q = questionInput.value.trim();
    const a = answerInput.value.trim();

    if (!q || !a) {
        alert("Please enter both Question and Answer.");
        return;
    }

    flashcards.push({
        question: q,
        answer: a
    });

    saveCards();

    currentIndex = flashcards.length - 1;

    questionInput.value = "";
    answerInput.value = "";

    displayCard();

    alert("Flashcard Added Successfully!");

});

// Update Current Card
updateBtn.addEventListener("click", () => {

    const q = questionInput.value.trim();
    const a = answerInput.value.trim();

    if (!q || !a) {
        alert("Please enter Question and Answer.");
        return;
    }

    flashcards[currentIndex].question = q;
    flashcards[currentIndex].answer = a;

    saveCards();

    questionInput.value = "";
    answerInput.value = "";

    displayCard();

    alert("Flashcard Updated!");

});

// Delete Current Card
deleteBtn.addEventListener("click", () => {

    if (flashcards.length === 1) {
        alert("At least one flashcard must remain.");
        return;
    }

    if (!confirm("Delete this flashcard?")) {
        return;
    }

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    saveCards();

    displayCard();

    alert("Flashcard Deleted!");

});