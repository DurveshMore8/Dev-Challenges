const email_regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form_button = document.querySelectorAll(".form-button");
const form_options_value = document.querySelectorAll(".form-options-value");

const name = document.getElementById("name");
const email = document.getElementById("email");

form_button[0].onclick = () => {
  if (name.value.length == 0) {
    alert("Enter your name");
  } else if (email.value.length == 0) {
    alert("Enter your email");
  } else if (!email_regex.test(email.value)) {
    alert("Enter a valid email");
  } else {
    const step_one = document.querySelector(".step-1");
    const step_two = document.querySelector(".step-2");
    const count = document.querySelector(".count");
    const form = document.querySelectorAll(".form");

    step_one.classList.replace("current-step", "completed-step");
    step_two.classList.add("current-step");
    count.innerHTML = "2";
    form[0].style.display = "none";
    form[1].style.display = "flex";
    document.getElementById("name").innerHTML = name.value;
    document.getElementById("email").innerHTML = email.value;
  }
};

form_button[1].onclick = () => {
  const interest = document.getElementById("interest");
  form_options_value.forEach((value) => {
    if (value.classList.contains("selected")) {
      const li = document.createElement("li");
      li.innerHTML = value.innerHTML;
      interest.appendChild(li);
    }
  });

  const step_two = document.querySelector(".step-2");
  const step_three = document.querySelector(".step-3");
  const count = document.querySelector(".count");
  const form = document.querySelectorAll(".form");

  step_two.classList.replace("current-step", "completed-step");
  step_three.classList.add("current-step");
  count.innerHTML = "3";
  form[1].style.display = "none";
  form[2].style.display = "flex";
};

form_options_value.forEach(
  (value) =>
    (value.onclick = () => {
      value.classList.toggle("selected");
    })
);
