const show = document.querySelector(".phone"),
  modal = document.querySelector(".modal"),
  close = document.querySelector(".modal__close");

show.addEventListener("click", function () {
  modal.classList.add("show");
});

close.addEventListener("click", function () {
  modal.classList.remove("show");
});
