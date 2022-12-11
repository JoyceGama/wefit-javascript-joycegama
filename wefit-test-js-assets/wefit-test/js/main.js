function notify(element) {
  resetElements();
  element.classList.add("active");
}

function resetElements() {
  let element = document.getElementsByClassName("active");

  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("active")
  }
}

