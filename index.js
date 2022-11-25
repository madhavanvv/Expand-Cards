//practice index

const panels = document.querySelectorAll(".panel");

let invert = true;

function mySwap() {
  if (invert) {
    invert = false;
    return "active";
  }

  invert = true;
  return;
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    let myVall = mySwap();
    removeForAll();
    panel.classList.add(myVall);
  });
});

function removeForAll() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
