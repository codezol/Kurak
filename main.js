let data = [
  {
    id: 1,
    title:
      "1- When do you think work on the Kurak application will be completed?",
    op1: "During_2024",
    op2: "at_2025",
    op3: "at_2026",
  },
  {
    id: 2,
    title:
      "2- What is the best color for the app that you think is approprate?",
    op1: "Darkgreen",
    op2: "Darkred",
    op3: "Darkblue",
  },
  {
    id: 3,
    title: "3- Are you sudanese",
    op1: "yes",
    op2: "no",
    op3: "other",
  },
];

let Answers = {
  Q1: "",
  Q2: "",
  Q3: "",
};

let serveyData = document.querySelector(".servey-data");

function drawUi() {
  let Updatedata = data.map((item) => {
    return ` <h3>
                 ${item.title}
                </h3>
                <br />
                <hr />
                <label for="${item.op1}">
                  <div class="servey-option">
                    ${item.op1}
                    <input type="radio" id="${item.op1}"
                    value="${item.op1}"
                    name="Q${item.id}" />
                  </div>
                </label>

                <label for="${item.op2}">
                  <div class="servey-option">
                      ${item.op2}
                      <input type="radio" id="${item.op2}"
                      value="${item.op2}"
                      name="Q${item.id}" />
                  </div>
               </label>

               <label for="${item.op3}">
                <div class="servey-option">
                  ${item.op3}
                    <input type="radio" id="${item.op3}"
                    value="${item.op3}"
                    name="Q${item.id}" />
                </div>
                </label>

          `;
  });

  serveyData.innerHTML = Updatedata;
}
drawUi();

let radiobtn1 = document.querySelectorAll("input[name='Q1']");
let radiobtn2 = document.querySelectorAll("input[name='Q2']");
let radiobtn3 = document.querySelectorAll("input[name='Q3']");

function Choese(N) {
  {
    let selected = document.querySelector(`input[name='Q${N}']:checked`).value;
    N == 1
      ? (Answers.Q1 = selected)
      : N == 2
      ? (Answers.Q2 = selected)
      : N == 3
      ? (Answers.Q3 = selected)
      : "";
  }
}

// Q1
radiobtn1.forEach((radiobtn) => {
  radiobtn.addEventListener("change", () => Choese(1));
});

// Q2
radiobtn2.forEach((radiobtn) => {
  radiobtn.addEventListener("change", () => Choese(2));
});

// Q3
radiobtn3.forEach((radiobtn) => {
  radiobtn.addEventListener("change", () => Choese(3));
});

function submit() {
  if (Answers.Q1 == "" || Answers.Q2 == "" || Answers.Q3 == "") {
    alert("all is Requerd");
    return;
  }

  SendData();
}

const submit_btn = document.querySelector('button.submit')
submit_btn.addEventListener('click', (e) => {
  e.preventDefault()
  submit()
})
function SendData() {
  document.querySelector(".submit").style.display = "none";
  document.querySelector(
    ".servey-data"
  ).innerHTML = `<h2 class="center" >Sending ...</h2>`;
  setTimeout(() => {
    document.querySelector(
      ".servey-data"
    ).innerHTML = `<h2 class="center">Done :)</h2>`;
  }, 1500);
  window.scroll(0, 0);
}
