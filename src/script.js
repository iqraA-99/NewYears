document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".goal-checkbox");
  const progressFill = document.querySelector(".progress-fill");
  const startBtn = document.getElementById("startBtn");

  function updateProgress() {
    const total = checkboxes.length;
    const completed = document.querySelectorAll(
      ".goal-checkbox:checked"
    ).length;
    const percentage = Math.round((completed / total) * 100);

    progressFill.style.width = percentage + "%";
    progressFill.textContent = percentage + "%";

    if (percentage === 100) {
      progressFill.style.background = "#2e8b57";
    } else {
      progressFill.style.background = `rgb(${255 - percentage * 2}, 180, 70)`;
    }
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  startBtn.addEventListener("click", function () {
    const userName = prompt("What is your name?");
    if (userName) {
      alert(`Let's achieve these goals together, ${userName}!`);
    } else {
      alert("Let's achieve these goals together!");
    }
  });

  updateProgress();
});
