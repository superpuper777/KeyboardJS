const input = document.getElementById("input");
const divRows = document.querySelectorAll(".row");

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