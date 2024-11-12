document.addEventListener("DOMContentLoaded", function() {
    fetch("/path/to/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });
});
