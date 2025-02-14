/*function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Affiche le message
}*/

const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

openPopupBtn.addEventListener("click", function() {
	popup.style.display = "block";
	overlay.style.display = "block";
});

closePopupBtn.addEventListener("click", function() {
	popup.style.display = "none";
	overlay.style.display = "none";
});

overlay.addEventListener("click", function() {
	popup.style.display = "none";
	overlay.style.display = "none";
});