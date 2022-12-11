function changeColor(element) {
  removeElements();
  element.classList.add("active");
}

function removeElements() {
  let element = document.getElementsByClassName("active");

  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("active")
  }
}

