let requestBtn = document.querySelector(".map__request"),
	request = document.querySelector(".request"),
	close = document.querySelector(".close");

requestBtn.addEventListener("click", () => {
	request.classList.toggle("open");
});
close.addEventListener("click", () => {
	request.classList.remove("open");
});
