  var link = document.querySelector(".login");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content--close");
  var form = popup.querySelector("feedback-form");
  var email = popup.querySelector("[name=email]");
  var yourname = popup.querySelector("[name=yourname]");
  var storage = localStorage.getItem("login");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content--show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      yourname.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content--show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content--show")) {
        popup.classList.remove("modal-content--show");
        popup.classList.remove("modal-error");
      }
    }
  });
