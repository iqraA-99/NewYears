document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".goal-checkbox");
  const progressFill = document.querySelector(".progress-fill");

  function updateProgress() {
    const total = checkboxes.length;
    const completed = document.querySelectorAll(
      ".goal-checkbox:checked"
    ).length;
    const percentage = Math.round((completed / total) * 100);
    progressFill.style.width = percentage + "%";
    progressFill.textContent = percentage + "%";
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  document.getElementById("startBtn").addEventListener("click", function () {
    alert("Let's achieve these goals together!");
  });
});
