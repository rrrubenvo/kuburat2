document.addEventListener("DOMContentLoaded", function() {
    alert(1);
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });
});
