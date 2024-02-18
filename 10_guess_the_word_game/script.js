const random_words = ["flower", "frozen", "stolen"];

let word = "";
const input_box = document.querySelectorAll(".game-guessed-words-word");
const incorrect_attempts = document.getElementById("incorrectAttempts");
const incorrect_circles = document.getElementsByClassName(
  "game-status-tries-circle"
);
const incorrect_words = document.getElementById("incorrectWords");
let input_word = "";

input_box.forEach((box, index) => {
  const input_field = box.querySelector("input");
  input_field.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value.length === 1 && value === word[index]) {
      input_word += value;
      box.classList.remove("focused");
      input_field.readOnly = true;
      if (input_box[index + 1]) {
        input_box[index + 1].classList.add("focused");

        const next_input_box = input_box[index + 1].querySelector("input");
        next_input_box.placeholder = "_";
        next_input_box.focus();
      } else {
        setTimeout(() => {
          alert("🎉 Success");
        }, 100);
      }
    } else {
      if (value.length !== 0) {
        const no_of_incorrect_attempts = parseInt(incorrect_attempts.innerHTML);
        let string_incorrect_words = incorrect_words.innerHTML;

        incorrect_attempts.innerHTML = no_of_incorrect_attempts + 1;
        incorrect_circles[no_of_incorrect_attempts].classList.add("filled");
        string_incorrect_words.length === 0
          ? (string_incorrect_words += value)
          : (string_incorrect_words += ", " + value);
        incorrect_words.innerHTML = string_incorrect_words;
        box.classList.add("shake");

        setTimeout(() => {
          box.classList.remove("shake");
        }, 1000);

        if (incorrect_attempts.innerHTML === "5") {
          resetQuiz();
        }
      }
    }
  });
});

const scrambleWords = (inputString) => {
  const charactersArray = inputString.split("");

  for (let i = charactersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charactersArray[i], charactersArray[j]] = [
      charactersArray[j],
      charactersArray[i],
    ];
  }

  const scrambledString = charactersArray.join("");

  return scrambledString;
};

const getRandomWordAndRandomize = () => {
  incorrect_attempts.innerHTML = 0;
  incorrect_words.innerHTML = "";
  for (let i = 0; i < incorrect_circles.length; i++) {
    incorrect_circles[i].classList.remove("filled");
  }
  const input_fields = document.querySelectorAll(
    ".game-guessed-words-word input"
  );
  input_fields.forEach((field, index) => {
    field.value = "";
    field.placeholder = "";
    field.readOnly = false;
    if (index === 0) {
      field.placeholder = "_";
      field.focus();
    }
  });
  input_box.forEach((box, index) => {
    box.classList.remove("focused");
    if (index === 0) {
      box.classList.add("focused");
    }
  });
  word = random_words[Math.floor(Math.random() * random_words.length)];
  document.querySelector(".game-random-words").innerHTML = scrambleWords(word);
};

const resetQuiz = () => {
  incorrect_attempts.innerHTML = 0;
  incorrect_words.innerHTML = "";
  for (let i = 0; i < incorrect_circles.length; i++) {
    incorrect_circles[i].classList.remove("filled");
  }
  const input_fields = document.querySelectorAll(
    ".game-guessed-words-word input"
  );
  input_fields.forEach((field, index) => {
    field.value = "";
    field.placeholder = "";
    field.readOnly = false;
    if (index === 0) {
      field.placeholder = "_";
      field.focus();
    }
  });
  input_box.forEach((box, index) => {
    box.classList.remove("focused");
    if (index === 0) {
      box.classList.add("focused");
    }
  });
};

getRandomWordAndRandomize();
