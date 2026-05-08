const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let formData = new FormData(form);
  fetch("message.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      }
    })
    .then((responseText) => {
      if (responseText !== undefined) {
        if (
          responseText.indexOf("required") !== -1 ||
          responseText.indexOf("valid") !== -1 ||
          responseText.indexOf("failed") !== -1
        ) {
          statusTxt.style.color = "red";
        } else {
          form.reset();
          setTimeout(() => {
            statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = responseText;
        form.classList.remove("disabled");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
