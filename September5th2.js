document.querySelector("#box").innerHTML = "hello"
const $box = document.querySelector("#box")
$box.onclick = () => {
    $box.classList.toggle("active")
    }