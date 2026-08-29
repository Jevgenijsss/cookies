const cookiesPup = document.getElementById("cookies")
const confitmBtn = document.getElementById("confirm")
const closeBtn = document.getElementById("close")

closeBtn.addEventListener("click", () => {
    cookiesPup.style.display = "none"
})

confitmBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true")
    cookiesPup.style.display = "none"
})

let cookiesAccepted = localStorage.getItem("cookiesAccepted")

if (cookiesAccepted) {
    cookiesPup.style.display = "none"
}