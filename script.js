const submit = document.getElementById("submit");
const checkboxes = document.querySelectorAll("#works input[type='checkbox']");
const works = document.getElementById("works");

const message = document.createElement("p");
message.style.textAlign = "center";
message.style.marginTop = "20px"
message.style.fontSize = "30px";
works.appendChild(message);

submit.addEventListener("click", function (e) {
    e.preventDefault();

    const allChecks = [...checkboxes].every(checkbox => checkbox.checked);

    if (allChecks) {
        message.style.color = "white";
        message.style.backgroundColor = "green";
        message.textContent = "✅ Parabéns, você concluiu todos os trabalhos! ✅";
    } else {
        message.style.color = "white";
        message.style.backgroundColor = "red";
        message.textContent = "⚠️ Você precisa concluir todos os trabalhos primeiro! ⚠️";
    }
});