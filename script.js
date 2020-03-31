const input = document.getElementById("input");
const divRows = document.querySelectorAll(".row");

input.focus();

divRows.forEach(elem => elem.querySelectorAll("div").forEach((div) => {
  if (div.innerText.length <= 1 && div.innerText !== '') {
    div.setAttribute('data-key', div.innerText);
  }
}));

input.addEventListener("keydown", function (event) {
  const element = document.querySelector('[data-code="' + event.code + '"]') || document.querySelector('[data-key="' + event.key + '"]');
  console.log(event);
  if (element) {
    element.classList.add('hint');
    console.log(element);
  }
});

input.addEventListener("keyup", function (event) {
  const element = document.querySelector('[data-code="' + event.code + '"]') || document.querySelector('[data-key="' + event.key + '"]');
  if (element) {
    element.classList.remove('hint');
  }
});

for (let row of divRows) {
  for (let buttonDiv of row.children) {
    buttonDiv.addEventListener("click", function (e) {
      let target = e.target || e.srcElement;
      input.value = input.value + (target.textContent || target.innerText);

      buttonDiv.classList.add('hint');
      setTimeout(() => {
        buttonDiv.classList.remove('hint');
      }, 500);
    });
  }
}